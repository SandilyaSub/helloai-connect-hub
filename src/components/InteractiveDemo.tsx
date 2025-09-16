import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  User, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Clock,
  Zap,
  Play
} from "lucide-react";

interface ConversationStep {
  speaker: "user" | "ai";
  message: string;
  action?: string;
  delay?: number;
}

const demoScenarios = [
  {
    title: "Doctor Appointment",
    icon: Calendar,
    color: "from-emerald-500 to-teal-600",
    conversation: [
      { speaker: "ai", message: "Hello! Thank you for calling City Medical Center. How can I help you today?" },
      { speaker: "user", message: "Hi, I'd like to schedule an appointment with Dr. Smith." },
      { speaker: "ai", message: "Of course! Dr. Smith has availability this week. What type of appointment do you need?" },
      { speaker: "user", message: "I need a general consultation for some persistent headaches." },
      { speaker: "ai", message: "I understand. Dr. Smith has openings on Thursday at 2 PM or Friday at 10 AM. Which works better for you?" },
      { speaker: "user", message: "Friday at 10 AM would be perfect." },
      { speaker: "ai", message: "Excellent! I've booked your consultation with Dr. Smith for Friday at 10 AM. You'll receive a confirmation text shortly.", action: "Appointment confirmed!" }
    ]
  },
  {
    title: "Lead Qualification",
    icon: User,
    color: "from-blue-500 to-purple-600",
    conversation: [
      { speaker: "ai", message: "Thank you for calling TechSolutions! I'm here to help. What can I do for you?" },
      { speaker: "user", message: "I'm interested in your software solutions for my business." },
      { speaker: "ai", message: "That's wonderful! Can you tell me about your business and what challenges you're facing?" },
      { speaker: "user", message: "We're a 50-person company struggling with project management." },
      { speaker: "ai", message: "I understand. Our enterprise solution could be perfect for you. Would you like me to schedule a demo with our specialist?", action: "Qualified lead!" }
    ]
  },
  {
    title: "Restaurant Booking",
    icon: MessageSquare,
    color: "from-orange-500 to-red-600",
    conversation: [
      { speaker: "ai", message: "Hello! Welcome to Mario's Italian Restaurant. How can I help you today?" },
      { speaker: "user", message: "Hi, I'd like to make a reservation for tonight." },
      { speaker: "ai", message: "Perfect! How many guests will be joining you?" },
      { speaker: "user", message: "4 people please." },
      { speaker: "ai", message: "Great! What time would you prefer? We have availability at 7 PM and 8:30 PM." },
      { speaker: "user", message: "7 PM sounds perfect." },
      { speaker: "ai", message: "Excellent! I've booked a table for 4 at 7 PM tonight. Can I get your name and phone number?", action: "Booking confirmed!" }
    ]
  }
];

export function InteractiveDemo() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState<ConversationStep[]>([]);

  const currentScenario = demoScenarios[activeScenario];

  useEffect(() => {
    if (isPlaying && currentStep < currentScenario.conversation.length) {
      const timer = setTimeout(() => {
        const newMessage = currentScenario.conversation[currentStep];
        setDisplayedMessages(prev => [...prev, newMessage]);
        setCurrentStep(prev => prev + 1);
      }, 2000);

      return () => clearTimeout(timer);
    } else if (currentStep >= currentScenario.conversation.length) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentStep, currentScenario.conversation]);

  const startDemo = (scenarioIndex: number) => {
    setActiveScenario(scenarioIndex);
    setCurrentStep(0);
    setDisplayedMessages([]);
    setIsPlaying(true);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setDisplayedMessages([]);
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            See It In
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent"> Action</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just read about it – experience how our AI handles real conversations across different industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Scenario Selector */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Choose a Scenario</h3>
            {demoScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 border-2 ${
                    activeScenario === index 
                      ? 'border-cyan-500 bg-cyan-50/80 shadow-lg' 
                      : 'border-gray-200 bg-white/80 hover:bg-gray-50/80 hover:border-gray-300'
                  } backdrop-blur-sm`}
                  onClick={() => startDemo(index)}
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${scenario.color} shadow-md`}>
                        <scenario.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{scenario.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {index === 0 && "Doctor appointments"}
                          {index === 1 && "Sales qualification"}
                          {index === 2 && "Restaurant reservations"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Stats */}
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span className="text-xs sm:text-sm">Average response: &lt;1 second</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Globe className="w-4 h-4 text-purple-600" />
                <span className="text-xs sm:text-sm">50+ languages supported</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Zap className="w-4 h-4 text-yellow-600" />
                <span className="text-xs sm:text-sm">99.9% uptime guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl h-80 sm:h-96">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Chat Header */}
                <div className={`p-3 sm:p-4 bg-gradient-to-r ${currentScenario.color} rounded-t-lg`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                      <span className="text-white font-semibold text-sm sm:text-base">{currentScenario.title}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={resetDemo}
                      className="text-white hover:bg-white/20 text-xs sm:text-sm px-2 sm:px-3"
                    >
                      Reset
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50 to-white">
                  <AnimatePresence>
                    {displayedMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`flex ${msg.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-xs sm:max-w-sm lg:max-w-md px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-md ${
                          msg.speaker === 'user' 
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                            : 'bg-white text-gray-800 border border-gray-200'
                        }`}>
                          <p className="text-xs sm:text-sm">{msg.message}</p>
                          {msg.action && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 }}
                              className="flex items-center gap-2 mt-2 text-green-600"
                            >
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-xs font-semibold">{msg.action}</span>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {isPlaying && currentStep < currentScenario.conversation.length && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 shadow-md">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Action Button */}
                <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
                  {!isPlaying && displayedMessages.length === 0 ? (
                    <Button
                      onClick={() => startDemo(activeScenario)}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-sm sm:text-base"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Demo
                    </Button>
                  ) : (
                    <div className="text-center text-gray-500 text-xs sm:text-sm">
                      {isPlaying ? "Demo in progress..." : "Demo completed"}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
          >
            Try Your Own Scenario
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}