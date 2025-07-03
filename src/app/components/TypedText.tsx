// src/app/components/TypedText.tsx
'use client'

import { useEffect } from 'react'
import Typed from 'typed.js'

export default function TypedText() {
  useEffect(() => {
    const options = {
      strings: ['Software Engineer', 'Frontend Developer', 'Web Developer', 'UI Designer', 'Blogger'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    const typed = new Typed('.typing', options)

    return () => typed.destroy()
  }, [])

  return <span className="typing text-red-500" />
}
