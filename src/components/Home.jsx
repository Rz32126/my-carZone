import Carousel from "./Carousel";
import ChoosePage from "./ChoosePage";
import Header from "./Header";
import Offer from "./Offer";
import RecentListing from "./RecentListing";



const Home = () => {
    return (
        <div>
          <Header></Header>
          <ChoosePage></ChoosePage>
          <RecentListing></RecentListing>
          <Carousel></Carousel>
          <Offer></Offer>
        </div>
    );
};

export default Home;