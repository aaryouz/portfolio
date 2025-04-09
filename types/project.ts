export type Project = {
  id: string
  title: string
  letter: string
  color: string
  emoji: string
  category: string
  image: string | null
  description: string
  reportLink?: string
  slidesLink?: string
  order?: number
}
