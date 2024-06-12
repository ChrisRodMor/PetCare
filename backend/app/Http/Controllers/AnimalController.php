<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Iniciar la consulta de animales
        $query = Animal::where('is_adopted', false);

        // Obtener los animales
        $animals = $query->get();

        // Verificar si se encontraron animales
        if ($animals->isEmpty()) {
            // No se encontraron resultados, retornar una respuesta 404 Not Found
            return response()->json(['message' => 'No se encontraron animales no adoptados.'], 404);
        }

        // Retornar los datos y el estado HTTP correspondiente
        return response()->json(['data' => $animals], 200);
    }
    public function searchAnimals(Request $request)
    {
        // Obtener los parámetros de filtrado
        $name = $request->input('name');
        $type_id = $request->input('type_id');
        $breed_id = $request->input('breed_id');

        // Iniciar la consulta de animales
        $query = Animal::query();

        // Aplicar filtro por nombre si se proporciona
        if ($name) {
            $query->where('name', 'LIKE', "%{$name}%");
        }

        // Aplicar filtro por especie si se proporciona type_id
        if ($type_id) {
            $query->where('type_id', $type_id);
        }

        // Aplicar filtro por raza si se proporciona breed_id
        if ($breed_id) {
            $query->where('breed_id', $breed_id);
        }

        // Aplicar filtro para seleccionar solo los animales no adoptados
        $query->where('is_adopted', false);

        // Obtener los animales según los filtros aplicados
        $animals = $query->get();

        // Verificar si se encontraron animales
        if ($animals->isEmpty()) {
            // No se encontraron resultados, retornar una respuesta 404 Not Found
            return response()->json(['message' => 'No se encontraron animales no adoptados con los filtros proporcionados.'], 404);
        }

        // Retornar los datos y el estado HTTP correspondiente
        return response()->json(['data' => $animals], 200);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Animal $animal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Animal $animal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Animal $animal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Animal $animal)
    {
        //
    }
}
