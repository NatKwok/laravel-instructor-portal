<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained(
                table: 'users', indexName: 'books_user_id'
            );
            $table->integer('ISBN')->primary();
            $table->string('title', 255)->nullable(false);
            $table->decimal('price', 8, 2)->nullable(false);;
            $table->string('author', 255)->nullable(false);
            $table->date('pubdate')->nullable(false);;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
