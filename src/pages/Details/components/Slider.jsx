import { Star } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Slider(product) {
  return (
    <div className="container  ">
      <div className="card bg-[#F3F5F7] h-[450px]">
        <div>
          {" "}
          <span className="uppercase font-bold bg-white px-3 py-1 rounded">
            new
          </span>{" "}
          <span className="bg-[#38CB89] text-white rounded px-3 py-1 font-bold">
            -50%
          </span>
        </div>
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
          {product.images.map((item) => (
            <div>
              <img src={item} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className=" flex flex-col gap-y-1 mt-3">
        <div className="flex gap-x-0.5 ">
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
          <Star size={16} color="#000" fill="#000" />
        </div>
        <h4>{product.title}</h4>
        <div className="flex gap-x-3">
          <span className="text-sm font-bold text-[#141718]">
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(0)}{" "}
            $
          </span>
          <span className="text-sm font-normal line-through text-[#6C7275]">
            {product.price} $
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slider;
