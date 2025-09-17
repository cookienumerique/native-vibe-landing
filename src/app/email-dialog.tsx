"use client";

import { Text } from "@/app/text";
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
import { useState } from "react";
type EmailDialogProps = {
  children: string;
};

export const EmailDialog = ({ children }: EmailDialogProps) => {
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

    setStatus(res.ok ? "success" : "error");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{children}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogDescription>
            <Text className="text-left">
              🚀 Rejoins les testeurs NativeVibe
            </Text>
            <Text className="text-left">🎉 Deviens pionnier de la vibe US</Text>
            <Text className="text-left">🇺🇸 Parle comme un Américain</Text>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="ton.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <DialogFooter className="flex justify-end">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Envoi..." : "Préviens-moi au lancement"}
            </Button>
          </DialogFooter>
        </form>

        {status === "success" && (
          <p className="text-green-600 text-sm mt-2">
            ✅ Merci pour ton inscription !
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">
            ❌ Erreur, réessaye plus tard.
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};
