import { Component } from '@angular/core';

import {provideNativeDateAdapter} from '@angular/material/core';

import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider'
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-principal',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatInputModule, MatToolbarModule, MatButtonModule, MatDividerModule, MatIconModule, MatMenuModule, FlexLayoutModule, CommonModule, MatFormFieldModule, MatDatepickerModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
navItems: any;

}
