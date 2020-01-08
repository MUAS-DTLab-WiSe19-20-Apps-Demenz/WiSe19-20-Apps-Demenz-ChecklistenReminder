import { Component, OnInit, Input } from '@angular/core';
import { Reminder } from 'src/app/classes/reminder';
import { Route } from '@angular/compiler/src/core';
import { ReminderService } from 'src/app/services/reminder.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  reminder : Reminder;
  
  constructor(public reminderService : ReminderService, private route : ActivatedRoute) { 
    let id = route.snapshot.params['id'];
    reminderService.getReminderList().subscribe(reminders => {
      reminders.forEach(reminder => {
        if(reminder.id == id) {
          this.reminder = reminder;
        }
      });
    })
  }

  ngOnInit() {
  }

}
