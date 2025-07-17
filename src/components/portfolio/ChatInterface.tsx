import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Loader2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const generateResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes("who are you") || lowerQuery.includes("about you") || lowerQuery.includes("tell me about yourself")) {
    return `Hi! I'm Mohammed Hasnain, a passionate Full Stack Developer from Hyderabad, India.

I'm currently pursuing B.E. in Computer Science at Lords Institute of Engineering & Technology, with expected graduation in June 2026.

I have hands-on experience as a Full Stack Developer Intern at Accendia Technologies, where I'm building project management applications for Canadian clients using React and MongoDB. Previously, I worked as a Web Developer Intern at Ram Innovative Infotech, focusing on responsive design and performance optimization.

I'm particularly passionate about software engineering and web development, which you can see in my projects like JobReady (a resume feedback platform) and my skin disease detection system using deep learning.

🤖 **JobReady – Resume Feedback Platform**
- Built with React.js, Node.js, Express, and MongoDB
- <a href="https://jobready-ai-1.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo Available</a>
- Trained CNN model to classify 7 skin diseases using transfer learning

Currently, I'm working on expanding the JobReady platform with new features like interview preparation and job matching algorithms. I'm also exploring computer vision applications in healthcare and building more tools to solve real-world problems.

- Tailwind CSS

**Web Development & Machine Learning:**

I'm always learning new technologies and staying updated with the latest trends in web development! 🚀`;
  }
  
  if (lowerQuery.includes("projects") || lowerQuery.includes("working on")) {
    return `Here are my key projects that I'm most proud of:

🤖 **JobReady AI – AI-Powered Resume Feedback Platform**
- Built with React.js, Node.js, Express, MongoDB, and OpenAI API
- Provides GPT-based resume reviews for job seekers
- Increased user shortlisting success by ~25%
- Features structured feedback and semantic suggestions
- [Live Demo Available]

🔬 **Skin Disease Detection Using Deep Learning**
- Developed using TensorFlow, MobileNet, Python, Flask, and React
- Trained CNN model to classify 7 skin diseases using transfer learning
- Achieved 69% validation accuracy on HAM10000 dataset
- Targets early screening in remote and underserved regions

Currently, I'm working on expanding the JobReady AI platform with new features like interview preparation and job matching algorithms. I'm also exploring computer vision applications in healthcare and building more AI-powered tools to solve real-world problems.

I love combining my technical skills with creativity to build solutions that make a difference! 💡`;
  }
  
  if (lowerQuery.includes("skills") || lowerQuery.includes("technologies")) {
    return `Here are my technical skills and expertise:

**Programming Languages:**
- JavaScript (Advanced)
- Python (Advanced)

**Frontend Development:**
- React.js ⚛️
- Tailwind CSS
- HTML5 & CSS3
- Responsive Design

**Backend Development:**
- Node.js
- Express.js
- REST APIs
- WebSockets

**Databases:**
- MongoDB
- PostgreSQL  
- MySQL

**AI & Machine Learning:**
- TensorFlow
- MobileNet
- OpenAI API Integration
- Deep Learning
- Computer Vision

**Tools & Others:**
- Git & Version Control
- JWT Authentication
- Flask
- Figma (UI/UX Design)
- Render (Deployment)

**Soft Skills:**
- Leadership (President of Artigenz Club, TorqueTalk Organizer)
- Team Collaboration
- Problem Solving
- Event Management
- Public Speaking

I'm always learning new technologies and staying updated with the latest trends in AI and web development! 🚀`;
  }
  
  if (lowerQuery.includes("hobbies") || lowerQuery.includes("craziest") || lowerQuery.includes("fun")) {
    return `Great question! Here's what makes me tick outside of coding:

🏁 **Automotive Enthusiast:** I organized TorqueTalk - Telangana's BIGGEST autofest! Managing 5,000+ attendees, 15+ sponsors, and 30+ volunteers was definitely one of the craziest but most rewarding things I've done. The energy was incredible!

💻 **Hackathon Junkie:** I love the thrill of building something amazing under pressure. I've participated in multiple national hackathons including being a finalist at "Hack the Verse" and participating in "HackPix." There's nothing like the rush of coding for 48 hours straight!

🎯 **Leadership Adventures:** Being President of the Artigenz Club has been amazing - organizing tech events, mentoring juniors, and building a community of AI enthusiasts.

🚀 **Side Projects:** I'm always tinkering with new ideas - whether it's experimenting with the latest AI models or building quirky web apps that solve random problems I encounter.

🎮 **Tech Exploration:** I love exploring new technologies and frameworks. Sometimes I'll spend entire weekends learning something completely new just because it looks interesting!

The craziest part? I once stayed up for 72 hours straight during a hackathon, survived on nothing but coffee and determination, and still managed to build a working prototype! 😅

What about you? What's your idea of fun? 🎉`;
  }
  
  if (lowerQuery.includes("contact") || lowerQuery.includes("reach") || lowerQuery.includes("hire")) {
    return `I'd love to connect! Here are the best ways to reach me:

📧 **Email:** Mohdhasnain1544@gmail.com
- Best for detailed discussions, project proposals, or job opportunities

💼 **LinkedIn:** [Connect with me on LinkedIn]
- Great for professional networking and staying updated with my journey

💻 **GitHub:** [Check out my code]
- Browse my repositories, contribute to projects, or see what I'm currently building

🌐 **Portfolio:** [View my portfolio]
- See my projects in action with live demos and case studies

📍 **Location:** Hyderabad, Telangana, India
- Open to remote opportunities and local meetups

🚀 **Current Status:** Available for full-time opportunities after June 2026, open to freelance projects and internships now!

Whether you want to discuss a project, explore collaboration opportunities, or just chat about technology and AI, I'm always excited to connect with fellow developers and innovators!

Feel free to reach out - I usually respond within 24 hours! ⚡`;
  }
  
  // Default response for other queries
  return `Thanks for your question! I'm Mohammed Hasnain, a Full Stack Developer and AI enthusiast from Hyderabad, India.

I'd be happy to tell you more about my projects, skills, experience, or anything else you'd like to know. You can ask me about:

- My background and experience
- Technical projects I've built
- Skills and technologies I work with  
- My hobbies and interests
- How to get in touch

What would you like to know more about? 🚀`;
};

// Hook for typing effect
const useTypingEffect = (text: string, speed: number = 30) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) return;
    
    setIsTyping(true);
    setDisplayText("");
    
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isTyping };
};

// Typing indicator component
const TypingIndicator = () => (
  <div className="flex gap-1 items-center p-4">
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-portfolio-text-muted rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-portfolio-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-portfolio-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
    <span className="text-portfolio-text-muted text-sm ml-2">Mohammed is typing...</span>
  </div>
);

export const ChatInterface = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Array<{
    type: 'user' | 'assistant', 
    content: string,
    isLoading?: boolean,
    fullContent?: string
  }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const initialQuery = searchParams.get("query");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (initialQuery) {
      setIsLoading(true);
      setMessages([
        { type: 'user', content: initialQuery },
        { type: 'assistant', content: '', isLoading: true }
      ]);
      
      // Simulate API delay
      setTimeout(() => {
        const response = generateResponse(initialQuery);
        setMessages([
          { type: 'user', content: initialQuery },
          { type: 'assistant', content: response, fullContent: response }
        ]);
        setIsLoading(false);
      }, 1000 + Math.random() * 1000); // 1-2 seconds delay
    }
  }, [initialQuery]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && !isLoading) {
      const userMessage = newMessage.trim();
      setNewMessage("");
      setIsLoading(true);
      
      // Add user message immediately
      setMessages(prev => [
        ...prev,
        { type: 'user', content: userMessage },
        { type: 'assistant', content: '', isLoading: true }
      ]);
      
      // Simulate API delay
      setTimeout(() => {
        const response = generateResponse(userMessage);
        setMessages(prev => [
          ...prev.slice(0, -1), // Remove loading message
          { type: 'assistant', content: response, fullContent: response }
        ]);
        setIsLoading(false);
      }, 1000 + Math.random() * 1500); // 1-2.5 seconds delay
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-bg">
      {/* Header */}
      <header className="border-b border-portfolio-border bg-portfolio-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 hover:bg-portfolio-hover rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-portfolio-text" />
          </button>
          <div className="flex items-center gap-3">
            <img 
              src="/hasnain.jpg" 
              alt="Mohammed Hasnain"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="font-semibold text-portfolio-text">Mohammed Hasnain</h1>
              <p className="text-sm text-portfolio-text-muted">Portfolio Assistant</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="max-w-4xl mx-auto px-6 py-8 pb-24">
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div key={index} className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.type === 'assistant' && (
                <img 
                  src="/hasnain.jpg" 
                  alt="Mohammed Hasnain"
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-1"
                />
              )}
              <div className={`max-w-[70%] ${message.type === 'user' ? 'order-1' : ''}`}>
                <div className={`px-4 py-3 rounded-2xl transition-all duration-200 ${
                  message.type === 'user' 
                    ? 'bg-portfolio-accent text-white animate-scale-in' 
                    : 'bg-portfolio-card border border-portfolio-border animate-fade-in'
                }`}>
                  {message.isLoading ? (
                    <TypingIndicator />
                  ) : (
                    <TypewriterText 
                      text={message.content}
                      speed={message.type === 'assistant' ? 20 : 0}
                      className={`whitespace-pre-wrap ${
                        message.type === 'user' ? 'text-white' : 'text-portfolio-text'
                      }`}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="fixed bottom-0 left-0 right-0 bg-portfolio-bg/80 backdrop-blur-sm border-t border-portfolio-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-portfolio-card border border-portfolio-border rounded-full text-portfolio-text placeholder:text-portfolio-text-muted focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            />
            <button
              type="submit"
              disabled={isLoading || !newMessage.trim()}
              className="w-12 h-12 bg-portfolio-accent text-white rounded-full flex items-center justify-center hover:bg-portfolio-accent/90 transition-all duration-200 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-portfolio-accent"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Typewriter text component
const TypewriterText = ({ text, speed = 30, className = "" }: { 
  text: string, 
  speed?: number, 
  className?: string 
}) => {
  const { displayText, isTyping } = useTypingEffect(text, speed);
  
  return (
    <div className={className}>
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </div>
  );
};