import Header from "../../components/Header/Header";
import Contacts1 from "../../assets/Image Placeholder (1).png";

function ContactUs() {
  return (
    <div className="px-8 container mx-auto">
      <Header />
      <h1 className="text-3xl font-medium mb-6 md:text-6xl md:mr-[25%]">
        We believe in sustainable decor. We’re passionate about life at home.
      </h1>

      <p className="text-base text-gray-600 font-normal md:mr-[25%]">
        Our features timeless furniture, with natural fabrics, curved lines,
        plenty of mirrors and classic design, which can be incorporated into any
        decor project. The pieces enchant for their sobriety, to last for
        generations, faithful to the shapes of each period, with a touch of the
        present
      </p>

      <section className="flex flex-col mt-10 md:flex-row ">
        <div className="md:basis-[50%]">
          <img src={Contacts1} alt="contacts-1" className="w-full" />
        </div>
        <div className="bg-[#F3F5F7] px-4 md:px-16 py-20 flex flex-col gap-y-4 items-start md:basis-[50%] md:justify-center">
          <h3 className="text-xl font-medium md:text-4xl"> About Us</h3>
          <p className="text-sm text-gray-600 font-normal md:text-base">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. Our customer service is always prepared to support you
            24/7
          </p>

          <button className="border-b border-b-black">Shop Now &rarr;</button>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
