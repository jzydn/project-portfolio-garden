import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Code, Server, Database, Terminal } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
  {
    id: 1,
    title: "JUMP Trampolining",
    description: "ROBLOX game with custom scripted systems in LuaU",
    image: "/lovable-uploads/acc10d5f-b384-4238-ba23-a542938e5c5c.png",
    tags: ["LuaU"],
    path: "/project-one"
  },
  {
    id: 2,
    title: "Berkeley County",
    description: "Custom systems and optimizations for Berkeley County",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["LuaU", "Optimization"],
    path: "/project-two"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Enterprise software solution",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    tags: ["Enterprise", "Software", "Cloud"],
    path: "/project-three"
  },
];

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
  </nav>
);

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
            👋 Hey there, I'm Jay. I'm a Software Engineer based within the United Kingdom. I specialize within JS and CSS, HTML. LuaU within many frameworks such as Roblox-TS.
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
              <Tooltip>
                <TooltipTrigger>
                  <Terminal className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent>Linux</TooltipContent>
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
            Let's work together.{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-foreground hover:opacity-80 transition-opacity"
            >
              Get in touch
            </a>
          </p>
        </div>
      </footer>
  </div>
);

export default Index;
