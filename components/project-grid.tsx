import Link from "next/link"
import Image from "next/image"

// Project data based on Aaryan's resume
const projects = [
  {
    id: "cfd-airfoil-study",
    title: "Slat & Flap Airfoil Study",
    letter: "S",
    color: "bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900",
    description: `Conducted an in-depth CFD analysis of a NACA 0015 airfoil with leading-edge slat and trailing-edge flap configurations. The study focused on evaluating aerodynamic performance and flow behavior at various angles of attack and velocities.

Key Features:
• Performed steady-state and transient simulations using Spalart-Allmaras turbulence model
• Analyzed flow characteristics at 0° and 12° angles of attack
• Evaluated performance at two velocities: 45 m/s and 90 m/s
• Generated detailed pressure contours and velocity streamlines
• Validated results against experimental data`,
    category: "Aerodynamics & CFD Analysis",
    image: "/images/Cartoon B-2 Spirit Over Sunset Sky.png", // Block image
    detailImage: "/images/Screenshot 2025-04-22 205057.png", // Detail page image
    order: 8,
    report: "/reports/CFD Project Report.pdf",
    additionalReport: "/reports/CFD Project Report Pt. 2.pdf",
    highlights: [
      "Achieved lift coefficient (C_L) of 1.11 with optimized slat and flap configuration",
      "Minimized drag coefficient to 0.11 through careful geometry refinement",
      "Validated transient stability through HyperGraph analysis",
      "Utilized high-fidelity mesh with 230,000 elements and wall-resolved layers",
      "Demonstrated significant lift enhancement compared to baseline airfoil"
    ]
  },
  {
    id: "europa-lander",
    title: "Europa Habitat and Composition Observation (ECHO) Lander Mission",
    letter: "E",
    color: "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900",
    description:
      "ADCS Lead for a lander mission to Europa, designing attitude control systems for operation on Europa's icy surface.",
    category: "Aerospace & Space Systems Engineering",
    image: "/images/europa-lander.png",
    order: 1, // A
  },
  {
    id: "b2-flying-wing",
    title: "B2 Flying Wing Project",
    letter: "B",
    color: "bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900",
    description: "Designed and analyzed a B-2 Spirit-inspired flying wing using hybrid Dolphin Fin/Reflexed airfoil. Achieved FEM safety factor of 7-8 and validated aerodynamics through CFD analysis.",
    category: "Aerostructures & CFD Analysis",
    image: "/images/jupiter-uav.png",
    order: 3, // B
    report: "/reports/B2 Aerostructures Project.pdf"
  },
  {
    id: "apex-mobility",
    title: "Apex Mobility",
    letter: "A",
    color: "bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900",
    description: "Dynamic mobility routines guided by an animated avatar with neuromuscular training techniques.",
    category: "Personal Projects",
    image: "/images/apex-mobility.png",
    order: 6, // C
  },
  {
    id: "sprint-tester",
    title: "Marinovich Sprint Tester",
    letter: "M",
    color: "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900",
    description: "Sprint mechanics visualizer and analyzer based on Marinovich methodology.",
    category: "Personal Projects",
    image: "/images/sprint-tester.png",
    order: 7, // D
  },
  {
    id: "baker-hughes",
    title: "Baker Hughes Internship",
    letter: "B",
    color: "bg-gradient-to-br from-zinc-950 via-neutral-950 to-zinc-900",
    description: "Led redesign of the Herriott Cell and CO₂ flow cell assembly for spectroscopy testing systems.",
    category: "Mechanical Engineering Industry Experience",
    image: "/images/baker-hughes.png",
    order: 4, // E
  },
  {
    id: "caes",
    title: "CAES Mission Systems",
    letter: "C",
    color: "bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900",
    description: "Programmed RF wire bonding patterns and designed custom SMT testing fixtures.",
    category: "Mechanical Engineering Industry Experience",
    image: "/images/caes.png",
    order: 5, // F
  },
  {
    id: "dda-sensor",
    title: "Deformation Displacement Array Sensor",
    letter: "D",
    color: "bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900",
    description: "Created a hardware/software pipeline using potentiometers, Arduino, and MATLAB FEA.",
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

          <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="text-white/70 text-sm font-light tracking-wide mb-1">{project.category}</div>
            <h2 className="text-white text-xl font-medium tracking-tight">{project.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}
