import { useEffect, useState } from 'react'

function Resume() {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="resume_setup">
          <h1 id="resume_header">My Resume</h1>
    
          {!isMobile && (
            <iframe
              src="/Evelyn_Sun_Resume_Updated.docx.pdf"
              width="100%"
              height="1150px"
              title="Resume PDF"
              style={{ border: 'none' }}
            />
          )}
    
          <a
            id="download_button"
            href="/Evelyn_Sun_Resume_Updated.docx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '30px'}}
          >
            {isMobile ? "PDFs don't display on mobile. Tap here to view or download!" : "Click here to Download!"}
          </a>
        </div>
      );
    }

export default Resume;