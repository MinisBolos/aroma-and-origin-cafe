
interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg bg-coffee-bg border border-coffee-cream transition-all hover:shadow-md hover:border-coffee-accent">
      <div className="text-coffee-dark mb-4 w-14 h-14 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-playfair text-xl font-semibold text-coffee-dark mb-2">{title}</h3>
      <p className="font-raleway text-coffee-medium text-center">{description}</p>
    </div>
  );
}
