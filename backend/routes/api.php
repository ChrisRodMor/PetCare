<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Autenticación
Route::post('/register', [ClientController::class, 'store']);
Route::post('/login', [AuthController::class, 'authenticate']);

//Ruta de prueba para obtener datos del usuario
/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


//Grupo de rutas con el middleware de autenticación con Sanctum (si no está logueado el usuario, no puede acceder)
Route::middleware(['auth:sanctum'])->group(function () {
    //cuenta
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::put('/update-profile', [UserController::class, 'updateProfile']);
    Route::get('/profile', [UserController::class, 'profile']);

    //clientes
    Route::get('/clients', [ClientController::class, 'index']);

});
