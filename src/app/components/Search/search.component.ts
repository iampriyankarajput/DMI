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

    function addMarkerToGroup(group, coordinate, html) {
      var marker = new H.map.Marker(coordinate);
      marker.setData(html);
      group.addObject(marker);
    }

    function addInfoBubble(map) {
      var group = new H.map.Group();
      map.addObject(group);

      group.addEventListener('tap', (evt) => {
        // for all objects that it contains
        var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
          // read custom data
          content: evt.target.getData()
        });
        // show info bubble
        ui.addBubble(bubble);
      }, false);

      addMarkerToGroup(group, { lat: 28.6, lng: 77.2 },
        '<div style="width: 200px; line-height: 1;"><p>Branch: Delhi1</p><p>City: Delhi</p><p>State: Delhi/NCR</p><p>Total Loans: 233</p><p> Inside GeoFence: 233</p><p>Outside GeoFence: 0</p><p>GeoFence Radius: 50 km</p><button class="btn "style="width: 90%; border-radius:50px; background-color:blue; color:white;" >Show Home Loans</button>' +
        '</div>');

      addMarkerToGroup(group, { lat: 21.17, lng: 72.83 },
        '<div style="width: 200px; line-height: 1;"><p>Branch: Surat</p><p>City: Surat</p><p>State: Gujarat+MH</p><p>Total Loans: 277</p><p> Inside GeoFence: 277</p><p>Outside GeoFence: 0</p><p>GeoFence Radius: 50 km</p><button class="btn "style="width: 90%; border-radius:50px; background-color:blue; color:white;" >Show Home Loans</button>' +
        '</div>');

    }
    addInfoBubble(map);
  }

  // here logout function works
  logOut() {
    this.api.doLogOut()
    this.router.navigate(['/']);
  }

}
