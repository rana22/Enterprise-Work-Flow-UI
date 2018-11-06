import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'form-model',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private bsmodalservice: BsModalService) { }

  ngOnInit() {
  }

  open(template: TemplateRef<any>) {
    this.modalRef = this.bsmodalservice.show(template);
  }

}
