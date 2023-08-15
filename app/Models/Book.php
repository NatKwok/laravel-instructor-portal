<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
           /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'isbn';

    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;
    use HasFactory;

    protected $fillable = [
        'isbn',
        'title',
        'price',
        'author',
        'pubdate',

    ];

    public function teacher(): BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }
        public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
