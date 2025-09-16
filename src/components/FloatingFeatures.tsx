import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { 
  Zap, 
  Globe, 
  Brain, 
  Shield, 
  Clock, 
  Users, 
  MessageSquare, 
  Calendar,
  BarChart3,
  Settings,
  Database,
  Phone
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call. Our AI works tirelessly around the clock.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description: "Communicate naturally in any language your customers speak.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Advanced understanding that gets smarter with every conversation.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Automatically qualify and score leads based on conversation context.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Seamlessly book appointments with calendar integration.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel",
    description: "Continue conversations across phone, WhatsApp, and more.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into every call with automated categorization.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Settings,
    title: "Custom Integration",
    description: "Connect with your existing tools via APIs and webhooks.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Phone,
    title: "Human Handoff",
    description: "Seamless transfer to human agents when needed.",
    color: "from-green-500 to-emerald-500"
  }
];

export function FloatingFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Beyond
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent"> Expectations</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature designed to transform how your business communicates with customers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <Card className="bg-white/80 backdrop-blur-xl border border-gray-200 h-full group cursor-pointer overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    scale: hoveredFeature === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <CardContent className="p-4 sm:p-6 relative z-10 h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} w-fit shadow-md`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Interactive Element */}
                  <motion.div
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className="flex items-center text-cyan-600 text-sm font-medium">
                      <span>Learn more</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: hoveredFeature === index ? [0, 5, 0] : 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}