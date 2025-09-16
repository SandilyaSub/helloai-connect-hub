import { Brain, Shield, Zap, Users, Lightbulb, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning algorithms that continuously learn and improve performance.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process complex tasks in milliseconds with our optimized infrastructure and edge computing.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC2, GDPR, and HIPAA standards.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration with your existing workflows and team collaboration tools.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Lightbulb,
      title: "Smart Insights",
      description: "AI-powered analytics that provide actionable insights and predictive recommendations.",
      gradient: "from-accent to-secondary"
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "From startup to enterprise, our platform scales with your business needs automatically.",
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the capabilities that make HelloAI the preferred choice for businesses worldwide
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 group hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of companies already using HelloAI to transform their operations.
            </p>
            <button className="btn-glow bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;