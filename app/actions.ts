"use server";

import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { submissionSchema } from "./zod-schema";

// prevState  lets your action know what state it had before — so you can merge changes, keep error messages

export async function SalesAction(prevState: any, formData: FormData) {
  // uses Zod to compare form data with schema created to validate
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  // if submission is not a success, user is notified
  if (submission.status !== "success") {
    return submission.reply();
  }

  // sends data to get form
  const resp = await fetch(process.env.SALES_URL!, {
    method: "POST",
    body: formData,
  });

  // redirect to error page if error occurrs
  if (!resp.ok) {
    return redirect("/error");
  }

  // redirect to success page is submission is successful
  return redirect("/success");
}

export async function SupportAction(prevState: any, formData: FormData) {
  // uses Zod to compare form data with schema created to validate
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  // if submission is not a success, user is notified
  if (submission.status !== "success") {
    return submission.reply();
  }

  // sends data to get form
  const resp = await fetch(process.env.SUPPORT_URL!, {
    method: "POST",
    body: formData,
  });

  // redirect to error page if error occurrs
  if (!resp.ok) {
    return redirect("/error");
  }

  // redirect to error page if error occurrs
  return redirect("/success");
}
