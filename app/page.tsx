import { ProjectGrid } from "@/components/project-grid"
import { SocialIcons } from "@/components/social-icons"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="p-6 flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <h1 className="text-2xl md:text-4xl font-light tracking-tight">Aaryan's corner of the internet</h1>
        </div>
        <div className="ml-auto">
          <SocialIcons />
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mb-12">
          <p className="text-gray-400 text-lg font-light tracking-wide">
            Aerospace Engineering student at Rensselaer Polytechnic Institute (RPI), focusing on space systems,
            aerostructures, and mechanical design.
          </p>
        </div>
      </div>

      <ProjectGrid />
    </main>
  )
}
