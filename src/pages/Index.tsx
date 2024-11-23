import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A beautiful web application",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Mobile-first design system",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Design", "System", "Mobile"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Enterprise software solution",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Enterprise", "Software", "Cloud"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full glass">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Creating digital experiences that matter
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            I'm a developer passionate about building beautiful and functional web applications
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={project.id}>
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
                    className="rounded-xl"
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
};

export default Index;