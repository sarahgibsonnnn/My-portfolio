import Hero from '../components/Hero';
import AppEmbed from '../components/AppEmbed';

const workHeroData = {
  title: "From Design to Code",
  subtitle: "Interactive applications and coding projects",
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

const workExamples = [
  {
    title: "AI Holiday Planner",
    description: "Holiday planning application built during SheCodes Plus course. Showcasing my ability to design, code and develop with AI integration. Explore the interactive experience below.",
    appUrl: "https://sarahs-holiday-planner.netlify.app/",
    appName: "AI Holiday Planner",
    skills: ["Front-end development", "User interface", "React", "AI Integration", "Responsive Design"],
    overlayTitle: "AI Holiday Planner",
    overlayDescription: "Try the interactive holiday planning experience",
    className: "holiday-planner-embed"
  },
  {
    title: "Dictionary App: Information Architecture",
    description: "Dictionary application built during SheCodes Plus course with a focus on accessibility and API integration patterns. Experience the clean search interface below.",
    appUrl: "https://sarahgibson-dictionary.netlify.app/",
    appName: "Dictionary App",
    skills: ["API Integration", "React", "Accessibility", "Search UX", "Front-end development"],
    overlayTitle: "Dictionary Application",
    overlayDescription: "Explore word definitions and meanings",
    className: "dictionary-embed"
  },
  {
    title: "Weather Application: My First React Project",
    description: "My first React application developed during SheCodes course. A responsive weather interface using JavaScript and OpenWeather API. Try the live weather search below.",
    appUrl: "https://sarahgibson-weather-react.netlify.app/",
    appName: "Weather App",
    skills: ["Responsive Design", "React", "API Integration", "JavaScript"],
    overlayTitle: "Weather Application",
    overlayDescription: "Check current weather conditions",
    className: "weather-embed"
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
        <h3 className="text-center p-3">Front-end Development Projects</h3>
        <div className="work-intro">
          <p className="text-center text-light">
            Interactive applications and coding projects built during my SheCodes certification. These showcase my technical skills in React, API integration, and responsive design. Click to explore the live applications.
          </p>
        </div>
      </div>

      

      <div className="interactive-applications">
        {workExamples.map((work, index) => (
          <div key={index} className={`app-embed-section ${work.className}`}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">                  
                  <AppEmbed
                    title={work.title}
                    description={work.description}
                    appUrl={work.appUrl}
                    appName={work.appName}
                    skills={work.skills}
                    overlayTitle={work.overlayTitle}
                    overlayDescription={work.overlayDescription}
                    className={work.className}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}