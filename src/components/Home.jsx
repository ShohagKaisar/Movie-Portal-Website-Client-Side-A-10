import { useLoaderData } from "react-router-dom";
import Cards from "./Cards/Cards";
import 'animate.css';
import Marquee from "react-fast-marquee";
import VisionSection from "./VisionSection/VisionSection";
import bg from "../assets/images/bg.jpg"

const Home = () => {

  const datas = useLoaderData();

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://th.bing.com/th/id/OIP.cj4Um0XIsO3qjQPXNYUBDQHaEK?w=3840&h=2160&rs=1&pid=ImgDetMain)",
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
              <div>
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounce text-purple-500">Movie Portal</h1>
                <p className="mb-5 lg:px-40 md:px-20 px-14">
                  "Discover Your Next Favorite Movie! 🌟 Explore top-rated films, watch trailers, and get personalized recommendations—all in one place!"
                </p>
                <a href="#card"><button className="btn btn-primary">Get Started</button></a>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://th.bing.com/th/id/OIP.GVI0Xb4C4x83lXS4BMMybQHaEK?w=328&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7)",
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
              <div>
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounce text-purple-500">Movie Portal</h1>
                <p className="mb-5 lg:px-40 md:px-20 px-14">
                  "Discover Your Next Favorite Movie! 🌟 Explore top-rated films, watch trailers, and get personalized recommendations—all in one place!"
                </p>
                <a href="#card"><button className="btn btn-primary">Get Started</button></a>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero"
            style={{
              backgroundImage: "url(https://th.bing.com/th/id/OIP.ALNOiq6LZW0oSNRgD0LC5wHaEG?w=320&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7)",
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
              <div>
                <h1 className="mb-5 text-5xl font-bold animate__animated animate__bounce text-purple-500">Movie Portal</h1>
                <p className="mb-5 lg:px-40 md:px-20 px-14">
                  "Discover Your Next Favorite Movie! 🌟 Explore top-rated films, watch trailers, and get personalized recommendations—all in one place!"
                </p>
                <a href="#card"><button className="btn btn-primary">Get Started</button></a>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className="text-center my-8 border-b-2 pb-8">
        <h1 className="text-5xl font-bold underline italic text-purple-800">Featured Movies</h1>
      </div>
      <div id="card" className=" p-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
        {
          datas.map(data => <Cards key={data.id} data={data}></Cards>)
        }
      </div>
      <div className="p-4 border-2 my-4 shadow-xl">
        <div>
          <p className="text-center text-5xl font-semibold italic text-green-500 my-4">Movies Gallery</p>
        </div>
        <Marquee speed={40}>
          <div className="grid grid-cols-9 gap-4 my-4">
            {
              datas.map((data) => <div key={data.id} className="mx-4">
                <img className="w-full h-40" src={data.poster} alt="" />
                <p className="font-bold text-center">{data.title}</p>
              </div>)
            }
          </div>
        </Marquee>
      </div>
      <p className="text-center text-4xl font-bold">Contact Us</p>
      <div className='flex justify-center items-center py-4'>
        {/* Our vISION sECTION */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VisionSection />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
