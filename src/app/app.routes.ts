import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ServiceComponent } from './pages/service/service.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
     {
          path:"home",
         component:HomeComponent
    },
    {
     path:"about",
     component:AboutMeComponent         
    },
    {
     path:"service",
     component:ServiceComponent
    },
    {
     path:"project",
     component:ProjectComponent
    }
];
