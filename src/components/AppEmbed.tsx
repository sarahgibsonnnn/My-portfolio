import { useState } from 'react';
import SkillTag from './SkillTag';

interface AppEmbedProps {
  title: string;
  description: string;
  appUrl: string;
  appName: string;
  skills: string[];
  overlayTitle?: string;
  overlayDescription?: string;
  className?: string;
}

export default function AppEmbed({ 
  title,
  description,
  appUrl,
  appName,
  skills,
  overlayTitle,
  overlayDescription,
  className = ""
}: AppEmbedProps) {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };

  return (
    <div className={`app-embed-section ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h3 className="app-embed-title">{title}</h3>
            <p className="app-embed-description">{description}</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 px-0">
            <div className="app-embed-container">
              <iframe
                src={appUrl}
                title={`${appName} - Interactive Preview`}
                className="app-embed-iframe"
                loading="lazy"
                allowFullScreen
              />
              {showOverlay && (
                <div className="iframe-overlay" onClick={handleOverlayClick}>
                  <div className="overlay-content">
                    <h4>{overlayTitle || `Interactive ${appName}`}</h4>
                    <p>{overlayDescription || "Click to explore the full application"}</p>
                    <button className="btn">Launch App</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-md-8 mx-auto text-center">
            <div className="app-embed-details">
              <div className="skills-container justify-content-center">
                {skills.map((skill, index) => (
                  <SkillTag 
                    key={index} 
                    text={skill} 
                    variant="primary" 
                    size="small" 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}