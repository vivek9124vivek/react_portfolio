'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    script.async = true;
    script.onload = () => {
      // Define the expected type of the Typed constructor
      type TypedOptions = {
        strings: string[];
        typeSpeed: number;
        backSpeed: number;
        loop: boolean;
      };

      type TypedConstructor = new (
        element: string | Element,
        options: TypedOptions
      ) => { destroy: () => void };

      const Typed = (window as unknown as { Typed: TypedConstructor }).Typed;

      if (Typed) {
        new Typed('.typing', {
          strings: [
            'Software Engineer',
            'Frontend Developer',
            'Web Developer',
            'UI Designer',
            'Blogger',
          ],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="header"
      className="container"
      style={{ backgroundImage: 'url("/background.png")' }}
    >
      <div className="container mx-auto px-10 py-4">
        <nav>
          <Image src="/zyro-image.png" alt="logo" width={140} height={40} />
          <ul id="sidemenu">
            <li>
              <a href="#header" className="text-white hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-red-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-white hover:text-red-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-text">
          <h3>Hello, It&apos;s Me</h3>
          <h1 className="text-6xl mt-4 font-bold">Vivek Kumar</h1>
          <h3 className="mt-2 text-2xl md:text-3xl">
            And I&apos;m a <span className="typing text-red-500"></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
