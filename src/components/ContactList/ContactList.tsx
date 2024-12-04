import React, { useEffect, useState } from 'react';
import { getContacts, deleteContact, updateContact } from '../../api/contactApi'; 
import Modal from '../Modal/Modal';
import DeleteNum from '../Modal/Delete/Delete';
import EditNum from '../Modal/Edit/Edit';
import AddNum from '../Modal/Add/Add';

import { ContactListContainer,Contlist, ContactItem, ContactButton,EditButton, AddButton } from './ContactList.styled';



// Интерфейс для контакта
interface Contact {
  id: number;
  name: string;
  phone: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [modalActive, setModalActive] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);
  const [modalActiveSecond, setModalActiveSecond] = useState(false);
  const [contactToEdit, setContactToEdit] = useState<Contact | null>(null);
  const [modalActiveThird, setModalActiveThird] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  // Удаление контакта
  const handleDeleteClick = (contact: Contact) => {
    setContactToDelete(contact);
    setModalActive(true);
  };

  const handleDeleteConfirm = async () => {
    if (contactToDelete) {
      try {
        await deleteContact(contactToDelete.id);
        setContacts(contacts.filter(contact => contact.id !== contactToDelete.id));
        setModalActive(false);
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const handleDeleteCancel = () => {
    setModalActive(false);
  };

  // Редактирование контакта
  const handleEditClick = (contact: Contact) => {
    setContactToEdit(contact);
    setModalActiveSecond(true);
  };

  const handleEditConfirm = async (updatedContact: Contact) => {
    try {
      await updateContact(updatedContact.id, updatedContact);
      setContacts(contacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
      ));
      setModalActiveSecond(false);
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const handleEditCancel = () => {
    setModalActiveSecond(false);
  };

  return (
    <ContactListContainer>
      <Contlist>
        <AddButton onClick={() => setModalActive(true)}>Добавить</AddButton>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name} - {contact.phone}
            <ContactButton onClick={() => handleDeleteClick(contact)}>Удалить</ContactButton>
            <EditButton onClick={() => handleEditClick(contact)}>Редактировать</EditButton>
          </ContactItem>
        ))}
      </Contlist>

      {/* Модальное окно удаления */}
      <Modal active={modalActive} setActive={setModalActive}>
        <DeleteNum
          contact={contactToDelete}
          onDelete={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      </Modal>

      {/* Модальное окно редактирования */}
      <Modal active={modalActiveSecond} setActive={setModalActiveSecond}>
        <EditNum
          contact={contactToEdit}
          onSave={handleEditConfirm}
          onCancel={handleEditCancel}
        />
      </Modal>
      {/* Модальное окно Добавление */}
      <Modal active={modalActive} setActive={setModalActive}><AddNum/></Modal>
    </ContactListContainer>
  );
};

export default ContactList;
