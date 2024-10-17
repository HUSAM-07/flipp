import React from 'react';
import FlashcardList from '@/components/FlashcardList';
import FlashcardForm from '@/components/FlashcardForm';
import { AuthCheck } from '@/components/AuthCheck';

export default function FlashcardsPage() {
  return (
    <AuthCheck>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Your Flashcards</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Create a Flashcard</h2>
          <FlashcardForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Flashcards</h2>
          <FlashcardList />
        </div>
      </div>
    </AuthCheck>
  );
}
