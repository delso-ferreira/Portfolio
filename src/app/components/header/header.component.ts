import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {
    this.matIconRegistry.addSvgIcon(
      'first_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'second_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/github.svg')
    );
  }
}
