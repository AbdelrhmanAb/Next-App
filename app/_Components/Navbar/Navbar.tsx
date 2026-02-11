import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'


import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { categoryList } from '@/app/page'

const Navbar = () => {
  return (
    <header className='flex '>
      <div className='flex gap-6 h-[5rem] items-center bg-amber-100/90 fixed z-50  shadow-2xl  container justify-between p-2 '>

        <div className="flex items-center">
        <Link href={"/"} >
          <Image
            src={"/images/logo.png"}
            alt=''
            width={80}
            height={80}
          />
        </Link>

          <h2 className=' flex items-center text-lg gap-2 bg-black/30 p-3 rounded-full'><LayoutGrid />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <p >Category</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Our Category</DropdownMenuLabel>
                {categoryList.map((item, index) => {
                  return (
                    <Link href={"/menu/" + item.name} key={index} className="">

                      <DropdownMenuItem >{item.name}</DropdownMenuItem>
                    </Link>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </h2>
          </div>
        <div className=" relative hidden md:flex  items-center h-full ">
          <Search className=' absolute left-2 border-r-2 pr-0.5 w-8 ' />
          <input type="text" placeholder='Frist search' className='w-80 h-2/3 pl-12 p-2 rounded-4xl text-lg border-2 outline-none border-amber-950 focus:border-amber-300' />
        </div>
        <div className="flex gap-3 items-center">
          <Link href={"/menu"} className='text-lg hover:border-b-2 border-b-sky-600 transition-all duration-200'>menu</Link>
          <h2 className="flex "><ShoppingBag />0</h2>
          <Button variant={'amazon'}>Log in</Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar