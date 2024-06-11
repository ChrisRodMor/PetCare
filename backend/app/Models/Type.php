<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Type extends Model
{
    use HasFactory;

    //relaciones
    public function breeds():HasMany{
        return $this->hasMany(Breed::class);
    }
    protected $fillable = [

        'name'
    ];
    public $timestamps = false;
}
