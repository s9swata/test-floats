"use client"
import React, { useRef, useEffect } from "react";
import { MessageBubble } from "./MessageBubble";

interface ChatWindowProps {
    messages: { message: string; sender: "user" | "ai" }[];
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-gray-700 shadow-inner">
            {messages.map((msg, idx) => (
                <MessageBubble key={idx} message={msg.message} sender={msg.sender} />
            ))}
            <div ref={bottomRef} />
        </div>
    );
};
