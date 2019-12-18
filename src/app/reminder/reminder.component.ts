import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  constructor(public reminderService : ReminderService, private router : Router) { }

  ngOnInit() {
  }

}
