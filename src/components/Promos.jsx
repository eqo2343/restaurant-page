import React from "react";
import Card from "./Card";
import PromoItem from "./PromoItem";
import menuItems from "../menu-items.json"
import one from "../assets/item-images/one.avif"
import two from "../assets/item-images/two.avif"
import three from "../assets/item-images/three.avif"
import four from "../assets/item-images/four.avif"
import five from "../assets/item-images/five.avif"
import six from "../assets/item-images/six.avif"
import seven from "../assets/item-images/seven.avif"
import eight from "../assets/item-images/eight.avif"
import nine from "../assets/item-images/nine.avif"
import bgImage from "../assets/images/bg2.png"



//add link

const Promos = () => {
    const topItems = menuItems.slice(0, 3);
    const itemImages = [ one, two, three, four, five, six, seven, eight, nine];

  return (
    <>
    <section style={{
         backgroundImage: `url(${bgImage})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         height: 'auto',
         width: '100%',
    }} className="pb-40 max-w-full h-auto flex flex-col justify-center">   
        <div className="flex py-10 container-xl lg:container m-auto h-auto rounded-xl">
            <div className="flex flex-1 justify-start items-center">
                <h2 className="text-white font-bold text-4xl">Featured Menu</h2>
            </div>
            <div className="flex flex-1 justify-end p-3">
                <a href="/menu" className="flex bg-yellow-500 hover:bg-red-700 hover:text-white text-black text-center py-4 px-6 font-bold rounded-4xl">
                    VIEW FULL MENU
                </a>    
            </div>
         </div>
        <div className="container-xl lg:container m-auto bg-black h-auto rounded-xl">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                {topItems.map((item,index) => (
                   <PromoItem key={item.id} item={item} imageSrc={itemImages[index]} />
                ))}

            </div>
        </div>
    </section>
    </>
  )
}

export default Promos