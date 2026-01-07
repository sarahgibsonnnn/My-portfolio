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
  subtitle: "Senior Product Designer specialising in complex, real-world digital products — with strong front-end expertise",
  buttons: [
    {
      text: "View Case Studies",
      link: "/product-design",
      title: "See product design case studies",
      type: "primary" as const
    },
    {
      text: "Contact Me",
      link: "/contact",
      title: "Contact Sarah",
      type: "secondary" as const,
      inverted: true
    },
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
              I’m a Senior Product Designer with {calculateYearsOfExperience()} years of experience designing complex digital products used in real-world, high-stakes environments. I began my career as a medicinal chemist, working in drug discovery and development, before transitioning into the software industry — a shift driven by a desire to apply scientific problem-solving, systems thinking and user empathy to digital products at scale.
            </p>
            <p>
             My scientific background shapes how I approach design: I’m comfortable working with complex data, ambiguous problem spaces and evidence-led decision making. I lead end-to-end product design, from discovery and research through to delivery and iteration, collaborating closely with product managers, engineers and stakeholders to create clear, accessible and rewarding user experiences.
            </p>
            <p>
              Much of my work sits within regulated and sensitive domains, including healthcare and enterprise systems, where trust, usability and accessibility are critical. I focus on turning complexity into clarity, designing products that support confident decision-making and stand up to real-world use.
            </p>
            <div className="d-flex gap-2 flex-wrap">
              <Link to="/product-design" title="View Case Studies" className="btn">
                View Case Studies
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
                <h4>Designing for Complexity</h4>
            
                <p>
                 Designing products used in high-stakes and high-frequency environments, where clarity, trust and usability matter.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="experience-card">
                <div className="experience-icon">
                  <i className="fas fa-users fa-3x"></i>
                </div>
                <h4>User-Centred & Evidence-Led</h4>
                
                <p>
                 Grounding decisions in research, testing and real user behaviour rather than assumptions.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="experience-card">
                <div className="experience-icon">
                  <i className="fas fa-code fa-3x"></i>
                </div>
                <h4>From Design to Code</h4>
                <p>
                  Strong front-end experience enabling effective prototyping, implementation awareness and close collaboration with engineers.
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
                  <span className="date-range">{formatDateRange(2023, 2)}</span>
                  <span className="duration">({calculateDuration(2023, 2)})</span>
                </div>
                <div className="timeline-content">
                  <h4>Senior Product Designer</h4>
                  <p className="company">Synanetics</p>
                  <p>
                    Leading end-to-end product design for healthcare platforms used daily by multidisciplinary clinical teams, focusing on clarity, accessibility and workflow efficiency.
                  </p>
                  <div className="achievement-tags">
                    <span className="achievement-tag">Product design</span>
                    <span className="achievement-tag">End-to-end process</span>
                    <span className="achievement-tag">Healthcare</span>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">
                  <span className="date-range">{formatDateRange(2018, 10, 2023, 2)}</span>
                  <span className="duration">({calculateDuration(2018, 10, 2023, 2)})</span>
                </div>
                <div className="timeline-content">
                  <h4>UX/UI Designer & Developer</h4>
                  <p className="company">Phixflow</p>
                  <p>
                    Designed and developed applications for various industries using a low code application development platform.
                    Led end-to-end design processes from user research to implementation
                  </p>
                  <div className="achievement-tags">
                    <span className="achievement-tag">UX Design</span>
                    <span className="achievement-tag">Development</span>
                    <span className="achievement-tag">Low code applications</span>
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

              <div className="timeline-milestone early-career">
                <div className="milestone-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <div className="milestone-content">
                  <h5>Medicinal Chemist</h5>
                  <p className="company">Domainex</p>
                  <p>I began my career in medicinal chemistry, after achieving a First Class Masters degree in Chemistry. I worked on drug discovery and development within regulated laboratory environments. This role developed my analytical thinking, comfort with complex data, and evidence-led approach to problem-solving — skills that now underpin my work in product design and user research.</p>
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
                 
                  <div className="timeline-content">
                  
                    <p className="text-light">
                      I invest heavily in continuous learning, with professional certifications across UX, UI, accessibility and front-end development. My training supports a practice grounded in inclusive design, modern development workflows and evidence-led decision making.
                    </p>
                    
                    <div className="education-list">
                      <div className="education-item">
                        <h5>Education</h5>
                        <div className="credential">
                          <strong>First Class MChem in Chemistry, with Biological and Medicinal Chemistry</strong>
                          <span className="institution">University of York</span>
                          <span className="note">Including a year in industry at Pfizer</span>
                        </div>
                      </div>
                      
                      <div className="education-item">
                        <h5>Professional Certifications</h5>
                        <div className="credential">
                          <strong>Professional Diploma in UX Design</strong>
                          <span className="institution">UX Design Institute</span>
                        </div>
                        <div className="credential">
                          <strong>Professional Certificate in UI Design</strong>
                          <span className="institution">UX Design Institute</span>
                        </div>
                        <div className="credential">
                          <strong>Google UX Design Certificate</strong>
                          <span className="institution">Google</span>
                        </div>
                        <div className="credential">
                          <strong>Professional Certificate in Designing for Accessibility</strong>
                          <span className="institution">UX Design Institute</span>
                        </div>
                        <div className="credential">
                          <strong>React Development, SheCodes Responsive, Front End Development, SheCodes Plus AI</strong>
                          <span className="institution">SheCodes</span>
                        </div>
                      </div>
                    </div>
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
                <SkillTag text="HTML5 & CSS3" variant="secondary" size="medium" />
                 <SkillTag text="AI" variant="secondary" size="medium" />
                <SkillTag text="SASS/SCSS" variant="secondary" size="medium" />
                <SkillTag text="Responsive Design" variant="secondary" size="medium" />
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="skill-category">
              <div className="skill-header">
                <i className="fas fa-tools fa-3x"></i>
                <h4>Tools & Specialisations</h4>
              </div>
              <div className="skill-list">
                <SkillTag text="Healthcare UX" variant="accent" size="medium" />
                <SkillTag text="Design Systems" variant="accent" size="medium" />           
                <SkillTag text="Figma" variant="accent" size="medium" />
                <SkillTag text="GitHub" variant="accent" size="medium" />
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
          <h3 className="text-white mb-4">Let's stay connected</h3>
          <p className="text-light mb-4 lead">
            I enjoy connecting with people working on thoughtful digital products and exchanging perspectives on design, problem-solving and technology.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact" className="btn btn-light">
              Contact me
            </Link>
            <Link to="/product-design" className="btn btn-outline-light">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}