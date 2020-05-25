import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/api.service';
import { Router } from '@angular/router';
declare var H: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class HereMapComponent implements OnInit {
  private platform: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  constructor(private api: AuthService, private router: Router) {
    this.platform = new H.service.Platform({
      apikey: 'HP392wrN-Ab_L4SUrK3lbj_uBk4TZaASf-kUizd8rNM'
    });
  }

  ngOnInit(): void {

    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(document.getElementById('map'),
      defaultLayers.vector.normal.map, {
      center: { lat: 20.5, lng: 78.9 }, 
      zoom: 5,
      pixelRatio: window.devicePixelRatio || 1
    });

    window.addEventListener('resize', () => map.getViewPort().resize());


    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    var ui = H.ui.UI.createDefault(map, defaultLayers);
  }

  // here logout function works
  logout() {
    this.api.doLogout()
    this.router.navigate(['/']);
  }

}
