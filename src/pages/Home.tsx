import Hero from '../components/Hero';
import AppEmbed from '../components/AppEmbed';

const heroData = {
  title: "Sarah Gibson",
  subtitle: "Senior Product Designer & Front End Developer based in London",
  buttons: [
    {
      text: "Contact Me",
      link: "/contact",
      title: "Contact Sarah"
    },
    {
      text: "About Me",
      link: "/about",
      title: "About Sarah"
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

      {/* Interactive Applications Section */}
      <div className="section" id="interactive-experience">
        <h3 className="text-center p-3">Some of my applications outside of work</h3>
        <div className="work-intro">
          <p className="text-center text-light">
            Experience my applications directly - no need to leave this page! Click to interact with live, fully-functional projects completed during my SheCodes workshops.
          </p>
        </div>
      </div>
      
      {/* Holiday Planner App */}
      <AppEmbed
        title="Try my AI holiday planner"
        description="Experience the interactive holiday planning application I designed and developed. Click and interact with the live application below!"
        appUrl="https://sarahs-holiday-planner.netlify.app/"
        appName="AI Holiday Planner"
        skills={["User Research", "React Development", "AI Integration", "Responsive Design"]}
        overlayTitle="Interactive Holiday Planner"
        overlayDescription="Click to explore the full application"
        className="holiday-planner-embed"
      />

      {/* Dictionary App */}
      <AppEmbed
        title="Dictionary application"
        description="Explore my dictionary application featuring clean interface design, search functionality, and seamless API integration for word discovery."
        appUrl="https://sarahgibson-dictionary.netlify.app/"
        appName="Dictionary App"
        skills={["Information Architecture", "API Design", "React", "Accessibility", "Search UX"]}
        overlayTitle="Interactive Dictionary"
        overlayDescription="Click to explore word definitions and pronunciation"
        className="dictionary-embed"
      />
    </>
  );
}