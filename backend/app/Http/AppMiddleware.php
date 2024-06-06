<?php

namespace App\Http;


use Illuminate\Foundation\Configuration\Middleware;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

class AppMiddleware
{
    public function __invoke(Middleware $middleware)
    {
        // Añadir middleware global
        $middleware->append([
            EnsureFrontendRequestsAreStateful::class,
            //HandleAuthExceptions::class,
            // Agrega otros middlewares globales aquí
        ]);

        // Opcional: Añadir middleware específico a grupos
        //$middleware->appendToGroup('api', \App\Http\Middleware\MyMiddleware::class);
    }
}
