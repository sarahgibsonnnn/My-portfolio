import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  link: string;
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  inverted?: boolean;
}

export default function Button({ 
  text, 
  link, 
  title, 
  variant = 'primary', 
  size = 'md',
  className = '',
  external = false,
  inverted = false
}: ButtonProps) {
  const getButtonClass = () => {
    let baseClass = 'btn';
    
    // Add variant classes
    switch (variant) {
      case 'primary':
        baseClass += ' btn-primary';
        break;
      case 'secondary':
        baseClass += inverted ? ' btn-outline-light' : ' btn-outline-primary';
        break;
      case 'tertiary':
        baseClass += inverted ? ' btn-link-light' : ' btn-link';
        break;
      default:
        baseClass += ' btn-primary';
    }
    
    // Add size classes
    switch (size) {
      case 'sm':
        baseClass += ' btn-sm';
        break;
      case 'lg':
        baseClass += ' btn-lg';
        break;
      // 'md' is default, no additional class needed
    }
    
    // Add custom className
    if (className) {
      baseClass += ` ${className}`;
    }
    
    return baseClass;
  };

  // For external links
  if (external) {
    return (
      <a 
        href={link}
        title={title}
        className={getButtonClass()}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }

  // For internal links
  return (
    <Link 
      to={link}
      title={title}
      className={getButtonClass()}
    >
      {text}
    </Link>
  );
}