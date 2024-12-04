import React, { useState } from 'react';
import { Contact } from '../../../types/contact';

import { EditModalContent, EditLabel, EditInput, EditButtonWrapper, EditButton } from './Edit.styled';

interface EditNumProps {
  contact: Contact | null;
  onSave: (updatedContact: Contact) => void;
  onCancel: () => void;
}

const EditNum: React.FC<EditNumProps> = ({ contact, onSave, onCancel }) => {
  const [name, setName] = useState(contact?.name || '');
  const [phone, setPhone] = useState(contact?.phone || '');

  const handleSave = () => {
    if (contact) {
      onSave({ ...contact, name, phone });
    }
  };

  return (
    <EditModalContent>
    <EditLabel>Имя</EditLabel>
    <EditInput
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <EditLabel>Телефон</EditLabel>
    <EditInput
      type="text"
      value={phone}
      onChange={e => setPhone(e.target.value)}
    />
    <EditButtonWrapper>
      <EditButton onClick={handleSave}>Сохранить</EditButton>
      <EditButton onClick={onCancel}>Отмена</EditButton>
    </EditButtonWrapper>
  </EditModalContent>
  );
};

export default EditNum;
