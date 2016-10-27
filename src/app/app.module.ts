import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts/components/charts/charts';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AbrigosPage } from '../pages/abrigos/abrigos';
import { AbrigoDetalhePage } from '../pages/abrigo-detalhe/abrigo-detalhe';
import { ContatosPage } from '../pages/contatos/contatos';
import { DoacoesPage } from '../pages/doacoes/doacoes';
import { DoacaoDetalhePage } from '../pages/doacao-detalhe/doacao-detalhe';
import { LeituraMenuPage } from '../pages/leitura-menu/leitura-menu';
import { LeituraGraficoNivelPage } from '../pages/leitura-grafico-nivel/leitura-grafico-nivel';
import { LeituraPontosListaPage } from '../pages/leitura-pontos-lista/leitura-pontos-lista';
import { LeituraPontoDetalhePage } from '../pages/leitura-ponto-detalhe/leitura-ponto-detalhe';
import { LeituraSensorHistoricoPage } from '../pages/leitura-sensor-historico/leitura-sensor-historico';

import { LeituraService } from '../providers/leitura-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AbrigosPage,
    AbrigoDetalhePage,
    ContatosPage,
    DoacoesPage,
    DoacaoDetalhePage,
    LeituraMenuPage,
    LeituraGraficoNivelPage,
    LeituraPontosListaPage,
    LeituraPontoDetalhePage,
    LeituraSensorHistoricoPage
  ],
  imports: [
    ChartsModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      tabsHighlight: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AbrigosPage,
    AbrigoDetalhePage,
    ContatosPage,
    DoacoesPage,
    DoacaoDetalhePage,
    LeituraMenuPage,
    LeituraGraficoNivelPage,
    LeituraPontosListaPage,
    LeituraPontoDetalhePage,
    LeituraSensorHistoricoPage
  ],
  providers: [LeituraService]
})
export class AppModule {}
