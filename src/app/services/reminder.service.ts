import { Injectable } from '@angular/core';
import { Reminder } from '../classes/reminder';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private reminderList : BehaviorSubject<Reminder[]> = new BehaviorSubject<Reminder[]>([]);
  public getReminderList() : Observable<Reminder[]> {
    return this.reminderList.asObservable();
  }

  constructor() { 
    let c1 = new Reminder();
    c1.title = "Reminder one test";
    c1.date = new Date();
    c1.description = "Reminder one description";
    c1.location = "Reminder one location";
    
    let c2 = new Reminder();
    c2.title = "Reminder two test";
    c2.date = new Date('01/16/2013');
    c2.description = "Reminder two description";
    c2.location = "Reminder two location";
    
    this.addReminder(c1);
    this.addReminder(c2);
  }

  public addOrUpdateReminder(c : Reminder) : void {
    let reminders = this.reminderList.getValue();
    let index = reminders.findIndex(cs => cs.id == c.id);
    if(index != -1) {
      reminders[index] = c;
      this.reminderList.next(reminders);
    } else {
      this.addReminder(c);
    }
  }

  private addReminder(c : Reminder) : void {
    let reminders = this.reminderList.getValue();
    reminders.push(c);
    this.reminderList.next(reminders);
  }

  public removeReminder(c : Reminder) : void {
    let reminders = this.reminderList.getValue();
    reminders = reminders.filter(cs => cs.id != c.id);
    this.reminderList.next(reminders);
  }
}
