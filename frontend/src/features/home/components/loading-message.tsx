import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot } from "lucide-react";

export function LoadingMessage() {
  return (
    <div className="flex gap-3 px-4">
      <Avatar className="h-8 w-8">
        <AvatarFallback>
          <Bot className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">AI アシスタント</span>
        </div>
        <div className="flex space-x-1">
          <div className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground/50" />
          <div className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground/50 [animation-delay:0.2s]" />
          <div className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground/50 [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
}