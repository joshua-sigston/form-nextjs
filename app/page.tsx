"usel client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import { SalesAction, SupportAction } from "./actions";
import { SubmitBtn } from "./_components/submit-btn";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./zod-schema";

export default function Home() {
  const [salesResult, salesAction] = useFormState(SalesAction, undefined);
  const [supportResult, supportAction] = useFormState(SupportAction, undefined);

  const [salesForm, salesFields] = useForm({
    lastResult: salesResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const [supportForm, supportFields] = useForm({
    lastResult: supportResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center px-5">
      <h1 className="text-4xl font-bold mb-7">Contact Us</h1>
      <Card className="max-w-[500px] w-full">
        <Tabs defaultValue="sales">
          <CardContent className="mt-5">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="sales">Talk to Sales</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="sales">
              <p className="text-muted-foreground text-sm">
                You want to integrate your product with us? We can help you.
                Please contact us down below
              </p>
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
                  <p className="text-red-500 text-sm">
                    {salesFields.name.errors}
                  </p>
                </div>
                <div className="grid space-y-1">
                  <Label>Email</Label>
                  <Input
                    placeholder="john.doe@example.com"
                    name={salesFields.email.name}
                    defaultValue={salesFields.email.initialValue}
                    key={salesFields.email.key}
                  />
                  <p className="text-red-500 text-sm">
                    {salesFields.email.errors}
                  </p>
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
                  <p className="text-red-500 text-sm">
                    {salesFields.message.errors}
                  </p>
                </div>
                <SubmitBtn />
              </form>
            </TabsContent>
            <TabsContent value="support">
              <p className="text-muted-foreground text-sm">
                Troubleshoot a technical issue or payement problem.
              </p>
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
                  <p className="text-red-500 text-sm">
                    {supportFields.name.errors}
                  </p>
                </div>
                <div className="grid space-y-1">
                  <Label>Email</Label>
                  <Input
                    placeholder="john.doe@example.com"
                    name={supportFields.email.name}
                    defaultValue={supportFields.email.initialValue}
                    key={supportFields.email.key}
                  />
                  <p className="text-red-500 text-sm">
                    {supportFields.email.errors}
                  </p>
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
                  <p className="text-red-500 text-sm">
                    {supportFields.message.errors}
                  </p>
                </div>
                <div className="grid space-y-1">
                  <Label>Asset</Label>
                  <Input
                    type="file"
                    name={supportFields.image.name}
                    key={supportFields.image.key}
                  />
                  <p className="text-red-500 text-sm">
                    {supportFields.image.errors}
                  </p>
                </div>
                <SubmitBtn />
              </form>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </section>
  );
}
