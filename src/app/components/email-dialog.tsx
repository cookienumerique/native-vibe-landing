"use client";

import { Text } from "@/app/components/text";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Ban, CircleCheck } from "lucide-react";
import { useState } from "react";

export const EmailDialog = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      const link = document.createElement("a");
      link.href = "/10-phrases-us.pdf";
      link.download = "10-phrases-us.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    } else {
      setStatus("error");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="p-4 text-md" size="xl">
          Je veux mon guide gratuit <br />
          et l&apos;accès prioritaire
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Télécharge ton guide gratuit &quot;10 expressions US&quot;
          </DialogTitle>
          <DialogDescription>
            <Text className="text-left">
              Laisse ton email pour recevoir ton guide. Tu seras aussi le
              premier informé du lancement de l&apos;application !
            </Text>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Ton email</Label>
            <Input
              id="email"
              type="email"
              placeholder="ton.email@nativevibe.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <DialogFooter className="flex justify-end">
            {status !== "success" && (
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading"
                  ? "Envoi..."
                  : "Je télécharge mon guide gratuit"}
              </Button>
            )}
          </DialogFooter>
        </form>

        {status === "success" && (
          <Text className="flex flex-row gap-2 text-green-600 text-sm justify-center">
            <CircleCheck size={20} />
            Merci pour ton inscription !
          </Text>
        )}
        {status === "error" && (
          <Text className="flex flex-row gap-2 text-red-600 text-sm justify-center">
            <Ban />
            Erreur, réessaye plus tard.
          </Text>
        )}
      </DialogContent>
    </Dialog>
  );
};
