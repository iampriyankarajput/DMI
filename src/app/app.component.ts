import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private platform: any;

    @ViewChild("map")
    public mapElement: ElementRef;

    public constructor() {
        this.platform = new H.service.Platform({
          apikey: 'HP392wrN-Ab_L4SUrK3lbj_uBk4TZaASf-kUizd8rNM'
        });
    }

    public ngOnInit() { 

    // public ngAfterViewInit() {
        let defaultLayers = this.platform.createDefaultLayers();
        let map = new H.Map(document.getElementById('map'),
        defaultLayers.vector.normal.map,{
        center: {lat:20.5, lng:78.9},
        zoom: 5,
        // pixelRatio: window.devicePixelRatio || 1
      });

      window.addEventListener('resize', () => map.getViewPort().resize());


      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

       var ui = H.ui.UI.createDefault(map, defaultLayers);
      //  var ui = H.ui.UI.createDefault( );

    // }
  }

}