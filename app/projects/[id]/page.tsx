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
  detailImage?: string;
  description: string;
  reportLink?: string;
  slidesLink?: string;
  posterLink?: string;
  additionalReport?: string;
  highlights?: string[];
}

const projects: Project[] = [
  {
    id: "europa-lander",
    title: "Europa Habitat and Composition Observation (ECHO) Lander Mission",
    letter: "E",
    color: "bg-gray-800",
    category: "Space Systems Engineering",
    image: "/images/echo-adcs.png",
    description: `As ADCS Lead for the ECHO Lander Mission, I designed a comprehensive attitude control system for operation on Europa's icy surface

Key Achievements:
• Developed a pyramid configuration of 4 reaction wheels ensuring three-axis control with redundancy
• Integrated dual star trackers, IMUs, and a 3-axis magnetometer for robust attitude determination
• Optimized component selection within a 25 kg ADCS mass budget

Skills: MATLAB, Simulink, PID Control, Risk Management`,
    reportLink: "/reports/Team 1 FDR F24 Final Version (2).pdf",
    slidesLink: "/reports/Team 1 FDR Presentation.pdf",
  },
  {
    id: "b2-flying-wing",
    title: "B2 Flying Wing Project",
    letter: "B",
    color: "bg-gray-800",
    category: "Aerostructures Analysis",
    image: "/images/b2-wing-3d-model.png",
    description: `We took on the challenge of designing and analyzing a flying wing aircraft, modeled after the Northrop Grumman B-2 Spirit stealth bomber. The goal was to explore its low-drag potential and structural performance.

Using a hybrid Dolphin Fin/Reflexed airfoil and PLA for 3D printing, we built a lightweight model with an I-beam spar to handle the load.

Key Achievements:
• FEM analysis showed a solid factor of safety (7-8)
• CFD analysis confirmed low drag (0.003 lbf)
• Achieved modest lift (0.0073 lbf) at 25 fps

Skills: Solidworks, FEM Analysis, CFD Analysis, 3D Printing`,
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
    category: "Engineering Industry Experience",
    image: "/images/baker-hughes-cad-model.png",
    description: `During my Mechanical Engineering Internship at Baker Hughes my main focus was on product development and manufacturing process improvement.

Key Achievements:
    • Spearheaded the design and modeling of over 40 mechanical parts, including custom noise-reduction fixtures for fluid testing, using SolidWorks and GD&T. Delivered prototypes with exacting tolerances, ensuring the highest levels of precision. 
    • Implemented Python-based algorithms to improve signal processing efficiency, enabling simultaneous analysis of multiple signals
    
    Skills: Solidworks, Python, GD&T, 3D Printing`,
    reportLink: "/reports/Baker.pdf",
  },
  {
    id: "caes",
    title: "CAES Mission Systems",
    letter: "C",
    color: "bg-amber-600",
    category: "Engineering Industry Experience",
    image: "/images/caes-lab-workspace.png",
    description: `During my Engineering Internship at Cobham Aerospace Electronics Solutions (CAES) I worked on electronic component design and testing.

Key Achievements:
    • Directed a cross-functional team of 8 engineers, optimizing manufacturing processes and commissioning the Nordson Dage 4000plus Bond Pull Tester, reducing setup time by 30%  
    • Developed Python-based automation tools to improve data analysis for die shear tests, contributing to improved sensor and actuator integration, crucial for aerospace assemblies. 
    • Led the creation of machine-readable formats for RF assemblies, ensuring compliance with aerospace-grade documentation and manufacturing standards, significantly improving part traceability and operational efficiency.
    
    Skills: RF Assembly programming, Autodesk Inventor, Python`,
    reportLink: "/reports/CAES.pdf",
  },
  {
    id: "dda-sensor",
    title: "Deformation Displacement Array (DDA) Sensor",
    letter: "D",
    color: "bg-teal-600",
    category: "Hardware Engineering",
    image: "/images/dda-sensor.png",
    description: `Developed an innovative sensor system for measuring structural deformation using a combination of hardware and software solutions. The project integrated multiple technologies for accurate displacement tracking.

Key Achievements:
• Created a hardware/software pipeline using potentiometers and Arduino
• Implemented MATLAB-based Finite Element Analysis for data validation
• Built real-time data visualization and analysis tools

Skills: Python, Arduino Programming`,
    reportLink: "/reports/IS2 Final Design Report.pdf",
    posterLink: "/reports/DDA_PosterSession_FinalCopy.pdf"
  },
  {
    id: "cfd-airfoil-study",
    title: "Slat & Flap Airfoil Study",
    letter: "S",
    color: "bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900",
    description: `Conducted an in-depth CFD analysis of a NACA 0015 airfoil with leading-edge slat and trailing-edge flap configurations. The study focused on evaluating aerodynamic performance and flow behavior at various angles of attack and velocities.

Key Features:
• Performed steady-state and transient simulations using Spalart-Allmaras turbulence model
• Analyzed flow characteristics at 0° and 12° angles of attack
• Evaluated performance at velocities of 45 m/s and 90 m/s
• Concluded that slats help improve aircraft stability at AOA 12° which is optimal for takeoff and landing

Skills: Altair Hypermesh`,
    category: "Aerodynamics & CFD Analysis",
    image: "/images/cfd-airfoil-icon.png",
    detailImage: "/images/cfd-airfoil-detail.png",
    reportLink: "/reports/CFD Project Report.pdf",
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
    id: "sfm-project",
    title: "Influence of Solar Accelaration on the Earth Moon CR3BP",
    letter: "S",
    color: "bg-gray-800",
    category: "Orbital Mechanics",
    image: "/images/SFM-diagram.png",
    description: `This project explores how solar gravitational perturbations impact periodic satellite orbits around Earth-Moon Lagrange points.

Key Achievements:
• Developed MATLAB scripts to integrate differential equations of motion via ode45, with and without solar perturbation
• Transitioned from 3-body to 4-body modeling by introducing the Sun as a dynamic force, calculating real-time solar acceleration using trigonometric orbital positioning
• Analyzed the orbit deformation after one and fifty orbital periods to study long-term perturbative effects

Skills: MATLAB, Orbital Mechanics`,
    reportLink: "/reports/SFM Project.pdf",
  },
  {
    id: "stingray-uav",
    title: "Aerodynamic Analysis of Stingray UAV with Flap Deflection",
    letter: "A",
    color: "bg-gray-800",
    category: "Wind Tunnel Testing",
    image: "/images/Stingray_UAV-diagram.png",
    description: `This experiment explored the aerodynamic effects of flaps on a blended wing-body Stingray UAV using wind tunnel testing and flow visualization at Rensselaer Polytechnic Institute.

Key Achievements:
• Conducted force balance testing to compute lift, drag, and pitching moment coefficients for baseline and flapped wing configurations
• Demonstrated extremely low drag coefficients and no stall behavior across both configurations, validating the aerodynamic efficiency of the Stingray UAV's blended wing-body design

Skills: MATLAB, Force Balance Testing`,
    reportLink: "/reports/Stingray_UAV.pdf",
  },
  {
    id: "cfd-analysis",
    title: "CFD Analysis of NACA 0015 Airfoil with High-Lift Devices",
    letter: "C",
    color: "bg-gray-800",
    category: "CFD Analysis",
    image: "/images/CFD-diagram.png",
    description: `Conducted an in-depth CFD analysis of a NACA 0015 airfoil with leading-edge slat and trailing-edge flap configurations.

Key Achievements:
• Performed steady-state and transient simulations using Spalart-Allmaras turbulence model
• Analyzed flow characteristics at 0° and 12° angles of attack
• Concluded that slats help improve aircraft stability at AOA 12° which is optimal for takeoff and landing

Skills: Altair Hypermesh`,
    reportLink: "/reports/CFD.pdf",
  },
  {
    id: "ekf-lunar-tracking",
    title: "EKF-Based Trans-Lunar Coast Tracking",
    letter: "E",
    color: "bg-gray-800",
    category: "Space Navigation",
    image: "/images/Moon-diagram.png",
    description: `This project involved building an Extended Kalman Filter (EKF) to track a spacecraft's trajectory during its trans-lunar coast using measurements from NASA's Goldstone Deep Space Network.

Key Achievements:
• Designed and implemented a discrete-time EKF using a nonlinear two-body dynamics model with Gaussian white noise acceleration
• Derived and implemented Jacobians for dynamic propagation and R3B measurement models to form EKF's sensitivity matrix
• Created a full simulation pipeline in Python using real tracking data to estimate 6D spacecraft state and generate diagnostic plots

Skills: Python, Extended Kalman Filter`,
    reportLink: "/reports/Moon.pdf",
  },
  {
    id: "horizon-opnav",
    title: "Horizon-Based OpNav with LORRI Imagery",
    letter: "H",
    color: "bg-gray-800",
    category: "Optical Navigation",
    image: "/images/Pluto-diagram.png",
    description: `This project implemented horizon-based optical navigation (OpNav) using real flight imagery from the New Horizons spacecraft during its flyby of Pluto.

Key Achievements:
• Estimated the intrinsic calibration matrix for the LORRI camera using focal length and pixel pitch to compute focal length in pixels
• Developed a Python pipeline using OpenCV to preprocess the image, detect Pluto's limb, and fit a circular model to the planet's horizon
• Applied similar-triangle geometry to back-calculate the Z-distance from the pixel radius of Pluto's limb and computed x, y offsets to localize the camera-frame position

Skills: Python, Optimization (linear and nonlinear)`,
    reportLink: "/reports/Pluto.pdf",
  },
  {
    id: "flutter-control",
    title: "Active Flutter Control in Aeroelastic Wing Section",
    letter: "A",
    color: "bg-gray-800",
    category: "Aeroelastic Control",
    image: "/images/Flutter-diagram.png",
    description: `This project involved modeling and controlling flutter instability in an aircraft wing section using a 2 DOF Lagrangian formulation.

A proportional-integral (PI) compensator was designed to suppress flutter oscillations by commanding aileron deflections in a closed-loop feedback system

Key Achievements:
• Developed a state-space model of aeroelastic wing behavior using energy-based Lagrangian methods and unsteady aerodynamic theory
• Derived system transfer functions and designed a PI controller: C(s) = 10 + 100/s
• Settling time for pitch disturbances reached within 0.5s

Skills: MATLAB, PI Control, Aeroelasticity`,
    reportLink: "/reports/Flutter.pdf",
  },
  {
    id: "cannon-art",
    title: "Precision Machined Miniature Cannon",
    letter: "C",
    color: "bg-yellow-900",
    category: "Machine Shop",
    image: "/images/cannon-art.png",
    detailImage: "/images/cannon-machined.jpg",
    description: `This miniature cannon was designed and machined at the RPI student machine shop. Made entirely from aluminum, the cannon showcases both form and function with a smoothly tapered barrel and a solid carriage mounted on knurled wheels. Every piece was manually turned, milled, and assembled using lathes, mills, and hand tools.`
  },
  {
    id: "fiftyville-mystery",
    title: "Fiftyville Theft Mystery",
    letter: "F",
    color: "bg-gray-800",
    category: "Data Science",
    image: "/images/Screenshot.png",
    description: `As Detective for the CS50 Fiftyville Mystery, I conducted a comprehensive SQL-based investigation to solve a theft case occurring on Humphrey Street

Key Achievements:
• Analyzed multiple interconnected database tables including witness testimonies, phone records, flight manifests, and security logs
• Executed advanced SQL queries with JOINs, subqueries, and conditional statements to cross-reference evidence
• Successfully identified the thief, determined their escape destination, and uncovered their accomplice through systematic data analysis

Skills: SQL, Logical Reasoning`,
    reportLink: "https://github.com/aaryouz/Fiftyville"
  }
]

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id === id) || projects[0]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-8">
        <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Main project image - exclude for cannon-art */}
          {project.id !== "cannon-art" && (
            <div className="mb-8 flex justify-center">
              <div className="relative h-[300px] md:h-[400px] w-full max-w-xl rounded-lg overflow-hidden bg-black/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          )}
          
          {/* Additional detail image for specific projects */}
          {project.id === "cannon-art" && project.detailImage && (
            <div className="mb-8 flex justify-center">
              <div className="relative h-[300px] md:h-[400px] w-full max-w-xl rounded-lg overflow-hidden bg-black/20">
                <Image
                  src={project.detailImage}
                  alt="Machined Miniature Cannon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">{project.title}</h1>
          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="whitespace-pre-line text-lg font-light tracking-wide">{project.description}</div>
          </div>
          
          {/* Only render documentation/report blocks for projects that are not cannon-art */}
          {project.id !== "cannon-art" && (
            <>
              {project.id === "europa-lander" && (
                <>
                  <div className="mt-12">
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
                  </div>
                </>
              )}

              {project.id === "baker-hughes" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Internship Documentation</h3>
                    <PDFViewer
                      title="Baker Hughes Internship Report"
                      description="Detailed documentation of my internship experience at Baker Hughes, including projects and achievements."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "caes" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Internship Documentation</h3>
                    <PDFViewer
                      title="CAES Internship Report"
                      description="Comprehensive documentation of my internship experience at CAES, including project work and technical contributions."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "dda-sensor" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                      <PDFViewer
                        title="Final Design Report"
                        description="Comprehensive documentation of the DDA Sensor project, including system architecture, prototyping process, and simulation results."
                        pdfUrl={project.reportLink || ''}
                      />
                    </div>
                  </div>
                </>
              )}

              {project.id === "b2-flying-wing" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <PDFViewer
                      title="B2 Project Report"
                      description="Comprehensive documentation of the B2 Flying Wing project, including design, analysis, and testing results."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "cfd-airfoil-study" && (
  <>
    {project.detailImage && (
      <div className="mb-8">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-black/20">
          <Image
            src={project.detailImage}
            alt="CFD Analysis Visualization"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 text-sm text-white/70">
          Pressure contours and streamlines visualization from CFD analysis
        </div>
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-xl font-medium mb-4">Key Results</h3>
      <ul className="list-disc list-inside space-y-2">
        {project.highlights?.map((highlight, index) => (
          <li key={index} className="text-lg text-white/90">{highlight}</li>
        ))}
      </ul>
    </div>
    <div className="mt-12 bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
      <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
      <div className="grid grid-cols-1 gap-4">
        <PDFViewer
          title="CFD Analysis Report"
          description="Comprehensive documentation of the airfoil study, including methodology, simulation setup, and results analysis."
          pdfUrl={project.reportLink || ''}
        />
        <PDFViewer
          title="Part 2: Extended Analysis"
          description="Additional analysis of transient behavior and flow stability at different velocities."
          pdfUrl={project.additionalReport || ''}
        />
      </div>
    </div>
  </>
)}

              {project.id === "sfm-project" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <PDFViewer
                      title="SFM Project Report"
                      description="Comprehensive documentation of the SFM project, including CR3BP and CR4BP modeling, MATLAB implementation, and orbital analysis results."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "stingray-uav" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <PDFViewer
                      title="Stingray UAV Aerodynamic Analysis Report"
                      description="Comprehensive documentation of the wind tunnel testing, force balance measurements, flow visualization, and aerodynamic performance analysis of the Stingray UAV."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "cfd-analysis" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <PDFViewer
                      title="CFD Analysis Report"
                      description="Comprehensive documentation of the CFD simulations, including steady-state and transient analysis of NACA 0015 airfoil with high-lift devices using HyperMesh and AcuSolve."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "ekf-lunar-tracking" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <PDFViewer
                      title="EKF Trans-Lunar Tracking Report"
                      description="Comprehensive documentation of the Extended Kalman Filter implementation, including coordinate transformations, Jacobian derivations, and spacecraft state estimation results."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "horizon-opnav" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <PDFViewer
                      title="Horizon-Based OpNav Report"
                      description="Comprehensive documentation of the optical navigation implementation, including camera calibration, limb detection algorithms, and spacecraft position estimation using New Horizons LORRI imagery."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "flutter-control" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <PDFViewer
                      title="Active Flutter Control Report"
                      description="Comprehensive documentation of the aeroelastic wing section modeling, PI compensator design, frequency-domain analysis, and control system validation for flutter suppression."
                      pdfUrl={project.reportLink || ''}
                    />
                  </div>
                </>
              )}

              {project.id === "fiftyville-mystery" && (
                <>
                  <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                    <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 cursor-pointer hover:bg-black/30 transition-colors">
                      <a 
                        href={project.reportLink || ''} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h4 className="text-lg font-medium text-white mb-2">GitHub Repository</h4>
                        <p className="text-white/70 text-sm mb-3">
                          Complete SQL investigation code, database queries, and detective analysis for solving the Fiftyville theft mystery.
                        </p>
                        <div className="flex items-center text-blue-400 text-sm">
                          <span>View on GitHub</span>
                          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
