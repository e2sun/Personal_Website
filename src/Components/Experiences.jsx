
import myPic1 from '../Images/AI_LINKEDIN.png';
import myPic2 from '../Images/bnl.png';
import myPic3 from '../Images/Internship-Technology.jpg';
import myPic4 from '../Images/gwi.png';
import myPic5 from '../Images/sbulogo.png';

function Experiences() {
    return (
        <div id="experience_setup">
            <h1 className="my_experiences"> My Experiences</h1>
            <div className="experience_name">
                <span className="experience_date"> January 2026 - December 2026</span>
                <span className="experience_location"> Stony Brook, NY</span>
                <h2 className="experience_title"> Undergraduate Research Assistant </h2>
                <p className="experience_description">
                    Developing my honors thesis research project that uses game theory to model human vs. autonomous
                    vehicle decision-making in mixed traffic scenarios. Building a two-agent Hawk–Dove simulation
                    in Python to analyze how risk aversion and payoff parameters influence Nash/mixed-strategy outcomes,
                    and prototyping an LLM-driven driver agent to simulate diverse human behaviors and evaluate policy-relevant
                    patterns (e.g., humans exploiting cautious AVs).
                </p>

                <img id="experience_pic_5" src={myPic5} alt="Stony Brook University Logo"  style={{ width: "800px", height: "auto" }} />

                <a className="experience_link" href="https://www.cs.stonybrook.edu/students/undergraduate-studies/courses/cse495" alt="Stony Brook University CSE 495 Information" target="_blank"> For more information about the program, click here. </a>

            </div>
            <div className="experience_name">
                <span className="experience_date"> June 2025 - December 2026</span>
                <span className="experience_location"> Buffalo, NY</span>
                <h2 className="experience_title"> Technology Intern </h2>
                <p className="experience_description">
                    Selected for M&T Bank’s 10-week Technology Internship Program, where I enhanced an internal chatbot for the
                    Business Service Portal used by 7,000+ employees using Python, SQL, and Angular. Improved natural-language
                    query handling by training/integrating a deep learning model and building UI features to streamline employee workflows.
                    Earned a contract extension to refactor legacy components and deliver a production-ready ticket viewing history feature
                    using Angular, Java Spring Boot, HTML, and CSS, improving maintainability and user experience across the platform.
                </p>

                <img id="experience_pic_3" src={myPic3} alt="M and T Bank TIP Acceptance" />

                <a className="experience_link" href="https://www.mtb.com/careers/technology-internship-program" alt="M and T Bank TIP Website" target="_blank"> For more information about the program, click here. </a>

            </div>
            <div className="experience_name">
                <span className="experience_date"> May 2025 - May 2026</span>
                <span className="experience_location"> Remote </span>
                <h2 className="experience_title"> Artifical Intelligence Fellow </h2>
                <p className="experience_description">
                    Selected from 3,000+ applicants for Break Through Tech AI, a highly competitive yearlong AI/ML fellowship hosted by Cornell Tech
                    focused on industry-driven, real-world machine learning projects. Highlights include:
                </p>

                <ul className="experience_bullets">
                    <li className="experience_description">
                        Completed an intensive Machine Learning Foundations course (Python, NumPy, scikit-learn, TensorFlow).
                    </li>
                    <li className="experience_description">
                        Developed a computer vision data-extraction model in collaboration with Automation Anywhere to streamline workflows across
                        industries such as healthcare, finance, and logistics.
                    </li>
                    <li className="experience_description">
                        Currently participating in the WiDS Global Datathon (Kaggle) to build calibrated survival models that predict wildfire threats
                        to evacuation zones within 12/24/48/72 hours using only the first five hours of post-ignition data.
                    </li>
                </ul>


                <img id="experience_pic_1" src={myPic1} alt="Breakthrough Tech AI cohort acceptance" />

                <a className="experience_link" href="https://www.breakthroughtech.org" alt="Breakthrough Tech AI website" target="_blank"> For more information about the program, click here. </a>

            </div>
            <div className="experience_name">
                <span className="experience_date"> June 2024 - August 2024</span>
                <span className="experience_location"> Upton, NY</span>
                <h2 className="experience_title"> Science Undergraduate Laboratory Intern </h2>
                <p className="experience_description">
                    Selected for the highly competitive Department of Energy Science Undergraduate Laboratory Internship (SULI) at Brookhaven National Laboratory,
                    where I collaborated with nuclear scientists on a 10-week research project focused on improving neutron resonance classification. Researched
                    the Bayesian Resonance Reclassifier machine learning algorithm to support nuclear data analysis and enhance the accuracy of spin and angular
                    momentum number classification on neutron interaction cross sections—an integral part of modeling nuclear reactors. Applied SciKit-Learn,
                    Jupyter, and Linux to implement multiprocessing techniques using Python, significantly optimizing runtime and enabling more efficient reclassification.
                </p>

                <img className="experience_pic_2" src={myPic2} alt="Brookhaven National Laboratory logo" />

                <a className="experience_link" href="https://www.bnl.gov/education/programs/program.php?q=188" alt="BNL SULI Website" target="_blank"> For more information about the program, click here. </a>

            </div>
            <div className="experience_name">
                <span className="experience_date"> July 2024 - August 2024</span>
                <span className="experience_location"> Remote </span>
                <h2 className="experience_title"> MBA Participant </h2>
                <p className="experience_description">
                    Participated in a rigorous 5-week intensive MBA-style program designed to cultivate future female business leaders. The program
                    emphasized core business and leadership fundamentals, including: Strategic planning, financial management, marketing and
                    entrepreneurial leadership. As part of the program, I developed and presented a comprehensive business plan, applying these skills
                    to a real-world challenge. My project focused on AI applications in fitness technology, showcasing my ability to integrate technical
                    innovation with strategic business thinking. The experience strengthened my public speaking, collaboration, and executive
                    communication skills through mentorship and pitch presentations to business professionals.
                </p>

                <img id="experience_pic_4" src={myPic4} alt="Girls with Impact Logo" />

                <a className="experience_link" href="https://girlswithimpact-cs.squarespace.com/the-academy/" alt="BNL SULI Website" target="_blank"> For more information about the program, click here. </a>

            </div>
            <div className="experience_name">
                <span className="experience_date"> July 2023 - August 2023</span>
                <span className="experience_location"> Upton, NY </span>
                <h2 className="experience_title"> High School Research Program Intern </h2>
                <p className="experience_description">
                    Selected to be part of the highly competitive High School Research Program at Brookhaven National Laboratory. Collaborated with
                    physicists to perform and present six weeks of intensive physics research on large photomultiplier tubes in the new 30-Ton Water
                    Scintillator used to detect anti-neutrinos in the laboratory.
                </p>

                <img className="experience_pic_2" src={myPic2} alt="Brookhaven National Laboratory logo" />

                <a className="experience_link" href="https://www.bnl.gov/education/programs/program.php?q=219" alt="BNL SULI Website" target="_blank"> For more information about the program, click here. </a>

            </div>
        </div>
    );
}

export default Experiences;