import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { findAnswer } from "../lib/knowledge-base";

type Message = { id: number; from: "bot" | "user"; text: string };

const STARTER_PROMPTS = [
  "When is the event?",
  "How do I register?",
  "What does a stand cost?",
  "Do I need a visa?",
];

const GREETING =
  "Hi, I'm the ALITEC Africa assistant. Ask me about dates, registration, exhibiting, sponsorship or travel — I'll do my best to help.";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: "bot", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: nextId.current++, from: "user", text: trimmed };
    const botMsg: Message = { id: nextId.current++, from: "bot", text: findAnswer(trimmed) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    ask(input);
  }

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="ALITEC Africa assistant chat"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          className="fixed bottom-24 left-6 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col rounded-sm border border-navy/15 bg-paper shadow-2xl"
        >
          <div className="flex items-center justify-between rounded-t-sm bg-navy px-4 py-3">
            <span className="font-body text-sm font-medium text-paper">ALITEC Africa Assistant</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-sm p-1 text-paper/80 hover:text-paper"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[85%] rounded-sm px-3 py-2 font-body text-sm leading-relaxed ${
                  m.from === "bot"
                    ? "bg-cream text-ink"
                    : "ml-auto bg-navy text-paper"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => ask(prompt)}
                  className="rounded-full border border-navy/25 px-3 py-1 font-body text-xs text-navy-dark hover:border-navy hover:bg-cream"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-navy/10 p-3"
          >
            <label htmlFor="chat-input" className="sr-only">
              Type your question
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 rounded-sm border border-navy/25 bg-paper px-3 py-2 font-body text-sm text-ink outline-none focus:border-navy"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="rounded-sm bg-gold p-2 text-ink transition-colors hover:bg-gold-dark hover:text-paper"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-gold px-4 py-3 font-body text-sm font-medium text-ink shadow-lg transition-colors hover:bg-gold-dark hover:text-paper"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Ask ALITEC
      </button>
    </>
  );
}
