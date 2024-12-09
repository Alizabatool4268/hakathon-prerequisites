import React from 'react';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";

function Header() {
  return (
 <header className='overflow-x-hidden'>
  <nav className='flex justify-around items-center h-[80px] border-b-[1px] border-solid border-[#D9D9D9]'>
    <h1 className='font-bold text-[24px] ssm:text-[20px] xsm:text-[18px]'>
      Exclusive
    </h1>
    <div className='flex justify-center items-center gap-6 sm:text-sm md:text-[16px] msm:hidden ssm:hidden xsm:hidden '>
      <Link href={"/"} className='hover:underline decoration-black'>Home</Link>
      <Link href={"/"} className='hover:underline decoration-black'>Contact</Link>
      <Link href={"/"} className='hover:underline decoration-black'>About</Link>
      <Link href={"/"} className='hover:underline decoration-black'>Sign Up</Link>
    </div>
    <div className='flex justify-center items-center gap-3 sm:w-[250px] msm:w-[400px] ssm:w-[300px] xsm:[250px]'>
     <div className='h-[38px] w-[243px] flex justify-center items-center ssm:w-[150px] xsm:w-[150px]'>
       <input type="text" placeholder='What are you looking for?' className='placeholder:text-[12px] bg-[#F5F5F5] h-[24px]
        w-[211px] rounded-tl-sm rounded-bl-sm sm:w-[180px] md:w-[211px] msm:w-[360px] ssm:w-[150px] xsm:w-[140px]' />
       <CiSearch className='bg-[#F5F5F5] h-[24px] w-[24px] rounded-tr-sm rounded-br-sm' />
     </div>
     <div className='flex justify-center itmes-center gap-2 '>
       <Link href={"/Wishlist"}> <GoHeart /> </Link>
       <Link href={"/Cart"}> <IoCartOutline /> </Link>
     </div>
    </div> 
  </nav>
 </header>
  )
}

export default Header;