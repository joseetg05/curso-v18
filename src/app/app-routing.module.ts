import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas que definiste en 'app.routes.ts'

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas en el módulo raíz
  exports: [RouterModule]
})
export class AppRoutingModule {}