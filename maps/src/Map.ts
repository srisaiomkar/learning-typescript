export class Map{
  private map: google.maps.Map;
  
  constructor(divId: string){
    this.map = new google.maps.Map(document.getElementById(divId) as HTMLElement,{
      zoom: 1,
      center:{
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(coords: Coordinates){
    new google.maps.Marker({
      map: this.map,
      position:{
        lat: coords.lat,
        lng: coords.lng
      }
    })
  }
}