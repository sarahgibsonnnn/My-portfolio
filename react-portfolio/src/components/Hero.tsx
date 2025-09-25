import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttons?: {
    text: string;
    link: string;
    title: string;
  }[];
}

export default function Hero({ title, subtitle, buttons }: HeroProps) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {buttons && buttons.length > 0 && (
        <div className="hero-buttons mt-5">
          {buttons.map((button, index) => (
            <Link 
              key={index}
              to={button.link} 
              title={button.title} 
              className="btn"
            >
              {button.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}