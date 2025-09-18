"use client"
import React, { useState } from "react";

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
    const [input, setInput] = useState("");

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSend} className="flex gap-2 p-2 border-t bg-white">
            <input
                className="flex-1 rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={disabled}
                autoFocus
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                disabled={disabled || !input.trim()}
            >
                Send
            </button>
        </form>
    );
};