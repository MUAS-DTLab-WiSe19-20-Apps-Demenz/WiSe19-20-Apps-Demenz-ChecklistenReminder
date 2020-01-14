import { Component, OnInit } from '@angular/core';
import {ChecklistService} from '../services/checklist/checklist.service';
import {Router} from '@angular/router';
import {Checklist} from '../classes/checklist';

@Component({
  selector: 'app-checklist-overview',
  templateUrl: './checklist-overview.component.html',
  styleUrls: ['./checklist-overview.component.css']
})
export class ChecklistOverviewComponent implements OnInit {

  constructor(public checklistService: ChecklistService, private router: Router) { }

  ngOnInit() {
  }

  createChecklist() {
    this.checklistService.AddList(new Checklist('Neue Liste', 'Hier Beschreibung einfügen', 'Trigger Conditions'));
  }
}
