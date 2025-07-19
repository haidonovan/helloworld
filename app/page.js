"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import SwiperGallery from "@/components/swiper/SwiperGallery";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = useSession();
  const count = 1000;

  return (
    <>
      <div className="p-4 flex justify-between items-center bg-gray-100 dark:bg-zinc-900 rounded-md mb-6">
        {session ? (
          <>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Signed in as <span className="font-semibold">{session.user.email}</span>
            </p>
            <Button
              variant="destructive"
              onClick={() => signOut()}
              className="ml-4 hover:opacity-80 transition"
            >
              Sign Out
            </Button>
          </>
        ) : (
          <Button
            onClick={() => signIn("google")}
            className="hover:bg-blue-600 bg-blue-500 text-white transition"
          >
            Sign In with Google
          </Button>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-4">Hello World 🌍</h1>

      <div className="space-y-2">
        <Button variant="destructive">Click me</Button><br />
        <Button variant="outline">Click me</Button><br />
        <Button variant="secondary">Click me</Button><br />
        <Button variant="ghost">Click me</Button><br />
        <Button variant="link">Click me</Button><br />
        <Button className="bg-zinc-800 text-white hover:bg-zinc-700">
          Click me
        </Button><br />
        <Button className="bg-yellow-300 hover:bg-yellow-400 text-black">
          💩 I'm Shitman
        </Button>
      </div>

      {/* Gallery Section */}
      {Array.from({ length: count }).map((_, i) => (
        <main key={i} className="p-10">
          <h2 className="text-2xl font-bold mb-4">🖼️ Modern Slider {i + 1}</h2>
          <SwiperGallery />
        </main>
      ))}
    </>
  );
}
