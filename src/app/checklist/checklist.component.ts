import {Component, Input, OnInit} from '@angular/core';
import {Checklist} from '../classes/checklist';
import {ChecklistService} from '../services/checklist/checklist.service';
import {print} from 'util';
import {ChecklistEntry} from '../classes/checklist-entry';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor(private service: ChecklistService) { }

  @Input()
  public checklist: Checklist;


  ngOnInit() {
  }

  deleteList() {
    this.service.RemoveList(this.checklist.name);
  }


  public toggleEdit(): void {
    if (this.checklist.editing) {
      this.service.UpdateList(this.checklist);
    }

    this.checklist.editing = !this.checklist.editing;
  }

  addEntry() {
    this.checklist.addEntry(new ChecklistEntry('Neues Element', false));
  }
}
