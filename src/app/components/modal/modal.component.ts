import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class CustomDialogComponent {
  @ViewChild('dialog') dialogButton: ElementRef;

  constructor() {
    this.dialogButton = new ElementRef(null);
   }

  openDialog() {
    this.dialogButton.nativeElement.click();
  }

  closeDialog() {
    this.dialogButton.nativeElement.close();
  }
}
