import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <span className="text-xl font-bold">Jay (vsc)</span>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-end">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[400px] p-4">
                <Link
                  to="/project-one"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">JUMP Trampolining</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Custom scripted systems in LuaU
                  </p>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </nav>
);

const ProjectOne = () => {
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
          <h1 className="text-4xl font-bold mb-6">JUMP Trampolining</h1>
          <div className="aspect-video mb-8 rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/5f304e1f-0948-47e2-a89e-eceffe65b4ad.png"
              alt="JUMP Trampolining"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              JUMP Trampolining was a game on ROBLOX which was very successful at the time it was active, it was a very unique project which I have now parted from.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 text-sm rounded-full glass">LuaU</span>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>I got tasked with creating custom systems, and stress testing them to make sure they are optimized for the public.</li>
              <li>I got tasked with performance optimization within Part Count or other.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectOne;
