import { motion } from "motion/react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export function RadicalFooter() {
  return (
    <footer className="relative bg-white border-t border-gray-200">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
            style={{
              left: `${(i * 3.33)}%`,
              top: "-20px",
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">Helllo.ai</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Transforming business communication with AI that never sleeps, speaks every language, and converts every opportunity.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Product Links */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h4 className="text-lg font-semibold text-gray-900">Product</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                "Features",
                "Integrations", 
                "API Documentation",
                "Pricing",
                "Security"
              ].map((link, index) => (
                <motion.div key={link}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-cyan-600 transition-colors relative group inline-block text-sm sm:text-base"
                  >
                    {link}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Company Links */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h4 className="text-lg font-semibold text-gray-900">Company</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                "About Us",
                "Careers",
                "Blog",
                "Press Kit",
                "Contact"
              ].map((link, index) => (
                <motion.div key={link}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-cyan-600 transition-colors relative group inline-block text-sm sm:text-base"
                  >
                    {link}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-lg font-semibold text-gray-900">Stay Updated</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Get the latest AI communication insights and product updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm sm:text-base"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg text-sm sm:text-base">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <Separator className="my-8 sm:my-12 bg-gray-200" />
        
        {/* Bottom Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6"
        >
          <div className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © 2025 Helllo.ai. All rights reserved. Built with ❤️ for the future of communication.
          </div>
          <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm flex-wrap justify-center">
            {[
              "Privacy Policy",
              "Terms of Service", 
              "Cookie Policy"
            ].map((link, index) => (
              <a 
                key={link}
                href="#" 
                className="text-gray-500 hover:text-cyan-600 transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}