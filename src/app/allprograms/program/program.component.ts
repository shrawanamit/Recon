import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilityService } from 'src/app/service/utility.service';
import { GlobalService } from 'src/app/service/global.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  allProgram = [];
  programData = [];
  arrProgramInfoWithKey = {};
  selectedProgram;
  selectedProgramCount = 0;
  totalProgramCount = 0;
  searchText;

  constructor(
    public activeModal: NgbActiveModal,
    public utilityService: UtilityService,
    public globalService: GlobalService
  ) { }

  ngOnInit() {
    this.programData = this.globalService.getUploadData();
    this.allProgram = this.utilityService.getLetterByFilter(this.programData);
    this.selectedProgramString();

    for (let i = 0; i < this.programData.length; i++) {
      this.arrProgramInfoWithKey[this.programData[i].brandId] = this.programData[i];
    }
  }
  

  // objs.sort( compare );
  selectedSearchText(searchText) {
    this.searchText = searchText;
  }
  selectedProgramString() {
    const selectedProgram = [];
    this.totalProgramCount = 0;
    this.selectedProgramCount = 0;
    for (let i = 0; i < this.programData.length; i++) {
      if (this.programData[i].isSelect) {
        selectedProgram.push(this.programData[i].brandName);
        this.selectedProgramCount++;
      }
      this.totalProgramCount++;
    }
    this.selectedProgram = selectedProgram.join();
  }
  getselectedProgram(data) {
    if (this.arrProgramInfoWithKey[data.brandId].isSelect) {
      this.arrProgramInfoWithKey[data.brandId].isSelect = false;
    } else {
      this.arrProgramInfoWithKey[data.brandId].isSelect = true;
    }
    this.selectedProgramString();
    this.allProgram = this.utilityService.getLetterByFilter(this.programData);
  }
  closeModal() {
    this.activeModal.close(this.programData);
  }
}
