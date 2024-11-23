import { motion } from "framer-motion";

const ProjectOne = () => {
  return (
    <div className="container mx-auto px-4 py-32 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Project One</h1>
        <div className="aspect-video mb-8 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
            alt="Project One"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-4">
            A beautiful web application showcasing modern design principles and responsive layouts.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 text-sm rounded-full glass">React</span>
            <span className="px-3 py-1 text-sm rounded-full glass">TypeScript</span>
            <span className="px-3 py-1 text-sm rounded-full glass">Tailwind</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectOne;