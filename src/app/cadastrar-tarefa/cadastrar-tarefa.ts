import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService, Tarefa } from '../tarefa-service';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html',
  styleUrls: ['./cadastrar-tarefa.css']
})
export class CadastrarTarefa {
  tarefa = '';
  responsavel = '';
  data = '';
  materia = '';

  constructor(private srv: TarefaService) {}

  salvar() {
    if (!this.tarefa.trim() || !this.responsavel.trim() || !this.data.trim()) return;

    const nova: Tarefa = {
      id: 0,
      tarefa: this.tarefa.trim(),
      responsavel: this.responsavel.trim(),
      data: this.data.trim(),
      materia: this.materia.trim() || undefined,
      concluida: false
    };

    this.srv.adicionar(nova);

    this.tarefa = '';
    this.responsavel = '';
    this.data = '';
    this.materia = '';
  }
}

