import Dexie, { Table } from "dexie";

export interface Contact {
    id: string;
    name: string;
    surname: string;
    email: string;
    country: string;
};

export class MyDatabase extends Dexie {
    contacts!: Table<Contact, string>;

    constructor() {
        super('MyDatabase');
        this.version(1).stores({
            contacts: '++id',
        });
    }
};

export const db = new MyDatabase();

