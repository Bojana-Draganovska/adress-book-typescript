import { db, Contact } from "./db";

export async function addContact(contact: Contact) {
      const addContacts = await db.contacts.add(contact);
};
