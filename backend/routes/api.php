<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Autenticación
Route::post('login', [AuthController::class, 'authenticate']);

//Ruta de prueba para obtener datos del usuario
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Grupo de rutas con el middleware de autenticación con Sanctum (si no está logueado el usuario, no puede acceder)
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});
