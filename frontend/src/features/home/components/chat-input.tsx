"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useChatContext } from "./chat-provider";

export function ChatInput() {
  const { input, setInput, sendMessage, isLoading, inputRef } =
    useChatContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="border-t">
      <div className="mx-auto max-w-4xl py-4 px-4">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex items-center">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="メッセージを入力してください..."
              disabled={isLoading}
              className="pr-12"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="absolute right-1 h-8 w-8"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">送信</span>
            </Button>
          </div>
        </form>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          AIは間違える可能性があります。重要な情報は確認してください。
        </p>
      </div>
    </div>
  );
}
