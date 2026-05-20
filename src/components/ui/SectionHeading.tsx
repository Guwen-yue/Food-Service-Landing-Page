interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = '',
  id,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 lg:mb-16 ${className}`}>
      <h2
        id={id}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
