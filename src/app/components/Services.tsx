import { FaCode, FaCropAlt } from 'react-icons/fa'
import { SiAppstore } from 'react-icons/si'
import React from 'react'
export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>

        <div className="services-list">
          {/* Web Design */}
          <div>
      <FaCode />
      <h2>Web Design</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, officiis. Autem quo, quam dolorem officia
        similique neque minima soluta! Accusamus.
      </p>
      <a href="#">Learn more</a>
    </div>

          {/* UI/UX Design */}
          <div>
            <FaCropAlt/>
            <h2 >UI/UX Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, officiis. Autem quo, quam dolorem officia
              similique neque minima soluta! Accusamus.
            </p>
            <a href="#" className="text-sm text-white hover:underline">
              Learn more
            </a>
          </div>

          {/* App Design */}
          <div>
            <SiAppstore/>
            <h2 >App Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, officiis. Autem quo, quam dolorem officia
              similique neque minima soluta! Accusamus.
            </p>
            <a href="#" className="text-sm text-white hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
