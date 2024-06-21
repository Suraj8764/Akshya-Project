import Image from 'next/image';
import styles from './page.module.css';
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { SiCampaignmonitor } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { FaConnectdevelop } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>AKESHYA</div>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact us</a>
        </nav>
      </header>
      <section className={styles.heroSection} id="home">
        <div className={styles.heroText}>
          <h1 className={styles.title}>Grow your business with Akeshya</h1>
          <p className={styles.subtitle}>
            We are a team of talented website designers, developers & digital marketers.
          </p>
          <button className={styles.button}>Get Started</button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=1024x1024&w=is&k=20&c=D1vOFvPH5YG87jlDs8g9THoClPfmdbAsHx2J4PdDtcI="
            alt="Business Illustration"
            width={500}
            height={300}
          />
        </div>
      </section>
      <section className={styles.about} id="about">
        <h2 className={styles.aboutTitle}>About Us</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
            </p>
            <ul>
              <li>We started with a simple idea: do what is best for the client.</li>
              <li>Our methodical and individual approach to each project delivers the finest possible results for your media.</li>
              <li>Our day-to-day work is to solve your problems utilizing the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>
            </ul>
          </div>
          <div className={styles.aboutText}>
            <p>
              We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
            </p>
            <div className={styles.aboutButton}>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.stats}>
        <div className={styles.statItem}>
          <FaRegFaceSmile />
          <h3>3835039</h3>
          <p>Organic Reach (Global)</p>
        </div>
        <div className={styles.statItem}>
          <FaClock />
          <h3>14081</h3>
          <p>Watch Hours (Asia)</p>
        </div>
        <div className={styles.statItem}>
          <SiCampaignmonitor />
          <h3>85</h3>
          <p>Campaigns</p>
        </div>
        <div className={styles.statItem}>
          <BsGlobe />
          <h3>17</h3>
          <p>Excellent CTR % (Asia)</p>
        </div>
      </section>
      <section className={styles.services} id="services">
        <h2 className={styles.servicesTitle}>Services</h2>
        <p>Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</p>
        <div className={styles.servicesContent}>
          <div className={styles.serviceItem}>
          <FaConnectdevelop />
            <h3>Design</h3>
            <p>
              Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.
            </p>
          </div>
          <div className={styles.serviceItem}>
          <MdOutlineContactPage />
            <h3>Development</h3>
            <p>
              Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.
            </p>
          </div>
          <div className={styles.serviceItem}>
          <IoMdGlobe />
            <h3>Marketing</h3>
            <p>
              A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.
            </p>
          </div>
          <div className={styles.serviceItem}>
          <FaClockRotateLeft />
            <h3>Support</h3>
            <p>
              Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.process} id="process">
        <h2 className={styles.processTitle}>Our Process</h2>
        <p>Over the years we've evolved a tested method for attaining achievement for each one of our clients.</p>
        <div className={styles.processContent}>
          <div className={styles.processItem}>
            <h5>Planning</h5>
            <p>We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page.</p>
          </div>
          <div className={styles.processItem}>
            <h5>Design</h5>
            <p>We build our websites carefully through a series of workshops, wireframing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.</p>
          </div>
          <div className={styles.processItem}>
            <h5>Development</h5>
            <p>We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.</p>
          </div>
          <div className={styles.processItem}>
            <h5>Launch</h5>
            <p>We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert.</p>
          </div>
        </div>
      </section>
      <section className={styles.features} id="features">
        <h2 className={styles.featuresTitle}>Our Core Features</h2>
        <p>Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.</p>
        <div className={styles.featuresContent}>
          <div className={styles.featureItem}>
            <img src="/icons/webdesign.svg" alt="Web Design" width={64} height={64} />
            <h5>Web Design</h5>
          </div>
          <div className={styles.featureItem}>
            <img src="/icons/development.svg" alt="Development" width={64} height={64} />
            <h5>Development</h5>
          </div>
          <div className={styles.featureItem}>
            <img src="/icons/branding.svg" alt="Branding" width={64} height={64} />
            <h5>Branding</h5>
          </div>
          <div className={styles.featureItem}>
            <img src="/icons/mediabuying.svg" alt="Media Buying" width={64} height={64} />
            <h5>Media Buying</h5>
          </div>
        </div>
      </section>
      <section className={styles.contact} id="contact">
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <p>Akeshya</p>
            <p>Designers, developers & marketers capable of delivering solutions according to your needs.</p>
            <p>26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
            <p>info@akeshya.com</p>
            <p>+91 94942 40922</p>
          </div>
          <div className={styles.contactForm}>
            <form>
              <input type="text" name="name" placeholder="Your Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; Copyright Akeshya. All Rights Reserved</p>
        <p>
          <a href="#terms">Terms and conditions</a> | <a href="#refund">Refund policy</a> | <a href="#privacy">Privacy policy</a>
        </p>
      </footer>
    </main>
  );
}
