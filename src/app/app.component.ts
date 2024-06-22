import { Component } from '@angular/core';
import { HeaderComponent } from './publico/header/header.component';
import { PrincipalComponent } from './publico/principal/principal.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wasihub';
}
