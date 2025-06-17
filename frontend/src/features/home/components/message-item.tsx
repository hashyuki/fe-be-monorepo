import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Bot, User } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface MessageItemProps {
  message: Message;
  isLast: boolean;
}

export function MessageItem({ message, isLast }: MessageItemProps) {
  return (
    <div className="flex gap-3 px-4">
      <Avatar className="h-8 w-8">
        <AvatarFallback>
          {message.role === "user" ? (
            <User className="h-4 w-4" />
          ) : (
            <Bot className="h-4 w-4" />
          )}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {message.role === "user" ? "あなた" : "AI アシスタント"}
          </span>
        </div>
        <div className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>
        {!isLast && <Separator className="mt-4" />}
      </div>
    </div>
  );
}