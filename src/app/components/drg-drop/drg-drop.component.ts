import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drg-drop',
  templateUrl: './drg-drop.component.html',
  styleUrls: ['./drg-drop.component.css']
})
export class DrgDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   allowDrop(e) {
//     e.preventDefault();
// }

// drag(e) {
//     e.dataTransfer.setData('text', e.target.id);
//     console.log(e.target.id);
// }

// drop(e) {
//     e.preventDefault();
//     const data = e.dataTransfer.getData('text');
//     e.target.appendChild(document.getElementById(data));
// }

allowDrop(ev) {
  ev.preventDefault();
}

drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

}
