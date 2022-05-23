import { Component } from '@angular/core';
import { Aluno, listaAlunos } from './arquivo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { // Componentes do App
  title = 'Lista de Alunos'; // Título da página do app
  alunos: Aluno[] = listaAlunos; // Lista de alunos
}
