import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get the document ID from environment variable or use fallback
    const docId = process.env.GOOGLE_DOC_ID || '17OCVfrI0T7cs5TWa5SwCgM8Nm61JiYRIzGuiBz28N9A';

    // Google Docs export URL - exports the doc as PDF
    // Note: The document MUST be publicly shared (Anyone with the link can view)
    const pdfUrl = `https://docs.google.com/document/d/${docId}/export?format=pdf`;

    // Fetch the PDF from Google Docs
    const response = await fetch(pdfUrl, {
      headers: {
        // This ensures we get the PDF without authentication redirects for public docs
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      // Don't cache the response so we always get the latest version
      cache: 'no-store',
      redirect: 'follow',
    });

    if (!response.ok) {
      const errorMessage = `Failed to fetch PDF: ${response.status} ${response.statusText}. Make sure the Google Doc is publicly shared (Anyone with the link can view).`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    // Get the PDF data
    const pdfBuffer = await response.arrayBuffer();

    // Return the PDF with appropriate headers
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Aaryan_Sonawane_Resume.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error fetching resume PDF:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resume' },
      { status: 500 }
    );
  }
}
