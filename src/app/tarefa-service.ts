import { Injectable } from '@angular/core';
   
export interface Tarefa {
  id: number;
  tarefa: string;
  responsavel: string;
  data: string;
  materia: string;
  
}
  

  
@Injectable({
  
  providedIn: 'root'
  
})
  
export class TarefaService {
  
  private _tarefas: Tarefa[] = [];
  

  
  listar(): Tarefa[] {
  
    return this._tarefas;
  
  }
  

  
  private nextId(): number {
  
    return Date.now();
  
  }
  

  
  adicionar(l: Tarefa): void {
  
    this._tarefas.push(l);
  
  } 
  
  remover(id: number): void {
  
    const i = this._tarefas.findIndex(l => l.id === id);
  
    if (i >= 0) this._tarefas.splice(i, 1);
  
  }
  
}
