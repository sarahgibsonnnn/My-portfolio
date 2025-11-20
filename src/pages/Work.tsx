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
    description: "Holiday planning application built during SheCodes Plus course. Showcasing my ability to design, code and develop with AI integration.",
    imageUrl: "/images/holiday-planner.png",
    imageAlt: "Holiday planner App showcasing front-end development and AI integration",
    projectUrl: "https://sarahs-holiday-planner.netlify.app/",
    linkTitle: "View Sarah's AI holiday planner application",
    category: "AI Integration",
    skills: ["Front-end development", "User interface", "React", "AI Integration", "Responsive Design"],
    year: "2024"
  },
  {
    title: "Dictionary App: Information Architecture",
    description: "Another application built during SheCodes Plus course. This time a dictionary application with a focused on accessibility and API integration patterns.",
    imageUrl: "/images/dictionary-app.PNG",
    imageAlt: "Dictionary app showing clean interface design and search functionality",
    projectUrl: "https://sarahgibson-dictionary.netlify.app/",
    linkTitle: "View Dictionary Application",
    category: "Front-end Development",
    skills: ["API", "React", "Accessibility", "Search UX", "Front-end development"],
    year: "2024"
  },
  {
    title: "My first coding project: Weather Application",
    description: "Developed a responsive weather interface using JavaScript and OpenWeather API. This was my first react application built during my SheCodes course.",
    imageUrl: "/images/react-weather-app.PNG",
    imageAlt: "Weather application",
    projectUrl: "https://sarahgibson-weather-react.netlify.app/",
    linkTitle: "View React Weather Application",
    category: "UI Development",
    skills: ["Responsive Design", "React", "API Integration",],
    year: "2023"
  },
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
            Below are some examples of some applications I have built outside of work, completed during my SheCodes projects. These span front-end development and interaction design. Click to explore the live applications.
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