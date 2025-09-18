"use client"
import React from "react";

interface MessageProps {
    message: string;
    sender: "user" | "ai";
}

export const MessageBubble: React.FC<MessageProps> = ({ message, sender }) => {
    return (
        <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
            <div
                className={`rounded-lg px-4 py-2 max-w-xs break-words shadow text-sm font-medium ${sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900"
                    }`}
            >
                {message}
            </div>
        </div>
    );
};