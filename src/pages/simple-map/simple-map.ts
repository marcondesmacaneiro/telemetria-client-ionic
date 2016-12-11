declare var google: any;

export class SimpleMapPage {

  private targetId: string;
  private position: Object;

  constructor(targetId: string, position: Object){
    this.targetId = targetId;
    this.position = position;
  }

  public loadMap(): void {
    let target = document.getElementById(this.targetId);
    let map    = new google.maps.Map(target, {
      center           : this.position,
      zoom             : 17,
      zoomControl      : true,
      disableDefaultUI : true,
      mapTypeId        : google.maps.MapTypeId.ROADMAP
    });

    let marker = new google.maps.Marker({
      position: this.position,
      map: map
    });
  }

}
