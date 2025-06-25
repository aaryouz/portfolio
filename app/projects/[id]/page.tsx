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
    description: `As ADCS Lead for the ECHO Lander Mission, I designed a comprehensive attitude control system for operation on Europa's icy surface. The mission demanded precise control and redundancy for a six-month science phase.

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
    color: "bg-gray-800",
    category: "Aerostructures Analysis",
    image: "/images/b2-wing-3d-model.png",
    description: `We took on the challenge of designing and analyzing a flying wing aircraft, modeled after the Northrop Grumman B-2 Spirit stealth bomber. The goal was to explore its low-drag potential and structural performance.

Using a hybrid Dolphin Fin/Reflexed airfoil and PLA for 3D printing, we built a lightweight model with an I-beam spar to handle the load.

Key Achievements:
• FEM analysis showed a solid factor of safety (7-8)
• CFD analysis confirmed low drag (0.003 lbf)
• Achieved modest lift (0.0073 lbf) at 25 fps
`,
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
    • Leveraged advanced data tools like LabVIEW and Python to optimize the performance of Piezoelectric Crystals and flow cells.
    • Implemented Python-based algorithms to improve signal processing efficiency, enabling simultaneous analysis of multiple signals`,
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
    • Led the creation of machine-readable formats for RF assemblies, ensuring compliance with aerospace-grade documentation and manufacturing standards, significantly improving part traceability and operational efficiency.`,
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
• Designed custom sensor array configuration for optimal coverage
• Built real-time data visualization and analysis tools
• Validated system accuracy through comparative testing`,
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
• Evaluated performance at two velocities: 45 m/s and 90 m/s
• Generated detailed pressure contours and velocity streamlines
• Validated results against experimental data`,
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
    description: `This project explores how solar gravitational perturbations impact periodic satellite orbits around Earth-Moon Lagrange points. Using initial conditions from NASA's JPL SSD database, I simulated orbit propagation in a Circular Restricted 3 Body Problem (CR3BP) framework and extended it into a CR4BP model by introducing solar perturbations. The goal was to visualize how stable and unstable halo, butterfly, and vertical orbits respond to solar influence over multiple orbital periods.

Key Achievements:
• Simulated Earth-Moon Lagrange point orbits using CR3BP and validated them against NASA's JPL data
• Developed MATLAB scripts to integrate differential equations of motion via ode45, with and without solar perturbation
• Transitioned from 3-body to 4-body modeling by introducing the Sun as a dynamic force source, calculating real-time solar acceleration using trigonometric orbital positioning
• Analyzed the orbit deformation after one and fifty orbital periods to study long-term perturbative effects
• Demonstrated how certain orbits (e.g., Northern Halo around L1) degrade over time under solar influence despite initial high stability`,
    reportLink: "/reports/SFM Project.pdf",
  },
  {
    id: "stingray-uav",
    title: "Aerodynamic Analysis of Stingray UAV with Flap Deflection",
    letter: "A",
    color: "bg-gray-800",
    category: "Wind Tunnel Testing",
    image: "/images/Stingray_UAV-diagram.png",
    description: `This experiment explored the aerodynamic effects of flap deflection on a blended wing-body Stingray UAV using wind tunnel testing and flow visualization at Rensselaer Polytechnic Institute. Two configurations were tested—baseline (0° flaps) and 25° downward flaps—at a Reynolds number of ~152,823. Forces and moments were captured using a 6-component sting balance and post-processed to obtain lift, drag, and pitching moment coefficients across a range of angles of attack.

Key Achievements:
• Conducted force balance testing to compute lift, drag, and pitching moment coefficients for baseline and flapped wing configurations
• Verified that flap deflection shifted the zero-lift angle from -2° to -4° and increased max lift coefficient from 0.75 to 0.85 without causing stall up to 14° AOA
• Demonstrated extremely low drag coefficients and no stall behavior across both configurations, validating the aerodynamic efficiency of the Stingray UAV's blended wing-body design
• Used helium bubble flow visualization to confirm flow attachment and minimal separation across all angles of attack—even with flaps deployed
• Achieved strong agreement between experimental trends and published results on similar UAV models from literature, reinforcing the validity of results`,
    reportLink: "/reports/Stingray_UAV.pdf",
  },
  {
    id: "cfd-analysis",
    title: "CFD Analysis of NACA 0015 Airfoil with High-Lift Devices",
    letter: "C",
    color: "bg-gray-800",
    category: "CFD Analysis",
    image: "/images/CFD-diagram.png",
    description: `This project investigated the aerodynamic effects of slats and flaps on a NACA 0015 airfoil under steady and transient flow conditions. Using CFD simulations in HyperMesh and AcuSolve, we evaluated how high-lift devices perform at 12° angle of attack for both low (45 m/s) and high (90 m/s) freestream velocities.

The study was split into two parts:
• Steady-state simulations measured lift and drag on the airfoil with a slat, flap, and their combination
• Transient zoom analysis focused on the unsteady flow behavior in the critical region between the slat and the main airfoil

This allowed us to capture not just the aerodynamic performance but also the stability characteristics of high-lift devices during takeoff and landing scenarios.

Key Achievements:
• Simulated lift and drag characteristics of slat and flap configurations at Reynolds numbers of 7.8×10⁵ and 1.57×10⁶
• Achieved a 2x increase in lift using slat + flap configuration compared to baseline (CL = 1.11 vs. 0.681)
• Demonstrated that flaps significantly reduce the zero-lift angle and enhance aerodynamic efficiency at higher AoA
• Performed detailed transient simulations of slat-only configuration showing stable attached flow at 12° AoA, but large vortex shedding and instability at 0° AoA
• Used HyperGraph to quantify oscillations in lift force over time, confirming that slats improve aerodynamic stability at higher AoA but may reduce stability during level flight
• Created refined meshing techniques in critical regions for transient simulation, balancing resolution with hardware limitations`,
    reportLink: "/reports/CFD.pdf",
  },
  {
    id: "uni3dad",
    title: "Uni-3DAD: Unified 3D Anomaly Detection Using GAN Inversion",
    letter: "U",
    color: "bg-gray-800",
    category: "3D Computer Vision",
    image: "/images/Uni3DAD-diagram.png",
    description: `Uni-3DAD is a unified framework for unsupervised 3D anomaly detection on point cloud data using GAN inversion. Traditional 3D anomaly detection pipelines either rely on autoencoders or separate steps for reconstruction and discrimination. Our method simplifies this by using a single GAN model capable of both tasks, trained end-to-end on normal data.

By inverting the input point cloud through a pre-trained generator, we identify anomalies as points that fail to reconstruct properly. This framework generalizes across multiple object categories, making it scalable and adaptable to real-world tasks like industrial defect detection or robotics vision.

Key Achievements:
• Developed an end-to-end pipeline for 3D anomaly detection that eliminates the need for separate discriminator or encoder networks
• Leveraged GAN inversion to achieve robust reconstructions of normal objects, enabling precise localization of outliers in corrupted shapes
• Demonstrated superior performance on benchmark datasets like ShapeNet and MVTec3D, outperforming traditional autoencoder-based baselines
• Incorporated PointNet++ and DGCNN architectures to evaluate the generalizability of point cloud encoders
• Enabled category-level transfer learning, showing the model's ability to detect anomalies in unseen object categories without retraining`,
    reportLink: "/reports/Uni3DAD.pdf",
  },
  {
    id: "ekf-lunar-tracking",
    title: "EKF-Based Trans-Lunar Coast Tracking",
    letter: "E",
    color: "bg-gray-800",
    category: "Space Navigation",
    image: "/images/moon-diagram.png",
    description: `This project involved building an Extended Kalman Filter (EKF) to track a spacecraft's trajectory during its trans-lunar coast using measurements from NASA's Goldstone Deep Space Network. Using noisy range, range-rate, and bearing (R3B) data from the ground station, the filter estimates the spacecraft's position and velocity in the ECI frame.

The EKF fuses a nonlinear dynamic model based on two-body orbital mechanics with real-world measurement updates from a rotating Earth-based antenna, incorporating Earth-centered inertial (ECI), Earth-fixed (ECEF), and East-North-Up (ENU) coordinate transformations.

Key Achievements:
• Designed and implemented a discrete-time EKF using a nonlinear two-body dynamics model with Gaussian white noise acceleration
• Derived and implemented Jacobians for dynamic propagation and R3B measurement models to form EKF's sensitivity matrix
• Built accurate transformation pipelines between ECI, ECEF, and ENU frames for proper handling of Goldstone antenna motion and orientation
• Achieved consistent estimation within ±3σ bounds across all position and velocity components, validating filter tuning and observability assumptions
• Created a full simulation pipeline in Python using real tracking data to estimate 6D spacecraft state and generate diagnostic plots`,
    reportLink: "/reports/moon.pdf",
  },
  {
    id: "horizon-opnav",
    title: "Horizon-Based OpNav with LORRI Imagery",
    letter: "H",
    color: "bg-gray-800",
    category: "Optical Navigation",
    image: "/images/pluto-diagram.png",
    description: `This project implemented horizon-based optical navigation (OpNav) using real flight imagery from the New Horizons spacecraft during its flyby of Pluto. Using a single LORRI image, I performed camera calibration and estimated the spacecraft's relative position with respect to Pluto based solely on visual geometry.

Pluto was modeled as a sphere, and the spacecraft position in the camera frame was inferred by fitting a circle to Pluto's limb using the Circle Hough Transform. This method uses the geometry of the image and the known camera intrinsics to reverse-project 2D limb information into a full 3D position estimate.

Key Achievements:
• Estimated the intrinsic calibration matrix for the LORRI camera using known specs (focal length and pixel pitch) to compute focal length in pixels
• Developed a Python pipeline using OpenCV to preprocess the image, detect Pluto's limb, and fit a circular model to the planet's horizon
• Applied similar-triangle geometry to back-calculate the Z-distance from the pixel radius of Pluto's limb and computed x, y offsets to localize the camera-frame position
• Achieved spacecraft position estimate relative to Pluto as: x = 45.70 km, y = -291.80 km, Z = 1,422,498.41 km
• Validated performance using visual overlays and sensitivity to pixel radius accuracy`,
    reportLink: "/reports/pluto.pdf",
  },
  {
    id: "flutter-control",
    title: "Active Flutter Control in Aeroelastic Wing Section",
    letter: "A",
    color: "bg-gray-800",
    category: "Aeroelastic Control",
    image: "/images/flutter-diagram.png",
    description: `This project involved modeling and controlling flutter instability in an aircraft wing section using a two-degree-of-freedom Lagrangian formulation. The system dynamics were captured as a state-space aeroelastic model with coupled plunge and pitch motion, incorporating structural spring-mass-damper dynamics and unsteady aerodynamic forces via the Theodorsen function.

A proportional-integral (PI) compensator was designed to suppress flutter oscillations by commanding aileron deflections in a closed-loop feedback configuration. The project focused on meeting stability margins, minimizing response times, and ensuring actuator feasibility, with emphasis on robustness and feasibility of implementation.

Key Achievements:
• Developed a state-space model of aeroelastic wing behavior using energy-based Lagrangian methods and unsteady aerodynamic theory
• Derived system transfer functions and designed a PI controller: C(s) = 10 + 100/s, with extended versions including shaping filters and compensator dynamics
• Conducted frequency-domain analysis achieving >45° phase margin and >12dB gain margin ensuring robust closed-loop stability
• Settling time for pitch disturbances reached within 0.5 seconds, meeting dynamic requirements
• Verified feasibility by analyzing actuator signal characteristics: Peak aileron deflection = 0.8 rad, Peak rate = 52 rad/s, Control bandwidth ≈ 15 Hz
• Performed root locus, Bode, and step response simulations to validate compensator performance and system response under saturation constraints`,
    reportLink: "/reports/flutter.pdf",
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
          {project.id === "dda-sensor" && (
            <div className="mb-8 relative h-[700px] rounded-lg overflow-hidden bg-black/20">
              <div className="absolute inset-0 flex flex-col">
                <div className="p-8">
                  <div className="text-sm text-zinc-400">{project.category}</div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight">{project.title}</h1>
                </div>
                <div className="flex-1 relative p-12">
                  <Image
                    src="/images/Screenshot 2025-04-22 205057.png"
                    alt="DDA Sensor Research Poster"
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
                  <PDFViewer
                    title="Baker Hughes Internship Report"
                    description="Detailed documentation of my internship experience at Baker Hughes, including projects and achievements."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "caes" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Internship Documentation</h3>
                  <PDFViewer
                    title="CAES Internship Report"
                    description="Comprehensive documentation of my internship experience at CAES, including project work and technical contributions."
                    pdfUrl={project.reportLink || ''}
                  />
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
    <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
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
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <PDFViewer
                    title="SFM Project Report"
                    description="Comprehensive documentation of the SFM project, including CR3BP and CR4BP modeling, MATLAB implementation, and orbital analysis results."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "stingray-uav" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <PDFViewer
                    title="Stingray UAV Aerodynamic Analysis Report"
                    description="Comprehensive documentation of the wind tunnel testing, force balance measurements, flow visualization, and aerodynamic performance analysis of the Stingray UAV."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "cfd-analysis" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <PDFViewer
                    title="CFD Analysis Report"
                    description="Comprehensive documentation of the CFD simulations, including steady-state and transient analysis of NACA 0015 airfoil with high-lift devices using HyperMesh and AcuSolve."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "uni3dad" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <PDFViewer
                    title="Uni-3DAD Research Report"
                    description="Comprehensive documentation of the unified 3D anomaly detection framework, including GAN inversion methodology, point cloud processing, and benchmark evaluation results."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "ekf-lunar-tracking" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <PDFViewer
                    title="EKF Trans-Lunar Tracking Report"
                    description="Comprehensive documentation of the Extended Kalman Filter implementation, including coordinate transformations, Jacobian derivations, and spacecraft state estimation results."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "horizon-opnav" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <PDFViewer
                    title="Horizon-Based OpNav Report"
                    description="Comprehensive documentation of the optical navigation implementation, including camera calibration, limb detection algorithms, and spacecraft position estimation using New Horizons LORRI imagery."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {project.id === "flutter-control" && (
                <>
                  <h3 className="text-xl font-medium mb-4">Project Documentation</h3>
                  <PDFViewer
                    title="Active Flutter Control Report"
                    description="Comprehensive documentation of the aeroelastic wing section modeling, PI compensator design, frequency-domain analysis, and control system validation for flutter suppression."
                    pdfUrl={project.reportLink || ''}
                  />
                </>
              )}

              {!["europa-lander", "baker-hughes", "caes", "dda-sensor", "b2-flying-wing", "cfd-airfoil-study", "sfm-project", "stingray-uav", "cfd-analysis", "uni3dad", "ekf-lunar-tracking", "horizon-opnav", "flutter-control"].includes(project.id) && (
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
