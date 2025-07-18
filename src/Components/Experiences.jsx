
import myPic1 from '../Images/AI_LINKEDIN.png';
import myPic2 from '../Images/bnl.png';
import myPic3 from '../Images/Internship-Technology.jpg';
import myPic4 from '../Images/gwi.png';

function Experiences() {
    return (
        <div id="experience_setup">
            <h1 className="my_experiences"> My Experiences</h1>
            <div className="experience_name">
                <span className="experience_date"> June 2025 - August 2026</span>
                <span className="experience_location"> Buffalo, NY</span>
                <h2 className="experience_title"> Software Engineer Intern </h2>
                <p className="experience_description">
                    Selected for M&T Bank’s highly competitive 10-week Technology Internship Program (TIP), focused on innovation in the financial services
                    industry. Contributing to the development of an enhanced internal chatbot for the Business Service Portal, designed to assist employees
                    in navigating complex applications through natural language queries. Leveraging Python, SQL, and Angular to train and test a deep learning
                    model while implementing new features and functionality. The chatbot is scheduled for production deployment by the end of the summer. The
                    program also includes structured professional development, networking events with executive leadership, and exploration of career paths in
                    fintech and engineering.
                </p>

                <img id="experience_pic_3" src={myPic3} alt="M and T Bank TIP Acceptance" />

                <a className="experience_link" href="https://www.mtb.com/careers/technology-internship-program" alt="M and T Bank TIP Website" target="_blank"> For more information about the program, click here. </a>

            </div>
            <div className="experience_name">
                <span className="experience_date"> May 2025 - May 2026</span>
                <span className="experience_location"> Remote </span>
                <h2 className="experience_title"> Artifical Intelligence Fellow </h2>
                <p className="experience_description">
                    Selected as a fellow for Break Through Tech AI, a highly competitive yearlong AI Program, hosted by Cornell Tech and supported
                    by industry partners to increase diversity in artificial intelligence and machine learning. The program includes: </p>


                <p className="experience_description"> Intensive summer Machine Learning Foundations course (Python, pandas, scikit-learn, NumPy) </p>
                <p className="experience_description"> Hands-on, semester-long AI/ML project in collaboration with a leading tech company </p>
                <p className="experience_description"> Career development coaching, mentorship, and networking opportunities </p>
                <p className="experience_description"> Focus on real-world applications of AI, including ethical considerations and inclusive design </p>


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