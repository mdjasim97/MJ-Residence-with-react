import { Helmet } from "react-helmet";
import Header from "../../Component/Header/Header";
import { useEffect, useState } from "react";
import Slider from "../../Component/Slider/Slider";
import Residential from "../../Component/Residential/Residential";

import miami from '../../assets/images/miami.jpg';
import los_angeless from '../../assets/images/los_angeless.jpg';
import new_york from '../../assets/images/new_york.jpg';
import florida from '../../assets/images/florida.jpeg';
import kasmir from '../../assets/images/kashmir.jpg'
import Meeting from "../../Component/Meeting/Meeting";

const HomePage = () => {

    const [residential, setResidential] = useState([])


    useEffect(() => {
        fetch("estate.json")
            .then(res => res.json())
            .then(data => setResidential(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Home page | MJ Residential </title>
            </Helmet>

            {/* <Header></Header> */}
            <Slider></Slider>

            <div>
                <h1 className="text-center text-5xl font-bold mt-10">Our Residential Properties </h1>
                <p className="text-center my-5">Handpicked properties by our team</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-14">
                    {
                        residential.map((residential, indx) => <Residential key={indx} residential={residential}></Residential>)
                    }
                </div>
            </div>


            <div>
                <h1 className="text-center text-5xl font-bold mt-10">Find Properties in These Cities</h1>
                <p className="text-center my-5">Handpicked properties by our team</p>

                {/* image galery or city */}
                <div className="">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="relative">
                            <img className="max-h-60 flex-1 w-full brightness-50" src={miami} alt="" />
                            <div className="absolute text-center top-1/2 right-1/2 text-white text-2xl">
                                <h1 className="font-bold">Miami</h1>
                                <p>2 Properties</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img className="max-h-60 brightness-50 flex-1 w-full" src={los_angeless} alt="" />
                            <div className="absolute text-center top-1/2 right-1/2 text-white text-2xl">
                                <h1 className="font-bold">Los Angeles</h1>
                                <p>2 Properties</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                        <div className="relative">
                            <img className="max-h-60 brightness-50 flex-1 w-full" src={new_york} alt="" />
                            <div className="absolute text-center top-1/2 right-1/2 text-white text-2xl">
                                <h1 className="font-bold">New York</h1>
                                <p>9 Properties</p>
                            </div>
                        </div>

                        <div className="relative">
                            <img className="min-h-60 brightness-50 flex-1 w-full" src={florida} alt="" />
                            <div className="absolute text-center top-1/2 right-1/2 text-white text-2xl">
                                <h1 className="font-bold">Florida</h1>
                                <p>1 Properties</p>
                            </div>
                        </div>

                        <div className="relative">
                            <img className="min-h-60 brightness-50 flex-1 w-full" src={kasmir} alt="" />
                        </div>

                    </div>
                </div>
            </div>


            <Meeting></Meeting>




        </div>
    );
};

export default HomePage;