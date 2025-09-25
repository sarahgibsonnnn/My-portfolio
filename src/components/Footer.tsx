export default function Footer() {
  return (
    <footer>
      <div className="contact">
        <a 
          href="https://www.linkedin.com/in/sarah-gibson9/" 
          target="_blank" 
          title="Go to Sarah's LinkedIn Profile" 
          className="socials btn"
        >
          <i className="fab fa-linkedin fa-2x"></i>
          <h4 className="d-none d-md-block">LinkedIn</h4>
          <p className="d-none d-sm-block">sarah-gibson9</p>
        </a>
        
        <a 
          href="mailto:sarahalgibson95@gmail.com" 
          target="_blank" 
          title="Email Sarah" 
          className="socials btn"
        >
          <i className="fas fa-at fa-2x"></i>
          <h4 className="d-none d-md-block">Email</h4>
          <p className="d-none d-sm-block">sarahalgibson95@gmail.com</p>
        </a>

        <a 
          href="https://www.shecodes.io/graduates/7683-sarah-gibson" 
          target="_blank" 
          title="Certificates" 
          className="socials btn"
        >
          <i className="fas fa-certificate fa-2x"></i>
          <h4 className="d-none d-md-block">Certificates</h4>
          <p className="d-none d-sm-block">SheCodes Profile</p>
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
    </footer>
  );
}