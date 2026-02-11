// "use client"
import React from "react";
import ProductFilterByCat from "./productFilterByCat";


type PageProps = {
    params: Promise<{
        category: string;
    }>;
};

const Page = async ({ params }: PageProps) => {
    const { category } = await params
    return (
        <section className=" container w-full px-6 py-24  flex flex-col gap-20  ">
            <h3 className="text-5xl font-bold text-amber-400">Menu/ <span className="text-sky-600 underline">{category}</span></h3>

            <ProductFilterByCat category={category}/>
        </section>
    );
};

export default Page;
