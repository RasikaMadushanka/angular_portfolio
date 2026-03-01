import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  async ngAfterViewInit() {
    const AOS = await import('aos');
    AOS.default.init({
      duration: 1000,
      once: true
    });
  }

}