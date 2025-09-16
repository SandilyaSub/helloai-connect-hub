import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Zap, Settings, Database } from "lucide-react";

const integrations = [
  { name: "Zapier", description: "Connect with 5000+ apps", category: "Automation" },
  { name: "Salesforce", description: "CRM Integration", category: "CRM" },
  { name: "HubSpot", description: "Marketing & Sales", category: "CRM" },
  { name: "Google Calendar", description: "Appointment Scheduling", category: "Calendar" },
  { name: "Outlook", description: "Email & Calendar", category: "Calendar" },
  { name: "WhatsApp Business", description: "Messaging Platform", category: "Communication" },
  { name: "Slack", description: "Team Communication", category: "Communication" },
  { name: "Webhook APIs", description: "Custom Integrations", category: "Custom" }
];

export function Integrations() {
  return (
    <section id="integrations" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge variant="secondary" className="mb-4">
                🔗 Seamless Integrations
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connect with Your Existing Tools
              </h2>
              <p className="text-xl text-muted-foreground">
                Helllo.ai integrates seamlessly with your favorite tools and platforms. Set up in minutes, not hours.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Zapier Integration</h3>
                  <p className="text-muted-foreground">Connect with 5000+ apps through Zapier's powerful automation platform.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Custom APIs</h3>
                  <p className="text-muted-foreground">Build custom integrations with our comprehensive API documentation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">MCP Protocol</h3>
                  <p className="text-muted-foreground">Advanced model context protocol for sophisticated AI interactions.</p>
                </div>
              </div>
            </div>
            
            <Button className="group">
              View All Integrations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU3OTMzNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Integration dashboard"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {integrations.slice(0, 4).map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg mx-auto mb-2"></div>
                      <div className="font-medium text-sm">{integration.name}</div>
                      <div className="text-xs text-muted-foreground">{integration.category}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}