import React from "react";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import './Home.css'
import SummerDeal from './SummerDeal'
import Footer from "./Footer"
import Carousel from "./Carousel";
  function Home(){

    // const settings = {
    //   autoplay:true,
    //   className: "center",
    //   centerMode: true,
    //   infinite: true,
    //   centerPadding: "14%",
    //   slidesToShow: 1,
    //   speed: 200
    // };
    return (
      <div className="home">
        {/* <Slider {...settings} className="slider">
          <div className="innerSlider">
            <img src="/image/1.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/2.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/3.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/4.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/5.jpg" alt="" className="image"/>
          </div>
          <div className="innerSlider">
            <img src="/image/6.png" alt="" className="image"/>
          </div>
        </Slider> */}
        <Carousel/>

        <p className="summer_heading">summer time deals</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/card/1.jpeg"}
          heading={"Summer Time Deal 1"}
          subheading={"1 X 10inch Medium Piza + 1 Sauce"}
          price={699}
          />
         <SummerDeal
          pic={"/card/1.jpeg"}
          heading={"Summer Time Deal 1"}
          subheading={"1 X 10inch Medium Piza + 1 Sauce"}
          price={699}
          />
           <SummerDeal
          pic={"/card/1.jpeg"}
          heading={"Summer Time Deal 1"}
          subheading={"1 X 10inch Medium Piza + 1 Sauce"}
          price={699}
          />
           <SummerDeal
          pic={"/card/1.jpeg"}
          heading={"Summer Time Deal 1"}
          subheading={"1 X 10inch Medium Piza + 1 Sauce"}
          price={699}
          />
        </div>

        <p className="summer_heading">special offers</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/1.jpg"}
          heading={"Star Kids Meal"}
          subheading={"1 x Pasta 1 Small Drink"}
          price={699}
          />
           <SummerDeal
          pic={"/special/2.jpg"}
          heading={"The Bucati Duo"}
          subheading={"1 x Pasta 1 Small Drink"}
          price={699}
          />
           <SummerDeal
          pic={"/special/1.jpg"}
          heading={"Star Kids Meal"}
          subheading={"1 x Pasta 1 Small Drink"}
          price={699}
          />
           <SummerDeal
          pic={"/special/3.jpg"}
          heading={"The Knockout Trio"}
          subheading={"1 x Pasta 1 Small Drink"}
          price={699}
          />
        </div>

        <p className="summer_heading">happy hours</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/happy.jpg"}
          heading={"Mix & Match Without Slice"}
          subheading={"1 x Pasta 7 Small Drink"}
          price={699}
          />
           <SummerDeal
          pic={"/special/happy.jpg"}
          heading={"Mix & Match With Slice"}
          subheading={"4 x Pasta 1 Small Drink"}
          price={699}
          />
        </div>

        <p className="summer_heading">premium deals</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/p1.jpg"}
          heading={"Premium Deal 1"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={399}
          />
           <SummerDeal
          pic={"/special/p2.jpg"}
          heading={"Premium Deal 2"}
          subheading={"20 inch Pizza Slice, Half Portion Appetizer"}
          price={499}
          />
           <SummerDeal
          pic={"/special/p3.jpg"}
          heading={"Premium Deal 3"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={549}
          />
           <SummerDeal
          pic={"/special/p4.jpg"}
          heading={"Premium Deal 4"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={599}
          />
        </div>

        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/p5.jpg"}
          heading={"Premium Deal 5"}
          subheading={"10 inch Medium, Half Portion Appetizer, 2 Drinks"}
          price={949}
          />
           <SummerDeal
          pic={"/special/p6.jpg"}
          heading={"Premium Deal 6"}
          subheading={"20 Inch Full, Full Portion Appetizer, 1 Drink"}
          price={1199}
          />
           <SummerDeal
          pic={"/special/p7.jpg"}
          heading={"Premium Deal 7"}
          subheading={"20 Inch Half, Full Portion Appetizer, 1 Drink"}
          price={1459}
          />
           <SummerDeal
          pic={"/special/p8.jpg"}
          heading={"Premium Deal 8"}
          subheading={"20 Inch Full, Full Portion Appetizer, 1 Drink"}
          price={2399}
          />
        </div>


        <p className="summer_heading">APPETIZERS & WINGS</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/a1.jpg"}
          heading={"APPETIZERS BOX"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={1399}
          />
           <SummerDeal
          pic={"/special/a2.jpg"}
          heading={"Arabic Tikka Breads (4Pcs)"}
          subheading={"20 inch Pizza Slice, Half Portion Appetizer"}
          price={2578}
          />
           <SummerDeal
          pic={"/special/a3.jpg"}
          heading={"Garlic Breads (5Pcs)"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={549}
          />
           <SummerDeal
          pic={"/special/a4.jpg"}
          heading={"Mozarella Breads (5Pcs)"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={599}
          />
        </div>

        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/a5.jpg"}
          heading={"Oven Baked Potato Wedges"}
          subheading={"10 inch Medium, Half Portion Appetizer, 2 Drinks"}
          price={279}
          />
           <SummerDeal
          pic={"/special/a6.jpg"}
          heading={"Stuffed Potato Skins"}
          subheading={"20 Inch Full, Full Portion Appetizer, 1 Drink"}
          price={1199}
          />
           <SummerDeal
          pic={"/special/a7.jpg"}
          heading={"BBQ Ranch Wings"}
          subheading={"20 Inch Half, Full Portion Appetizer, 1 Drink"}
          price={279}
          />
           <SummerDeal
          pic={"/special/a8.jpg"}
          heading={"Habanero Wings"}
          subheading={"20 Inch Full, Full Portion Appetizer, 1 Drink"}
          price={279}
          />
        </div>

        <p className="summer_heading">PIZZA FLAVORS</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/z1.jpg"}
          heading={"Star Pizza"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={1399}
          />
           <SummerDeal
          pic={"/special/z2.jpg"}
          heading={"Jamaican BBQ"}
          subheading={"20 inch Pizza Slice, Half Portion Appetizer"}
          price={2578}
          />
           <SummerDeal
          pic={"/special/z3.jpg"}
          heading={"Chicago Bold Fold"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={549}
          />
           <SummerDeal
          pic={"/special/z4.jpg"}
          heading={"West Side Garlic"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={599}
          />
        </div>

        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/z5.jpg"}
          heading={"Dancing Fajita"}
          subheading={"10 inch Medium, Half Portion Appetizer, 2 Drinks"}
          price={279}
          />
           <SummerDeal
          pic={"/special/z6.jpg"}
          heading={"Tarzan Tikka"}
          subheading={"20 Inch Full, Full Portion Appetizer, 1 Drink"}
          price={1199}
          />
           <SummerDeal
          pic={"/special/z7.jpg"}
          heading={"Phantom"}
          subheading={"20 Inch Half, Full Portion Appetizer, 1 Drink"}
          price={279}
          />
           <SummerDeal
          pic={"/special/z8.jpg"}
          heading={"Mamamia Classic"}
          subheading={"20 Inch Full, Full Portion Appetizer, 1 Drink"}
          price={279}
          />
        </div>

        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/z9.jpg"}
          heading={"Godspell Beef Load"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={1399}
          />
           <SummerDeal
          pic={"/special/z10.jpg"}
          heading={"Mughlai Beast"}
          subheading={"20 inch Pizza Slice, Half Portion Appetizer"}
          price={2578}
          />
           <SummerDeal
          pic={"/special/z11.jpg"}
          heading={"Gypsy Euro"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={549}
          />
           <SummerDeal
          pic={"/special/z12.jpg"}
          heading={"Wicked Blend"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={599}
          />
        </div>

        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/z13.jpg"}
          heading={"Arabic Ranch"}
          subheading={"10 inch Medium, Half Portion Appetizer, 2 Drinks"}
          price={279}
          />
           <SummerDeal
          pic={"/special/z14.jpg"}
          heading={"Habanero Kick"}
          subheading={"20 Inch Full, Full Portion Appetizer, 1 Drink"}
          price={1199}
          />
           <SummerDeal
          pic={"/special/z15.jpg"}
          heading={"All Cheese"}
          subheading={"20 Inch Half, Full Portion Appetizer, 1 Drink"}
          price={279}
          />
           <SummerDeal
          pic={"/special/z16.jpg"}
          heading={"All Veggie"}
          subheading={"20 Inch Full, Full Portion Appetizer, 1 Drink"}
          price={279}
          />
        </div>

        <p className="summer_heading">CALZONES</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/c1.jpg"}
          heading={"Chicken Zone"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={405}
          />
           <SummerDeal
          pic={"/special/c1.jpg"}
          heading={"Kebab Zone"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={405}
          />
        </div>

        <p className="summer_heading">FRESH SALADS & CREAMY PASTAS</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/f1.jpg"}
          heading={"Chicken Caesar Salad"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={856}
          />
           <SummerDeal
          pic={"/special/f2.jpg"}
          heading={"Garden Salad"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={1255}
          />
          <SummerDeal
          pic={"/special/f3.jpg"}
          heading={"Smokey Joes Pasta"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={256}
          />
           <SummerDeal
          pic={"/special/f4.jpg"}
          heading={"Spicy Garlic Ranch Pasta"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={854}
          />
        </div>

        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/f5.jpg"}
          heading={"BBQ Ranch Pasta"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={2568}
          />  
        </div>

        <p className="summer_heading">MIGHTY OVEN BAKED SANDWICH</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/d1.jpg"}
          heading={"Smokey Joes Sandwich"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={419}
          />
           <SummerDeal
          pic={"/special/d2.jpg"}
          heading={"South Western Sandwich"}
          subheading={"1 x Fusilli Bucati Pasta, 2pcs Garlic Breads"}
          price={419}
          />
          <SummerDeal
          pic={"/special/d3.jpg"}
          heading={"Zesty Habanero Sandwich"}
          subheading={"6 inch Flatbread, Half Portion Appetizer"}
          price={419}
          />
        </div>

        <p className="summer_heading">DESSERTS</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/11.jpg"}
          heading={"Chocolate Fudge Brownie Squares"}
          subheading={"4 pcs"}
          price={856}
          />
           <SummerDeal
          pic={"/special/22.jpg"}
          heading={"Chocolate Lava Cake"}
          subheading={"1 x Full"}
          price={1255}
          />
        </div>

        <p className="summer_heading">BEVERAGES</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/33.jpg"}
          heading={"Drinks Large"}
          subheading={"4 pcs"}
          price={199}
          />
           <SummerDeal
          pic={"/special/44.jpg"}
          heading={"Drinks Small"}
          subheading={"1 x Full"}
          price={85}
          />
        </div>

        <p className="summer_heading">EXTRA SAUCES</p>
        <div className="SummerDeals">
        <SummerDeal
          pic={"/special/66.jpg"}
          heading={"Extra BBQ Ranch"}
          subheading={"4 pcs"}
          price={14}
          />
           <SummerDeal
          pic={"/special/77.jpg"}
          heading={"Extra Garlic Ranch"}
          subheading={"1 x Full"}
          price={35}
          />
          <SummerDeal
          pic={"/special/88.jpg"}
          heading={"Extra Jalapeno Ranch"}
          subheading={"1 x Full"}
          price={75}
          />
          <SummerDeal
          pic={"/special/99.jpg"}
          heading={"Extra Spicy Habanero"}
          subheading={"1 x Full"}
          price={55}
          />
        </div>
        <Footer/>
     </div>
    );
  }
  export default Home;