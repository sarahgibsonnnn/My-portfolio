import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SkillTag from '../components/SkillTag';

// Function to calculate years of experience from October 2018
const calculateYearsOfExperience = (): string => {
  const startDate = new Date(2018, 9, 1); // October 1, 2018 (month is 0-indexed)
  const currentDate = new Date();
  
  const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                     (currentDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (months === 0) {
    return `${years}`;
  } else if (months < 6) {
    return `${years}+`;
  } else {
    return `${years}.5+`;
  }
};

// Function to calculate duration between two dates
const calculateDuration = (startYear: number, startMonth: number, endYear?: number, endMonth?: number): string => {
  const startDate = new Date(startYear, startMonth - 1, 1);
  const endDate = endYear && endMonth ? new Date(endYear, endMonth - 1, 1) : new Date();
  
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                     (endDate.getMonth() - startDate.getMonth());
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  
  if (years === 0) {
    return months === 1 ? '1 month' : `${months} months`;
  } else if (months === 0) {
    return years === 1 ? '1 year' : `${years} years`;
  } else {
    const yearText = years === 1 ? '1 year' : `${years} years`;
    const monthText = months === 1 ? '1 month' : `${months} months`;
    return `${yearText}, ${monthText}`;
  }
};

// Function to format date range
const formatDateRange = (startYear: number, startMonth: number, endYear?: number, endMonth?: number): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const start = `${months[startMonth - 1]} ${startYear}`;
  const end = endYear && endMonth ? `${months[endMonth - 1]} ${endYear}` : 'Present';
  return `${start} - ${end}`;
};

const aboutHeroData = {
  title: "👋 Hi, I'm Sarah Gibson",
  subtitle: `Senior Product Designer & Front-End Developer | ${calculateYearsOfExperience()} Years Experience | Healthcare UX Specialist | London`,
  buttons: [
    {
      text: "Contact Me",
      link: "/contact",
      title: "Contact Sarah"
    },
    {
      text: "View LinkedIn",
      link: "https://www.linkedin.com/in/sarah-gibson9/",
      title: "View Sarah's LinkedIn Profile"
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

      {/* Professional Summary */}
      <div className="container">
        <div className="row example">
          <div className="col-md-6">
            <img
              src="/images/me.jpg"
              alt="Sarah Gibson - Senior Product Designer"
              className="img-fluid rounded d-sm-block img-thumbnail mb-3"
            />
          </div>
          <div className="col-md-6 example-desc">
            <h2>Professional Summary</h2>
            <p>
              <strong>Senior Product Designer and Front-End Developer</strong> with {calculateYearsOfExperience()} years of experience 
              creating user-centered digital solutions in healthcare and consumer applications. 
              Currently driving UX innovation in the healthcare sector, designing complex systems 
              that serve 1000+ healthcare professionals daily.
            </p>
            <p>
              I bridge the gap between design and development, leading projects from user research 
              and wireframing through to React implementation. My expertise spans the complete 
              product lifecycle, with a passion for accessible, data-driven design solutions.
            </p>
            <div className="d-flex gap-2 flex-wrap">
              <Link to="/work" title="View Sarah's work" className="btn">
                View My Work
              </Link>
              <a 
                href="https://www.linkedin.com/in/sarah-gibson9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                title="View LinkedIn Profile"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Highlights */}
      <div className="subsection">
        <div className="container py-5">
          <h3 className="text-center mb-5 text-white">Experience Highlights</h3>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="experience-card">
                <div className="experience-icon">
                  <i className="fas fa-heartbeat fa-3x"></i>
                </div>
                <h4>Healthcare UX Specialist</h4>
                <p className="experience-role">Current Role</p>
                <p>
                  Leading UX design for healthcare applications, conducting stakeholder interviews 
                  and creating complex data interfaces that improve patient outcomes and workflow efficiency.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="experience-card">
                <div className="experience-icon">
                  <i className="fas fa-users fa-3x"></i>
                </div>
                <h4>User-Centered Design</h4>
                <p className="experience-role">{calculateYearsOfExperience()}+ Years</p>
                <p>
                  Expert in user research, persona development, journey mapping, and usability testing. 
                  Proven track record of improving conversion rates by 40% through data-driven design decisions.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="experience-card">
                <div className="experience-icon">
                  <i className="fas fa-code fa-3x"></i>
                </div>
                <h4>Full-Stack Development</h4>
                <p className="experience-role">React Specialist</p>
                <p>
                  Bridging design and development with modern React applications, API integrations, 
                  and responsive interfaces that bring UX designs to life with pixel-perfect implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="container py-5">
        <h3 className="text-center mb-5">Career Journey</h3>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="career-timeline">
              <div className="timeline-item current">
                <div className="timeline-date">
                  <span className="date-range">{formatDateRange(2022, 1)}</span>
                  <span className="duration">({calculateDuration(2022, 1)})</span>
                </div>
                <div className="timeline-content">
                  <h4>Senior Product Designer</h4>
                  <p className="company">Healthcare Sector</p>
                  <p>
                    Leading UX design for healthcare applications serving 1000+ professionals. 
                    Conducting stakeholder interviews, creating complex data interfaces, and 
                    improving patient outcomes through user-centered design.
                  </p>
                  <div className="achievement-tags">
                    <span className="achievement-tag">Enterprise UX</span>
                    <span className="achievement-tag">Healthcare Systems</span>
                    <span className="achievement-tag">Stakeholder Management</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">
                  <span className="date-range">{formatDateRange(2018, 10, 2021, 12)}</span>
                  <span className="duration">({calculateDuration(2018, 10, 2021, 12)})</span>
                </div>
                <div className="timeline-content">
                  <h4>UX/UI Designer & Developer</h4>
                  <p className="company">Various Industries</p>
                  <p>
                    Developed expertise in full-stack UX design and front-end development. 
                    Created user-centered solutions across travel, consumer applications, 
                    and e-commerce platforms with proven 40% conversion rate improvements.
                  </p>
                  <div className="achievement-tags">
                    <span className="achievement-tag">User Research</span>
                    <span className="achievement-tag">React Development</span>
                    <span className="achievement-tag">Conversion Optimization</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-milestone">
                <div className="milestone-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="milestone-content">
                  <h5>Started UX Journey</h5>
                  <p>October 2018 - Beginning of {calculateYearsOfExperience()} years in UX Design & Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="subsection">
        <div className="container py-5">
          <h3 className="text-center mb-5 text-white">Education & Certifications</h3>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="education-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="timeline-content">
                    <h4 className="text-white">Professional Development</h4>
                    <p className="text-muted">SheCodes Certified</p>
                    <p className="text-light">
                      Advanced certifications in front-end development, React, and responsive web design. 
                      Continuous learning in modern development practices and UX methodologies.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="timeline-content">
                    <h4 className="text-white">UX Design Expertise</h4>
                    <p className="text-muted">Industry Experience</p>
                    <p className="text-light">
                      {calculateYearsOfExperience()}+ years of hands-on experience in UX/UI design across healthcare, travel, 
                      and consumer applications with focus on accessibility and user-centered design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="text-center p-3">Core Competencies</h3>
      </div>

      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="skill-category">
              <div className="skill-header">
                <i className="fas fa-pencil-ruler fa-3x"></i>
                <h4>UX/Product Design</h4>
              </div>
              <div className="skill-list">
                <SkillTag text="User Research" variant="light" size="medium" />
                <SkillTag text="Wireframing" variant="light" size="medium" />
                <SkillTag text="Prototyping" variant="light" size="medium" />
                <SkillTag text="Journey Mapping" variant="light" size="medium" />
                <SkillTag text="Usability Testing" variant="light" size="medium" />
                <SkillTag text="Persona Development" variant="light" size="medium" />
                <SkillTag text="Information Architecture" variant="light" size="medium" />
                <SkillTag text="Accessibility (WCAG)" variant="light" size="medium" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="skill-category">
              <div className="skill-header">
                <i className="fas fa-code fa-3x"></i>
                <h4>Front-End Development</h4>
              </div>
              <div className="skill-list">
                <SkillTag text="React" variant="secondary" size="medium" />
                <SkillTag text="TypeScript" variant="secondary" size="medium" />
                <SkillTag text="JavaScript (ES6+)" variant="secondary" size="medium" />
                <SkillTag text="HTML5 & CSS3" variant="secondary" size="medium" />
                <SkillTag text="SASS/SCSS" variant="secondary" size="medium" />
                <SkillTag text="Responsive Design" variant="secondary" size="medium" />
                <SkillTag text="API Integration" variant="secondary" size="medium" />
                <SkillTag text="Git Version Control" variant="secondary" size="medium" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="skill-category">
              <div className="skill-header">
                <i className="fas fa-tools fa-3x"></i>
                <h4>Tools & Specializations</h4>
              </div>
              <div className="skill-list">
                <SkillTag text="Healthcare UX" variant="accent" size="medium" />
                <SkillTag text="Enterprise Design Systems" variant="accent" size="medium" />
                <SkillTag text="Data Visualization" variant="accent" size="medium" />
                <SkillTag text="AI Integration" variant="accent" size="medium" />
                <SkillTag text="Adobe Creative Suite" variant="accent" size="medium" />
                <SkillTag text="Figma" variant="accent" size="medium" />
                <SkillTag text="Agile/Scrum" variant="accent" size="medium" />
                <SkillTag text="Stakeholder Management" variant="accent" size="medium" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="subsection">
        <div className="container text-center py-5">
          <h3 className="text-white mb-4">Let's Work Together</h3>
          <p className="text-light mb-4 lead">
            Ready to create exceptional user experiences? I'm available for UX consulting, 
            product design, and full-stack development projects.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-light">
              Get In Touch
            </Link>
            <Link to="/work" className="btn btn-outline-light">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}