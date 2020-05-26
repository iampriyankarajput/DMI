import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

declare var H: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private platform: any;

  constructor(private api: ApiService, private router: Router) {
    // initialize communication with the platform
    this.platform = new H.service.Platform({
      apikey: 'HP392wrN-Ab_L4SUrK3lbj_uBk4TZaASf-kUizd8rNM'
    });
  }

  ngOnInit(): void {
    // initialize a map
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(document.getElementById('map'),
      defaultLayers.vector.normal.map, {
      center: { lat: 20.5, lng: 78.9 },
      zoom: 5,
      pixelRatio: window.devicePixelRatio || 1
    });

    // add a resize listener
    window.addEventListener('resize', () => map.getViewPort().resize());

    // make the map interactive
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    //  Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);
  }

  // here logout function works
  logOut() {
    this.api.doLogOut()
    this.router.navigate(['/']);
  }

}
