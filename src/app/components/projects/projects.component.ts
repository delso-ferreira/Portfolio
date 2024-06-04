import { Component, inject } from '@angular/core';
import { MatIconRegistry , MatIconModule} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {
    this.matIconRegistry.addSvgIcon(
      'github_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/github.svg')
    );
  }
}
