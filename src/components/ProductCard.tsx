interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

const ProductCard = ({
  name,
  description,
  price,
  imageSrc,
}: ProductCardProps) => {
  return (
    <div className="flex w-[404px] flex-col gap-6">
      <div className="flex-1 self-stretch rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-[250px] object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-1 self-stretch">
        <div className="text-black font-inter text-2xl font-medium leading-[150%]">
          {name}
        </div>
        <div className="text-text-secondary font-inter text-xl font-medium leading-[150%]">
          {description}
        </div>
        <div className="text-black font-inter text-xl font-medium leading-[150%]">
          {price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
