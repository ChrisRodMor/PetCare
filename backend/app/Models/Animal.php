<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;

    // Relaciones
    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function breed()
    {
        return $this->belongsTo(Breed::class);
    }
    // Campos asignables de forma masiva
    protected $fillable = [
        'type_id',
        'breed_id',
        'name',
        'gender',
        'is_adopted',
        'esterilized',
        'birthdate',
        'age',
        'color',
        'weight',
        'size',
        'health',
        'description',
        'file_path',
    ];

    // Campos ocultos
    protected $hidden = [
        'created_at',
        'updated_at',
    ];


}
