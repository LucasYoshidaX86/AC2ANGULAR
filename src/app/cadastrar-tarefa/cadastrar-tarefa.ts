import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../tarefa-service';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css'
})
export class CadastrarTarefa {
  tarefa: any;
  responsavel: any;
  data: any;
  materia: any;

  constructor(private srv: TarefaService) {}

  salvar() {
    if (!this.tarefa.trim() || !this.responsavel.trim() || !this.data) return;
    this.srv.adicionar({ id: 0,
      tarefa: this.tarefa.trim(),
      responsavel: this.responsavel.trim(),
      data: this.data,
      materia: this.materia.trim() || undefined
    });
    this.tarefa = ''; this.responsavel = ''; this.data = null; this.materia = '';
  }
}
