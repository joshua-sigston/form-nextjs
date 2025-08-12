import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
        <div className="flex size-20 items-center justify-center rounded-full bg-green-500 opacity-10">
          <Check className="size-10 text-green-500" />
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          Success. We got your message.
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground mb-8">
          We will get back to you shortly
        </p>
        <Button asChild>
          <Link href="/">Go Back to Homepage</Link>
        </Button>
      </div>
    </section>
  );
};

export default Success;
