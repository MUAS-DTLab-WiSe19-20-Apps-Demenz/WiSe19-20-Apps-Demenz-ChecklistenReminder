import { Injectable } from '@angular/core';
import {ChecklistOverviewComponent} from '../../checklist/checklist-overview.component';
import {Checklist} from '../../classes/checklist';
import {BehaviorSubject, Observable} from 'rxjs';
import {Reminder} from '../../classes/reminder';
import {ChecklistEntry} from '../../classes/checklist-entry';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() {
    // tslint:disable-next-line:max-line-length
    let list = new Checklist('Haus verlassen', 'Alles was man braucht um das Haus zu verlassen', 'Location: difference from home location > 10m');
    list.addEntry(new ChecklistEntry('Fenster schließen', false));
    list.addEntry(new ChecklistEntry('Herd ausmachen', false));
    list.addEntry(new ChecklistEntry('Abschließen', false));
    list.addEntry(new ChecklistEntry('Katze streicheln', false));
    this.AddList(list);
    list = new Checklist('Zum Arzt gehen', 'Alles was man braucht um zum Arzt zu gehen', 'Reminder');
    list.addEntry(new ChecklistEntry('Versichertenkarte mitnehmen', false));
    list.addEntry(new ChecklistEntry('Überweisungsschein mitnehmen', false));
    this.AddList(list);
  }

  private lists: BehaviorSubject<Checklist[]> = new BehaviorSubject<Checklist[]>([]);
  public getChecklists(): Observable<Checklist[]> {
    return this.lists.asObservable();
  }

  public AddList(list: Checklist): void {
    const lists = this.lists.getValue();
    lists.push(list);
    this.lists.next(lists);
  }

  public UpdateList(list: Checklist): void {
    const lists = this.lists.getValue();
    const targetListIndex = lists.findIndex(value => value.name === list.name);

    const targetList = lists[targetListIndex];
    targetList.description = list.description;
    targetList.entries = list.entries;
    lists[targetListIndex] = targetList;

    this.lists.next(lists);
  }

  public RemoveList(name: string): void {
    const lists = this.lists.getValue();
    this.lists.next(lists.filter(value => value.name !== name));
  }

  public GetList(name: string): Checklist | undefined {
    return this.lists.getValue().find(value => value.name === name);
  }
}
