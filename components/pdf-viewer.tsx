"use client"
import { useState } from "react"

interface PDFViewerProps {
  title: string
  description: string
  pdfUrl: string
}

export function PDFViewer({ title, description, pdfUrl }: PDFViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <div className="bg-black/40 p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{description}</p>

        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
          >
            {isExpanded ? "Hide Preview" : "Show Preview"}
          </button>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            Open PDF
          </a>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 bg-black/20">
          <div className="bg-white rounded-lg overflow-hidden" style={{ height: "500px" }}>
            <iframe src={`${pdfUrl}#view=FitH`} title={title} width="100%" height="100%" style={{ border: "none" }} />
          </div>
        </div>
      )}
    </div>
  )
}
