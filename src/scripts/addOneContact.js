import { readContacts } from "../utils/readContacts";
import { createFakeContact } from "../utils/createFakeContact";
import { writeContacts } from "../utils/writeContacts";

export const addOneContact =  async () => {
const contactList = await readContacts();
const contact = createFakeContact();
// or
// contactList.push(contact);
// await  writeContacts(contactList)
await writeContacts([...contactList,...contact]);
};

addOneContact();
