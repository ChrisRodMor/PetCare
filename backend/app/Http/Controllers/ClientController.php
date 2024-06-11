<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Models\Client;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::with('user')->get();
        return response()->json(['data' => $clients], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
        // Obtener los datos del usuario del formulario
        $user_data = $request->only(['name', 'email', 'phone', 'birthdate', 'address', 'file_path', 'password']);


        // Encriptar la contraseña
        $user_data['password'] = Hash::make($user_data['password']);

        $user_data['file_path'] ='profile_pictures/default.jpg';
            // Crear el usuario
        $user = User::create($user_data);

        // Crear el cliente asociado al usuario
        $client_data['user_id'] = $user->id;
        $client = Client::create($client_data);
        $client->load('user');

        // Retornar una respuesta JSON
        return response()->json(['message' => 'El cliente se ha registrado correctamente', 'data' => $client], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
