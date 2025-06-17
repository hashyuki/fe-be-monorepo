import { Sparkles } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-4xl flex h-14 items-center px-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5" />
          <h1 className="text-lg font-semibold">AI Assistant</h1>
        </div>
      </div>
    </header>
  );
}