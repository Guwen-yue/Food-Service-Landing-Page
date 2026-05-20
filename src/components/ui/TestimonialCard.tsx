interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  location: string;
}

export default function TestimonialCard({
  name,
  avatar,
  rating,
  text,
  location,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-gray-100 border border-gray-50 flex flex-col gap-4">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-dark/80 leading-relaxed italic">"{text}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold flex items-center justify-center text-sm flex-shrink-0"
          aria-hidden="true"
        >
          {avatar}
        </div>
        <div>
          <div className="font-semibold text-dark text-sm">{name}</div>
          <div className="text-muted text-xs">{location}</div>
        </div>
      </div>
    </div>
  );
}
