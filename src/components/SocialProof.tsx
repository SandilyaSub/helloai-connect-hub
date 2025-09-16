import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    content: "Helllo.ai transformed our customer service. We've seen a 300% increase in lead qualification efficiency.",
    rating: 5,
    company: "TechStart"
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    content: "The 24/7 availability has been a game-changer. Our international customers love the multilingual support.",
    rating: 5,
    company: "Global Ventures"
  },
  {
    name: "Emily Rodriguez",
    role: "Sales Director",
    content: "Appointment booking integration saved us countless hours. The AI understands context remarkably well.",
    rating: 5,
    company: "SalesForce Pro"
  }
];

const stats = [
  { value: "500+", label: "Active Businesses", subtext: "Trust our platform" },
  { value: "1M+", label: "Calls Handled", subtext: "Monthly volume" },
  { value: "98%", label: "Customer Satisfaction", subtext: "Average rating" },
  { value: "45%", label: "Cost Reduction", subtext: "vs. human agents" }
];

export function SocialProof() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            ⭐ Trusted by Businesses
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Hundreds of Satisfied Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See why businesses choose Helllo.ai for their customer communication needs.
          </p>
        </motion.div>
        
        {/* Stats */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.subtext}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="relative">
                      <Quote className="h-8 w-8 text-muted-foreground/20 absolute -top-2 -left-2" />
                      <p className="text-muted-foreground relative z-10 pl-6">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-medium">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <Badge variant="outline" className="text-xs mt-1">{testimonial.company}</Badge>
                      </div>
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