import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

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
                  to="/project-two"
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">Berkeley County</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Custom systems and optimizations
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

const ProjectTwo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 mt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/" className="inline-block mb-8 text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-6">Berkeley County</h1>
          <div className="aspect-video mb-8 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
              alt="Berkeley County"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              I worked within Berkeley County for 5 months, under Arcc and Aptable's Development Advisorment, which led me to be doing multiple things for them such as a Trello Car Spawner and optimizations around that, I was also led to starting the custom chassis before my departure as I left ROBLOX at that time.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 text-sm rounded-full glass">LuaU</span>
              <span className="px-3 py-1 text-sm rounded-full glass">Optimization</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectTwo;