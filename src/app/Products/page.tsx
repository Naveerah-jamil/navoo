import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";

const ProductCard = ({ imgSrc, label, price, labelColor = "#01AD5A", index }: { imgSrc: string, label?: string, price: string, labelColor?: string, index: number }) => (
  <div className="w-full sm:w-[312px] lg:w-[23%] h-[377px] relative"> {/* Adjust width for larger screens */}
    <div className="rounded-[6px]">
      <Image src={imgSrc} alt="loading" width={312} height={312} />
      {label && (
        <div
          className={`absolute w-[54px] h-[29px] top-[20px] left-[20px] pt-[2px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] rounded-tl-[4px] bg-[${labelColor}]`}
        >
          <p className="w-[34px] h-[14px] font-Inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF] mb-[500px]">
            {label}
          </p>
        </div>
      )}
    </div>
    <div className="w-[256px] h-[51px] mt-[10px]">
      <p className="font-Inter font-[16px] leading-[20.8px] text-[#007580]">Library Stool Chair</p>
      <p className="font-Inter text-[16px] leading-[20.8px]">{price}</p>
    </div>
    <div 
      className={`absolute w-[44px] h-[44px] rounded-[6px] top-[200px] right-[-10px] mt-[70px] mr-[20px] 
        ${[0, 4, 8].includes(index) ? 'bg-green-500 text-white' : 'bg-[#F0F2F3] text-black'}`}
    >
      <LuShoppingCart className="w-[22px] h-[22px] mt-[10px] ml-[10px]" />
    </div>
  </div>
);

export default function Products() {
  const products = [
    { imgSrc: "/assets/image.png", label: "New", price: "$20" },
    { imgSrc: "/assets/image10.png", label: "Sales", price: "$20", labelColor: "#F5813F" },
    { imgSrc: "/assets/image3.png", price: "$20" },
    { imgSrc: "/assets/image4.png", price: "$20" },
    { imgSrc: "/assets/image5.png", label: "New", price: "$20" },
    { imgSrc: "/assets/image6.png", label: "Sales", price: "$20", labelColor: "#F5813F" },
    { imgSrc: "/assets/image7.png", price: "$20" },
    { imgSrc: "/assets/image8.png", price: "$20" },
    { imgSrc: "/assets/image9.png", label: "New", price: "$20" },
    { imgSrc: "/assets/image12.png", price: "$20" },
    { imgSrc: "/assets/image7.png", price: "$20" },
    { imgSrc: "/assets/image8.png", price: "$20" },
  ];

  return (
    <div className="bg-white">
      <div className="w-full h-[461px] bg-white">
        <div className="w-full flex justify-between px-[300px] py-[40px]">
          <p className="font-Inter font-[600] text-[32px] text-[#272343]">All Products</p>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-between gap-[20px] mt-[40px] px-[30px] sm:px-[50px] md:px-[100px] lg:px-[300px]">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>

        {/* Footer Section */}
        <div className="relative w-full py-[100px] px-[300px] bg-gray-100">
          <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-16">
            <h2 className="font-roboto text-[50px] font-medium text-center">
              Or Subscribe to the Newsletter
            </h2>
            <h2 className="font-roboto text-[50px] font-medium text-center">
              Follow Products and Discounts on Instagram
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-[24px] mt-[50px]">
  {Array(6).fill("").map((_, index) => (
    <div key={index} className="w-[186px] h-[186px] rounded-[6px] overflow-hidden">
      <Image
        src="/assets/image1.png"
        alt={`Instagram Product ${index + 1}`}
        width={186}
        height={186}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

              
          </div>
        </div>
      </div>
    </div>
  );
}
