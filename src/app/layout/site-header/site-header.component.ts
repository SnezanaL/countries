import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatSidenav,
    MatSidenavContainer,
    MatIcon,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    RouterOutlet,
  ],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent {
  opened: boolean = false;
  events: string[] = [];
}
