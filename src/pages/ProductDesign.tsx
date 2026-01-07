import Hero from '../components/Hero';
import Button from '../components/Button';

const productDesignHeroData = {
  title: "Product Design",
  subtitle: "End-to-end product design case studies — from discovery and research to delivery and iteration",
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

const caseStudies = [
  {
    title: "Patient Management System Redesign",
    subtitle: "Modernising a critical legacy clinical system",
    description: "Redesign of a 20+ year-old therapy management system relied on daily by multidisciplinary clinicians. The goal was to improve usability and reliability while maintaining familiarity and minimising disruption to care delivery.",
    status: "Coming Soon",
    image: "images/patient-management-hero.png",
    skills: ["User Research", "Co-design workshops", "Interaction design", "Prototyping", "Design systems", "Accessibility"],
    focus: "Legacy redesign, clinical workflows, accessibility, phased delivery",
    duration: "Ongoing",
    role: "Lead Product Designer"
  },
  {
    title: "Social Care Interoperability Discovery",
    subtitle: "Discovery-led research across health and social care",
    description: "Led the first phase of discovery for a national interoperability initiative exploring how Digital Social Care Records can be connected with health records to improve continuity of care. Research included site visits to residential care homes and interviews with domiciliary care workers, supported living staff and registered nurses to identify real-world data sharing needs and priority use cases.",
    status: "Coming Soon",
    image: "images/coming-soon.jpg",
    skills: ["User interviews", "Field research", "Affinity mapping", "Stakeholder engagement", "Journey mapping", "Problem framing"],
    focus: "User research, affinity mapping, interoperability needs",
    duration: "Ongoing",
    role: "Senior Product Designer (Discovery Lead)"
  },
  {
    title: "Designing for Accessibility in Complex Systems",
    subtitle: "Embedding inclusive design in real-world products",
    description: "A thematic case study exploring how I apply accessibility and inclusive design principles across complex, data-rich products — including WCAG-informed design decisions, reducing cognitive load, and designing for diverse user abilities and environments.",
    status: "Coming Soon",
    image: "images/coming-soon.jpg",
    skills: ["Accessible UX", "Information hierarchy", "Design principles"],
    focus: "Accessibility, inclusive design, WCAG, cognitive load",
    role: "Senior Product Designer"
  }
];

export default function ProductDesign() {
  return (
    <>
      <Hero 
        title={productDesignHeroData.title}
        subtitle={productDesignHeroData.subtitle}
        buttons={productDesignHeroData.buttons}
      />

      <div className="section">
        <h3 className="text-center p-3">Case Studies</h3>
        <div className="work-intro">
          <p className="text-center text-light">
            A selection of case studies demonstrating how I lead end-to-end product design in complex, real-world environments — balancing user needs, accessibility, delivery constraints and long-term product value.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="case-study-card">
              {caseStudies[0].image && (
                <div className="case-study-image">
                  <img 
                    src={caseStudies[0].image} 
                    alt={caseStudies[0].title}
                    className="img-fluid"
                  />
                </div>
              )}
              <div className="case-study-header">
                <h4>{caseStudies[0].title}</h4>
              </div>
               <p className="case-study-subtitle">{caseStudies[0].subtitle}</p>
              
              <p className="case-study-description">{caseStudies[0].description}</p>
              
              <div className="case-study-details">
                <div className="detail-item">
                  <strong>Role:</strong> {caseStudies[0].role}
                </div>
                {caseStudies[0].duration && (<div className="detail-item">
                  <strong>Duration:</strong> {caseStudies[0].duration}
                </div>)}
                <div className="detail-item">
                  <strong>Focus:</strong> {caseStudies[0].focus}
                </div>
              </div>

              <div className="skills-section">
                <h5>Skills Applied:</h5>
                <div className="skills-list">
                  {caseStudies[0].skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag variant-primary size-small">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="case-study-cta">
                <Button
                  text="View case study"
                  link="/patient-management-case-study"
                  title="View Patient Management System case study"
                  variant="primary"
                 
                />
              </div>
            </div>
          </div>
          
          {caseStudies.slice(1).map((study, index) => (
            <div key={index + 1} className="col-lg-6 col-md-6 mb-4">
              <div className="case-study-card">
                {study.image && (
                  <div className="case-study-image">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="img-fluid"
                    />
                  </div>
                )}
                <div className="case-study-header">
                  <h4>{study.title}</h4>
                </div>
                 <p className="case-study-subtitle">{study.subtitle}</p>
                
                <p className="case-study-description">{study.description}</p>
                
                <div className="case-study-details">
                  <div className="detail-item">
                    <strong>Role:</strong> {study.role}
                  </div>
                  {study.duration && (<div className="detail-item">
                    <strong>Duration:</strong> {study.duration}
                  </div>)}
                  <div className="detail-item">
                    <strong>Focus:</strong> {study.focus}
                  </div>
                </div>

                <div className="skills-section">
                  <h5>Skills Applied:</h5>
                  <div className="skills-list">
                    {study.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag variant-primary size-small">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="case-study-cta">
                  <Button
                    text="View case study"
                    link="#"
                    title="View case study"
                    variant="primary"
           
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="coming-soon-notice">
              <h4>Full Case Studies Coming Soon</h4>
              <p className="text-muted">
                I'm currently preparing detailed case studies that showcase my design process, 
                user research methodologies, and the business impact of my work. 
                These will include wireframes, prototypes, user testing results, and before/after metrics.
              </p>
              <p className="text-muted">
                <strong>What you can expect:</strong> Problem definition, user research insights, 
                design iterations, usability testing results, and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}