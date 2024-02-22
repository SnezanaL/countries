import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../_services/theme.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-toolbar',
  // standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
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
  // isAuthenticated() {
  //   return this.authService.isLoggedIn ? true : false;
  // }
}
