import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { ApiRequestService } from '../../providers/api-request-service';

@Component({
  selector: 'page-leitura-grafico-nivel',
  templateUrl: 'leitura-grafico-nivel.html'
})
export class LeituraGraficoNivelPage {
  filtroLeitura: string = '3h';
  leituras: any[] = [];
  graficoDados:any[]  = [{data:[]}];
  graficoLabel:any[]  = [];
  graficoConfiguracoes:any = {
    animation: {
      duration: 500
    },
    responsive: true
  };

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public apiRequest: ApiRequestService
  ) {}

  ionViewDidLoad() {
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/leituraponto/search/findAllByOrderByIdAsc/").subscribe(leitura => {
      this.leituras = leitura;
      this.setGraficoData();
      loading.dismiss();
    }, () => {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar os dados de leitura!',
        buttons: ['OK']
      });
      alert.present();
    });
  }

  setGraficoData(){
    let newData:any[]     = [];
    let newLabel:string[] = [];
    for(let ponto of this.leituras){
      for(let sensor of ponto.sensores){
        //Se possuir sensor do nível do rio
        if(sensor.codigo == 1){
          let dados = {data: [], label: ponto.nome};
          for(let leitura of sensor.leituras){
            dados.data.push(leitura.leitura);
            if(newLabel.length < sensor.leituras.length){
              newLabel.push(leitura.datahora);
            }
          }
          newData.push(dados);
        }
      }
    }
    this.graficoDados = newData;
    setTimeout(() => {
        this.graficoLabel = newLabel;
    })
  }

  atualizaGrafico(){
    alert(this.filtroLeitura);
  }

}
