import { Component, signal } from '@angular/core';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefas } from './lista-tarefas/lista-tarefas';

@Component({
  selector: 'app-root',
  imports: [CadastrarTarefa, ListaTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TarefaAC2');
}
