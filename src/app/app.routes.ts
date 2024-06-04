import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: 'home', 'title': 'Home', component: HomeComponent },
    { path: 'projects', 'title': 'Projects',component: ProjectsComponent },
    { path: 'contact', 'title': 'Contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', 'title': 'Not Found', component: NotfoundComponent}
];
