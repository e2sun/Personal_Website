import myPic1 from '../Images/1.png';
import myPic2 from '../Images/2.png';
import myPic3 from '../Images/3.png';
import myPic4 from '../Images/4.png';
import myPic5 from '../Images/5.png';
import myPic6 from '../Images/new_post.png';
import myPic7 from '../Images/view_post.png';
import myPic8 from '../Images/view_community.png';
import myPic9 from '../Images/view_user.png';
import myPic10 from '../Images/search.png';
import myPic11 from '../Images/create_account.png';
import myPic12 from '../Images/create_community.png';
import myPic13 from '../Images/dashboard.png';
import myPic14 from '../Images/advanced_search.png';
import myPic15 from '../Images/upload.png';
import myPic16 from '../Images/dashboard-copy.png';
import myPic17 from '../Images/companies-copy.png';
import myPic18 from '../Images/applications-copy.png';
import myPic19 from '../Images/company-detail-copy.png';
import myPic20 from '../Images/add-company-copy.png';
import myPic21 from '../Images/add-application-copy.png';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


const projectData = [
    {
        title: 'Internship Application Tracker',
        description: [
            `Tech recruiting season can feel brutal, so to cut through the chaos I built a full-stack Internship Application
            Tracker to organize and visualize applications across companies, roles, and recruiting stages. On the
            frontend, I implemented a responsive, component-based Angular UI in TypeScript with dynamic routing, 
            in-place status editing, sorting, and CRUD forms that trigger real-time updates. On the backend, 
            I designed and built RESTful APIs with Spring Boot backed by PostgreSQL, modeling entity relationships, 
            cascading deletes, and repository-level queries for efficient data access. I also added client-side validation, 
            modal confirmations, and an intuitive analytics dashboard, and managed the project using Git and GitHub for version control 
            and development workflow.`
        ],
        images: [myPic16, myPic17, myPic18, myPic19, myPic20, myPic21],
        github: 'https://github.com/e2sun/intership-application-tracker-frontend',
    },
    {
        title: 'Seawolf Connect',
        description: [
            `Seawolf Connect was born from the desire to help students dive deeper into Stony Brook’s vibrant campus life.
         With over 25,000 students, finding peers with shared interests can be challenging. As an incoming freshman, I
         was lucky to discover my WISE (Women in Science and Engineering) community—a supportive network where I met some
         of my closest friends to this day. Now, with Seawolf Connect, I hope to create the same welcoming space for every
         Seawolf, whether you’re looking to network, build genuine friendships, or form the perfect study group. The platform
         features an interactive quiz that reveals your unique "wolfienality"—a fun blend of your personality and Seawolf spirit.
         Once you discover your results, you can opt to add your information to our system and connect with fellow Seawolves who
         share the same mascot match. You’ll then be directed to a dedicated page where you can explore and connect with others who
         have your wolfienality. We built Seawolf Connect using HTML, CSS, and JavaScript to ensure a modern, interactive experience.
         Our custom illustrations of Wolfie were digitally drawn in Adobe Fresco, and the wolfienality results page was thoughtfully designed
         using Canva. Special thanks to Charlotte Cain, Malia Ng, and Esther Wang for their contributions to the project.`
        ],
        images: [myPic1, myPic2, myPic3, myPic4, myPic5],
        github: 'https://github.com/e2sun/HopperHacks2025',
    },
    {
        title: 'Phreddit (Phony Reddit)',
        description: [
            `Co-developed Phreddit, a full-stack Reddit-inspired web application supporting user registration and authentication,
            community creation, post submission, and threaded commenting through a responsive, component-based UI. Architected and
            implemented the frontend using React, with client-side routing and reusable components to ensure a dynamic experience.
            Designed and built RESTful APIs with Node.js and Express to manage authentication, CRUD operations, and relationships
            between users, communities, posts, and comments. Modeled data schemas in MongoDB and optimized queries for real-time data
            retrieval. Integrated asynchronous data fetching and form validation with Axios to support seamless interactions. Managed
            version control and collaboration workflows using Git and GitHub feature branches.`
        ],
        images: [myPic6, myPic7, myPic8, myPic9, myPic10, myPic11, myPic12],
        github: 'https://github.com/e2sun/phreddit',
    },
    {
        title: 'Grant Request Management Accelerator',
        description: [
            `Participated in a 2-day interdisciplinary tech design challenge hosted by PowerUpTech Buffalo, a nonprofit organization promoting
            sustainable, inclusive, and accessible technology in Western New York. Collaborated with a diverse team of students from backgrounds
            in technology, finance, psychology, and engineering to address a real-world challenge presented by Harvest House Buffalo: organizing
            and streamlining their grant-related documentation process. Our winning solution utilized tools within Harvest House’s existing Zoho One
            subscription to develop a low-cost, secure, and HIPAA-compliant grant management system. This included building a centralized grant request
            platform in Zoho Creator using AI-powered prompt engineering, using Zoho Forms for community intake, and designing a grant writing assistant
            in Zoho Write & Research Studio. The solution stood out for its simplicity, scalability, and direct integration into the organization’s existing
            workflow, making it realistic and implementation-ready. The final presentation was delivered using Canva, accompanied by a working demo showcased on Devpost.`
        ],
        images: [myPic13, myPic14, myPic15],
        github: 'https://devpost.com/software/byte-back-buffalo-and-harvest-house-buffalo',
    }
]


function Projects() {

    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = projectData.length;
    const [selectedImage, setSelectedImage] = useState(null);


    const currentProject = projectData[currentPage];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);


    return (
        <div id="project_setup">
            <ul>
                <li><h1>{currentProject.title}</h1></li>
                {currentProject.description.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}

                <div id="wolfie_gallery">
                    {currentProject.images.map((img, index) => (
                        <img key={index} src={img} alt={`project pic ${index + 1}`} onClick={() => setSelectedImage(img)} />
                    ))}
                </div>

                <br />
                <br />

                <a
                    id="github_link"
                    href={currentProject.github}
                    target="_blank"
                    className="page_button"
                >
                    For more information, click here.
                </a>
            </ul>
            <div className="page_controls">
                <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage === 0}
                    className={`page_button ${currentPage === 0 ? 'disabled' : ''}`}
                >
                    <FontAwesomeIcon icon={faArrowLeft} /> Prev
                </button>

                <span className="page-number">
                    Page {currentPage + 1} of {totalPages}
                </span>

                <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage === totalPages - 1}
                    className={`page_button ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                >
                    Next <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Expanded view" className="modal-image" />
                </div>
            )}


        </div>
    )
}



export default Projects;