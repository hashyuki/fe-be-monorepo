import { Card } from "@/components/ui/card";
import { Bot } from "lucide-react";

export function WelcomeCard() {
  return (
    <Card className="mx-auto max-w-2xl p-8 text-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Bot className="h-10 w-10 text-primary" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            こんにちは！AIアシスタントです
          </h2>
          <p className="text-muted-foreground">
            何かお手伝いできることはありますか？
          </p>
        </div>
      </div>
    </Card>
  );
}