import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AbrigoDetalhePage } from '../pages/abrigo-detalhe/abrigo-detalhe';
import { AbrigosPage } from '../pages/abrigos/abrigos';
import { BarragemDetalhePage } from '../pages/barragem-detalhe/barragem-detalhe';
import { BarragensPage } from '../pages/barragens/barragens';
import { ContatosPage } from '../pages/contatos/contatos';
import { DoacaoDetalhePage } from '../pages/doacao-detalhe/doacao-detalhe';
import { DoacoesPage } from '../pages/doacoes/doacoes';
import { LeituraPontoDetalhePage } from '../pages/leitura-ponto-detalhe/leitura-ponto-detalhe';
import { LeituraPontosListaPage } from '../pages/leitura-pontos-lista/leitura-pontos-lista';
import { LeituraSensorHistoricoPage } from '../pages/leitura-sensor-historico/leitura-sensor-historico';

import { ApiRequestServiceProvider } from '../providers/api-request-service/api-request-service';
import { FiltroHistoricoComponent } from '../components/filtro-historico/filtro-historico';

@NgModule({
  declarations: [
    MyApp,
    AbrigoDetalhePage,
    AbrigosPage,
    BarragemDetalhePage,
    BarragensPage,
    ContatosPage,
    DoacaoDetalhePage,
    DoacoesPage,
    LeituraPontoDetalhePage,
    LeituraPontosListaPage,
    LeituraSensorHistoricoPage,
    FiltroHistoricoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AbrigoDetalhePage,
    AbrigosPage,
    BarragemDetalhePage,
    BarragensPage,
    ContatosPage,
    DoacaoDetalhePage,
    DoacoesPage,
    LeituraPontoDetalhePage,
    LeituraPontosListaPage,
    LeituraSensorHistoricoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiRequestServiceProvider
  ]
})
export class AppModule {}
