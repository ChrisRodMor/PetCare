<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show(Report $report)
    {
        // manda la informacion del reporte junto su reporte enlazado ()

        return response()->json(['data' => $report],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Report $report)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateStatus(Request $request, Report $report)
    {
        $request->validate([
            'status' => 'in:Revisando,Avanzando,Terminado'
        ]);
        $report->update([
            'status' => $request->input('status'), // Asignar el nuevo valor de 'status' desde el request
        ]);

        // Retornar una respuesta JSON indicando que los datos han sido actualizados correctamente
        return response()->json(['message' => 'El status del reporte de abuso ha sido actualizado correctamente', 'data' => $report], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        //
    }

    public function getReports(Request $request){
        // obtener los reportes del usuario junto con las relaiones
    }
}
