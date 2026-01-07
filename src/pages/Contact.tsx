import Hero from '../components/Hero';

const contactHeroData = {
  title: "Let's connect",
  subtitle: "If you’d like to talk about product design, collaboration, or shared interests, I’d be happy to hear from you."
};

export default function Contact() {
  return (
    <>
      <Hero 
        title={contactHeroData.title}
        subtitle={contactHeroData.subtitle}
      />

      <div className="contact-page-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-intro">
                <h3>Interested in a conversation?</h3>
                <p className="lead-text">
                  I enjoy connecting with people working on thoughtful digital products, particularly where design, complexity and real-world impact intersect. Whether you’re exploring an idea, looking to exchange perspectives, or simply want to talk product design, feel free to get in touch.
                </p>
              </div>
              
              <div className="contact-methods">
                <div className="row g-4">
                  <div className="col-md-6">
                    <a
                      href="https://www.linkedin.com/in/sarah-gibson9/"
                      title="Connect on LinkedIn"
                      target="_blank"
                      className="contact-card linkedin-card"
                    >
                      <div className="card-icon">
                        <i className="fab fa-linkedin"></i>
                      </div>
                      <div className="card-content">
                        <h4>LinkedIn</h4>
                        <p>Say  hello or follow my work</p>
                        <span className="card-handle">sarah-gibson9</span>
                      </div>
                      <div className="card-arrow">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                  
                  <div className="col-md-6">
                    <a
                      href="mailto:sarahalgibson95@gmail.com"
                      title="Send me an email"
                      className="contact-card email-card"
                    >
                      <div className="card-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="card-content">
                        <h4>Email</h4>
                        <p>Send a direct message</p>
                        <span className="card-handle">sarahalgibson95@gmail.com</span>
                      </div>
                      <div className="card-arrow">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact-cta">
                <div className="cta-content">
                  <h4>Let’s stay in touch</h4>
                  <p>I’m always interested in thoughtful conversations about design, problem-solving and building meaningful digital experiences.</p>
                  <div className="cta-buttons">
                    <a href="mailto:sarahalgibson95@gmail.com" className="btn btn-primary btn-lg">
                      <i className="fas fa-paper-plane"></i>
                      Contact me
                    </a>
                    <a href="/product-design" className="btn btn-outline btn-lg">
                      <i className="fas fa-eye"></i>
                      View case studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="signature">
        <i className="fas fa-code fa-1x"></i>
        <h6>
          This project was coded by Sarah Gibson, and it is{' '}
          <a
            href="https://github.com/sarahgibsonnnn/My-portfolio"
            target="_blank"
            title="Check out Sarah's Code"
          >
            open-sourced
          </a>
        </h6>
        <i className="fas fa-code fa-1x"></i>
      </div>
    </>
  );
}