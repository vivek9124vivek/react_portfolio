import { FaPaperPlane, FaPhone, FaLinkedinIn, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          {/* Left */}
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><FaPaperPlane className="fa-sharp fa-solid fa-paper-plane" /> vivek9124vivek@gmail.com</p>
            <p className="flex items-center gap-2 mb-4"><FaPhone className="text-red-500" /> +91-9887361982</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/vivekkumar33/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://m.facebook.com/100009960542214/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
            <a
              href="/Vivek_Kumar.pdf"
              download
              className="btn btn-2"
            >Download CV</a>
          </div>

          {/* Right */}
          <div className="contact-right">
            <form name="submit-to-google-sheet" className="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required className="w-full p-3 rounded bg-[#262626] text-white" />
              <input type="email" name="Email" placeholder="Your Email" required className="w-full p-3 rounded bg-[#262626] text-white" />
              <textarea name="Message" rows={6} placeholder="Your Message" className="w-full p-3 rounded bg-[#262626] text-white"></textarea>
              <button type="submit" className="btn btn-2">Submit</button>
              <span id="msg" className="block text-green-500 mt-2"></span>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
