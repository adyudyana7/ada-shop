import img11 from "../../assets/img.png";
import img2 from "../../assets/img (2).png";
import img1 from "../../assets/img (3).png";
import { ArrowRight } from "lucide-react";

function Article() {
  return (
    <div className="text-center">
      <h1 className=" py-[40px] text-4xl font-medium">Articles</h1>
      <div className="flex gap-x-6 text-center justify-center">
        <nav>
          <img src={img11} alt="" />

          <h2>7 ways to decor your home</h2>
          <p>
            Read More <ArrowRight />
          </p>
        </nav>
        <nav>
          <img src={img1} alt="" />
          <h2>7 Kitchen organization</h2>
          <p>
            Read More <ArrowRight />
          </p>
        </nav>

        <nav>
          <img src={img2} alt="" />
          <h2>Decor your bedroom</h2>
          <p>
            Read More <ArrowRight />
          </p>
        </nav>
      </div>
    </div>
  );
}
export default Article;
