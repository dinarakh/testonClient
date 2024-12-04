import styled from 'styled-components';

// Основной контейнер для формы добавления контакта
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

// Заголовок формы
export const FormTitle = styled.h3`
  font-size: 20px;
  width: 300px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

// Контейнер для метки и поля ввода
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

// Стиль для метки
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #555;
`;

// Стиль для поля ввода
export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  
  &:focus {
    border-color: #1890ff;
    outline: none;
  }
`;

// Кнопка для отправки формы
export const SubmitButton = styled.button`
  background-color: #1890ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #40a9ff;
  }
`;

