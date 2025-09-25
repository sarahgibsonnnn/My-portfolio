import Hero from '../components/Hero';
import ProjectExample from '../components/ProjectExample';
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

const featuredProjects = [
  {
    title: "AI Holiday Planner",
    description: "End-to-end UX design and React development. Conducted user research, created wireframes and prototypes, then built a responsive AI-powered travel planning app with modern UX patterns. Try the live interactive version below!",
    imageUrl: "/images/holiday-planner.png",
    imageAlt: "AI Holiday Planner showing user interface and design process",
    projectUrl: "#interactive-experience",
    linkText: "Try Interactive Version ↓",
    linkTitle: "Scroll down to try the interactive holiday planner",
    imagePosition: "right" as const
  },
  {
    title: "FlyUX: Airline Booking Experience", 
    description: "Complete UX design process for airline booking platform. User research, personas, journey mapping, wireframing, prototyping, and usability testing resulted in a 40% improvement in conversion rates.",
    imageUrl: "/images/flyux.PNG",
    imageAlt: "FlyUX design process showing wireframes, user flows, and final interface",
    projectUrl: "https://xd.adobe.com/view/1c2df129-2117-4280-b340-f4ed402257fc-497e/?fullscreen&hints=on",
    linkText: "View UX Process",
    linkTitle: "View UX design process",
    imagePosition: "left" as const
  },
  {
    title: "Dictionary App: Information Architecture",
    description: "Designed intuitive search experience and information hierarchy. Focused on accessibility, progressive disclosure, and API integration patterns for seamless word discovery. Try it live below!",
    imageUrl: "/images/dictionary-app.PNG",
    imageAlt: "Dictionary app showing clean interface design and search functionality",
    projectUrl: "#interactive-experience",
    linkText: "Try Interactive Version ↓",
    linkTitle: "Scroll down to try the interactive dictionary app",
    imagePosition: "right" as const
  }
];

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
        <h3 className="text-center p-3">Some of my applications</h3>
        <div className="work-intro">
          <p className="text-center text-light">
            Experience my applications directly - no need to leave this page! Click to interact with live, fully-functional projects.
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