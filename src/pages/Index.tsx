import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Code, Server, Database, Terminal } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button"; 
import { useState } from "react"; 
import { LoginModal } from "@/components/LoginModal";

const projects = [
  {
    id: 1,
    title: "JUMP Trampolining",
    description: "I worked within the Backend of JUMP Trampolining",
    image: "/lovable-uploads/acc10d5f-b384-4238-ba23-a542938e5c5c.png",
    tags: ["LuaU", "UI/UX Design"],
    path: "/project-one"
  },
  {
    id: 2,
    title: "Berkeley County",
    description: "I worked within the backend and did UI via Figma and Adobe",
    image: "/lovable-uploads/754df5a2-9f82-45e1-93f3-8c9ef5c7f0ee.png",
    tags: ["LuaU", "Optimization", "UI/UX Design"],
    path: "/project-two"
  },
  {
    id: 3,
    title: "Vita Extra",
    description: "Implementing custom checkout systems and optimizing performance",
    image: "/lovable-uploads/1e4cb9a9-f3c3-4739-bf8e-0f0889e2d763.png",
    tags: ["LuaU", "UI/UX Design"],
    path: "/project-three"
  },
];

const Navigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false); 

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex-1 flex items-center gap-8">
          <span className="text-xl font-bold">Jay (vsc)</span>
          <NavigationMenu>
            <NavigationMenuList className="flex justify-start">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-4">
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        to={project.path}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{project.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {project.description}
                        </p>
                      </Link>
                    ))}
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

const Index = () => (
  <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
    <Navigation />
    <header className="container mx-auto px-4 py-32 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full glass">
          Jay (vsc)
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          BSc in Computer Science within the UK
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          👋 Hey there, I'm Jay. I'm a Software Engineer based within the United Kingdom. I specialize within JS and CSS, HTML. UI/UIX Design using Figma and Adobe products. I also know LuaU and work within many frameworks such as Roblox-TS.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Code className="w-8 h-8" />
              </TooltipTrigger>
              <TooltipContent>HTML/CSS</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Terminal className="w-8 h-8" />
              </TooltipTrigger>
              <TooltipContent>Lua</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Server className="w-8 h-8" />
              </TooltipTrigger>
              <TooltipContent>Node.js</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Database className="w-8 h-8" />
              </TooltipTrigger>
              <TooltipContent>Docker</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </motion.div>
    </header>
    <main className="container mx-auto px-4 py-12 mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <Link to={project.path} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="aspect-[4/3] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full glass"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </main>
    <footer className="container mx-auto px-4 py-12">
      <div className="text-center">
        <p className="text-muted-foreground">
          Made with 💖 by Jay
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
