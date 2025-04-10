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
    category: "Aerospace & Space Systems Engineering",
    image: "/images/echo-adcs.png",
    description: `As ADCS Lead for the Europa Habitat and Composition Observation (ECHO) Lander Mission, I designed a comprehensive attitude control system for operation on Europa's icy surface. The mission demanded precise control and redundancy for a six-month science phase.

Key Achievements:
• Developed a pyramid configuration of 4 reaction wheels ensuring three-axis control with redundancy
• Integrated dual star trackers, IMUs, and a 3-axis magnetometer for robust attitude determination
• Optimized component selection within a 25 kg ADCS mass budget
• Validated structural interfaces through FEA and assessed risks for high-radiation environments`,
    reportLink: "/reports/Team 1 FDR F24 Final Version (2).pdf",
    slidesLink: "/reports/Team 1 FDR Presentation.pdf",
  },
  {
    id: "b2-flying-wing",
    title: "B2 Flying Wing Project",
    letter: "B",
    color: "bg-gradient-to-br from-orange-500 via-red-500 to-purple-600",
    category: "Aerostructures & CFD Analysis",
    image: "/images/jupiter-uav.png",
    description: `We took on the challenge of designing and analyzing a flying wing aircraft, modeled after the Northrop Grumman B-2 Spirit stealth bomber. The goal: explore its low-drag potential and structural performance.

Using a hybrid Dolphin Fin/Reflexed airfoil and PLA for 3D printing, we built a lightweight model with an I-beam spar to handle the load.

Key Achievements:
• Finite Element Analysis (FEM) showed a solid factor of safety (7-8)
• Computational Fluid Dynamics (CFD) confirmed low drag (0.003 lbf)
• Achieved modest lift (0.0073 lbf) at 25 fps
• Successfully overcame 3D printing challenges with thin parts`,
    reportLink: "/reports/B-2 Aerostructures Project.pdf"
  },
  {
    id: "apex-mobility",
    title: "Apex Mobility",
    letter: "A",
    color: "bg-emerald-600",
    category: "Personal Projects",
    image: "/images/apex-mobility.png",
    description: `Developed a personalized daily training tracker for hybrid athletes, focusing on blending disciplines like martial arts, dance, yoga, sprinting, and gymnastics. The application emphasizes structured yet adaptable movement practice through customizable "Training Stones."

Key Features:
• Implemented intuitive daily movement logging interface with date-based organization
• Created modular training categories for specific movement priorities
• Built progress visualization tools for tracking consistency and habit formation
• Integrated customizable workout templates for quick session setup
• Developed a mobile-responsive design for on-the-go training tracking`
  },
  {
    id: "sprint-tester",
    title: "Marinovich Sprint Tester",
    letter: "M",
    color: "bg-purple-700",
    category: "Personal Projects",
    image: "/images/sprint-tester.png",
    description: `Created a specialized sprint timing application based on the Marinovich methodology for sprint mechanics analysis. The tool focuses on precise timing and hands-free operation during training sessions.

Key Features:
• Built high-precision timer with millisecond accuracy for short-distance sprints
• Implemented automated 60-second recovery countdown for test protocols
• Integrated voice command system for hands-free operation
• Developed session logging system for progress tracking
• Designed minimal, responsive UI optimized for field use`,
    reportLink: "https://github.com/aaryouz/marinovich-sprint"
  },
  {
    id: "baker-hughes",
    title: "Baker Hughes Internship",
    letter: "B",
    color: "bg-gray-800",
    category: "Mechanical Engineering Industry Experience",
    image: "/images/baker-hughes.png",
    description: `During my internship at Baker Hughes, I focused on improving spectroscopy testing systems through mechanical design and optimization. 

    Key Achievements:
    • Led redesign of Herriott Cell for spectroscopy testing systems, improving optical alignment and reducing noise
    • Optimized gas flow paths in Flow Cell assembly for enhanced measurement accuracy
    • Created precise 3D printed prototypes with specific tolerance requirements
    • Developed comprehensive assembly procedures and documentation for team training`,
  },
  {
    id: "caes",
    title: "CAES Mission Systems",
    letter: "C",
    color: "bg-amber-600",
    category: "Mechanical Engineering Industry Experience",
    image: "/images/caes.png",
    description: `At CAES Mission Systems, I worked on manufacturing engineering projects focused on RF components and testing systems.
    
    Key Achievements:
    • Programmed RF wire bonding patterns for electronic components
    • Designed and validated custom SMT testing fixtures
    • Created detailed technical documentation for manufacturing processes
    • Implemented efficiency improvements in assembly workflows`,
  },
  {
    id: "dda-sensor",
    title: "Deformation Displacement Array Sensor",
    letter: "D",
    color: "bg-teal-600",
    category: "Sensor Systems & Real-Time Data",
    image: "/images/dda-sensor.png",
    description: `Developed an innovative sensor system for measuring structural deformation using a combination of hardware and software solutions. The project integrated multiple technologies for accurate displacement tracking.

Key Achievements:
• Created a hardware/software pipeline using potentiometers and Arduino
• Implemented MATLAB-based Finite Element Analysis for data validation
• Designed custom sensor array configuration for optimal coverage
• Built real-time data visualization and analysis tools
• Validated system accuracy through comparative testing`,
    reportLink: "/reports/IS2 Final Design Report.pdf",
    posterLink: "/reports/DDA_PosterSession_FinalCopy.pdf"
  }
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
          {project.id === "dda-sensor" && (
            <div className="mb-8 relative h-[700px] rounded-lg overflow-hidden bg-black/20">
              <div className="absolute inset-0 flex flex-col">
                <div className="p-8">
                  <div className="text-sm text-zinc-400">{project.category}</div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight">{project.title}</h1>
                </div>
                <div className="flex-1 relative p-12">
                  <Image
                    src="/images/Screenshot 2025-04-10 014211.png"
                    alt="DDA Sensor Components Diagram"
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center gap-3 mb-2">
            <div className="text-white/70 font-light tracking-wide">{project.category}</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">{project.title}</h1>

          {project.image && project.id !== "dda-sensor" && (
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
                </>
              )}

              {project.id === "caes" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Internship Documentation</h3>
                </>
              )}

              {project.id === "dda-sensor" && (
                <>
                  <h3 className="text-xl font-medium mt-8 mb-4">Project Documentation</h3>
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

              {project.id === "b2-flying-wing" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <PDFViewer
                    title="B2 Aerostructures Project Report"
                    description="Comprehensive documentation of the B2 Flying Wing project, including design, analysis, and testing results."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {!["europa-lander", "baker-hughes", "caes", "dda-sensor", "b2-flying-wing"].includes(project.id) && (
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
