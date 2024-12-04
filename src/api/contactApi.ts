import axios from 'axios';
import { Contact } from '../types/contact';

const API_URL = 'http://localhost:5000/api/contacts';

// Получение всех контактов
export const getContacts = async (): Promise<Contact[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data as Contact[];
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

// Создание нового контакта
export const createContact = async (contact: Omit<Contact, 'id'>): Promise<Contact> => {
  try {
    const response = await axios.post(API_URL, contact);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

// Удаление контакта
export const deleteContact = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

// Обновление контакта
export const updateContact = async (id: number, updatedContact: Contact): Promise<Contact> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedContact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};
