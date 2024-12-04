export interface Contact {
  id: number;
  name: string;
  phone: string;
  createdAt?: string;  // Теперь опциональное поле
  updatedAt?: string;  // Теперь опциональное поле
}

export interface NewContact {
  name: string;
  phone: string;
}
