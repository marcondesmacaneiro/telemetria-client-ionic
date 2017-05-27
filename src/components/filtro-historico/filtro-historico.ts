import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'filtro-historico',
  templateUrl: 'filtro-historico.html'
})
export class FiltroHistoricoComponent {

  @Input()
  valor: number;

  @Output()
  change: EventEmitter<Number> = new EventEmitter();

  descricao: string = '';
  opcoes: any       = [];

  constructor() {
    this.descricao = 'Filtro de Leitura';
    this.opcoes    = [
      {valor: 43200,   descricao: '12 Horas'},
      {valor: 86400,   descricao: '24 Horas'},
      {valor: 259200,  descricao: '3 Dias'},
      {valor: 604800,  descricao: '7 Dias'},
      {valor: 1209600, descricao: '14 Dias'},
    ];
  }

  onChangeFiltro(){
    this.change.emit(this.valor);
  }

}
