import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { FooterComponent } from "./component/footer/footer.component";
import { ServiceComponent } from "./pages/service/service.component";
import { ProjectComponent } from "./pages/project/project.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutMeComponent, FooterComponent, ServiceComponent, ProjectComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
