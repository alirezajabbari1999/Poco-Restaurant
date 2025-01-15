import Navbar from "@/src/components/modules/navbar/Navbar";
import Landing from "../components/templates/index/landing/Landing";
import Menus from "../components/templates/index/menus/Menus";
import Boxes from "../components/templates/index/boxes/Boxes";
import PopularDishes from "../components/templates/index/popularDishes/PopularDishes";
import Banner from "../components/templates/index/banner/Banner";
import TopRecipes from "../components/templates/index/topRecipes/TopRecipes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Menus />
      <Boxes />
      <PopularDishes />
      <Banner />
      <TopRecipes />
    </>
  );
}
