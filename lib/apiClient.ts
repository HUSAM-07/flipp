import { db } from './firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export interface Flashcard {
  id?: string;
  title: string;
  content: string;
  tags: string[];
  userId: string;
  createdAt: Date;
}

export const createFlashcard = async (flashcardData: Omit<Flashcard, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'flashcards'), {
      ...flashcardData,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating flashcard:', error);
    throw error;
  }
};

export const getFlashcards = async (userId: string) => {
  try {
    const q = query(collection(db, 'flashcards'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Flashcard));
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    throw error;
  }
};
