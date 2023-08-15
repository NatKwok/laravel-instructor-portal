<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Subject extends Model
{
           /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'sub_code';

    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;
    use HasFactory;

    protected $fillable = [
        'sub_code',
        'sub_name',
        'start_date',
        'credits',

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
