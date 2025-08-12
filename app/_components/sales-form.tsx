"use client";

import React from "react";
import { useForm } from "@conform-to/react";
import { SalesAction } from "@/app/actions";
import { submissionSchema } from "@/app//zod-schema";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitBtn } from "@/app/_components/submit-btn";

const SalesForm = () => {
  const [salesResult, salesAction] = useFormState(SalesAction, undefined);

  const [salesForm, salesFields] = useForm({
    lastResult: salesResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      action={salesAction}
      id={salesForm.id}
      onSubmit={salesForm.onSubmit}
      noValidate
      className="flex flex-col gap-y-4 mt-5"
    >
      <input type="hidden" name="_gotcha" />
      <div className="grid space-y-1">
        <Label>Name</Label>
        <Input
          placeholder="Joh Doe"
          name={salesFields.name.name}
          defaultValue={salesFields.name.initialValue}
          key={salesFields.name.key}
        />
        <p className="text-red-500 text-sm">{salesFields.name.errors}</p>
      </div>
      <div className="grid space-y-1">
        <Label>Email</Label>
        <Input
          placeholder="john.doe@example.com"
          name={salesFields.email.name}
          defaultValue={salesFields.email.initialValue}
          key={salesFields.email.key}
        />
        <p className="text-red-500 text-sm">{salesFields.email.errors}</p>
      </div>
      <div className="grid space-y-1">
        <Label>Question or Problem</Label>
        <Textarea
          placeholder="Please share details about your needs..."
          className="h-32"
          name={salesFields.message.name}
          defaultValue={salesFields.message.initialValue}
          key={salesFields.message.key}
        />
        <p className="text-red-500 text-sm">{salesFields.message.errors}</p>
      </div>
      <SubmitBtn />
    </form>
  );
};

export default SalesForm;
