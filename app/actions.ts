"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { submissionSchema } from "./zod-schema";

export async function SalesAction(prevState: any, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const resp = await fetch(process.env.SALES_URL!, {
    method: "POST",
    body: formData,
  });

  if (!resp.ok) {
    throw new Error("Something went wrong");
  }

  return redirect("/success");
}

export async function SupportAction(prevState: any, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const resp = await fetch(process.env.SUPPORT_URL!, {
    method: "POST",
    body: formData,
  });

  if (!resp.ok) {
    throw new Error("Something went wrong");
  }

  return redirect("/success");
}
