
import Image from "next/image";

import { Button } from "../components/ui/button";
import { ArrowUpRight } from "lucide-react";
import ProductHomePage from "./ProductHomePage";


export default function Home() {





  interface Category {
    name: string,
    description: string,
    image: string
  }

  interface Item {
    name: string,
    description: string,
    image: string,
    direction: string
  }



  const categoryList: Category[] = [
    {
      name: "Appetizers",
      description: "Start your meal with our delicious appetizers, made to awaken your appetite.",
      image: "/images/Ritz-Cracker-Party-Sandwiches_beauty_SEO63_58-7cd3bb86f5464b3aa0304a953dfb65b4.jpg",
    },
    {
      name: "Main Dishes",
      description: "Enjoy our main dishes prepared with fresh ingredients and rich flavors.",
      image: "/images/2548301_QFSHe_646_0_0_0-fbd2a27e126942c8b33dbc3d696b0501.jpg",
    },
    {
      name: "Drinks",
      description: "Refreshing hot and cold drinks to perfectly complement your meal.",
      image: "/images/Sweet-Rum-Punch_EXPS_FT24_273648_EC_050224_4.jpg",
    },
    {
      name: "Desserts",
      description: "Sweet and delightful desserts to finish your meal on a perfect note.",
      image: "/images/Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg",
    },
  ];



  const itemsDescrebList: Item[] = [
    {
      name: "Italian Pizza",
      description:
        "A freshly baked Italian pizza made with premium dough, rich tomato sauce, and perfectly melted cheese. Topped with carefully selected ingredients to deliver a balanced, flavorful taste that satisfies pizza lovers at any time of day.",
      image: "/images/e3a398bd-c73b-417d-a725-7b9db3274724_removalai_preview.png",
      direction: "row"

    },
    {
      name: "Grilled Fish",
      description:
        "Tender grilled fish prepared with fresh herbs, light spices, and a touch of lemon. Cooked to preserve its natural flavor and juiciness, offering a healthy and delicious option for seafood lovers seeking a refined taste.",
      image: "/images/grilled-fish-on-a-plate-isolated-on-transparent-background-png.png",
      direction: "row-reverse"
    },
    {
      name: "Roasted Chicken",
      description:
        "Juicy roasted chicken marinated with our special blend of spices and herbs, then cooked slowly to perfection. Crispy on the outside and tender inside, delivering a comforting and satisfying meal full of rich flavor.",
      image: "/images/acd5f44c-81e5-4040-bc64-9558cde5d022_removalai_preview.png",
      direction: "row"

    },
    {
      name: "Chocolate Gateau",
      description:
        "A rich chocolate gateau layered with smooth cream and moist chocolate sponge. Carefully crafted to provide a perfectly balanced sweetness, making it an irresistible dessert choice for anyone craving a luxurious sweet experience.",
      image: "/images/pngtree-cheesecake-png-with-ai-generated-png-image_11571900.png",
      direction: "row-reverse"

    },
  ];


  return (
    <div className="w-full  ">
      <main>
        {/* SEC-1 HERO-INAGE */}
        <section>
          <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),url("images/istockphoto-603267744-612x612.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"


          }} className="w-full flex items-center   h-[70vh] bg-pik-500 ">

            {/* TEXT-DIV */}
            <div className="md:w-1/2 w-full h-full flex flex-col items-start md:p-20 gap-5 p-5  bg-green-900/90">
              <p className="text-3xl text-sky-50">Great Taste, Every Time :</p>

              <h3 className="text-2xl md:text-4xl text-amber-50 font-bold w-full md:w-8/12">An Exceptional Dining Experience Starts Here
                Carefully <span className="text-amber-300"> crafted dishes to satisfy every taste.</span></h3>
              <Button className=" mt-4 h-16 w-34 rounded-3xl text-2xl" variant={"amazon"}>Explore <ArrowUpRight /></Button>

            </div>

            {/* TEXT-DIV */}



          </div>
        </section>
        {/* SEC-1 HERO-INAGE */}

        {/* ------- SEC-2 CATOGRY -------- */}

        <section>
          <div className="w-full md:h-[50vh]  p-5  bg-amber-100 flex flex-col md:flex-row gap-12 md:gap-0 items-center justify-evenly ">
            {categoryList.map((item, index) => {
              return (

                <div key={index} className="flex p-3 relative w-10/12 md:w-1/5 md:h-10/12 h-[40vh] bg-green-900 rounded-4xl">

                  {/*  image icon */}
                  <div className=" absolute right-9/12 bottom-8/12">
                    <div className="w-28 h-28 relative overflow-hidden  bg-green-900  rounded-full">
                      <Image
                        src={item.image}
                        alt="icon"
                        // width={150}
                        // height={100}
                        fill
                        className=" object-contain  "
                      />
                    </div>
                  </div>
                  {/*  image icon */}
                  <div className="ml-18 flex flex-col gap-5">
                    <h3 className="text-2xl text-amber-50 font-bold">{item.name}</h3>
                    <p className="text-lg text-amber-50">{item.description}</p>
                  </div>

                </div>
              )

            })}
          </div>
        </section>
        {/* ------- SEC-2 CATOGRY -------- */}

        {/* ------- SEC-3  ITEM-DESCRIBTOIN -------- */}
        <section>
          <div className="bg-amber-50 md:gap-12 gap-5 flex flex-col p-x5 pt-12 items-center">
            <h2 className="md:text-6xl text-2xl font-bold text-emerald-900">Our Featured Dishes</h2>
            <p className="md:text-3xl text-sm md:w-auto w-3/4   text-emerald-800">
              Carefully selected flavors signature dishes our guests love and come back for.
            </p>

            <div className="w-full h-auto">
              <div className="mt-24 bg-amber-100 py-1">
                {itemsDescrebList.map((item, index) => {
                  return (
                    <div key={index} className={`w-full h-[70vh] px-3 mt-12 md:mt-0 gap-3 md:gap-0  flex  flex-col-reverse  ${item.direction === "row" ? "md:flex-row" : "md:flex-row-reverse"} `}>
                      <div className="md:w-1/2 w-full gap-3 md:pl-12 pl-3 flex flex-col items-cente justify-center text-green-900">
                        <h3 className="md:text-4xl text-2xl font-bold ">{index + 1}. {item.name}</h3>
                        <p className="md:text-lg md:w-3/5 w-full"> {item.description}</p>
                      </div>

                      <div className="md:w-1/2 w-full h-full bg-emerald-900 relative">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className=" object-cover "

                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        {/* ------- SEC-3  ITEM-DESCRIBTOIN -------- */}

        {/* ------- SEC-4  CARD-SECTION BEST-OFFER---------- */}

        <section>
          <div className="w-full h-auto flex flex-col gap-6 items-center mt-12 p-5">
            <h3 className="text-5xl font-bold text-emerald-950">Best Offers</h3>
            <div className="w-24 border-4 border-emerald-800 rounded-full"></div>
            <p className="text-2xl text-emerald-900">Discover our special deals and exclusive discounts crafted just for you!</p>
            <div className="">
              <ProductHomePage />
            </div>
          </div>
        </section>
        {/* ------- SEC-4  CARD-SECTION BEST-OFFER---------- */}

      </main>

    </div>
  );
}
