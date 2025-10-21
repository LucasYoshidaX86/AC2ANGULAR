import { Injectable } from '@angular/core';

export interface Tarefa {
  id: number;
  tarefa: string;
  responsavel: string;
  data?: string;
  materia?: string;
  concluida?: boolean;
}

@Injectable({ providedIn: 'root' })
export class TarefaService {
  private itens: Tarefa[] = [];

  listar(): Tarefa[] {
    return this.itens;
  }

  adicionar(nova: Tarefa) {
    nova.id = Date.now();
    this.itens.push(nova);
  }

  remover(id: number) {
    this.itens = this.itens.filter(t => t.id !== id);
  }

  marcarConcluida(id: number) {
    this.itens = this.itens.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
  }
}

