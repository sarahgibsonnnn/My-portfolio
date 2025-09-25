interface ProjectExampleProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl: string;
  linkText: string;
  linkTitle: string;
  imagePosition?: 'left' | 'right';
}

export default function ProjectExample({
  title,
  description,
  imageUrl,
  imageAlt,
  projectUrl,
  linkText,
  linkTitle,
  imagePosition = 'right'
}: ProjectExampleProps) {
  return (
    <div className="row example">
      {imagePosition === 'left' && (
        <div className="col-md-6">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="img-fluid d-none d-md-block img-thumbnail"
          />
        </div>
      )}
      
      <div className="col-md-6 example-desc">
        <h2>{title}</h2>
        <p>{description}</p>
        <a
          href={projectUrl}
          title={linkTitle}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {linkText}
        </a>
      </div>
      
      {imagePosition === 'right' && (
        <div className="col-md-6">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="img-fluid d-none d-md-block img-thumbnail"
          />
        </div>
      )}
    </div>
  );
}