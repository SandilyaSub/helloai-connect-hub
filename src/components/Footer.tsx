import { motion } from "motion/react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">H</span>
              </div>
              <span className="text-xl font-bold">Helllo.ai</span>
            </div>
            <p className="text-muted-foreground">
              Transform your business communication with AI-powered phone agents that work 24/7.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-muted-foreground">
              <div><a href="#features" className="hover:text-foreground transition-colors">Features</a></div>
              <div><a href="#integrations" className="hover:text-foreground transition-colors">Integrations</a></div>
              <div><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">API Documentation</a></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-muted-foreground">
              <div><a href="#" className="hover:text-foreground transition-colors">About Us</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Careers</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Blog</a></div>
              <div><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-muted-foreground">
              <div><a href="#" className="hover:text-foreground transition-colors">Help Center</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Community</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Status</a></div>
              <div><a href="#" className="hover:text-foreground transition-colors">Security</a></div>
            </div>
          </motion.div>
        </div>
        
        <Separator className="my-8" />
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-muted-foreground text-sm">
            © 2025 Helllo.ai. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}