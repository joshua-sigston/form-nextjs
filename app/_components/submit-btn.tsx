"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending} variant="outline">
          {" "}
          <Loader2 className="size-4 mr-2 animate-spin" /> Submitting...
        </Button>
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </>
  );
};
