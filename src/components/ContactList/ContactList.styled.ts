
import styled from 'styled-components';

// Контейнер для списка контактов
export const ContactListContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: gray;
  border-radius: 8px;
`;

export const Contlist = styled.ul`
`;

// Стиль для каждого контакта
export const ContactItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 0.4fr 0.3fr;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Кнопки для удаления и редактирования контакта
export const ContactButton = styled.button`
  background-color: #ff4d4d;;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const EditButton = styled(ContactButton)`
  background-color: black;
`;

export const AddButton = styled(ContactButton)`
  background-color: black;
`;

