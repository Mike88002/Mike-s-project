import { Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { LoginComponent } from './login/login.component';
import {ContattiComponent} from './componenti/contatti/contatti.component'
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { QuizFormComponent } from './Quiz/quiz-form/quiz-form.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '',title: 'App Home Page',    component: HomeComponent, }   ,
    { path: 'about', title: 'About us',    component: AboutComponent,},
    {path: "Quiz", title: "Quiz bellissimi",  component: QuizFormComponent},
    { path: 'login', title: 'Login', component: LoginComponent },
    {path: 'contatti', title: 'Modulo contatti',  component: ContattiComponent,  children: [
    {path: ':id', title: 'Profilo',  component: ContattoComponent},]},    
    {path: 'notfound', component: NotfoundComponent },
    {path: '**', redirectTo: '/notfound'},
    {path: "", component: DashboardComponent},
    //si puo scrivere pre ':id' essendo figlio
];
