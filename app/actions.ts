"use server";

import { redirect } from "next/navigation";

export async function SalesAction(formData: FormData) {
  const resp = await fetch(process.env.SALES_URL!, {
    method: "POST",
    body: formData,
  });

  if (!resp.ok) {
    throw new Error("Something went wrong");
  }

  return redirect("/success");
}
