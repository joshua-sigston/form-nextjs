"use client";

import React from "react";

import { useForm } from "@conform-to/react";
import { SupportAction } from "@/app/actions";
import { submissionSchema } from "@/app//zod-schema";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitBtn } from "@/app/_components/submit-btn";

const SupportForm = () => {
  const [supportResult, supportAction] = useFormState(SupportAction, undefined);

  const [supportForm, supportFields] = useForm({
    lastResult: supportResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      action={supportAction}
      id={supportForm.id}
      onSubmit={supportForm.onSubmit}
      noValidate
      className="flex flex-col gap-y-4 mt-5"
    >
      <input type="hidden" name="_gotcha" />
      <div className="grid space-y-1">
        <Label>Name</Label>
        <Input
          placeholder="John Doe"
          name={supportFields.name.name}
          defaultValue={supportFields.name.initialValue}
          key={supportFields.name.key}
        />
        <p className="text-red-500 text-sm">{supportFields.name.errors}</p>
      </div>
      <div className="grid space-y-1">
        <Label>Email</Label>
        <Input
          placeholder="john.doe@example.com"
          name={supportFields.email.name}
          defaultValue={supportFields.email.initialValue}
          key={supportFields.email.key}
        />
        <p className="text-red-500 text-sm">{supportFields.email.errors}</p>
      </div>
      <div className="grid space-y-1">
        <Label>Problem</Label>
        <Textarea
          placeholder="What is wrong...?"
          className="h-32"
          name={supportFields.message.name}
          defaultValue={supportFields.message.initialValue}
          key={supportFields.message.key}
        />
        <p className="text-red-500 text-sm">{supportFields.message.errors}</p>
      </div>
      <div className="grid space-y-1">
        <Label>Asset</Label>
        <Input
          type="file"
          name={supportFields.image.name}
          key={supportFields.image.key}
        />
        <p className="text-red-500 text-sm">{supportFields.image.errors}</p>
      </div>
      <SubmitBtn />
    </form>
  );
};

export default SupportForm;
