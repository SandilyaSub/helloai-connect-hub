import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary to-blue-600 border-0 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Transform Your Customer Communication?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Join hundreds of businesses that have revolutionized their customer service with Helllo.ai. Start your free trial today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button size="lg" variant="secondary" className="group">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-8 pt-8 opacity-80">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">No Credit Card Required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">14-Day Free Trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Setup in Minutes</span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Contact Options */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Talk to Sales</h3>
              <p className="text-muted-foreground mb-4">
                Get a personalized demo and discuss your specific needs with our team.
              </p>
              <Button variant="outline" className="w-full">
                Schedule Call
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Chat with Support</h3>
              <p className="text-muted-foreground mb-4">
                Have questions? Our support team is here to help you get started.
              </p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}