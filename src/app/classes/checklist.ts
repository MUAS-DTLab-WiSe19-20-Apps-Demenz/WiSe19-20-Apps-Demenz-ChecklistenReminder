import {Reminder} from './reminder';
import {BehaviorSubject, Observable} from 'rxjs';
import {ChecklistEntry} from './checklist-entry';
import {ChecklistService} from '../services/checklist/checklist.service';

export class Checklist {

  constructor(name: string, description: string, trigger: string) {
    this.name = name;
    this.description = description;
    this.trigger = trigger;
  }
  name: string;
  description: string;
  trigger: string;
  public editing = false;
  entries: BehaviorSubject<ChecklistEntry[]> = new BehaviorSubject<ChecklistEntry[]>([]);
  public getEntries(): Observable<ChecklistEntry[]> {
    return this.entries.asObservable();
  }

  public addEntry(entry: ChecklistEntry) {
    const list = this.entries.getValue();
    list.push(entry);
    this.entries.next(list);
  }

  deleteEntry(entry: ChecklistEntry): void {
    const entries = this.entries.getValue();
    this.entries.next(entries.filter(value => value.description !== entry.description));
  }
}
