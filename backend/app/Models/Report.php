<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Report extends Model
{
    use HasFactory;
    public function abuseReport(): HasOne
    {
        return $this->hasOne(AbuseReport::class);
    }

    public function adoptionReport(): HasOne
    {
        return $this->hasOne(AdoptionReport::class);
    }
    protected $fillable = [
        'user_id',
        'type_report',
        'description',
        'status',
    ];
    protected $hidden=[
        'updated_at',
        'deleted_at'
    ];
}
