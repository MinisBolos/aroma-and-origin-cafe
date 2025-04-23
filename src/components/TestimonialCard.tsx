
interface TestimonialCardProps {
  name: string;
  text: string;
  image?: string;
}

export function TestimonialCard({ name, text, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-coffee-accent">
      <div className="mb-4">
        <svg className="w-8 h-8 text-coffee-light mb-2" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c0 0 .1 0 .1 0c-2.2 4-6.1 4-6.1 4v2c0 0 6 0 10-8.5v-9.5h-4zM22 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c0 0 .1 0 .1 0c-2.2 4-6.1 4-6.1 4v2c0 0 6 0 10-8.5v-9.5h-4z"></path>
        </svg>
        <p className="text-coffee-dark font-raleway mb-4">{text}</p>
      </div>
      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-coffee-light text-white flex items-center justify-center mr-3">
            {name.charAt(0)}
          </div>
        )}
        <span className="font-playfair font-medium text-coffee-medium">{name}</span>
      </div>
    </div>
  );
}
