import { Link } from 'react-router';
import bannerImg from '../../assets/unnamed.webp'

const Banner = () => {
    return (
      <div className='m-3'>
        <div className="bg-black flex flex-col lg:flex-row-reverse justify-center items-center p-4 rounded-xl">
          <div>
            <img src={bannerImg} alt="" />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-white text-2xl font-semibold">
              Let's Download as Many Games as <br /> Passible Get Free Coupons
            </h2>
            <p className="text-white">
              you can exchange coupon for a battle pass <br /> to buy items in your
              game
            </p>
            <Link to={"/allGames"} className=" lg:mt-8">
              <button className="button text-white mt-5">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;