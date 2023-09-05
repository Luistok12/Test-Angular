import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // IMPORTAR
// RouterModule es la clase que proporciona funcionalidad para configurar y gestionar el enrutamiento en Angular.
// Routes es una interfaz que define las rutas de tu aplicación.

// import { CommonModule } from '@angular/common'; // Angular reconocerá estas directivas en tus plantillas.
// Las directivas por ej: ngIf o ngFor que use en el html de este componente solo servira si se importa CommonModule.

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta por defecto, la página de inicio
  { path: 'about', component: AboutComponent }, // Ruta para la página Acerca de
];

@NgModule({   // NgModule es un decorador que se usa para definir un módulo en Angular.
  imports: [RouterModule.forRoot(routes)],  // Configura el enrutador principal de la aplicación con las rutas definidas en el arreglo .
  exports: [RouterModule] //  Se exporta RouterModule para que esté disponible para otros módulos que puedan necesitarlo.
})

export class AppRoutingModule { }
