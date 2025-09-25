import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const aboutHeroData = {
  title: "👋 Hi I am Sarah Gibson",
  subtitle: "Senior Product Designer and Front End Developer based in London",
  buttons: [
    {
      text: "Contact Me",
      link: "/contact",
      title: "Contact Sarah"
    }
  ]
};

export default function About() {
  return (
    <>
      <Hero 
        title={aboutHeroData.title}
        subtitle={aboutHeroData.subtitle}
        buttons={aboutHeroData.buttons}
      />

      <div className="section">
        <h3 className="text-center p-3">About Me</h3>
      </div>

      <div className="container">
        <div className="row example">
          <div className="col-sm-6">
            <img
              src="/images/me.jpg"
              alt="Me"
              className="img-fluid rounded d-sm-block img-thumbnail mb-3"
            />
          </div>
          <div className="col-sm-6 example-desc">
            <h2>Hello!</h2>
            <p>
              I am a qualified Product, UX, UI designer and front end developer based in London. 
              I have over 6 years experience in the industry and currently undertaking a variety 
              of UX projects in the healthcare sector in my current role. Please view examples of 
              the projects I have completed outside of work. I hope you enjoy following my journey 
              as I gain more experience in front-end development!
            </p>
            <Link to="/work" title="View Sarah's work" className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>

      <div className="skills">
        <h2 className="text-center p-3">Skills</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4 skill-example">
            <i className="fas fa-code fa-4x"></i>
            <h4>Front End Developer</h4>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>API</li>
              <li>Bootstrap</li>
              <li>Github</li>
            </ul>
          </div>

          <div className="col-sm-4 skill-example">
            <i className="far fa-sticky-note fa-4x"></i>
            <h4>UX Designer</h4>
            <ul>
              <li>Design process</li>
              <li>Responsive Design</li>
              <li>User testing</li>
              <li>Affinity Diagrams</li>
            </ul>
          </div>

          <div className="col-sm-4 skill-example">
            <i className="fas fa-paint-brush fa-4x"></i>
            <h4>UI Designer</h4>
            <ul>
              <li>Iconography</li>
              <li>Typography</li>
              <li>Eye for design</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}