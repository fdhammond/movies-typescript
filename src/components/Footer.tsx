import { FaVimeoV, FaInstagram, FaSpotify, FaFacebook  } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className="flex md:flex-row flex-col justify-center items-center md:pt-30 md:pb-40 pt-20 md:px-36 md:mx-40 md:gap-28 mx-8 my-12">
        <div className="max-w-[630px]">
          <h1 className="text-white text-2xl font-bold mb-[10px]">Subscribe for Updates</h1>
          <p className="text-[14px] text-gray-500 font-bold">Stay up-to-date with the latest news and updates from Noxe by subscribing to our newsletter. Be the first to know about our upcoming films, behind-the-scenes content, and exclusive promotions. Don't miss out on the magic of storytelling.</p>
        </div>
        <div className="max-w-[470px] flex md:py-0 md:px-0 pt-32 px-12">
          <div className="flex w-full flex-col">
            <div className="flex flex-row">
              <input className="pl-4 w-[370px] bg-rgba-black-85 border-[1px] border-grey-500 border-t-[1px] border-b-[1px] text-gray-500 px-[24px] py-[12px]" type="text" placeholder="Your email address" />
              <button className="bg-rgba-black-85 border-[1px] border-grey-500 text-white px-4 uppercase font-bold text-[14px]">Send</button>
            </div>
            <div className="flex w-full pt-4">
              <input type="checkbox" name="subscribe" id="" /><label className="pl-4 text-gray-500">I agree to the terms and conditions</label>
            </div>
          </div>
        </div>
    </div>
    <div className="border-b-[0.1px] border-gray-600" />
    <div className="w-full h-full flex flex-col pt-[120px] md:py-[150px] md:flex-row md:justify-between md:px-[290px] md:items-center">
      <div className="text-white md:max-w-[285px] md:h-[158px] py-8 md:py-0 pl-8">
        <div className="flex flex-col w-full gap-4">
          <h1 className="text-2xl font-bold">Movies</h1>
          <div className="flex gap-6">
            <FaVimeoV />
            <FaInstagram />
            <FaSpotify />
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white md:max-w-[285px] md:h-[158px] py-8 md:py-0 pl-8">
        <h1 className="text-[14px] font-bold uppercase pb-[12px]">Pages</h1>
        <div className="text-[15px] text-gray-500 font-bold">
          <p className="py-[5px]">Home</p>
          <p className="py-[5px]">About Us</p>
          <p className="py-[5px]">Studio</p>
          <p className="py-[5px]">Contact Us</p>
        </div>
      </div>
      <div className="flex flex-col text-white md:max-w-[285px] md:h-[158px] py-8 md:py-0 pl-8">
        <h1 className="text-[14px] font-bold uppercase pb-[12px]">Our Studio</h1>
        <div className="text-[15px] text-gray-500 font-bold">
          <p className="py-[5px]">Services</p>
          <p className="py-[5px]">Our Works</p>
          <p className="py-[5px]">Movies Team</p>
          <p className="py-[5px]">History</p>
        </div>
      </div>
      <div className="flex flex-col text-white md:max-w-[285px] md:h-[158px] py-8 md:py-0 pl-8 pb-[120px]">
        <h1 className="text-[14px] font-bold uppercase pb-[12px]">Movies Studio</h1>
        <div className="text-[15px] text-gray-500 font-bold">
          <p className="py-[5px]">The Movies Film Studio</p>
          <p className="py-[5px]">1500 Movies Street, Suite 3845</p>
          <p className="py-[5px]">Los Angeles, USA</p>
          <p className="py-[5px]">hello@movies.com</p>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-500 md:border-0" />
    </div>
    <div className="flex flex-col text-white pb-8 md:pb-8 md:py-0 pl-8 md:px-[290px]">
      <p className="text-[12px] text-white font-bold">
        © 2024 All Rights Reserved The Movie Studio from Movie Studios.
      </p>
      </div>
    </>
  )
}
