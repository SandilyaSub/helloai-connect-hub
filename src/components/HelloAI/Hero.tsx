import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-slide-up">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground/80">
            Next Generation AI Platform
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up text-shadow" style={{ animationDelay: '0.2s' }}>
          <span className="gradient-text">Hello</span>
          <span className="text-foreground">AI</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Revolutionizing the future with intelligent AI solutions that adapt, learn, and scale with your business needs.
        </p>

        <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Transform your workflow with cutting-edge artificial intelligence technology designed for the modern world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="btn-glow group px-8 py-4 text-lg font-semibold">
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="glass border-white/20 hover:bg-white/10 px-8 py-4 text-lg font-semibold group">
            <Zap className="mr-2 w-5 h-5 group-hover:text-accent transition-colors" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold gradient-text-primary mb-2">10M+</div>
            <div className="text-muted-foreground">AI Interactions</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold gradient-text-primary mb-2">500K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold gradient-text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;