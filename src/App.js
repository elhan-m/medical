import React from 'react';
import './style.css';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <div>
          <img src="/img1.png" alt="Logo" />
          <div>
            <a href="">Home</a>
            <a href="">Doctor</a>
            <a href="">Services</a>
            <a href="">Review</a>
          </div>
        </div>
        <div>
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Medical Care Now Simplified For Everyone</h1>
            <p>
              Health carely is a new way to get health insurance quotes. We offer tools similar to 
              those provided by insurance companies for free and prices are based on donations and not 
              restrictive health plan networks.
            </p>
            <button className="contact-button">Contact Us</button>
          </div>
          <div className="hero-image">
            <img src="/doctor.png" alt="Doctor" />
          </div>
        </section>

        <section className="solutions-section">
          <div><p>Fast Solutions</p></div>
          <h2>Step by Step to Get Your Solutions</h2>
          <div className="steps-container">
            {[
              { icon: "/icon1.png", title: "Check Health Complaints", desc: "Check the disease so you can easily choose the right specialist" },
              { icon: "/icon2.png", title: "Choose Doctor Specialist", desc: "Choose a specialist according to your disease complaints" },
              { icon: "/icon3.png", title: "Make a Schedule", desc: "Make a schedule with the doctor so you can start the examination" },
              { icon: "/icon4.png", title: "Get Your Solutions", desc: "Find the right healing method after examination with a specialist" }
            ].map((step, index) => (
              <div key={index} className="step">
                <img src={step.icon} alt={step.title} />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="find-doctor-section">
          <div className="find-doctor-content">
            <h1>Find the right doctor according to your complaint</h1>
            <p>
              HealthCare.ly is a free health app that goes beyond matching you with doctors.
              It actively helps you find the right doctor based on your medical and personal
              needs and connects you with your HealthCarely community for ongoing
              support throughout your journey to healthier living.
            </p>
            <ul>
              <li>100% free app designed to help you find the right doctor for you.</li>
              <li>Available 900 doctors specialists.</li>
            </ul>
            <button className="see-doctors-button">See the Doctors</button>
          </div>
          <div className="available-doctors">
            <h3>Available Doctors</h3>
            <div className="doctor-list">
              {[
                { img: "/girl1.png", name: "Dr. Adinda", specialty: "Eye Specialist" },
                { img: "/girl2.png", name: "Dr. Jackson", specialty: "Ear Specialist" }
              ].map((doctor, index) => (
                <div key={index} className="doctor">
                  <img src={doctor.img} alt={doctor.name} />
                  <div>
                    <h4>{doctor.name}</h4>
                    <p>{doctor.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="find-doctor-button">Find Doctor</button>
          </div>
          <div className="doctor-image">
            <img src="/girlbig1.png" alt="Doctor pointing" />
          </div>
        </section>
        <div className="schedule-section">
      <div className="schedule-image">
        <img src="/img3.png" alt="Doctor and patient meeting" />
      </div>
      <div className="schedule-content">
        <h3>Make a Shedule</h3>
        <h2>Make a schedule in advance with the available doctor</h2>
        <p>
          Healthcare is a very painful process, especially if you're not taking care
          of your health and having regular check-ups. HealthyCarely makes it
          easier for everyone to schedule a doctor's appointment.
        </p>
        <ul>
          <li>Make a schedule online is easy</li>
          <li>Easy to connect with doctor</li>
        </ul>
        <button className="schedule-button">Make Schedule Now!</button>
      </div>
    </div>
    <div className="schedule-section">
  <div className='schedule-section-two'>
  <div className="rating-description">
  <h6>Our Rating</h6>
    <p>We’re employee benefit at 7500+ hospitals</p>
  </div>
  <div className="rating-cards">
    <div className="rating-card">
      <h3>900+</h3>
      <p>Verified Specialist</p>
      <span>Highly Verified</span>
    </div>
    <div className="rating-card">
      <h3>45000+</h3>
      <p>Happy Customers</p>
      <span>Highly Performance</span>
    </div>
    <div className="rating-card">
      <h3>99.7%</h3>
      <p>Positive Feedback</p>
      <span>Customers Approve</span>
    </div>
  </div>
  </div>
</div>
<div className="feedback-section">
  <h2>Our patients feedback about us</h2>
  <p className="feedback-subtitle">their impression after using this application</p>
  
  <div className="feedback-container">
    <div className="feedback-image">
      <img src="/man.png" alt="Patient" />
    </div>
    <div className="feedback-text">
      <p className="feedback-quote">
        “Healthycarely is a website and mobile app for you to feel better or get medical help. 
        We offer you a 24/7 doctor service with no appointment needed.”
      </p>
      <h4>Naufal Hidayat</h4>
      <p className="feedback-user">Student at Telkom University</p>
    </div>
  </div>
</div>
      </main>
      <footer class="footer">
  <div class="footer-container">
    <div class="footer-section logo-section">
      <h2>Healthy<span class="highlight">Carely</span></h2>
      <p>This free App provides a solution to your health needs by offering you a one-stop access to complete information about various medical checkups. This App carries simple tips and advice to help you maintain a healthy lifestyle.</p>
    </div>
    <div class="footer-section">
      <h4>Overview</h4>
      <ul>
        <li><a href="#">Checking Health</a></li>
        <li><a href="#">Find Doctor</a></li>
        <li><a href="#">Make a Schedule</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Company</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Explore</h4>
      <ul>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Cookies</a></li>
      </ul>
    </div>
    <div class="footer-section social-media-section">
      <h4>Social Media</h4>
      <div class="social-icons">
        <a href="#"><img src="/icons/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
        <a href="#"><img src="/icons/twitter.png" alt="Twitter" /></a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;