import Image from 'next/image'
import { useState } from 'react'
import '../globals.css'

export default function About() {
  const [activeTab, setActiveTab] = useState<'skills' | 'education' | 'experience'>('skills')

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          {/* Left Image */}
          <div className="about-col-1">
            <Image
              src="/user.png"
              alt="Vivek"
              width={400}
              height={400}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              As a highly skilled and motivated developer with expertise in Web Development and Software Development as well
              as a strong interest in Database Management, I am excited to apply my knowledge and experience to any given
              role. With a passion for technology and a love for problem-solving. I have knowledge of JSON, XML, NPM modules
              and DOM manipulation.
            </p>

            {/* Tabs */}
            <div className="tab-titles">
  <p
    className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
    onClick={() => setActiveTab('skills')}
  >
    Skills
  </p>
  <p
    className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
    onClick={() => setActiveTab('education')}
  >
    Education
  </p>
  <p
    className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
    onClick={() => setActiveTab('experience')}
  >
    Experience
  </p>
</div>


            {/* Tab Content */}
            {activeTab === 'skills' && (
  <div className="tab-contents active-tab" id="skills">
    <ul>
      <li><span>Frontend</span><br />HTML, CSS, JS, Reactjs</li>
      <li><span>Backend</span><br />Node.js, Express.js, Mongoose</li>
      <li><span>Version Control System</span><br />Git and GitHub</li>
      <li><span>Operating System</span><br />Linux and Windows</li>
    </ul>
  </div>
)}


            {activeTab === 'education' && (
  <div className="tab-contents active-tab" id="education">
    <ul>
      <li><span>2020 - 2024</span><br />I pursued B.Tech from IIIT Vadodara in CSE.</li>
      <li><span>2018 - 2020</span><br />I were studying in 12th class</li>
      <li><span>2016 - 2018</span><br />I were studying in 10th class</li>
    </ul>
  </div>
)}


            {activeTab === 'experience' && (
  <div className="tab-contents active-tab" id="experience">
    <ul>
      <li><span>Illustratify</span><br />I have built a Figma clone.</li>
      <li><span>Countdown Timer</span><br />I have designed a countdown timer for a cricket match.</li>
      <li><span>Drum Kit System</span><br />I have made a drum kit music system.</li>
    </ul>
  </div>
)}

          </div>
        </div>
      </div>
    </section>
  )
}
