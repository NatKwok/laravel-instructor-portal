<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Mockery\Matcher\Subset;
use Illuminate\Support\Facades\Auth;


class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Subjects/Index', [
            'subjects' => Subject::with('user:id,name')->where('user_id', Auth::user()->id)->latest()->get(),
            'message' => session('message'),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Subjects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'sub_code' => 'required|int|min:6|unique:subjects,sub_code',
            'sub_name' => 'required|string|max:255',
            'start_date' => 'required|date',
            'credits' => 'required|int',

        ]);

        $request->user()->subject()->create($validated);
        return redirect()->route('subject.index')->with('message', 'Subject created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $subject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        return Inertia::render('Subjects/Edit', [

            'subject' => $subject

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Subject $subject)
    {
        $subject = Subject::where('sub_code', $request->sub_code)->first();

        $validated = $request->validate([
            // 'sub_code' => 'required|int|unique:subjects,sub_code',
            'sub_name' => 'string|max:255',
            'start_date' => 'date',
            'credits' => 'int',

        ]);

        $subject->update($validated);
        return redirect()->route('subject.index')->with('message', 'Subject Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Subject $subject)
    {
        $subject = Subject::where('sub_code', $request->sub_code)->first();

        $subject->delete();

        return redirect()->route('subject.index')->with('message', 'Subject Deleted successfully!');
    }
}
