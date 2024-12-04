import styled from 'styled-components';

// Контейнер для модального окна редактирования
export const EditModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px 140px;
  border-radius: 8px;
`;

export const EditLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const EditInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
`;

export const EditButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const EditButton = styled.button`
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #ff4d4d;
    color: white;
    font-size: 16px;
`;



