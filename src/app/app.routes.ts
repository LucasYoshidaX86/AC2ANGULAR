import { Routes } from '@angular/router';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefas } from './lista-tarefas/lista-tarefas';

export const routes: Routes = [ 
    { path: 'cadastrar-tarefa', component: CadastrarTarefa},
    { path: 'lista-tarefas', component: ListaTarefas},
];
