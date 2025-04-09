import Link from "next/link"
import Image from "next/image"

// Project data based on Aaryan's resume
const projects = [
  {
    id: "europa-lander",
    title: "Europa Habitat and Composition Observation (ECHO) Lander Mission",
    letter: "E",
    color: "bg-blue-700",
    description:
      "ADCS Lead for a lander mission to Europa, designing attitude control systems for operation on Europa's icy surface.",
    emoji: "🛰️",
    category: "Aerospace & Space Systems Engineering",
    image: "/images/europa-lander.png",
    order: 1, // A
  },
  {
    id: "jupiter-uav",
    title: "UAV Wing for Jupiter Flight",
    letter: "J",
    color: "bg-gradient-to-br from-orange-500 via-red-500 to-purple-600",
    description: "Designed a high-speed UAV capable of atmospheric flight 40 km above Jupiter's surface.",
    emoji: "🛩️",
    category: "Aerostructures & Planetary Flight Design",
    image: "/images/jupiter-uav.png",
    order: 3, // B
  },
  {
    id: "apex-mobility",
    title: "Apex Mobility",
    letter: "A",
    color: "bg-emerald-600",
    description: "Dynamic mobility routines guided by an animated avatar with neuromuscular training techniques.",
    emoji: "🧠",
    category: "Personal Projects",
    image: "/images/apex-mobility.png",
    order: 6, // C
  },
  {
    id: "sprint-tester",
    title: "Marinovich Sprint Tester",
    letter: "M",
    color: "bg-purple-700",
    description: "Sprint mechanics visualizer and analyzer based on Marinovich methodology.",
    emoji: "🏃",
    category: "Personal Projects",
    image: "/images/sprint-tester.png",
    order: 7, // D
  },
  {
    id: "baker-hughes",
    title: "Baker Hughes Internship",
    letter: "B",
    color: "bg-gray-800",
    description: "Led redesign of the Herriott Cell and CO₂ flow cell assembly for spectroscopy testing systems.",
    emoji: "⚙️",
    category: "Mechanical Engineering Industry Experience",
    image: "/images/baker-hughes.png",
    order: 4, // E
  },
  {
    id: "caes",
    title: "CAES Mission Systems",
    letter: "C",
    color: "bg-amber-600",
    description: "Programmed RF wire bonding patterns and designed custom SMT testing fixtures.",
    emoji: "🔌",
    category: "Mechanical Engineering Industry Experience",
    image: "/images/caes.png",
    order: 5, // F
  },
  {
    id: "dda-sensor",
    title: "Deformation Displacement Array Sensor",
    letter: "D",
    color: "bg-teal-600",
    description: "Created a hardware/software pipeline using potentiometers, Arduino, and MATLAB FEA.",
    emoji: "🤖",
    category: "Sensor Systems & Real-Time Data",
    image: "/images/dda-sensor.png",
    order: 2, // G
  },
]

export function ProjectGrid() {
  // Sort projects by their order property
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-1">
      {sortedProjects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className={`${project.color} aspect-square flex items-center justify-center p-8 transition-transform hover:scale-[0.99] relative group overflow-hidden`}
        >
          {project.image ? (
            <div className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-20 transition-opacity duration-300">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : null}

          <div className="flex flex-col items-center justify-center relative z-10">
            <span className="text-6xl opacity-70 group-hover:scale-110 transition-transform duration-500">
              {project.emoji}
            </span>
          </div>
          <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="text-white/70 text-sm font-light tracking-wide mb-1">{project.category}</div>
            <h2 className="text-white text-xl font-medium tracking-tight">{project.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}
