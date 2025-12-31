// app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button"; // using your ShadCN button

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted px-4 text-center">
      <h1 className="text-6xl md:text-7xl font-bold mb-4">404</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Button
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => router.push("/")}
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default NotFound;
