import React from 'react';
import { DeleteModalContent,NameDelete,EditButton } from './Delete.styled';

interface DeleteNumProps {
  contact: { name: string } | null;
  onDelete: () => void;
  onCancel: () => void;
}

const DeleteNum: React.FC<DeleteNumProps> = ({ contact, onDelete, onCancel }) => {
  if (!contact) return null;

  return (
    <DeleteModalContent>
      <NameDelete>удалить {contact.name}?</NameDelete>
      <EditButton onClick={onDelete}>Да</EditButton>
      <EditButton onClick={onCancel}>Нет</EditButton>
    </DeleteModalContent>
  );
};

export default DeleteNum;
