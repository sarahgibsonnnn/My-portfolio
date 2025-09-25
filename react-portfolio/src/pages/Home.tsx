import Hero from '../components/Hero';
import ProjectExample from '../components/ProjectExample';

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
    description: "End-to-end UX design and React development. Conducted user research, created wireframes and prototypes, then built a responsive AI-powered travel planning app with modern UX patterns.",
    imageUrl: "/images/holiday-planner.png",
    imageAlt: "AI Holiday Planner showing user interface and design process",
    projectUrl: "https://sarahs-holiday-planner.netlify.app/",
    linkText: "View AI Holiday Planner",
    linkTitle: "View AI holiday planner application",
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
    description: "Designed intuitive search experience and information hierarchy. Focused on accessibility, progressive disclosure, and API integration patterns for seamless word discovery.",
    imageUrl: "/images/dictionary-app.PNG",
    imageAlt: "Dictionary app showing clean interface design and search functionality",
    projectUrl: "https://sarahgibson-dictionary.netlify.app/",
    linkText: "View Dictionary App",
    linkTitle: "View Dictionary Application",
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

      <div className="section">
        <h3 className="text-center p-3">Featured Work</h3>
        <div className="work-intro">
          <p className="text-center text-light">
            Showcasing key projects that demonstrate my end-to-end UX and development capabilities
          </p>
        </div>
      </div>

      <div className="container">
        {featuredProjects.map((project, index) => (
          <ProjectExample
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            projectUrl={project.projectUrl}
            linkText={project.linkText}
            linkTitle={project.linkTitle}
            imagePosition={project.imagePosition}
          />
        ))}
      </div>
    </>
  );
}