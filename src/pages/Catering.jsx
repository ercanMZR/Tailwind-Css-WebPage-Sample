import React from 'react'
import image1 from '../assets/hamburger.jpg'
import image2 from '../assets/tablesetting.jpg'
import image3 from '../assets/tablesetting2.jpg'

function Catering() {
  return (
    
    <><><nav className="flex justify-between w-full bg-slate-400 items-center py-4 px-8 fixed">
      {/* Sol kısım: Logo veya başlık */}
      <div className="text-lg font-light tracking-wide font-semibold">
        Gourmet au Catering
      </div>

      {/* Sağ kısım: Menü linkleri */}
      <div className="flex space-x-8 text-lg font-light ">
        <a href="#" class="hover:text-lime-200 font-semibold ">About</a>
        <a href="#" class="hover:text-lime-200 font-semibold">Menu</a>
        <a href="#" class="hover:text-lime-200 font-semibold">Contact</a>
      </div>
    </nav>
      <div >
        <img class="h-full" src={image1} alt="image1" />
      </div></><>
        <div class="flex justify-between ">
          <img class=" p-8  w-1/2 h-full  " src={image2} alt="" />
          <div class="w-1/2  "> <h1 class="p-10 text-4xl font-bold flex justify-center">About Catering</h1>
          <p class="pr-4 text-xl ">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
          <p class="pt-8 pr-4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
          </div>
          <div class="flex justify-between pt-4 pb-8">
            <div class="w-1/2 pr-8 pl-8" >
            <h1 class="text-4xl font-semibold pl-4 mb-2 flex justify-center" >Our Menu</h1>
            <h1 class="text-2xl pt-2 font-semibold ">Bread Basket</h1>
            <p class="text-xl  mb-2">Assortment of fresh baked fruit breads and muffins 5.50</p>
            <h1 class="text-2xl font-semibold pt-4 ">Honey Almond Granola with Fruits</h1>
            <p class="text-xl mb-2">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
            <h1 class="text-2xl font-semibold pt-4">Belgian Waffle</h1>
            <p class="text-xl mb-2">Vanilla flavored batter with malted flour 7.50</p>
            <h1 class="text-2xl font-semibold pt-4">Scrambled eggs</h1>
            <p class="text-xl mb-2">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
            <h1 class="text-2xl font-semibold pt-4">Blueberry Pancakes</h1>
            <p class="text-xl mb-2">With syrup, butter and lots of berries 8.50</p>
            </div>
            <img class="w-1/2 h-full pl-4 pr-8 " src={image3} alt="" />

          </div>
<div class="pr-8 pl-8">
  <h1 class="pt-10 pb-10 text-4xl">Contact</h1>
  <br class="p-10" />
  <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
  <p class="font-semibold text-cyan-600">Catering Service, 42nd Living St, 43043 New York, NY</p>
  <div>
    <p class="pt-2 pb-2"><input class="border-b w-full p-2" type="text" placeholder='Name' /></p>
    <p class="pt-2 pb-2"><input class="border-b w-full p-2" type="text" placeholder='How many people' /></p>
    <p class="pt-2 pb-2"><input class="border-b w-full p-2" type="text" placeholder='Date and time' /></p>
    <p class="pt-2 pb-2"><input class="border-b w-full p-2" type="text" placeholder='Special requirements' /></p>
    <button class="border-b-2 mt-2 mb-4 pt-2 pb-2 pr-4 pl-4 bg-lime-200 rounded-full">SEND MESSAGE</button>
  </div>

</div>
<footer class="mt-3 bg-stone-800 p-9 flex justify-center ">
  <p class="text-xl  ">Powered by Ercan</p>
</footer>



        
      </></>






    
   

  )
}

export default Catering