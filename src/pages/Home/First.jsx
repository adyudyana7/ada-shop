import HeroImg2 from "../../assets/Paste image.png";
import HeroImg3 from "../../assets/Image Placeholder.png";
import HeroImg4 from "../../assets/Paste image (1).png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function First() {
  return (
    <div className=" container mx-auto  flex flex-col px-8  sm:h-screen">
      <div className="flex-grow">
        <Carousel showThumbs={false} showStatus={false}>
          <img src={HeroImg2} alt="" className="h-full" />
          <img src={HeroImg3} alt="" className="h-full" />
          <img src={HeroImg4} alt="" className="h-full" />
        </Carousel>
      </div>
    </div>
  );
}

export default First;
