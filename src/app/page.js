import Navbar from "@/src/components/modules/navbar/Navbar";
import Landing from "../components/templates/index/landing/Landing";
import Menus from "../components/templates/index/menus/Menus";
import Boxes from "../components/templates/index/boxes/Boxes";
import PopularDishes from "../components/templates/index/popularDishes/PopularDishes";
import Banner from "../components/templates/index/banner/Banner";
import TopRecipes from "../components/templates/index/topRecipes/TopRecipes";
import Comments from "../components/templates/index/comments/Comments";
import ThreeBanners from "../components/templates/index/threeBanners/ThreeBanners";
import Blogs from "../components/templates/index/blogs/Blogs";
import Footer from "../components/modules/footer/Footer";

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
      <Comments />
      <ThreeBanners />
      <Blogs />
      <Footer />
    </>
  );
}
