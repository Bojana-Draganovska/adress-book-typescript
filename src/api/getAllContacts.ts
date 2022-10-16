import { Contact, db } from "./db";

export async function getAllContact() {
      const getAllContacts: Contact[] = await db.contacts.toArray();
      return getAllContacts;
};
