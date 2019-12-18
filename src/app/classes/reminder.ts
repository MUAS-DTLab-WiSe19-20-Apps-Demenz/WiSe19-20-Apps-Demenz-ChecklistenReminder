export class Reminder {

    private static reminderCounter = 0;

    public constructor() {
        Reminder.reminderCounter++;
        this._id = Reminder.reminderCounter;
    }

    private _id : number;
    get id() : number {
        return this._id;
    }

    private title_ : string;
    private date_ : Date;
    private description_ : string;
    private location_ : string;
    //private checklist : Checklist;
    //private contact : Contact;

    get title() : string {
        return this.title_;
    }

    set title(val : string) {
        this.title_ = val;
    }

    get date() : Date {
        return this.date_;
    }

    set date(val : Date) {
        this.date_ = val;
    }

    get description() : string {
        return this.description_;
    }

    set description(val : string) {
        this.description_ = val;
    }

    get location() : string {
        return this.location_;
    }

    set location(val : string) {
        this.location_ = val;
    }

}
