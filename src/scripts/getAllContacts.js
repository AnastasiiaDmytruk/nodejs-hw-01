import { readContacts } from '../utils/readContacts';

export const getAllContacts = () => readContacts();

console.log(await getAllContacts());
