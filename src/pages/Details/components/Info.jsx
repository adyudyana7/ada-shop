import { Star } from "lucide-react";

function Info({ product }) {
  console.log("product: ", product);
  return (
    <div>
      <div className="flex gap-x-0.5  items-center">
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <Star size={16} color="#000" fill="#000" />
        <p className="ml-[7px] text-xs">11 Reviews</p>
      </div>

      <h4 className="text-[40px] font-medium">{product.title}</h4>
      <h6 className="text-base font-normal text-[#6C7275]">
        {product.description}
      </h6>
      <div className="flex gap-x-3 items-center">
        <span className="text-[28px] font-medium text-[#141718]">
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(0)}{" "}
          $
        </span>
        <span className="text-[20px] font-medium   line-through text-[#6C7275]">
          {product.price} $
        </span>
      </div>
    </div>
  );
}

export default Info;
