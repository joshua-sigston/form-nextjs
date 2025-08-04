import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";
import { SalesAction } from "./actions";
import { SubmitBtn } from "./_components/submit-btn";

export default function Home() {
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
              <form action={SalesAction} className="flex flex-col gap-y-4 mt-5">
                <input type="hidden" name="_gotcha" />
                <div className="grid space-y-1">
                  <Label>Name</Label>
                  <Input placeholder="Joh Doe" name="name" />
                </div>
                <div className="grid space-y-1">
                  <Label>Email</Label>
                  <Input placeholder="john.doe@example.com" name="email" />
                </div>
                <div className="grid space-y-1">
                  <Label>Question or Problem</Label>
                  <Textarea
                    placeholder="Please share details about your needs..."
                    className="h-32"
                    name="message"
                  />
                </div>
                <SubmitBtn />
              </form>
            </TabsContent>
            <TabsContent value="support">
              <p className="text-muted-foreground text-sm">
                Troubleshoot a technical issue or payement problem.
              </p>
              <form className="flex flex-col gap-y-4 mt-5">
                <input type="hidden" name="_gotcha" />
                <div className="grid space-y-1">
                  <Label>Name</Label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="grid space-y-1">
                  <Label>Email</Label>
                  <Input placeholder="john.doe@example.com" />
                </div>
                <div className="grid space-y-1">
                  <Label>Problem</Label>
                  <Textarea placeholder="What is wrong...?" className="h-32" />
                </div>
                <div className="grid space-y-1">
                  <Label>Asset</Label>
                  <Input type="file" />
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
