import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cpu, PcCase, Trophy, Wrench, ChevronRight, Gamepad } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-4 px-4">
        <div className="container mx-auto bg-background/60 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 border border-border/40 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center px-4">
            <div className="text-2xl font-bold gradient-text">PowerPlay PCs</div>
            <div className="flex-1" />
            <div className="hidden md:flex gap-6">
              <a href="#builds" className="text-sm hover:text-primary transition-colors">Our Builds</a>
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-10" />
        <div className="container relative">
          <div className="flex flex-col items-center text-center animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Custom Gaming PCs<br />Built For Victory
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-8">
              Professional custom PC building service with premium components
              and expert craftsmanship for the ultimate gaming experience.
            </p>
            <Button size="lg" className="group">
              Build Your Dream PC
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-10 w-10 mb-4 text-primary" />,
                title: "Premium Components",
                description: "Only the highest quality, tested and verified parts"
              },
              {
                icon: <Wrench className="h-10 w-10 mb-4 text-primary" />,
                title: "Expert Assembly",
                description: "Built by certified technicians with attention to detail"
              },
              {
                icon: <Trophy className="h-10 w-10 mb-4 text-primary" />,
                title: "Performance Guaranteed",
                description: "Thoroughly tested and optimized for maximum performance"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-background/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-colors">
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Builds Section */}
      <section id="builds" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Builds</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Pro",
                price: "$999",
                specs: ["RTX 3060", "Ryzen 5 5600X", "16GB RAM", "1TB NVMe SSD"]
              },
              {
                name: "Elite Gaming",
                price: "$1,999",
                specs: ["RTX 4070", "Ryzen 7 7700X", "32GB RAM", "2TB NVMe SSD"]
              },
              {
                name: "Ultimate",
                price: "$3,499",
                specs: ["RTX 4090", "Ryzen 9 7950X", "64GB RAM", "4TB NVMe SSD"]
              }
            ].map((build, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center">
                  <PcCase className="h-20 w-20 text-primary/50 group-hover:text-primary transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{build.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{build.price}</p>
                  <ul className="space-y-2">
                    {build.specs.map((spec, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <Gamepad className="h-4 w-4 mr-2 text-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Configure & Buy</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container max-w-md">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground">
              Get in touch with us to discuss your dream gaming PC build
            </p>
          </div>
          <Card className="p-6">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-md bg-background border border-border/40"
              />
              <textarea
                placeholder="Tell us about your dream build"
                className="w-full p-3 rounded-md bg-background border border-border/40 min-h-[100px]"
              />
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;