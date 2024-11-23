import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LoginModal } from "@/components/LoginModal";

const Navigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex-1 flex items-center gap-8">
          <Link to="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            Jay (vsc)
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex justify-start">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    <Link
                      to="/project-three"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Vita Extra</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Custom checkout systems and optimization
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button 
          variant="ghost" 
          className="ml-auto hover:bg-accent"
          onClick={() => setShowLoginModal(true)}
        >
          Login
        </Button>
      </div>
      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </nav>
  );
};

const ProjectThree = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      <div className="container mx-auto px-4 py-16 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/" className="inline-block mb-8 text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-6">Vita Extra</h1>
          <div className="aspect-video mb-8 rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/754df5a2-9f82-45e1-93f3-8c9ef5c7f0ee.png"
              alt="Vita Extra Project"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              At Vita Extra, I'm currently leading the development of custom checkout systems, replacing JSM and existing solutions with optimized Manual Checkouts and Self Checkouts. This project focuses on enhancing performance and user experience while maintaining robust security measures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Optimization</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Custom checkout system</li>
                  <li>Performance improvements</li>
                  <li>Resource optimization</li>
                  <li>Load time reduction</li>
                </ul>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Secure transaction handling</li>
                  <li>Data synchronization</li>
                  <li>API optimization</li>
                  <li>Real-time processing</li>
                </ul>
              </div>
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Systems Integration</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Custom checkout flows</li>
                  <li>Payment processing</li>
                  <li>Inventory management</li>
                  <li>Analytics integration</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 text-sm rounded-full glass">Optimization</span>
              <span className="px-3 py-1 text-sm rounded-full glass">Systems Architecture</span>
              <span className="px-3 py-1 text-sm rounded-full glass">Backend Development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectThree;