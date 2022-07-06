export class Map {
  constructor() {
    this.mapContainer = document.getElementById('contactMap');

    if (this.mapContainer) {
      this.render();
    }
  }

  render() {
    const coords = { lat: 50.016736, lng: 20.983065 };

    const map = new google.maps.Map(document.getElementById('contactMap'), {
      zoom: 18,
      center: coords,
    });

    new google.maps.Marker({
      position: coords,
      map: map,
    });
  }
}
