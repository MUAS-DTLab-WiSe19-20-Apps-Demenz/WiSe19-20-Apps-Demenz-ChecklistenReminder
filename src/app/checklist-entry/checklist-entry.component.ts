import {Component, Input, OnInit} from '@angular/core';
import {ChecklistEntry} from '../classes/checklist-entry';
import {Checklist} from '../classes/checklist';

@Component({
  selector: 'app-checklist-entry',
  templateUrl: './checklist-entry.component.html',
  styleUrls: ['./checklist-entry.component.css']
})
export class ChecklistEntryComponent implements OnInit {

  constructor() { }

  @Input()
  public entry: ChecklistEntry;

  @Input()
  public checklist: Checklist;

  ngOnInit() {
  }

  deleteEntry(): void {
    this.checklist.deleteEntry(this.entry);
  }
}
