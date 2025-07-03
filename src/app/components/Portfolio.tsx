import Image from 'next/image'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

export default function Portfolio() {
  return (
       <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          {[1, 2, 3].map((num, index) => (
            <div key={index} className="work">
              <Image src={`/work-${num}.png`} alt={`work-${num}`} width={500} height={500} />
              <div className="layer">
                <h3>{['Illustratify', 'Music App', 'Online Shop App'][index]}</h3>
                <p>The app connects you to the talented people around the world.</p>
                <a
                  href={
                    index === 0
                      ? 'https://design-sync.vercel.app/'
                      : '#'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <a href="#" className="btn">See more</a> */}
      </div>
    </div>
  )
}