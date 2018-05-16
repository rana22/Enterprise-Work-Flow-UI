
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import * as $ from 'backbone';
import * as joint from 'jointjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  private jQuery:any = $;
  private graph: any = new joint.dia.Graph;
  constructor() { }

  ngOnInit() {
     

    let paper = new joint.dia.Paper({ 
     el: jQuery("#canvas"), 
     gridSize: 1,
     model: this.graph                           
    });

  }

  addCircle(){
    console.log("say something");
    let rh = new joint.shapes.basic.Rhombus({
      position: { x: 50, y: 250 },
      size: { width: 70, height: 70 },
      attrs: { text: { text: 'basic.Rhombus', 'font-size': 8 } }
      });
      this.graph.addCell(rh);

  }

}
