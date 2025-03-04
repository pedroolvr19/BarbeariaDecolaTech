import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  template: \`
    <div class="container">
      <h2>Lista de Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let cliente of clientes">
            <td>{{ cliente.nome }}</td>
            <td>{{ cliente.email }}</td>
            <td>{{ cliente.telefone }}</td>
            <td>
              <button (click)="editarCliente(cliente)">Editar</button>
              <button (click)="excluirCliente(cliente.id)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  \`
})
export class ClienteListaComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.clienteService.listarClientes().subscribe(
      clientes => this.clientes = clientes,
      erro => console.error('Erro ao carregar clientes', erro)
    );
  }

  editarCliente(cliente: Cliente): void {
    // Implementar lógica de edição
    console.log('Editar cliente', cliente);
  }

  excluirCliente(id?: number): void {
    if (id) {
      this.clienteService.excluirCliente(id).subscribe(
        () => {
          this.carregarClientes();
          console.log('Cliente excluído com sucesso');
        },
        erro => console.error('Erro ao excluir cliente', erro)
      );
    }
  }
}
