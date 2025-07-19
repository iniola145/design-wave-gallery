import { useState } from 'react';
import ProjectDetailCarousel from './ProjectDetailCarousel'; 
import { flyers, logos } from '@/assets';
import graphics from '../assets/graphicsdesign.jpg';
import hero from '../assets/portfolio hero.png'
import tradmin from '../assets/tradmin.png';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description: "Modern e-commerce solution with React",
      tags: ["React", "Typescript", "Tailwind"],
      images: [
        `${tradmin}`,
      ],
      liveUrl: "http://tradmin.vercel.app/",
      githubUrl: "https://github.com/iniola145/tradmin"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      description: "Complete brand identity for any Company",
      tags: ["Branding", "Logo Design", "Style Guide"],
      images: logos,
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      description: "Creative portfolio with smooth animations",
      tags: ["React", "Tailwind", "Shadcn"],
      images: [
        `${hero}`,
      ],
      liveUrl: "https://portfolio2000.vercel.app/"
    },
    {
      id: 4,
      title: "Graphics Design",
      category: "design",
      image: `${graphics}`,
      description: "Custom flyers for ads, events, and promotions ",
      tags: ["Adobe", "Prototyping"],
      images: flyers,
    }
  ];

  // Add this function to handle project clicks
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Add this function to close the carousel
  const handleCloseCarousel = () => {
    setSelectedProject(null);
  };


  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'Graphic Design' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Our Work
        </h2>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-100 p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium">
                    View Details
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Add the carousel modal at the end, before closing the section */}
        {selectedProject && (
          <ProjectDetailCarousel
            project={selectedProject}
            onClose={handleCloseCarousel}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
