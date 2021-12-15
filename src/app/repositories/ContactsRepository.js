const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Joao',
    email: 'joao@gmail.com',
    phone: '123123213',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@gmail.com',
    phone: '323123123',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
