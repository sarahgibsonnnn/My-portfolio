import Hero from '../components/Hero';
import WorkExample from '../components/WorkExample';

const workHeroData = {
  title: "My Work",
  subtitle: "View Examples of my work below",
  buttons: [
    {
      text: "Contact Me",
      link: "/contact",
      title: "Contact Sarah"
    }
  ]
};

const workExamples = [
  {
    title: "AI Holiday Planner",
    description: "End-to-end UX design and React development. Conducted user research, created wireframes and prototypes, then built a responsive AI-powered travel planning app with modern UX patterns.",
    imageUrl: "/images/holiday-planner.png",
    imageAlt: "Holiday planner App showing user interface and design process",
    projectUrl: "https://sarahs-holiday-planner.netlify.app/",
    linkTitle: "View Sarah's AI holiday planner application",
    category: "Full-Stack UX",
    skills: ["User Research", "Wireframing", "React", "AI Integration", "Responsive Design"],
    year: "2024"
  },
  {
    title: "FlyUX: Airline Booking Experience",
    description: "Complete UX design process for airline booking platform. User research, personas, journey mapping, wireframing, prototyping, and usability testing resulted in a 40% improvement in conversion rates.",
    imageUrl: "/images/flyux.PNG",
    imageAlt: "FlyUX design process showing wireframes, user flows, and final interface",
    projectUrl: "https://xd.adobe.com/view/1c2df129-2117-4280-b340-f4ed402257fc-497e/?fullscreen&hints=on",
    linkTitle: "View Sarah's UX Design Process",
    category: "UX Design",
    skills: ["User Research", "Journey Mapping", "Wireframing", "Prototyping", "Usability Testing"],
    year: "2024"
  },
  {
    title: "Dictionary App: Information Architecture",
    description: "Designed intuitive search experience and information hierarchy. Focused on accessibility, progressive disclosure, and API integration patterns for seamless word discovery.",
    imageUrl: "/images/dictionary-app.PNG",
    imageAlt: "Dictionary app showing clean interface design and search functionality",
    projectUrl: "https://sarahgibson-dictionary.netlify.app/",
    linkTitle: "View Dictionary Application",
    category: "UI/UX Development",
    skills: ["Information Architecture", "API Design", "React", "Accessibility", "Search UX"],
    year: "2024"
  },
  {
    title: "Weather Dashboard: Data Visualization",
    description: "Designed responsive weather interface focusing on data hierarchy and progressive disclosure. User testing informed layout decisions for optimal information consumption.",
    imageUrl: "/images/react-weather-app.PNG",
    imageAlt: "Weather application showing data visualization and responsive design",
    projectUrl: "https://sarahgibson-weather-react.netlify.app/",
    linkTitle: "View React Weather Application",
    category: "UI Development",
    skills: ["Data Visualization", "Responsive Design", "React", "API Integration", "User Testing"],
    year: "2023"
  },
  {
    title: "Healthcare UX: Enterprise Dashboard",
    description: "Led UX design for healthcare sector dashboard. Conducted stakeholder interviews, created user flows, and designed complex data interfaces. Currently in production serving 1000+ healthcare professionals.",
    imageUrl: "/images/coming-soon.jpg",
    imageAlt: "Healthcare dashboard design process and interface mockups",
    projectUrl: "#",
    linkTitle: "Healthcare UX Case Study (NDA)",
    category: "Enterprise UX",
    skills: ["Stakeholder Management", "Complex Systems", "Data Design", "Healthcare UX", "Accessibility"],
    year: "2024"
  },
  {
    title: "JavaScript Interaction Design",
    description: "Playful interaction design exploring personality-driven UX. Focused on micro-interactions, delightful animations, and conversational UI patterns.",
    imageUrl: "/images/penguin-app.PNG",
    imageAlt: "Interactive penguin personality quiz showing playful UI design",
    projectUrl: "https://sarahgibson-penguin-app.netlify.app/",
    linkTitle: "View Interactive Design",
    category: "Interaction Design",
    skills: ["Micro-interactions", "Animation", "Conversational UI", "JavaScript", "Delight Design"],
    year: "2023"
  }
];

export default function Work() {
  return (
    <>
      <Hero 
        title={workHeroData.title}
        subtitle={workHeroData.subtitle}
        buttons={workHeroData.buttons}
      />

      <div className="section">
        <h3 className="text-center p-3">My Work</h3>
        <div className="work-intro">
          <p className="text-center text-light">
            From user research to pixel-perfect implementation—showcasing 6+ years of UX design 
            and front-end development across healthcare, travel, and consumer applications.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {workExamples.map((work, index) => (
            <WorkExample
              key={index}
              title={work.title}
              description={work.description}
              imageUrl={work.imageUrl}
              imageAlt={work.imageAlt}
              projectUrl={work.projectUrl}
              linkTitle={work.linkTitle}
              category={work.category}
              skills={work.skills}
              year={work.year}
            />
          ))}
        </div>
      </div>
    </>
  );
}