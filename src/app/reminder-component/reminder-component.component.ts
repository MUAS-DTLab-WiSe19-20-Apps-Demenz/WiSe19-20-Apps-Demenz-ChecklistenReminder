import { Component, OnInit, Input } from '@angular/core';
import { Reminder } from '../classes/reminder';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-reminder-component',
  templateUrl: './reminder-component.component.html',
  styleUrls: ['./reminder-component.component.css']
})
export class ReminderComponentComponent implements OnInit {

  @Input()
  public reminder : Reminder;

  constructor(private reminderService : ReminderService) { }

  ngOnInit() {
  }

}
