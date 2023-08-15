<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['middleware' => 'auth', 'prefix' => 'subjects'], function () {
    Route::get('/', [SubjectController::class, 'index'])->name('subject.index');
    Route::get('/create', [SubjectController::class, 'create'])->name('subject.create');
    Route::post('/store', [SubjectController::class, 'store'])->name('subject.store');
    Route::get('/edit/{subject}', [SubjectController::class, 'edit'])->name('subject.edit');
    Route::patch('/update/{subject}', [SubjectController::class, 'update'])->name('subject.update');
    Route::patch('/delete', [SubjectController::class, 'destroy'])->name('subject.destroy');

});

Route::group(['middleware' => 'auth', 'prefix' => 'books'], function () {
    Route::get('/', [BookController::class, 'index'])->name('book.index');
    Route::get('/create', [BookController::class, 'create'])->name('book.create');
    Route::post('/store', [BookController::class, 'store'])->name('book.store');
    Route::get('/edit/{book}', [BookController::class, 'edit'])->name('book.edit');
    Route::patch('/update/{book}', [BookController::class, 'update'])->name('book.update');
    Route::patch('/delete', [BookController::class, 'destroy'])->name('book.destroy');

});

require __DIR__.'/auth.php';
