import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { PDFViewer } from "@/components/pdf-viewer"

// Project data - this should match the data in project-grid.tsx
interface Project {
  id: string;
  title: string;
  letter: string;
  color: string;
  emoji: string;
  category: string;
  image: string;
  description: string;
  reportLink?: string;
  slidesLink?: string;
  posterLink?: string;
}

const projects: Project[] = [
  {
    id: "europa-lander",
    title: "Europa Habitat and Composition Observation (ECHO) Lander Mission",
    letter: "E",
    color: "bg-blue-700",
    emoji: "🛰️",
    category: "Aerospace & Space Systems Engineering",
    image: "/images/echo-adcs.png",
    description: `Europa Habitat and Composition Observation (ECHO) Lander

Designed a full ADCS architecture for a lander mission to Europa, targeting autonomous operation through a six-month science phase on Europa's icy surface.

- Developed and validated a pyramid configuration of 4 reaction wheels to ensure three-axis control with one-axis redundancy in case of failure.
- Integrated 2 star trackers, 2 IMUs, and 1 3-axis magnetometer into the sensor suite.
- Personally built a MATLAB-based star tracker pipeline capable of:
  • Identifying stars in optical imagery using centroid extraction and SURF feature detection.
  • Matching stars with a custom Hipparcos-based catalog (Vmag ≤ 5.5) using knnsearch.
  • Computing attitude via Wahba's problem and quaternion estimation with confidence weighting.
- Performed trade studies for component selection under a 25 kg ADCS mass budget
- Validated FEA for structural interfaces and conducted risk assessments for high-radiation environments.`,
    reportLink: "/reports/Team 1 FDR F24 Final Version (2).pdf",
    slidesLink: "/reports/Team 1 FDR Presentation.pdf",
  },
  {
    id: "jupiter-uav",
    title: "UAV Wing for Jupiter Flight",
    letter: "J",
    color: "bg-gradient-to-br from-orange-500 via-red-500 to-purple-600",
    emoji: "🛩️",
    category: "Aerostructures & Planetary Flight Design",
    image: "/images/jupiter-uav.png",
    description: `I designed and analyzed a high-speed UAV capable of atmospheric flight 40 km above Jupiter's surface.

  Encounter conditions:
  • 10 kPa pressure
  • 100 K temperature
  • Mach 7.5 flight speed
  • Headwinds up to 400 m/s

  Material choice: Aluminum 6061-T6, chosen for high strength at cryogenic temperatures.

  I performed FEA with curvature-based mesh refinement for maximum loads of 137 kN due to gusts and descent.

  My stress pipeline included:
  • Text-to-geometry generation for cross-section
  • Calculation of Ixx, Iyy, Ixy for torsion and bending stress analysis
  • Simulation of spar/boom elements and calculation of von Mises stress and safety factors
  • Estimation of fatigue life and deflection under worst-case loading

  I determined that drag was negligible (~5 kN), enabling energy-efficient descent, and concluded that 
  sustained UAV cruise flight on Jupiter is plausible if deployment hurdles are met.`,
  },
  {
    id: "apex-mobility",
    title: "Apex Mobility",
    letter: "A",
    color: "bg-emerald-600",
    emoji: "🧠",
    category: "Personal Projects",
    image: "/images/apex-mobility.png",
    description: `Apex Mobility is a personal project featuring dynamic mobility routines guided by an animated avatar.

  Key features:
  • Implements a unique neuromuscular training technique called "controlled cramping", enhancing brain-to-muscle engagement
  • Encourages active mobility over static stretching; draws from fascial tension theory (Chong Xie inspired)
  • UI/UX inspired by the Bend App with improved personalization and clarity

  Tools: Python, Animation Libraries
  Planned: Web/Mobile App Integration`,
  },
  {
    id: "sprint-tester",
    title: "Marinovich Sprint Tester",
    letter: "M",
    color: "bg-purple-700",
    emoji: "🏃",
    category: "Personal Projects",
    image: "/images/sprint-tester.png",
    description: `The Marinovich Sprint Tester is a sprint mechanics visualizer and analyzer based on Marinovich methodology.

  Key features:
  • Detects asymmetries and inefficiencies using high-frame-rate video input
  • Analyzes running form and provides feedback for improvement
  • Planned future integration: Plyometric feedback loop and "movement fingerprinting"`,
  },
  {
    id: "baker-hughes",
    title: "Baker Hughes Internship",
    letter: "B",
    color: "bg-gray-800",
    emoji: "⚙️",
    category: "Mechanical Engineering Industry Experience",
    image: "/images/baker-hughes.png",
    description: `As a Mechanical Design Intern at Baker Hughes (Panametrics Division), I led the redesign of the Herriott Cell 
  and CO₂ flow cell assembly for spectroscopy testing systems.

  Key Projects:
  
  • Herriott Cell Design Update
    - Updated 8 different parts in the Cell and added new triangular piece
    - Converted glued optics into screw-mounted adjustable parts, improving alignment flexibility and assembly ease
    - Made end cap rectangular for adjustability with a wrench
    - Added threads in the middle hole for lens adjustability from back
    - Designed triangular piece as an up/down rocking mechanism for the laser
  
  • Collimating Lens Assembly
    - Designed 3 types of collimating lens assemblies including the original
    - Created mounting solutions for TO66 laser with improved lens position adjustability
    - Developed cylindrical mechanism with radio seal for laser and lens integration
  
  • Flow Cell Cover Assembly
    - Designed covers to limit noise by sealing unused nozzle holes during testing
    - Created 3D printed prototypes with precise tolerance levels
    - Selected and ordered matching screws and hex pieces for proper fitting
  
  • A Divisor Python Implementation
    - Recreated Excel code in Python for greater freedom in signal analysis
    - Developed graphical comparison tools between Python and Excel outputs
  
  • Flow Cell Design Updates
    - Shortened the length of the flow cell along with the window on top for BWT testing
    - Placed orders for updated components
  
  Additional Experience:
  - Learned manufacturing processes and transducer building/testing
  - Studied flow velocity calculations and signal processing techniques
  - Gained exposure to multiple departments and functions`,
  },
  {
    id: "caes",
    title: "CAES Mission Systems Internship",
    letter: "C",
    color: "bg-red-600",
    emoji: "🛠️",
    category: "Mechanical Engineering Industry Experience",
    image: "/images/caes.png",
    description: `During my internship at CAES Mission Systems, I contributed to several projects:

  • Wire Bonding Programs
    - Programmed 1 mil ball bonds for the entire LO1 assembly onto the Palomar 8000i Wire Bonder
    - Developed detail-oriented approach to RF assembly drawings
    - Learned proprietary programming techniques for precision bonding

  • Fixturing
    - Designed two unique fixtures to support AIM SMT Testing Procedures
    - Applied Autodesk Inventor for 3D modeling and design
    - Conducted tolerance stack-up analysis to ensure proper fit and function

  • UID Label Creation
    - Configured the Nordson Dage Stellar 4000 with desired output files
    - Collaborated with Quality and Operations teams for feedback
    - Ensured user-friendly outputs for operators
    - Applied iterative learning to understand machine inputs

  • Process Documentation
    - Identified differences between company painting procedures and military standards
    - Drafted procedures for incorporating stamps for Operators, Testers, and Inspectors`,
    reportLink: "/reports/CAES.pdf",
  },
  {
    id: "dda-sensor",
    title: "Deformation Displacement Array (DDA) Sensor",
    letter: "D",
    color: "bg-teal-600",
    emoji: "🤖",
    category: "Sensor Systems & Real-Time Data",
    image: "/images/dda-sensor.png",
    description: `As part of a two-person team, I co-led the development of a novel sensor platform—the Deformation-Displacement Array (DDA)—designed to digitally capture and analyze the surface geometry of deformable objects in real time. The original concept aimed to improve orthopedic solutions by enabling rapid, customized orthotic manufacturing using dynamic shape data.

Early efforts focused on physical prototyping: I designed and assembled a 16-pin sensor array using compression springs, linear potentiometers, and an Arduino-based data logging system. However, due to resolution constraints and limitations in hardware scalability, I pivoted the project toward a software-first proof of concept, using high-fidelity simulations to showcase the system's potential.

I developed an end-to-end simulation pipeline using MATLAB and Python to model displacement, force, pressure, stress, and strain profiles for various objects on a virtual DDA array. These tools enabled visual and analytical exploration of use cases across orthotics, soft robotics, and scientific instrumentation. I also integrated 3D scanned mesh data (via iPhone LiDAR) into our simulation environment and collaborated with VFX faculty to render detailed system visuals in Houdini.

The final deliverable demonstrated the DDA sensor as a scalable, modular solution for dynamic surface mapping, with potential applications in prosthetics, wearable tech, and orthotic kiosks. We conducted external consultations with physicians from UPMC and discussed pathways toward FDA approval and eventual market deployment.

This project sharpened my skills in hardware prototyping, simulation modeling, data visualization, interdisciplinary collaboration, and real-world validation of engineering concepts.`,
    reportLink: "/reports/IS2 Final Design Report.pdf",
    posterLink: "/reports/DDA_PosterSession_FinalCopy.pdf",
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id) || projects[0]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-8">
        <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{project.emoji}</span>
            <div className="text-white/70 font-light tracking-wide">{project.category}</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">{project.title}</h1>

          {project.image && (
            <div className="mb-8 relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="whitespace-pre-line text-lg font-light tracking-wide">{project.description}</div>

            {/* Project-specific content */}
            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              {project.id === "europa-lander" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <PDFViewer
                      title="Final Design Report"
                      description="Comprehensive documentation of the ECHO Lander mission, including ADCS architecture, component selection, and performance analysis."
                      pdfUrl={project.reportLink || ''}
                    />
                    <PDFViewer
                      title="FDR Presentation Slides"
                      description="Presentation slides from the Final Design Review, highlighting key aspects of the mission design and technical solutions."
                      pdfUrl={project.slidesLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "baker-hughes" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Internship Documentation</h3>
                  <PDFViewer
                    title="Baker Hughes Internship Report"
                    description="Detailed documentation of my internship experience at Baker Hughes, including projects, achievements, and technical contributions."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "caes" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Internship Documentation</h3>
                  <PDFViewer
                    title="CAES Mission Systems Internship Report"
                    description="Comprehensive report of my internship at CAES Mission Systems, covering wire bonding programs, fixturing projects, and process documentation."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "dda-sensor" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <PDFViewer
                      title="Final Design Report"
                      description="Comprehensive documentation of the DDA Sensor project, including system architecture, prototyping process, and simulation results."
                      pdfUrl={project.reportLink || ''}
                    />
                    <PDFViewer
                      title="Research Poster"
                      description="Academic poster presentation highlighting key innovations and findings from the DDA Sensor project."
                      pdfUrl={project.posterLink || ''}
                    />
                  </div>
                </>
              )}

              {!["europa-lander", "baker-hughes", "caes", "dda-sensor"].includes(project.id) && (
                <p className="text-lg">
                  This is where you'll add your detailed project reports, images, PDFs, or any other content.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
