import { Component, OnInit } from '@angular/core';
import { ReminderService } from 'src/app/services/reminder.service';
import { Router } from '@angular/router';
import { Reminder } from 'src/app/classes/reminder';

@Component({
  selector: 'app-erstellen',
  templateUrl: './erstellen.component.html',
  styleUrls: ['./erstellen.component.css']
})
export class ErstellenComponent implements OnInit {

  title: string;
  description: string;
  date: Date;
  location: string;

  constructor(public reminderService : ReminderService, private router : Router) { }

  create() {
    console.log(this.title);
    const reminder = new Reminder();
    reminder.title = this.title;
    reminder.description = this.description;
    reminder.date = this.date;
    reminder.location = this.location;
    this.reminderService.addOrUpdateReminder(reminder);
    this.router.navigate(['/', 'Erinnerungen']);
  }

  ngOnInit() {
  }

}
