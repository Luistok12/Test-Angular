import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // IMPORTAR
import { ContentComponent } from './components/content/content.component';
import { Ejemplo1Component } from './components/sidebar-content/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/sidebar-content/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/sidebar-content/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/sidebar-content/ejemplo4/ejemplo4.component';
import { SucursalesComponent } from './components/app-header/navbar/sucursales/sucursales.component';
// RouterModule es la clase que proporciona funcionalidad para configurar y gestionar el enrutamiento en Angular.
// Routes es una interfaz que define las rutas de tu aplicación.

// import { CommonModule } from '@angular/common'; // Angular reconocerá estas directivas en tus plantillas.
// Las directivas por ej: ngIf o ngFor que use en el html de este componente solo servira si se importa CommonModule.

const routes: Routes = [
  { path: '', component: ContentComponent }, // Ruta por defecto, la página de inicio
  
  { path: 'ejemplo1', component: Ejemplo1Component }, // Ruta para la página
  { path: 'ejemplo2', component: Ejemplo2Component }, // Ruta para la página
  { path: 'ejemplo3', component: Ejemplo3Component }, // Ruta para la página
  { path: 'ejemplo4', component: Ejemplo4Component }, // Ruta para la página
  { path: 'sucursales', component: SucursalesComponent } // Ruta para la página
];

@NgModule({   // NgModule es un decorador que se usa para definir un módulo en Angular.
  imports: [RouterModule.forRoot(routes)],  // Configura el enrutador principal de la aplicación con las rutas definidas en el arreglo .
  exports: [RouterModule] //  Se exporta RouterModule para que esté disponible para otros módulos que puedan necesitarlo.
})

export class AppRoutingModule { }
