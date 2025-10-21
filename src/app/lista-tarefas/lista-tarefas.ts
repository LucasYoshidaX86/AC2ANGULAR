import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarefaService, Tarefa } from '../tarefa-service';

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-tarefas.html',
})
export class ListaTarefas {
  tarefas: Tarefa[] = [];

  constructor(private srv: TarefaService) {
    this.atualizar();
  }

  private atualizar() {
    this.tarefas = this.srv.listar();
  }

  concluir(id: number) {
    this.srv.marcarConcluida(id);
    this.atualizar();
  }

  remover(id: number) {
    this.srv.remover(id);
    this.atualizar();
  }

  get total() { return this.tarefas.length; }
  get concluidas() { return this.tarefas.filter(t => t.concluida).length; }
  get pendentes() { return this.tarefas.filter(t => !t.concluida).length; }
}

