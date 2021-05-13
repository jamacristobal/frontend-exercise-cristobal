import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp-modal',
  templateUrl: './comp-modal.component.html',
  styleUrls: ['./comp-modal.component.scss']
})
export class CompModalComponent implements OnInit {

  @Input()
  modalClass!: string;
  @Input()
  contentClass!: string;

  @Input() closeOnOverlayClick = true;

  @Input() modal_sm = false;
  @Input() modal_md = true;
  @Input() modal_lg = false;
  @Input() modal_xl = false;

  public mdshow = false;

  constructor(
    public changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {

  }

  close() {
    this.mdshow = false;
    this.changeDetectorRef.detectChanges();
  }

  open() {
    this.mdshow = true;
    this.changeDetectorRef.detectChanges();
  }

  onOverlayClick() {
    if (this.closeOnOverlayClick) this.close();
  }

}
