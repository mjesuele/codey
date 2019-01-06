export type PhonebookEntry = {
  name: string;
  numbers: string[];
}

export type Phonebook = PhonebookEntry[];

export const getName = (phoneNumber: string, book: Phonebook) => {
  const entry = book.find(e => e.numbers.includes(phoneNumber));
  return entry ? entry.name : undefined;
}
