'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '../app/contexts/AuthContext';
import { getFlashcards, Flashcard } from '../lib/apiClient';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const FlashcardList: React.FC = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchFlashcards = async () => {
      if (user) {
        const cards = await getFlashcards(user.uid);
        setFlashcards(cards);
      }
    };

    fetchFlashcards();
  }, [user]);

  if (!user) {
    return <p>Please sign in to view your flashcards.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {flashcards.map((flashcard) => (
        <Card key={flashcard.id}>
          <CardHeader>
            <CardTitle>{flashcard.title}</CardTitle>
            <CardDescription>{new Date(flashcard.createdAt).toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{flashcard.content}</p>
          </CardContent>
          <CardFooter>
            {flashcard.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="mr-2">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FlashcardList;
