interface WorkExampleProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl: string;
  linkTitle: string;
  category?: string;
  skills?: string[];
  year?: string;
}

export default function WorkExample({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  projectUrl, 
  linkTitle,
  category,
  skills,
  year
}: WorkExampleProps) {
  return (
    <div className="col-lg-6 work-example">
      <div className="work-card">
        {category && (
          <div className="work-category">
            <span className="category-badge">{category}</span>
            {year && <span className="year-badge">{year}</span>}
          </div>
        )}
        
        <a
          href={projectUrl}
          title={linkTitle}
          target="_blank"
          rel="noopener noreferrer"
          className="work-link"
        >
          <div className="work-image-container">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="img-fluid img-thumbnail work-image"
            />
            <div className="work-overlay">
              <span className="view-project">View Project →</span>
            </div>
          </div>
          
          <div className="work-content">
            <h2>{title}</h2>
            <p>{description}</p>
            
            {skills && skills.length > 0 && (
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </a>
      </div>
    </div>
  );
}