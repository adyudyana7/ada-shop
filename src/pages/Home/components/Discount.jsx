import foto from "../../../assets/Paste image (2).png";

function Discount() {
  return (
    <div className="flex flex-col  bg-[#f0efee] md:flex-row ">
      <img className=" md:w-[720px] " src={foto} alt="" />
      <div className=" text-center pt-[50px] gap-y-4 md:pl-[72px] gap-y-4  ">
        <p className="text-lg font-semibold text-[#377DFF] md:text-base  ">
          SALE UP TO 35% OFF
        </p>
        <h1 className="text-[34px] font-medium md:text-5xl ">
          HUNDREDS of <br /> New lower prices!
        </h1>
        <h4 className="text-base font-normal md:text-xl">
          It’s more affordable than ever to give every <br /> room in your home
          a stylish makeover
        </h4>
        <button className="underline text-sm font-normal pt-[24px] pb-[55px] md:text-base">
          Shop Now →
        </button>
      </div>
    </div>
  );
}

export default Discount;
