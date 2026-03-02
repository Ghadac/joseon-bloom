import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Mic, MicOff, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickPrompts = [
  "I have acne and oily skin",
  "Build me a routine",
  "What serum should I use?",
  "Explain Ginseng benefits",
];

// Local assistant responses (no backend needed)
function getLocalResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("acne") || lower.includes("oily")) {
    return "For acne-prone, oily skin, I recommend:\n\n**AM:** Clear Foam Cleanser → Hydra Toner → Shield Sun Fluid SPF50+\n\n**PM:** Clear Foam Cleanser → Active Serum (Ginseng + Vitamin C) → Matte Moisturizer\n\nThe salicylic acid in our cleanser helps unclog pores, while niacinamide in the moisturizer controls oil production.";
  }
  if (lower.includes("routine") || lower.includes("build")) {
    return "Let's build your routine! Here's our universal 3-step:\n\n1. **Cleanse** — Start with a gentle foam cleanser\n2. **Treat** — Apply a serum targeting your concern\n3. **Protect** — Lock in moisture + SPF during the day\n\nWould you like a routine for a specific skin concern?";
  }
  if (lower.includes("serum")) {
    return "Our serums are crafted with Hanbang ingredients:\n\n• **Glow Serum** — Propolis + Niacinamide for radiance\n• **Active Serum** — Ginseng + Vitamin C for energy\n• **Glow Deep Serum** — Rice + Alpha-Arbutin for tone\n• **Revive Eye Serum** — Ginseng + Retinal for eyes\n\nWhich skin concern would you like to target?";
  }
  if (lower.includes("ginseng")) {
    return "**Ginseng** is the crown jewel of Hanbang skincare 🌿\n\nUsed since the Joseon Dynasty by royal court physicians, it:\n• Boosts collagen production\n• Fights free radicals\n• Improves circulation for a healthy glow\n• Firms and revitalizes tired skin\n\nFind it in our Active Serum and Dynasty Cream.";
  }
  if (lower.includes("dry") || lower.includes("hydrat")) {
    return "For dry skin, hydration is key:\n\n**AM:** Radiance Cleanser → Plum Blossom Toner → Dynasty Cream → Relief Sun SPF50+\n\n**PM:** Radiance Cleanser → Glow Serum → Barrier Repair Cream\n\nThe ceramides and centella in our Barrier Repair Cream lock in moisture all night.";
  }
  return "I'm your Beauty of Joseon skincare assistant! ✨ I can help with:\n\n• Product recommendations\n• Building a skincare routine\n• Ingredient explanations\n• Skin concern guidance\n\nTry asking: *\"What's good for sensitive skin?\"* or *\"Build me a routine\"*";
}

export default function VoiceAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getLocalResponse(text);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  const toggleListening = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      sendMessage("Voice recognition is not supported in this browser.");
      return;
    }
    setIsListening((prev) => !prev);
    if (!isListening) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        sendMessage(transcript);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognition.start();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-foreground text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform ${open ? "hidden" : ""}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open virtual assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-4rem)] bg-background border border-border rounded-2xl shadow-soft flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-joseon-gold" />
                <div>
                  <p className="font-serif text-sm font-medium text-foreground">Joseon Assistant</p>
                  <p className="text-[10px] text-muted-foreground font-body">Skincare guidance & recommendations</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground p-1">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <Sparkles className="w-8 h-8 text-joseon-gold mx-auto mb-3 opacity-60" />
                  <p className="font-serif text-lg text-foreground mb-1">Hello!</p>
                  <p className="text-xs text-muted-foreground mb-4">Ask me anything about skincare</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {quickPrompts.map((p) => (
                      <button
                        key={p}
                        onClick={() => sendMessage(p)}
                        className="text-[11px] font-body px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-joseon-gold/30 transition-colors"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed font-body ${
                      msg.role === "user"
                        ? "bg-foreground text-primary-foreground rounded-br-md"
                        : "bg-card border border-border text-foreground rounded-bl-md"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {msg.content.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={j}>{part.slice(2, -2)}</strong>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-border bg-card">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleListening}
                  className={`p-2 rounded-full transition-colors ${
                    isListening ? "bg-destructive text-destructive-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  aria-label={isListening ? "Stop listening" : "Start voice input"}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                  placeholder="Ask about skincare..."
                  className="flex-1 bg-transparent text-xs font-body text-foreground placeholder:text-muted-foreground outline-none"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim()}
                  className="p-2 rounded-full bg-foreground text-primary-foreground disabled:opacity-40 transition-opacity"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
