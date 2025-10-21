import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa, TarefaService } from '../tarefa-service';

@Component({
  selector: 'app-lista-tarefas',
  imports: [],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css'
})
export class ListaTarefas {
   tarefas: Tarefa[] = [];

  constructor(private srv: TarefaService) {
    this.tarefas = this.srv.listar();
  }

  remover(id: number) {
    this.srv.remover(id);
  }
}
