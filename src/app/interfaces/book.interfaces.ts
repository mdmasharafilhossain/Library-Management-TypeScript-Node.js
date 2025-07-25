import { Document } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  genre: 'FICTION' | 'NON-FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY';
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
  updateAvailabilityStatus: () => Promise<IBook>; 
}
