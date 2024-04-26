import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Residential = ({ residential }) => {
    const { residential_image, estate_title, description, segment_name, price, id, status, facilities, location, area } = residential;

    const data = useLoaderData()
    
    return (
        <div>

            <div className="card bg-base-100 shadow-xl m-2">

                <div className='relative'>
                    <img className='h-52 w-full rounded-lg' src={residential_image} alt="Shoes" />
                    <h1 className='text-2xl font-bold absolute bg-[#23BE0A] text-white opacity-1 right-0 bottom-0 rounded-lg py-1 px-2'> Price : {price} $</h1>
                </div>

                <div className="p-4 space-y-3">
                    {/* <p className='absolute'>location : {location}</p> */}
                    <div className='flex justify-between'>
                        <p className='text-red-500 font-bold text-lg'>{segment_name}</p>
                        <p className='text-green-500 flex font-semibold text-base items-center'> <CiLocationOn className='mr-2 font-bold' /> {location}</p>
                    </div>

                    <h2 className="card-title">
                        {estate_title.length > 25 ? estate_title.slice(0, 25) + "..." : estate_title}
                        <div className="badge badge-secondary">{status}</div>
                    </h2>
                    <p>{description.length > 85 ? description.slice(0, 85) + "..." : description}</p>

                    <hr className='my-2' />

                    <div>
                        <h1 className='font-bold text-xl '> Our facilities </h1>

                        <div>
                            {
                                facilities.map(offer => <div className=' m-1 badge badge-outline p-2'>
                                    {offer}
                                </div>)
                            }
                        </div>
                    </div>

                    <hr className='my-2' />

                    <Link to={`/details/${id}`} className='btn bg-[#23BE0A] w-full text-white'>View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default Residential;