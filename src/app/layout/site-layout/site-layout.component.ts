import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { Observable } from 'rxjs';
import { ThemeService } from '../../_services/theme.service';
import { AuthService } from '../../_services/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-site-layout',
  standalone: true,
  imports: [SiteHeaderComponent, RouterOutlet],
  templateUrl: './site-layout.component.html',
  styleUrl: './site-layout.component.scss',
})
export class SiteLayoutComponent {
  isDarkTheme: Observable<boolean> | undefined;
  opened: boolean = false;

  constructor(
    private themeService: ThemeService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
