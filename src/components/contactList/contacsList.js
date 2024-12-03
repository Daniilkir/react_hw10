import { List } from "./contactsListStyle";

export const ContactList = ({ data, deleteContact }) => {
  return (
    <List>
      {data.map((contact) => (
        <li key={contact.id}>
          <p>Ім'я:{contact.name}</p>
          <p>Номер телефону:{contact.number}</p>
          <button onClick={() => deleteContact(contact.id)}>Видалити</button>
        </li>
      ))}
    </List>
  );
};
