import Link from "next/link";
import { Button } from "@/components/ui/button";
import FlashcardList from '@/components/FlashcardList';
import FlashcardForm from '@/components/FlashcardForm';
import { AuthCheck } from '@/components/AuthCheck';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-bold mb-4">Flipp</h1>
      <p className="text-2xl mb-8">Learn more by remembering less.</p>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Transform your studying experience into a fun and effective journey,
        making it easier to remember what matters most. Create custom
        flashcards effortlessly and make studying feel like play.
      </p>
      <div className="space-x-4 mb-8">
        <Button asChild>
          <Link href="#flashcards">Let's Flipp</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/login">Sign Up/Login</Link>
        </Button>
      </div>
      <AuthCheck>
        <div id="flashcards" className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Your Flashcards</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Create a Flashcard</h3>
            <FlashcardForm />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Your Flashcards</h3>
            <FlashcardList />
          </div>
        </div>
      </AuthCheck>
    </div>
  );
}
