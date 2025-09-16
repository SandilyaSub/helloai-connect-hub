import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Zap, Shield, Globe } from "lucide-react";

export function ImmersiveCTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      {/* Floating Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/90 backdrop-blur-2xl border border-gray-200 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-6 sm:p-8 lg:p-12 space-y-6 lg:space-y-8">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 backdrop-blur-sm rounded-full border border-cyan-200 mb-4 sm:mb-6">
                      <Sparkles className="w-4 h-4 text-cyan-600" />
                      <span className="text-gray-700 font-medium text-sm sm:text-base">Ready to Transform?</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                      Your Business Deserves
                      <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent"> The Future</span>
                    </h2>
                    
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                      Join thousands of businesses that have revolutionized their customer communication. Start your journey today.
                    </p>
                  </motion.div>
                  
                  {/* Features List */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-3 sm:space-y-4"
                  >
                    {[
                      { icon: Zap, text: "Setup in under 5 minutes" },
                      { icon: Shield, text: "Enterprise-grade security" },
                      { icon: Globe, text: "24/7 global support" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="group flex-1"
                    >
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-xl shadow-purple-500/25 px-6 sm:px-8 py-3 sm:py-4 w-full text-sm sm:text-base"
                      >
                        Start Free Trial
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </motion.div>
                      </Button>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 w-full bg-white/80 text-sm sm:text-base"
                      >
                        Book Demo Call
                      </Button>
                    </motion.div>
                  </motion.div>
                  
                  {/* Trust Indicators */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-6 text-gray-500 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>No Credit Card Required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>14-Day Free Trial</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Visual Side */}
                <div className="relative p-6 sm:p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
                  <motion.div
                    style={{ rotate }}
                    className="relative"
                  >
                    {/* Central Hub */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center relative z-10 shadow-xl">
                      <span className="text-white font-bold text-lg sm:text-2xl">AI</span>
                    </div>
                    
                    {/* Orbiting Elements */}
                    {[
                      { icon: "📞", angle: 0, radius: 60 },
                      { icon: "🌍", angle: 72, radius: 60 },
                      { icon: "⚡", angle: 144, radius: 60 },
                      { icon: "🛡️", angle: 216, radius: 60 },
                      { icon: "🎯", angle: 288, radius: 60 }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 shadow-lg"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-${item.radius}px)`,
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.5
                        }}
                      >
                        <span className="text-sm sm:text-lg">{item.icon}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                        <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
                      </linearGradient>
                    </defs>
                    {[...Array(5)].map((_, i) => (
                      <motion.circle
                        key={i}
                        cx="50%"
                        cy="50%"
                        r={40 + i * 15}
                        fill="none"
                        stroke="url(#connectionGradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 2, delay: i * 0.2 }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}