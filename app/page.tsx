import { ProjectGrid } from "@/components/project-grid"
import { SocialIcons } from "@/components/social-icons"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="p-6 flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <h1 className="text-2xl md:text-4xl font-light tracking-tight">Aaryan's corner of the internet</h1>
        </div>
        <div className="ml-auto flex items-center gap-6">
          <Link 
            href="/resume/Aaryan_Sonawane_Resume.pdf" 
            className="text-white/70 hover:text-white transition-colors"
            target="_blank"
          >
            Resume
          </Link>
          <SocialIcons />
        </div>
      </header>

      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shrink-0 bg-black">
            <Image
              src="/images/FLORA-Remove_Watermark-a8e8f707-removebg-preview.png"
              alt="Aaryan Sonawane"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
          <div className="max-w-3xl pt-2">
            <p className="text-gray-400 text-lg font-light tracking-wide">
              Hi my name is Aaryan Sonawane. I believe in the power of modern technology and use it to maximise my full potential.
            </p>
          </div>
        </div>
      </div>

      <ProjectGrid />
    </main>
  )
}
