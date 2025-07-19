
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      category: "Web Development",
      items: [
        { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 80, color: "from-blue-600 to-blue-800" },
        { name: "Tailwind CSS", level: 98, color: "from-teal-500 to-blue-600" }
      ]
    },
    {
      category: "Design",
      items: [
        { name: "Graphics Design", level: 92, color: "from-purple-500 to-pink-500" },
        { name: "Adobe Photoshop", level: 95, color: "from-red-500 to-orange-500" },
        { name: "Branding", level: 87, color: "from-indigo-500 to-purple-600" }
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, groupIndex) => (
            <div key={skillGroup.category} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
                {skillGroup.category}
              </h3>
              
              {skillGroup.items.map((skill, index) => (
                <div
                  key={skill.name}
                  className="space-y-2"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                        hoveredSkill === skill.name ? 'scale-105' : ''
                      }`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${groupIndex * 200 + index * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
