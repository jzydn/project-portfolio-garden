import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectOne = () => {
  return (
    <div className="container mx-auto px-4 py-32 mt-16">
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
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
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
            <span className="px-3 py-1 text-sm rounded-full glass">ROBLOX</span>
            <span className="px-3 py-1 text-sm rounded-full glass">Game Development</span>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>I got tasked with creating custom systems, and stress testing them to make sure they are optimized for the public.</li>
            <li>I got tasked with performance optimization within Part Count or other.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectOne;