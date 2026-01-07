import Button from '../components/Button';

export default function PatientManagementCaseStudy() {
  return (
    <div className="case-study-page">
      <div className="hero hero-case-study">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1>Patient Management System Redesign</h1>
              <h2>Modernising a critical legacy clinical system while maintaining trust and continuity</h2>
              <div className="case-study-meta mt-4">
                <span className="meta-item"><strong>Role:</strong> Lead Product Designer</span>
                <span className="meta-item"><strong>Duration:</strong> Ongoing</span>
                <span className="meta-item"><strong>Industry:</strong> Healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="case-study-content">
              <section className="overview section-card">
                <div className="section-icon">
                  <i className="fas fa-telescope"></i>
                </div>
                <h3>Overview</h3>
                <p>
                  I led the product design for a comprehensive redesign of a legacy patient management system used across NHS Wales. The existing platform, critical to daily clinical operations, had become increasingly difficult to use and maintain, but was too embedded in existing workflows to simply replace.
                </p>
                <p>
                  The project required balancing modernisation with continuity, ensuring that improvements enhanced rather than disrupted established clinical practices.
                </p>
              </section>

              <section className="challenge section-card highlight-card">
                <div className="section-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h3>The Challenge</h3>
                <p>The existing system presented several constraints:</p>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <i className="fas fa-cogs"></i>
                    <span>Highly complex, data-heavy workflows</span>
                  </div>
                  <div className="challenge-point">
                    <i className="fas fa-bug"></i>
                    <span>Broken or unreliable functionality that users had learned to work around</span>
                  </div>
                  <div className="challenge-point">
                    <i className="fas fa-shield-alt"></i>
                    <span>Deep reliance across services, making change inherently risky</span>
                  </div>
                  <div className="challenge-point">
                    <i className="fas fa-clock"></i>
                    <span>Limited appetite for retraining or radical UI change</span>
                  </div>
                </div>
                <div className="key-insight">
                  <strong>Key Insight:</strong> Clinicians needed improvements, but they also needed familiarity, confidence and trust. A full "rip and replace" redesign would have posed significant risk in a live clinical environment.
                </div>
              </section>

          <section className="role section-card">
            <div className="section-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3>My Role</h3>
            <p>I was the Lead Product Designer, responsible for:</p>
            <div className="role-list">
              <div className="role-item">
                <i className="fas fa-palette"></i>
                <span>End-to-end UX and UI design</span>
              </div>
              <div className="role-item">
                <i className="fas fa-users"></i>
                <span>Planning and conducting user research</span>
              </div>
              <div className="role-item">
                <i className="fas fa-comments"></i>
                <span>Facilitating workshops with multidisciplinary clinicians</span>
              </div>
              <div className="role-item">
                <i className="fas fa-chess"></i>
                <span>Defining the design strategy and phased delivery approach</span>
              </div>
              <div className="role-item">
                <i className="fas fa-drafting-compass"></i>
                <span>Creating and validating prototypes with users</span>
              </div>
              <div className="role-item">
                <i className="fas fa-layer-group"></i>
                <span>Developing a scalable design system aligned to NHS Wales branding</span>
              </div>
              <div className="role-item">
                <i className="fas fa-handshake"></i>
                <span>Collaborating closely with product, engineering and client stakeholders</span>
              </div>
            </div>
          </section>

          <section className="research section-card">
            <div className="section-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Discovery & User Research</h3>
            <p>
              I began by immersing myself in the existing application to understand how it was actually used day-to-day, rather than how it had been originally designed.
            </p>
            <p>I then conducted extensive qualitative research, including:</p>
            <div className="research-list">
              <div className="research-item">
                <i className="fas fa-clipboard-list"></i>
                <span>Approximately 20 workshops and interviews</span>
              </div>
              <div className="research-item">
                <i className="fas fa-stethoscope"></i>
                <span>Clinicians across multiple roles, including physiotherapists, dermatologists and occupational therapists</span>
              </div>
              <div className="research-item">
                <i className="fas fa-map-marked-alt"></i>
                <span>Users across different services and locations, each using the system in different ways</span>
              </div>
            </div>
            <p>The research focused on:</p>
            <div className="research-focus-list">
              <div className="focus-item">
                <i className="fas fa-route"></i>
                <span>Current workflows and informal workarounds</span>
              </div>
              <div className="focus-item">
                <i className="fas fa-exclamation-circle"></i>
                <span>Pain points and sources of frustration or risk</span>
              </div>
              <div className="focus-item">
                <i className="fas fa-shield-alt"></i>
                <span>Which parts of the system users trusted and relied upon</span>
              </div>
              <div className="focus-item">
                <i className="fas fa-bullseye"></i>
                <span>Where improvements would deliver the most immediate benefit</span>
              </div>
            </div>
            <div className="key-insight">
              <strong>A key insight emerged early:</strong> successful redesign would depend as much on careful change management as on the quality of the design itself.
            </div>
          </section>

          <section className="strategy section-card">
            <div className="section-icon">
              <i className="fas fa-chess-knight"></i>
            </div>
            <h3>Design Strategy</h3>
            <p>
              Based on research findings, we agreed on a phased replacement approach, allowing the new Patient Management System to run in parallel with the legacy platform. This enabled clinicians to adopt improvements gradually while maintaining confidence in familiar workflows.
            </p>
            <div className="design-principles">
              <h4>My guiding design principles were:</h4>
              <div className="principle-grid">
                <div className="principle">
                  <i className="fas fa-eye"></i>
                  <strong>Familiar, not identical</strong>
                  <span>Modernise the experience without alienating users</span>
                </div>
                <div className="principle">
                  <i className="fas fa-brain"></i>
                  <strong>Reduce cognitive load</strong>
                  <span>Especially for high-frequency, time-critical tasks</span>
                </div>
                <div className="principle">
                  <i className="fas fa-universal-access"></i>
                  <strong>Accessibility by default</strong>
                  <span>Prioritising clarity, hierarchy and readability</span>
                </div>
                <div className="principle">
                  <i className="fas fa-rocket"></i>
                  <strong>Deliver value early</strong>
                  <span>Focusing on features that would provide immediate benefit</span>
                </div>
              </div>
            </div>
            <div className="strategy-approach">
              <h4>Implementation approach:</h4>
              <div className="approach-list">
                <div className="approach-item">
                  <i className="fas fa-microscope"></i>
                  <span>Produced early prototypes and iterated continuously with clinicians</span>
                </div>
                <div className="approach-item">
                  <i className="fas fa-check-double"></i>
                  <span>Validated assumptions and refined interactions before development</span>
                </div>
                <div className="approach-item">
                  <i className="fas fa-sync-alt"></i>
                  <span>Maintained parallel systems to reduce implementation risk</span>
                </div>
              </div>
            </div>
          </section>

          <section className="solution section-card">
            <div className="section-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Solution</h3>
            <p>The redesigned system delivered key improvements across critical workflows:</p>
            <div className="solution-features">
              <div className="feature-item">
                <i className="fas fa-file-alt"></i>
                <span>Streamlined patient intake with auto-populated forms with data syncing with WPAS</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-broom"></i>
                <span>Removed unused functionality which decluttered screens and made the application leaner</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-exclamation-triangle"></i>
                <span>Improved visibility of patient alerts making them constantly visible and immediately obvious</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-eye"></i>
                <span>Significantly improved visibility of selected patient with important information always visible</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Colour-coded site identification with increased visibility to help users working across multiple sites and prevent mistakes</span>
              </div>
            </div>
            <div className="solution-benefits">
              <h4>Key design improvements:</h4>
              <div className="benefits-list">
                <div className="benefit-item">
                  <i className="fas fa-arrows-alt-h"></i>
                  <span>Simplified navigation with clear information hierarchy</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Responsive design optimized for various devices and screen sizes</span>
                </div>
                <div className="benefit-item">
                  <i className="fas fa-palette"></i>
                  <span>Consistent visual language aligned with NHS Wales branding</span>
                </div>
              </div>
            </div>
          </section>

          
          <section className="design-system section-card">
            <div className="section-icon">
              <i className="fas fa-swatchbook"></i>
            </div>
            <h3>Design System & Accessibility</h3>
            <p>
              I created a reusable design system aligned to NHS Wales branding, ensuring visual consistency, accessibility and scalability across the application.
            </p>
            <div className="design-system-components">
              <h4>Design system components:</h4>
              <div className="components-list">
                <div className="component-item">
                  <i className="fas fa-palette"></i>
                  <span>Cohesive color palette with NHS Wales branding guidelines</span>
                </div>
                <div className="component-item">
                  <i className="fas fa-font"></i>
                  <span>Typography system with clear hierarchy and readability standards</span>
                </div>
                <div className="component-item">
                  <i className="fas fa-cube"></i>
                  <span>Reusable UI components for consistent interactions</span>
                </div>
              </div>
            </div>
            <div className="accessibility-features">
              <h4>Accessibility considerations:</h4>
              <div className="accessibility-list">
                <div className="accessibility-item">
                  <i className="fas fa-sitemap"></i>
                  <span>Clear information hierarchy</span>
                </div>
                <div className="accessibility-item">
                  <i className="fas fa-adjust"></i>
                  <span>Readable typography and sufficient colour contrast</span>
                </div>
                <div className="accessibility-item">
                  <i className="fas fa-user-friends"></i>
                  <span>Simplified layouts to support users with varying levels of digital confidence</span>
                </div>
              </div>
            </div>
            <div className="key-insight">
              <strong>Design Goal:</strong> Make the system intuitive and approachable, without increasing the training burden for already busy clinical teams.
            </div>
          </section>

          <section className="collaboration section-card">
            <div className="section-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Collaboration & Delivery</h3>
            <p>Once designs were validated, I worked closely with the development team to:</p>
            <div className="collaboration-list">
              <div className="collaboration-item">
                <i className="fas fa-tasks"></i>
                <span>Translate user needs into clear, actionable development tasks</span>
              </div>
              <div className="collaboration-item">
                <i className="fas fa-balance-scale"></i>
                <span>Support technical feasibility discussions and design trade-offs</span>
              </div>
              <div className="collaboration-item">
                <i className="fas fa-road"></i>
                <span>Define a realistic, value-driven delivery roadmap</span>
              </div>
            </div>
            <div className="stakeholder-management">
              <h4>Stakeholder management approach:</h4>
              <p>
                A significant part of my role involved managing stakeholder expectations. There was an extensive wishlist of desired functionality, but limited funding and time. I facilitated prioritisation conversations grounded in:
              </p>
              <div className="prioritisation-list">
                <div className="prioritisation-item">
                  <i className="fas fa-heartbeat"></i>
                  <span>Clinical value</span>
                </div>
                <div className="prioritisation-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Risk reduction</span>
                </div>
                <div className="prioritisation-item">
                  <i className="fas fa-rocket"></i>
                  <span>Delivery efficiency</span>
                </div>
              </div>
            </div>
            <div className="key-insight">
              <strong>Outcome:</strong> This helped align stakeholders around achievable outcomes and ensured the team focused on delivering the greatest benefit first.
            </div>
          </section>

          <section className="outcomes section-card">
            <div className="section-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>Outcomes & Impact</h3>
            <div className="outcomes-list">
              <div className="outcome-item">
                <i className="fas fa-check-circle"></i>
                <span>Delivered a modernised Patient Management System that clinicians could adopt with minimal disruption</span>
              </div>
              <div className="outcome-item">
                <i className="fas fa-compress-alt"></i>
                <span>Reduced complexity and improved clarity across core workflows</span>
              </div>
              <div className="outcome-item">
                <i className="fas fa-fast-forward"></i>
                <span>Enabled earlier value delivery through phased rollout</span>
              </div>
              <div className="outcome-item">
                <i className="fas fa-building"></i>
                <span>Established a scalable foundation for future enhancements</span>
              </div>
            </div>
            <div className="feedback-section">
              <h4>Clinician feedback:</h4>
              <div className="feedback-highlights">
                <div className="feedback-item">
                  <i className="fas fa-smile"></i>
                  <span>Improved confidence in daily workflows</span>
                </div>
                <div className="feedback-item">
                  <i className="fas fa-thumbs-up"></i>
                  <span>Reduced frustration with system interactions</span>
                </div>
                <div className="feedback-item">
                  <i className="fas fa-eye"></i>
                  <span>Clearer visibility of patient information</span>
                </div>
              </div>
            </div>
          </section>

          <section className="reflection section-card">
            <div className="section-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Reflection</h3>
            <p>
              This project reinforced the importance of designing for trust in healthcare environments. The most successful outcomes came not from radical visual change, but from thoughtful, evidence-led improvements that respected existing workflows while meaningfully reducing friction.
            </p>
          </section>

          <div className="case-study-nav">
            <Button
              text="← Back to Case Studies"
              link="/product-design"
              title="Return to Product Design case studies"
              variant="secondary"
            />
            <Button
              text="Get in Touch"
              link="/contact"
              title="Contact Sarah"
              variant="primary"
            />
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}