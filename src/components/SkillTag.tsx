interface SkillTagProps {
  text?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'light';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function SkillTag({ 
  text,
  children, 
  variant = 'secondary', 
  size = 'medium',
  className = '' 
}: SkillTagProps) {
  const baseClass = 'skill-tag';
  const variantClass = `variant-${variant}`;
  const sizeClass = `size-${size}`;
  
  return (
    <span className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}>
      {text || children}
    </span>
  );
}