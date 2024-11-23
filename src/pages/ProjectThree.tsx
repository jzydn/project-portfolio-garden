import { motion } from "framer-motion";

const ProjectThree = () => {
  return (
    <div className="container mx-auto px-4 py-32 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Project Three</h1>
        <div className="aspect-video mb-8 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
            alt="Project Three"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-4">
            Enterprise software solution with cloud integration.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 text-sm rounded-full glass">Enterprise</span>
            <span className="px-3 py-1 text-sm rounded-full glass">Software</span>
            <span className="px-3 py-1 text-sm rounded-full glass">Cloud</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectThree;