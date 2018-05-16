
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
  constructor() { }

  ngOnInit() {
    let graph = new joint.dia.Graph;

    let paper = new joint.dia.Paper({ 
     el: jQuery("#paper"),   
     width: 1100 ,
     height: 700,
     gridSize: 1,
     model: graph                           
    });

  }

}
