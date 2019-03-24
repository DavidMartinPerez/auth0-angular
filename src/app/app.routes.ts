// Importa los modulos del router de angular
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/pages/home/home.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PrivateComponent } from './components/pages/private/private.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';

// Array de rutas
const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'pricing', component: PricingComponent },
    {
        path: 'private',
        component: PrivateComponent,
        canActivate: [ AuthGuardService ]
    },
    {path: '**', component: HomeComponent }, // error 404 //¡OJO! ESTA SIEMPRE SIEMPRE LA ÚLTIMA SINO NO RECONOCE LAS DEMÁS
]

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);