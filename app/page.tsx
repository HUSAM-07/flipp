import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-6xl font-bold mb-4">Flipp</h1>
      <p className="text-2xl mb-8">Learn more by remembering less.</p>
      <p className="text-lg mb-8 max-w-2xl">
        Transform your studying experience into a fun and effective journey,
        making it easier to remember what matters most. Create custom
        flashcards effortlessly and make studying feel like play.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/flashcards">Let's Flipp</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/login">Sign Up/Login</Link>
        </Button>
      </div>
    </div>
  );
}
