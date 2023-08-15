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
        Schema::create('teacher', function (Blueprint $table) {
            $table->integer('staffid')->primary();;
            $table->integer('user_id')->nullable(false);
            $table->string('name', 255)->nullable(false);
            $table->string('email', 255)->nullable(false);
            $table->date('dob')->nullable(false);;
            $table->integer('cell')->nullable(false);;
            $table->string('password', 255)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
