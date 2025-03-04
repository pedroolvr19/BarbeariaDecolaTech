import { Cliente } from './cliente.model';
import { Servico } from './servico.model';

export interface Agendamento {
  id?: number;
  cliente: Cliente;
  servico: Servico;
  dataHora: Date;
  confirmado: boolean;
}
