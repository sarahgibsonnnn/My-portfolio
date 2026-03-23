import Button from '../components/Button';

export default function SocialCareInteroperabilityCaseStudy() {
  return (
    <div className="case-study-page">
      <div className="hero hero-case-study">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1>Designing safer data sharing across health and social care</h1>
              <h2>NHS Discovery Case Study</h2>
              <div className="case-study-meta mt-4">
                <span className="meta-item"><strong>Role:</strong> Senior Product Designer (Discovery Lead)</span>
                <span className="meta-item"><strong>Phase:</strong> Discovery</span>
                <span className="meta-item"><strong>Industry:</strong> Health and Social Care</span>
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
                  <i className="fas fa-tasks"></i>
                </div>
                <h3>Overview</h3>
                <p>
                  Healthcare professionals are making critical decisions without a complete picture of the patient.
                </p>
                <p>
                  During this NHS discovery, I investigated how information moves between hospitals, ambulance services, community teams, and social care — and why it so often breaks down.
                </p>
                <p>
                  What I found was not a technology problem, but a system problem: fragmented data, inconsistent processes, and heavy reliance on workarounds.
                </p>
                <p>
                  This case study explores how those gaps create risk — and where design can help.
                </p>
              </section>

              <section className="context section-card">
                <div className="section-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>The Context: Digital Transformation Meets Fragmentation</h3>
                <p>
                  The adult social care sector in England is diverse, ranging from large national organisations to thousands of small, single-location providers. Over recent years, the Digitising Social Care (DiSC) programme has successfully helped over 80% of care providers transition from paper to Digital Social Care Records (DSCRs).
                </p>
                <p>
                  However, a critical gap remains: these systems are largely disconnected from each other—and almost entirely disconnected from the health systems they interface with. Care workers are still forced to rely on phone calls, physical letters, and manual data entry to share critical information with hospitals and community teams.
                </p>
                <p>
                  This lack of interoperability leads to unsafe hospital discharges, repetitive administrative burdens, and a disjointed experience for the people receiving care.
                </p>
              </section>

              <section className="role section-card">
                <div className="section-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3>The Project: Social Care Interoperability Platform</h3>
                <p>
                  To address this fragmentation, the NHS and the Department of Health and Social Care initiated the Social Care Interoperability Platform (SCIP). The vision: act as a consolidation point to seamlessly join up data across adult social care and eventually bridge health and social care systems.
                </p>
                <p>
                  My role was to champion a user-centred design approach, ensuring that any technical architecture was deeply rooted in the everyday realities, capabilities, and pain points of care professionals.
                </p>
                <p>
                  Rather than jumping straight to solutions, we committed to a rigorous discovery phase spanning three iterative cycles from September 2025 to March 2026. This allowed us to engage directly with residential, nursing, and domiciliary care providers, map their data journeys, validate critical pain points, and distil them into high-priority use cases for the MVP.
                </p>
              </section>

              <section className="challenge section-card highlight-card">
                <div className="section-icon">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h3>The Problem: The Organisational Black Hole</h3>
                <p>
                  Despite widespread digitisation, health and social care systems still operate in disconnected silos. Patient data often stops at the organisational border.
                </p>
                <p>
                  This is not an administrative inconvenience. It creates real and preventable clinical risk at exactly the moments when teams need shared context most.
                </p>
                <p>
                  I led discovery research to map where information breaks down between hospital, ambulance, community, primary care, and social care settings, then translated that evidence into strategic product opportunities.
                </p>
                <div className="challenge-points">
                  <div className="challenge-point">
                    <i className="fas fa-ambulance"></i>
                    <span>Paramedics arriving at emergencies without baseline context or resuscitation wishes</span>
                  </div>
                  <div className="challenge-point">
                    <i className="fas fa-heartbeat"></i>
                    <span>Severe harm risk when critical dependencies, such as steroid dosing, are not visible across transitions</span>
                  </div>
                  <div className="challenge-point">
                    <i className="fas fa-search"></i>
                    <span>Hospital teams spending hours as detectives to reconstruct living situation and support needs before discharge</span>
                  </div>
                </div>
                <div className="key-insight">
                  <p>
                    "You can spend your whole morning just trying to piece together what happened." - Pharmacist
                  </p>
                  <p>
                    "We do not always know what is normal for that patient." - Community clinician
                  </p>
                </div>
              </section>

              <section className="research section-card">
                <div className="section-icon">
                  <i className="fas fa-microscope"></i>
                </div>
                <h3>Research Scale and Methodology</h3>
                <p>
                  This discovery phase combined broad quantitative evidence with deep qualitative research across the full care ecosystem.
                </p>
                <div className="research-stats">
                  <div className="stat-item">
                    <div className="stat-number">64</div>
                    <div className="stat-label">Regional survey respondents from the community workforce</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">62%</div>
                    <div className="stat-label">Reported critical information exists on systems they cannot access</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">44%</div>
                    <div className="stat-label">Cannot access GP records when needed for care decisions</div>
                  </div>
                </div>
                <div className="research-list">
                  <div className="research-item">
                    <i className="fas fa-comments"></i>
                    <span>Deep-dive interviews across GPs, community nurses, paramedics, discharge coordinators, and care home managers</span>
                  </div>
                  <div className="research-item">
                    <i className="fas fa-building"></i>
                    <span>Vendor and platform input including Digital Social Care Record suppliers such as Nourish and Access Group</span>
                  </div>
                  <div className="research-item">
                    <i className="fas fa-project-diagram"></i>
                    <span>Thematic analysis, affinity mapping workshops, and iterative synthesis cycles</span>
                  </div>
                </div>
              </section>

              <section className="context section-card">
                <div className="section-icon">
                  <i className="fas fa-sitemap"></i>
                </div>
                <h3>Ecosystem and Systems Mapping</h3>
                <p>
                  A core output of discovery was an ecosystem map exposing the current spaghetti architecture of health and social care information systems.
                </p>
                <div className="legacy-interface-showcase">
                  <img
                    src="/images/social-care-interoperability-journey.png"
                    alt="The broken journey showing information gaps in integrated care across hospital and social care transitions"
                    className="legacy-interface-image"
                  />
                  <p className="image-caption">
                    Ecosystem view of fragmented data flow, risk hotspots, and communication breakdowns across integrated care transitions.
                  </p>
                </div>
                <div className="role-list">
                  <div className="role-item">
                    <i className="fas fa-user-md"></i>
                    <span>Primary care systems such as EMIS and SystmOne</span>
                  </div>
                  <div className="role-item">
                    <i className="fas fa-hospital"></i>
                    <span>Acute trust platforms such as Cerner and other trust-specific estates</span>
                  </div>
                  <div className="role-item">
                    <i className="fas fa-landmark"></i>
                    <span>Local authority systems such as Liquidlogic</span>
                  </div>
                  <div className="role-item">
                    <i className="fas fa-home"></i>
                    <span>30+ Digital Social Care Records used by providers, including PCS and Nourish</span>
                  </div>
                </div>
                <div className="key-insight">
                  <strong>Design challenge:</strong> This was not about designing a new standalone app. It was about defining how existing systems can exchange structured data through open APIs rather than relying on static, unstructured documents.
                </div>
              </section>

              <section className="role section-card">
                <div className="section-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Key User Archetypes and Pain Points</h3>
                <div className="role-list">
                  <div className="role-item">
                    <i className="fas fa-user-md"></i>
                    <span><strong>The Community Clinician:</strong> Often goes in blind because the move from paper logs to handheld records removed their only shared point of reference.</span>
                  </div>
                  <div className="role-item">
                    <i className="fas fa-notes-medical"></i>
                    <span><strong>The GP and Primary Care Team:</strong> Faces information overload from long discharge summaries that hide medication changes and lack clear rationale.</span>
                  </div>
                  <div className="role-item">
                    <i className="fas fa-keyboard"></i>
                    <span><strong>The Care Home Manager:</strong> Spends significant time manually re-entering discharge information into digital systems, increasing human-error risk.</span>
                  </div>
                </div>
              </section>

              <section className="insights section-card">
                <div className="section-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Core Insights and Aha Moments</h3>
                <div className="collaboration-list">
                  <div className="collaboration-item">
                    <i className="fas fa-road"></i>
                    <span><strong>The one-way street:</strong> Social care teams are asked to share data, but often receive little clinical context back.</span>
                  </div>
                  <div className="collaboration-item">
                    <i className="fas fa-unlink"></i>
                    <span><strong>The paradox of digitisation:</strong> Digital adoption removed legacy paper handoff loops before equivalent digital integration was in place.</span>
                  </div>
                  <div className="collaboration-item">
                    <i className="fas fa-user-friends"></i>
                    <span><strong>Patients as data carriers:</strong> Vulnerable patients and families are repeatedly forced to carry and repeat critical information.</span>
                  </div>
                </div>
                <div className="key-insight">
                  <p>"You are relying on bits from everywhere - GP, discharge, family." - Community nurse</p>
                  <p>"It gives you a list, but not how they actually take it." - Pharmacist</p>
                </div>
              </section>

              <section className="opportunities section-card success-card">
                <div className="section-icon">
                  <i className="fas fa-compass"></i>
                </div>
                <h3>Suggested Solutions</h3>

                <h4>1. Define a Minimum Viable Dataset (MVD)</h4>
                <div className="solution-features">
                  <div className="feature-item">
                    <i className="fas fa-list-alt"></i>
                    <span>Active care package and visit cadence</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-walking"></i>
                    <span>Baseline function and mobility</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-pills"></i>
                    <span>Current medications with rationale</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-shield-alt"></i>
                    <span>Advanced care plans and escalation information</span>
                  </div>
                </div>

                <h4>2. Automated transition alerts</h4>
                <div className="solution-features">
                  <div className="feature-item">
                    <i className="fas fa-bell"></i>
                    <span>Notify community teams when a patient is admitted, transferred, or discharged</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-calendar-check"></i>
                    <span>Reduce missed visits and unsafe handoffs caused by stale information</span>
                  </div>
                </div>

                <h4>3. Two-way API integration</h4>
                <div className="solution-features">
                  <div className="feature-item">
                    <i className="fas fa-exchange-alt"></i>
                    <span>Move from read-only portals to structured data exchange into native clinical systems</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-sign-in-alt"></i>
                    <span>Reduce dependency on separate tools and additional login burden</span>
                  </div>
                </div>

                <h4>4. Structured discharge outputs</h4>
                <div className="solution-features">
                  <div className="feature-item">
                    <i className="fas fa-file-medical"></i>
                    <span>Prioritise concise, clinically meaningful summaries over long narrative documents</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-copy"></i>
                    <span>Reduce duplicate transcription and downstream error rates in social care settings</span>
                  </div>
                </div>
              </section>

              <section className="impact section-card">
                <div className="section-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Impact</h3>
                <div className="outcomes-list">
                  <div className="outcome-item">
                    <i className="fas fa-bullseye"></i>
                    <span>Defined priority national use cases rooted in real front-line workflow failures</span>
                  </div>
                  <div className="outcome-item">
                    <i className="fas fa-shield-alt"></i>
                    <span>Provided evidence of systemic risk caused by fragmented data and one-way communication</span>
                  </div>
                  <div className="outcome-item">
                    <i className="fas fa-route"></i>
                    <span>Influenced digital integration strategy toward practical interoperability architecture</span>
                  </div>
                </div>
              </section>

              <section className="reflection section-card">
                <div className="section-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Reflection</h3>
                <div className="research-focus-list">
                  <div className="focus-item">
                    <i className="fas fa-sitemap"></i>
                    <span>Designing for healthcare means designing systems and trust relationships, not just interfaces</span>
                  </div>
                  <div className="focus-item">
                    <i className="fas fa-project-diagram"></i>
                    <span>Access to data alone is insufficient without context, provenance, and shared understanding</span>
                  </div>
                  <div className="focus-item">
                    <i className="fas fa-cogs"></i>
                    <span>Workflow realities should shape technology strategy, not the other way around</span>
                  </div>
                </div>
              </section>

              <div className="case-study-nav">
                <Button
                  text=" Back to Case Studies"
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
