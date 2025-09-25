import Hero from '../components/Hero';

const contactHeroData = {
  title: "Let's get in touch!",
  subtitle: "Please contact me below"
};

export default function Contact() {
  return (
    <>
      <Hero 
        title={contactHeroData.title}
        subtitle={contactHeroData.subtitle}
      />

      <div className="contact contact-page hero-buttons m-5">
        <a
          href="https://www.linkedin.com/in/sarah-gibson9/"
          title="View Sarah's LinkedIn Profile"
          target="_blank"
          className="socials btn"
        >
          <i className="fab fa-linkedin fa-2x"></i>
          <h4>Linked In</h4>
          <p>sarah-gibson9</p>
        </a>

        <a
          href="mailto:sarahalgibson95@gmail.com"
          title="Email Sarah"
          target="_blank"
          className="socials btn"
        >
          <i className="fas fa-at fa-2x"></i>
          <h4>Email</h4>
          <p>sarahalgibson95@gmail.com</p>
        </a>

        <a
          href="https://www.shecodes.io/graduates/7683-sarah-gibson"
          target="_blank"
          title="Certificates"
          className="socials btn"
        >
          <i className="fas fa-certificate fa-2x"></i>
          <h4 className="d-none d-sm-block">Certificates</h4>
          <p>SheCodes Profile</p>
        </a>
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