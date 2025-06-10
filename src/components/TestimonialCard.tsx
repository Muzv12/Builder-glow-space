import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  description: string;
  avatarSrc?: string;
}

const TestimonialCard = ({
  quote,
  name,
  description,
  avatarSrc,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col p-8 gap-12 flex-1 border border-color-border rounded-xl bg-white">
      <div className="text-black font-inter text-2xl font-medium leading-[150%]">
        "{quote}"
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="w-[45px] h-[45px]">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback className="bg-gray-300 text-gray-600 font-medium">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-0.5">
          <div className="text-black font-inter text-base font-medium leading-[150%]">
            {name}
          </div>
          <div className="text-text-secondary font-inter text-base font-medium leading-[150%]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
