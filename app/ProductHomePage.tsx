"use client"
import { useEffect, useState } from "react";
import { fetchData } from "./_utils/api";
import Image from "next/image";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { MinusIcon, PlusIcon } from "lucide-react";

interface Item {
  id: number,
  name: string,
  category: string,
  description: string,
  price: number,
  image: string,
  available: boolean
}



interface MenuResponse {
  menuItems: Item[];
}

const ProductHomePage = () => {

  const [items, setItems] = useState<Item[]>([]);

  const [quentity, setQuentity] = useState<number>(1)

  useEffect(() => {
    const getMenu = async () => {
      const data: MenuResponse = await fetchData();
      setItems(data.menuItems);
    };

    getMenu();
  }, []);

  return (
    <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
      {
        items.slice(0, 6).map((item) => {

          return (

            <div key={item.id} className=" shadow p-2 rounded-2xl overflow-hidden cursor-pointer flex flex-col gap-3 items-center">
              <div className="h-[20rem] w-[18rem] rounded-2xl relative bg-amber-600">
                <Image
                  src={`${item.image}`}
                  alt={item.name}
                  // width={300}
                  // height={400}
                  fill
                  loading="lazy"
                  className=""

                />
              </div>
              <h4 className="text-2xl font-bold">{item.name}</h4>
              <div className="flex gap-3 text-lg font-bold">
                <p>{item.price}$</p>
                <del className="text-red-500">{((item.price * (1.42)).toFixed(2))}$</del>
              </div>
              <Dialog>
                <DialogTrigger >
                  <Button variant={"amazon"}>Add To Card</Button>

                </DialogTrigger>
                <DialogContent >
                  <div className="flex md:flex-row flex-col gap-3">

                    <div className="md:h-[21rem] h-[10rem] md:w-[18rem] w-[16rem] rounded-2xl relative bg-amber-600 overflow-hidden">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                            unoptimized

                          loading="lazy"
                          className="object-cover"
                        />
                      )}
                    </div>


                    <div className="flex flex-col md:gap-5 gap-1 pl-2 items-baseline">
                      <h3 className="md:text-3xl text-lg">{item.name}</h3>
                      <p className="">{item.description}</p>
                      <div className="flex gap-3 text-lg font-bold">
                        <p>{item.price}$</p>
                        <del className="text-red-500">{((item.price * (1.42)).toFixed(2))}$</del>
                      </div>
<div className="md:block flex items-center gap-3">
                      <div className="flex items-center md:gap-3 gap-1 border w-auto p-3">
                        <button className="" disabled={quentity == 1} onClick={() => { setQuentity(prev => prev - 1) }}><MinusIcon /></button>
                        <div className="md:text-2xl text-lg">{quentity}</div>
                        <button className="" onClick={() => { setQuentity(prev => prev + 1) }}><PlusIcon /></button>

                      </div>
                      <h3 className="text-lg ">total : {item.price * quentity}</h3>
                
                    </div>
                          <Button variant={"amazon"}>Add to card</Button>
                      <p className="text-lg"><span className=" font-bold">category :</span> {item.category}</p>
                    
                    </div>


                  </div>
                </DialogContent>
              </Dialog>
            </div>

          )

        })
      }

    </div>
  )
}

export default ProductHomePage