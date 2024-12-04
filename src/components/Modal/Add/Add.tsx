import React, { useState } from 'react';
import { createContact } from '../../../api/contactApi';
import { NewContact } from '../../../types/contact';

import { FormContainer,FormTitle,InputContainer,Label,Input,SubmitButton } from './Add.styled';



const AddNum = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newContact: NewContact = { name, phone };
      await createContact(newContact);
      setName('');
      setPhone('');
      alert('Contact added successfully!');

      window.location.reload();
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('Error adding contact');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>
        <Label>Имя:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormTitle>
      <FormTitle>
        <Label>Номер:</Label>
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </FormTitle>
      <SubmitButton type="submit">Добавить</SubmitButton>
    </FormContainer>
  );
};

export default AddNum;
