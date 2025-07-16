import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ChatInput = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/chat?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full px-6 py-4 bg-portfolio-card border border-portfolio-border rounded-full text-portfolio-text placeholder:text-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent pr-12"
        />
        <button
          type="submit"
          disabled={!query.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-portfolio-accent text-white rounded-full flex items-center justify-center hover:bg-portfolio-accent/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};