"use client";

import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { ChatProvider } from "./chat-provider";
import { MessageList } from "./message-list";

export function ChatContainer() {
  return (
    <ChatProvider>
      <div className="flex flex-col h-screen bg-background">
        <ChatHeader />
        <MessageList />
        <ChatInput />
      </div>
    </ChatProvider>
  );
}
