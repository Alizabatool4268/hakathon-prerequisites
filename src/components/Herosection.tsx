import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoDotFill } from "react-icons/go";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

function Herosection() {
  return (
    <section className='w-screen grid grid-cols-3 gap-6 ssm:grid-rows-2 ssm:grid-cols-2 xsm:grid-cols-2 xsm:grid-rows-2'>
        <div className=' border-r-[1px] border-solid border-[#D9D9D9] flex justify-center items-center ssm:col-span-2 ssm:flex-col xsm:flex-col xsm:col-span-2'>
            <h3 className='font-bold text-[28px] md:hidden msm:hidden sm:hidden'>Catagories</h3>
            <ul className='mt-3'>
                <li className='mt-1'>Woman's Fashion  {/*icon */} </li>
                <li className='mt-1'>Men's Fashion {/*icon */} </li>
                <li className='mt-1'>Electronics</li>
                <li className='mt-1'>Home & Lifestyle</li>
                <li className='mt-1'>Medicine</li>
                <li className='mt-1'>Sports & Outdoor</li>
                <li className='mt-1'>Baby's & Toys</li>
                <li className='mt-1'>Groceries & Pets</li>
                <li className='mt-1'>Health & Beauty</li>
            </ul>
        </div>
       <div className='col-span-2 flex justify-center items center flex-col bg-black mr-12 ssm:m-0 xsm:m-0'>
       <div className='flex justify-center items-center msm:flex-col ssm:flex-col xsm:flex-col'>
         <div>
           <span className='flex justify-between items-center w-[190px]'>
             <Image
               height={40}
               width={49}
               src={"/Images/Apple_gray_logo.png"}
               alt='applelogo'
               className='sm:h-[35px] sm:w-[35px] msm:w-[35px] msm:h-[35px]'
             ></Image>
             <p className='text-[#FAFAFA] sm:text-sm md:text-[16px] msm:text-sm'>iPhone 14 Series</p>
           </span>
           <span>
              <h3 className='text-white font-bold text-[48px] sm:text-[30px] lg:text-[48px] msm:text-[35px]'>Up to 10% <br /> off Voucher</h3>
              <span className='flex justify-start items-center gap-1'>
              <Link href={"/"} className='text-white underline decoration-white msm:text-sm'>Shop Now </Link>
              <HiArrowSmallRight className='text-white'/>
              </span>
           </span>
         </div>
         <div>
          <Image 
            height={300}
            width={300}
            src={"/Images/hero_endframe.png"}
            alt='Iphone'
          ></Image>
         </div>
       </div>
       <div className='text-neutral-500 flex justify-center items-center'>
        <GoDotFill />
        <GoDotFill />
        <GoDotFill className='text-[#DB4444]' />
        <GoDotFill />
        <GoDotFill />
       </div>
       </div>
    </section>
  )
}

export default Herosection;