<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Books/Index', [
            'books' => Book::with('user:id,name')->where('user_id', Auth::user()->id)->latest()->get(),
            'message' => session('message'),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Books/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'isbn' => 'required|int|min:13|unique:books,isbn',
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'price' => 'required',
            'pubdate' => 'required|date',


        ]);

        $request->user()->book()->create($validated);
        return redirect()->route('book.index')->with('message', 'Book added successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        return Inertia::render('Books/Edit', [

            'book' => $book

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book): RedirectResponse
    {
        $book = Book::where('isbn', $request->isbn)->first();

        $validated = $request->validate([
            // 'isbn' => 'required|int|unique:books,isbn',
            'title' => 'string|max:255',
            'author' => 'string|max:255',
            'price' => 'int',
            'pubdate' => 'date',

        ]);

        $book->update($validated);
        return redirect()->route('book.index')->with('message', 'Book Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Book $book): RedirectResponse
    {
        $book = Book::where('isbn', $request->isbn)->first();

        $book->delete();

        return redirect()->route('book.index')->with('message', 'Book Deleted successfully!');
    }
}
