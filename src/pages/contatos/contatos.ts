import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { ApiRequestService } from '../../providers/api-request-service';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {
  private contatos: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    private apiRequest: ApiRequestService
  ) {}

  ionViewDidLoad() {
    this.carregaContatos();
  }

  private carregaContatos(){
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/contatogeral/search/findAllByOrderByIdAsc/").subscribe(contatos => {
      this.contatos = contatos._embedded.contatosgerais;
      for(let contato of this.contatos){
        contato.telefones = [];
        this.apiRequest.getRemote(contato._links.telefones.href).subscribe(telefones => {
          contato.telefones = telefones._embedded.contatosgeraistelefones;
        });
      }
      loading.dismiss();
    }, () => {
      loading.dismiss();
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar os contatos!',
        buttons: ['OK']
      }).present();
    });
  }

}
