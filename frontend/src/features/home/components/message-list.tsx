import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatContext } from "./chat-provider";
import { LoadingMessage } from "./loading-message";
import { MessageItem } from "./message-item";
import { WelcomeCard } from "./welcome-card";

export function MessageList() {
  const { messages, isLoading, messagesEndRef } = useChatContext();

  return (
    <ScrollArea className="flex-1">
      <div className="mx-auto max-w-4xl py-6 px-4">
        {messages.length === 0 && <WelcomeCard />}

        <div className="space-y-4">
          {messages.map((message, index) => (
            <MessageItem
              key={message.id}
              message={message}
              isLast={index === messages.length - 1}
            />
          ))}

          {isLoading && <LoadingMessage />}
        </div>
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
}
