import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-duplicate',
  templateUrl: './duplicate.component.html',
  styleUrls: ['./duplicate.component.scss']
})
export class DuplicateComponent implements OnInit {
  duplicateData = [];
  constructor(private globalService: GlobalService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.duplicateData = this.globalService.getUploadData();
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
