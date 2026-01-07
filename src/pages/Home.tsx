import Hero from '../components/Hero';
import Button from '../components/Button';

const heroData = {
  title: "Sarah Gibson",
  subtitle: "Senior Product Designer specialising in turning complex systems into clear, rewarding user experiences",
  buttons: [
    {
      text: "View Case Studies",
      link: "/product-design",
      title: "See product design case studies",
      type: "primary" as const
    },
    {
      text: "From Design to Code",
      link: "/work",
      title: "View coding projects",
      type: "secondary" as const,
      inverted: true
    },
    {
      text: "About Me",
      link: "/about",
      title: "About Sarah",
      type: "secondary" as const,
      inverted: true
    }
  ]
};

export default function Home() {
  return (
    <>
      <Hero 
        title={heroData.title}
        subtitle={heroData.subtitle}
        buttons={heroData.buttons}
      />

      {/* Product Design Showcase */}
      <section className="product-design-showcase">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Product Design Excellence</h2>
              <p className="section-subtitle">
                Case studies showing how I lead end-to-end product design — from discovery and research through to intuitive, accessible solutions used in complex, real-world contexts.
              </p>
              <div className="cta-buttons">
                <Button 
                  text="View Case Studies"
                  link="/product-design"
                  title="See UX/UI case studies"
                  variant="primary"
                  size="lg"
                  className="me-3"
                />
                <Button 
                  text="Learn About My Process"
                  link="/about"
                  title="About Sarah's design process"
                  variant="secondary"
                  size="lg"
                />
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <div className="feature-highlight">
                <i className="fas fa-users fa-3x mb-3"></i>
                <h4>User-Centered Design</h4>
                <p>Research-driven design decisions that prioritise user needs and business objectives.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-highlight">
                <i className="fas fa-lightbulb fa-3x mb-3"></i>
                <h4>Clarity in Complexity</h4>
                <p>Turning complex data, workflows and constraints into intuitive, confident user experiences.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-highlight">
                <i className="fas fa-cogs fa-3x mb-3"></i>
                <h4>End-to-End Process</h4>
                <p>From initial research and discovery through to delivery, iteration and post-launch optimisation.</p>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="section-subtitle">
                I've worked on products used daily in both high-stakes and high-frequency environments. I'm motivated by understanding how people think, learn and return — and by designing experiences that feel intuitive, accessible and rewarding.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}