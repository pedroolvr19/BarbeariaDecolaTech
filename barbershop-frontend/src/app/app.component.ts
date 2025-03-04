import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div>
      <h1>Barbershop - Sistema de Agendamentos</h1>
      <app-cliente-lista></app-cliente-lista>
    </div>
  \`
})
export class AppComponent {
  title = 'Barbershop Frontend';
}
