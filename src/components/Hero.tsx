import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  buttons?: {
    text: string;
    link: string;
    title: string;
    type?: 'primary' | 'secondary' | 'tertiary';
    inverted?: boolean;
  }[];
}

export default function Hero({ title, subtitle, buttons }: HeroProps) {  
  const getButtonVariant = (type?: string) => {
    switch (type) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'tertiary':
        return 'tertiary';
      default:
        return 'primary';
    }
  };

  return (
    <div className="hero">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {buttons && buttons.length > 0 && (
        <div className="hero-buttons mt-5">
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              link={button.link}
              title={button.title}
              variant={getButtonVariant(button.type)}
              size="lg"
              className="me-3 mb-2"
              inverted={button.inverted}
            />
          ))}
        </div>
      )}
    </div>
  );
}