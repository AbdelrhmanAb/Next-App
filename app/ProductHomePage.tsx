"use client"
import { useEffect, useState } from "react";
import { fetchData } from "./_utils/api";
import Image from "next/image";
import { Button } from "./components/ui/button";

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
          console.log(item.image);
          
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
            <Button variant={"amazon"}>Add To Card</Button>
            </div>

          )

        })
      }

    </div>
  )
}

export default ProductHomePage