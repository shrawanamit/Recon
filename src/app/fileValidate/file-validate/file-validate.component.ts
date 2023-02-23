import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-file-validate',
  templateUrl: './file-validate.component.html',
  styleUrls: ['./file-validate.component.scss']
})
export class FileValidateComponent implements OnInit {




  formData = new FormData();
  loadingData: boolean = false;
  isActiveProgram: boolean = false;
  feedbacktext;
  fileTypeSelect: string = "";
  lineSeperaterSelect: string = '';
  fileTypeSelectTender: string = "";
  columnSeperatorSelect:string = "";
  lineTermineterSelect;
  

  file;
  errortext;
  file1: boolean = false;
  file2: boolean = false;
  displayFileData: boolean = false;
  displayFileError: boolean = false;
  displayFileRes: boolean = false;
  fileUploadResponce;
  fileUploadResponceError = [];
  constructor(private dataService: DataService,) {

  }

  ngOnInit() {
  }

  selectFileType(fileType) {

    if (fileType == '1') {
      this.fileTypeSelect = 'standard';
    }
    if (fileType == '2') {
      this.fileTypeSelect = 'gsl';
    }
    if (fileType == '3') {
      this.fileTypeSelect = 'ecomm';
    }
  }
  selectLineSeperater(LineSeperater) {
    // debugger
    if (LineSeperater == '1') {
      this.lineTermineterSelect = "\\r\\n";
    }
    if (LineSeperater == '2') {
      this.lineTermineterSelect = "\\n";
    }
  //  console.log("this.lineSeperaterSelect",this.lineTermineterSelect,LineSeperater)
  }



  selectFileTypeTender(fileTypeTender) {

    if (fileTypeTender == '1') {
      this.fileTypeSelectTender = 'csv';
    }
    if (fileTypeTender == '2') {
      this.fileTypeSelectTender = 'txt';
    }
   

  }
  selectColumnSeperator(columnSeperator) {
    if (columnSeperator == '1') {
      this.columnSeperatorSelect = ',';
    }
    if (columnSeperator == '2') {
      this.columnSeperatorSelect = '|';
    }
    if (columnSeperator == '3') {
      this.columnSeperatorSelect = '||';
    }
    if (columnSeperator == '4') {
      this.columnSeperatorSelect = '~';
    }
    if (columnSeperator == '5') {
      this.columnSeperatorSelect = '~|';
    }

  }



  handleFile1Input(files: FileList) {
    this.formData.append(`request1`, files.item(0));
    this.file1 = true;
    console.log("file1", this.formData.append(`request1`, files.item(0)))

  }
  handleFile2Input(files: FileList) {
    this.formData.append(`request1`, files.item(0));
    this.file2 = true;
    console.log("file2", this.formData.append(`request1`, files.item(0)))
  }

  validateFile() {
    this.displayFileRes = false;
    this.displayFileError = false;
    this.displayFileData = false;

    if (this.fileTypeSelect === "") {
      alert("Please Select Recon File Type")
    }
    else if (!this.file1) {
      alert("Please Select Sale File");
    }
    else if (!this.file2) {
      alert("Please Select Tender File");
    }

    else {
      this.loadingData = true;
      this.dataService.RecondashboardFileValidate(this.fileTypeSelect,this.lineTermineterSelect,this.columnSeperatorSelect, this.formData).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        this.formData.delete('request1');
        this.fileTypeSelect = "";
        $('#file1').val('');
        $('#file2').val('');

        $('#FileTypeSelect').val('');
        $('#FileTypeTender').val('');
        $('#FileTypeSelectLine').val('');
        $('#FileTypeSelectTender').val('');

        if (resJSON.responseCode == '200') {

          this.loadingData = false;
          this.displayFileRes = true;
          this.fileUploadResponce = resJSON.message;
          // this.reconDataList =resJSON.recondataList
        }
        else if (resJSON.responseCode == '500') {
          this.fileTypeSelect = "";
          this.loadingData = false;
          this.displayFileError = true
          this.fileUploadResponceError = JSON.parse(resJSON.message);
          console.log('this.fileUploadResponceError',this.fileUploadResponceError)
          // this.fileUploadResponceError;.split('--').splice(4, 1)

          // this.reconDataList =resJSON.recondataList
        }
        else if (resJSON.responseCode == '501') {
          this.fileTypeSelect = "";
          this.loadingData = false;
          this.displayFileRes = true;
          this.displayFileData = true;
          this.fileUploadResponce = resJSON.message;
          // this.reconDataList = resJSON.recondataList
        }
        else {
          this.loadingData = false;
        }
      })
    }


  }


}
