import myPic1 from '../Images/IMG_1258.png';
import myPic2 from '../Images/niagra.jpeg';
import myPic3 from '../Images/m&t.jpeg';

import { useState } from 'react'

function Home() {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <div id="home_setup">
            <h1 id="about_me_header"> About Me</h1>
            <div id="about-content">

                <div id="collage_container">
                    <img src={myPic1} alt="Collage 1" onClick={() => setSelectedImage(myPic1)} />
                    <img src={myPic2} alt="Collage 2" onClick={() => setSelectedImage(myPic2)} />
                    <img src={myPic3} alt="Collage 3" onClick={() => setSelectedImage(myPic3)} />
                </div>


                <p id="description">
                    Hi! My name is Evelyn, and I am a junior studying Computer Science with a specialization in Artificial Intelligence and
                    Data Science at Stony Brook University, NY. I'm passionate about pursuing a career in technology that applies machine learning to make a meaningful impact in the real world.
                    I’m particularly interested in using ML to address challenges in healthcare, environmental sustainability, and education — fields where data-driven solutions can directly improve lives and decision-making.
                </p>

                <div id="quick_facts">
                    <h3>✨ Quick Facts ✨</h3>
                    <ul>
                        <li>🏡 Hometown: Levittown, NY</li>
                        <li>🏊‍♀️ Favorite Sport: Swimming</li>
                        <li>🎶 Favorite Artist: NCT Dream</li>
                        <li>🧋 Favorite Drink: Boba or Iced Coffee</li>
                        <li>🌏 Travel Destination: Across Asia</li>
                    </ul>
                </div> 

            </div>

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Expanded view" className="modal-image" />
                </div>
            )}


        </div>
    )
}

export default Home;