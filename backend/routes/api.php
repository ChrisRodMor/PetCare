<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Autenticación
Route::post('/register', [ClientController::class, 'store']);
Route::post('/login', [AuthController::class, 'authenticate']);

//      publicas
//Especies
Route::get('/types', [TypeController::class, 'index']);

//Razas
Route::get('/breeds/{type}', [TypeController::class, 'getBreeds']);

//Animals
Route::get('/animals',[AnimalController::class, 'index']);
Route::post('/search-animals', [AnimalController::class, 'searchAnimals']);
Route::get('/animals/{animal}', [AnimalController::class, 'show']);



//Grupo de rutas con el middleware de autenticación con Sanctum (si no está logueado el usuario, no puede acceder)
Route::middleware(['auth:sanctum'])->group(function () {
    //cuenta
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::put('/update-profile', [UserController::class, 'updateProfile']);
    Route::get('/profile', [UserController::class, 'profile']);

    //clientes
    Route::get('/clients', [ClientController::class, 'index']);
    Route::get('/clients/{client}', [ClientController::class, 'show']);
    Route::post('/clients-search',[ClientController::class,'search']);

    //animales
    Route::post('/store-animals', [AnimalController::class, 'store']);
    Route::put('/update-animals/{animal}', [AnimalController::class, 'update']);

});
