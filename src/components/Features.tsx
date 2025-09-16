import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  Clock, 
  Globe, 
  BarChart3, 
  Users, 
  Calendar, 
  MessageSquare, 
  Phone, 
  Database,
  Zap,
  Settings
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call again. Our AI agent works around the clock to handle your business calls.",
    badge: "Always On"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Communicate with customers in 50+ languages with natural conversation flow.",
    badge: "50+ Languages"
  },
  {
    icon: BarChart3,
    title: "Call Analysis & Categorization",
    description: "Automatically analyze and categorize calls with detailed insights and reporting.",
    badge: "Smart Analytics"
  },
  {
    icon: Users,
    title: "Lead Qualification",
    description: "Intelligent lead scoring and qualification based on conversation context.",
    badge: "AI Powered"
  },
  {
    icon: Database,
    title: "Lead Management",
    description: "Comprehensive lead tracking and management with automated follow-ups.",
    badge: "CRM Ready"
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Seamless inline appointment booking integrated with your calendar systems.",
    badge: "Instant Booking"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "Continue conversations on WhatsApp with context preservation.",
    badge: "Multi-Channel"
  },
  {
    icon: Phone,
    title: "Human Transfer",
    description: "Smooth handoff to human agents when needed with full context transfer.",
    badge: "Hybrid Support"
  },
  {
    icon: Zap,
    title: "API Integrations",
    description: "Connect with your existing tools via custom APIs, Zapier, and MCP.",
    badge: "Extensible"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            ✨ Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Scale Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive AI phone agent solution handles every aspect of customer communication, from initial contact to conversion.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}