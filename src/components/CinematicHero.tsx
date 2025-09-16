import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Play, Phone, MessageSquare, Sparkles } from "lucide-react";

export function CinematicHero() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Hello! I'm your AI assistant. How can I help you today?",
    "I can help you book an appointment. What time works best?",
    "Perfect! I've scheduled your appointment for 3 PM tomorrow.",
    "Is there anything else I can assist you with?"
  ];

  useEffect(() => {
    if (isCallActive) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isCallActive, messages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 backdrop-blur-sm rounded-full border border-cyan-200"
            >
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">Next-Gen AI Phone Agent</span>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Your Business
                <br />
                <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Never Sleeps
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-lg sm:text-xl text-gray-600 max-w-lg lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
            >
              Experience the future of customer communication. Our AI doesn't just answer calls – it understands, qualifies, and converts in real-time.
            </motion.p>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-xl shadow-purple-500/25 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                  onClick={() => setIsCallActive(true)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Experience Live Demo
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto bg-white/80"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Magic
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Interactive Phone Interface */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Mockup */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-100/90 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl">
                <div className="p-4 sm:p-6 h-full flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>
                  
                  {/* Call Interface */}
                  <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                    <motion.div
                      animate={{ scale: isCallActive ? [1, 1.1, 1] : 1 }}
                      transition={{ duration: 1, repeat: isCallActive ? Infinity : 0 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </motion.div>
                    
                    <div className="text-center">
                      <h3 className="text-gray-800 font-semibold text-lg mb-1">
                        {isCallActive ? "AI Assistant Active" : "Helllo.ai"}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {isCallActive ? "Live Conversation" : "Tap to experience"}
                      </p>
                    </div>
                    
                    {/* Live Message Display */}
                    {isCallActive && (
                      <motion.div
                        key={currentMessage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-cyan-50 to-purple-50 backdrop-blur-sm rounded-lg p-3 max-w-56 border border-cyan-200"
                      >
                        <div className="flex items-start gap-2">
                          <MessageSquare className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-sm">{messages[currentMessage]}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-red-100 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-200 hover:bg-red-200 transition-colors"
                      onClick={() => setIsCallActive(false)}
                    >
                      <Phone className="w-5 h-5 text-red-600" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gray-100 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white/90 backdrop-blur-xl rounded-lg p-3 border border-cyan-200 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-cyan-600 font-bold text-lg">24/7</div>
                  <div className="text-gray-500 text-xs">Always On</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white/90 backdrop-blur-xl rounded-lg p-3 border border-purple-200 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-purple-600 font-bold text-lg">50+</div>
                  <div className="text-gray-500 text-xs">Languages</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}