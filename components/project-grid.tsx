import Link from "next/link"
import Image from "next/image"

// Project data based on Aaryan's resume
const projects = [
  {
    id: "europa-lander",
    title: "Europa Habitat and Composition Observation (ECHO) Lander Mission",
    letter: "E",
    color: "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900",
    description:
      "ADCS Lead for a lander mission to Europa, designing attitude control systems for operation on Europa's icy surface.",
    category: "Space Systems Engineering",
    image: "/images/europa-lander.png",
    order: 1, // A
  },
  {
    id: "b2-flying-wing",
    title: "B2 Flying Wing Project",
    letter: "B",
    color: "bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900",
    description: "Designed and analyzed a B-2 Spirit-inspired flying wing using hybrid Dolphin Fin/Reflexed airfoil. Achieved FEM safety factor of 7-8 and validated aerodynamics through CFD analysis.",
    category: "Aerostructures Analysis",
    image: "/images/jupiter-uav.png",
    order: 7, // B
    report: "/reports/B2 Aerostructures Project.pdf"
  },

  {
    id: "baker-hughes",
    title: "Baker Hughes Internship",
    letter: "B",
    color: "bg-gradient-to-br from-zinc-950 via-neutral-950 to-zinc-900",
    description: "Led redesign of the Herriott Cell and CO₂ flow cell assembly for spectroscopy testing systems.",
    category: "Engineering Industry Experience",
    image: "/images/baker-hughes.png",
    order: 2, // E
  },
  {
    id: "caes",
    title: "CAES Mission Systems",
    letter: "C",
    color: "bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900",
    description: "Programmed RF wire bonding patterns and designed custom SMT testing fixtures.",
    category: "Engineering Industry Experience",
    image: "/images/caes.png",
    order: 5, // F
  },
  {
    id: "dda-sensor",
    title: "Deformation Displacement Array Sensor",
    letter: "D",
    color: "bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900",
    description: "Created a hardware/software pipeline using potentiometers, Arduino, and MATLAB FEA.",
    category: "Hardware Engineering",
    image: "/images/dda-sensor.png",
    order: 6, // G
  },
  {
    id: "sfm-project",
    title: "Influence of Solar Accelaration on the Earth Moon CR3BP",
    letter: "S",
    color: "bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900",
    description: "Explored solar gravitational perturbations on periodic satellite orbits around Earth-Moon Lagrange points using CR3BP and CR4BP modeling.",
    category: "Orbital Mechanics",
    image: "/images/SFM.png",
    order: 11, // H
  },
  {
    id: "stingray-uav",
    title: "Aerodynamic Analysis of Stingray UAV with Flap Deflection",
    letter: "A",
    color: "bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900",
    description: "Wind tunnel testing and flow visualization of a blended wing-body Stingray UAV analyzing flap deflection effects on aerodynamic performance.",
    category: "Wind Tunnel Testing",
    image: "/images/Stingray_UAV.png",
    order: 12, // I
  },
  {
    id: "cfd-analysis",
    title: "CFD Analysis of NACA 0015 Airfoil with High-Lift Devices",
    letter: "C",
    color: "bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900",
    description: "Computational fluid dynamics study of slat and flap configurations using steady-state and transient simulations in HyperMesh and AcuSolve.",
    category: "CFD Analysis",
    image: "/images/CFD.png",
    order: 10, // J
  },
  {
    id: "ekf-lunar-tracking",
    title: "EKF-Based Trans-Lunar Coast Tracking",
    letter: "E",
    color: "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900",
    description: "Extended Kalman Filter implementation for spacecraft trajectory tracking during trans-lunar coast using NASA's Goldstone Deep Space Network measurements.",
    category: "Space Navigation",
    image: "/images/Moon.png",
    order: 4, // L
  },
  {
    id: "horizon-opnav",
    title: "Horizon-Based OpNav with LORRI Imagery",
    letter: "H",
    color: "bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900",
    description: "Optical navigation implementation using New Horizons LORRI imagery of Pluto, performing camera calibration and spacecraft position estimation from limb detection.",
    category: "Optical Navigation",
    image: "/images/Pluto.png",
    order: 8, // M
  },
  {
    id: "flutter-control",
    title: "Active Flutter Control in Aeroelastic Wing Section",
    letter: "A",
    color: "bg-gradient-to-br from-slate-950 via-red-950 to-slate-900",
    description: "Modeling and controlling flutter instability in aircraft wing sections using Lagrangian formulation and PI compensator design for aileron deflection control.",
    category: "Aeroelastic Control",
    image: "/images/Flutter.png",
    order: 9, // N
  },
  {
    id: "cannon-art",
    title: "Precision Machined Miniature Cannon",
    letter: "C",
    color: "bg-gradient-to-br from-slate-950 via-yellow-900 to-slate-900",
    description: "",
    category: "Machine Shop",
    image: "/images/cannon-art.png",
    order: 99, // Placeholder order, adjust as needed
  },
  {
    id: "fiftyville-mystery",
    title: "Fiftyville Theft Mystery",
    letter: "F",
    color: "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900",
    description: "SQL-based detective investigation analyzing witness testimonies, security footage, and financial records to solve a theft mystery.",
    category: "Data Science",
    image: "/images/174092-clue-illustration.png",
    order: 3, // Adjust as needed
  },
  {
    id: "youtube-shorts-extractor",
    title: "YouTube Shorts Transcript Extractor",
    letter: "Y",
    color: "bg-gradient-to-br from-slate-950 via-red-950 to-slate-900",
    description: "Full-stack web application for creators and researchers to analyze viral YouTube Shorts content through automated transcript extraction and data export.",
    category: "Web Development",
    image: "/images/yt-shorts-thumbnail.png",
    order: 13,
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
