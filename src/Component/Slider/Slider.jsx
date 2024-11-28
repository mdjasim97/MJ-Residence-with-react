import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="relative">
      <div className="carousel h-[550px] w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://main.wpresidence.net/wp-content/uploads/2024/01/wpresidece-header.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex flex-col justify-center items-center text-white">
            <div className="w-1/2 text-center space-y-5">
              <h1 className="text-5xl font-bold">Find your dream home</h1>
              <p className="text-2xl text-center">
                We are recognized for exceeding client expectations and
                delivering great results through dedication, ease of process,
                and extraordinary services to our worldwide clients.
              </p>

              <Link className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#36e3f7] text-purple-600 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#a02385] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Explore Now
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://dvvjkgh94f2v6.cloudfront.net/735d922b/735140218/83dcefb7.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex flex-col justify-center items-center text-white">
            <div className="w-1/2 text-center space-y-5">
              <h1 className="text-5xl font-bold">Find your dream home</h1>
              <p className="text-2xl text-center">
                We are recognized for exceeding client expectations and
                delivering great results through dedication, ease of process,
                and extraordinary services to our worldwide clients.
              </p>

              <Link className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#a02385] text-white inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#36e3f7] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Explore Now
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://dvvjkgh94f2v6.cloudfront.net/735d922b/704792493/83dcefb7.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex flex-col justify-center items-center text-white">
            <div className="w-1/2 text-center space-y-5">
              <h1 className="text-5xl font-bold">Find your dream home</h1>
              <p className="text-2xl text-center">
                We are recognized for exceeding client expectations and
                delivering great results through dedication, ease of process,
                and extraordinary services to our worldwide clients.
              </p>

              <Link className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#a02385] text-white inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#36e3f7] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Explore Now
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide4"
          className="carousel-item relative w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                      url('https://dvvjkgh94f2v6.cloudfront.net/735d922b/735140218/83dcefb7.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex flex-col justify-center items-center text-white">
            <div className="w-1/2 text-center space-y-5">
              <h1 className="text-5xl font-bold">Find your dream home</h1>
              <p className="text-2xl text-center">
                We are recognized for exceeding client expectations and
                delivering great results through dedication, ease of process,
                and extraordinary services to our worldwide clients.
              </p>

              <Link className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#a02385] text-white inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#36e3f7] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Explore Now
                </span>
              </Link>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Slider;
