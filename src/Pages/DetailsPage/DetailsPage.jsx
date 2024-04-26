import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const DetailsPage = ({ children }) => {

    const { id } = useParams()
    console.log(id)

    const estateData = useLoaderData()
    // console.log(estateData)


    const property = estateData.find(estate => estate.id == id);
    console.log(property)

    return (
        <div className='lg:my-20 m-2'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='flex items-center border-2 rounded-2xl p-2 lg:p-4'>
                    <img className='h-full w-full rounded-2xl' src={property["residential_image"]} alt="" />
                </div>

                <div className='border-2 p-4 rounded-2xl'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>{property.estate_title}</h1>
                    <div className='my-4'>
                        <h3 className='font-bold text-xl'>Description : </h3>
                        <p>{property.description}</p>
                    </div>

                    <div className='lg:my-4'>
                        <h3 className=' lg:text-xl flex flex-col lg:flex-row'><span className='font-bold mr-5 text-xl'>Facilities :</span> {property.facilities.map(offer => <p className='lg:mr-3 ml-20 lg:ml-0'>{offer + ","}</p>)} </h3>
                    </div>

                    <div className='my-2 grid grid-cols-1 lg:grid-cols-4 lg:gap-2'>
                        <button className='flex my-1 items-center btn lg:col-span-2 text-lg'><CiLocationOn className='mr-2' /> {property.location} </button>

                        <button className='flex my-1 btn bg-red-300 text-red-900 items-center font-bold text-lg'><AiFillLike className='mr-2' /> {property.like} </button>

                        <button className='flex my-1 btn bg-green-500 text-white items-center font-bold text-lg'><FaHeart className='mr-2' /> {property.love} </button>
                    </div>

                    <div className=''>
                        
                            <div className='grid grid-cols-2 lg:grid-cols-3'>
                                <p className='font-bold text-xl'>Segment : </p>
                                <p className='text-xl lg:col-span-2'>{property.segment_name}</p>
                            </div>

                            <div className='grid grid-cols-2 lg:grid-cols-3'>
                                <p className='font-bold text-xl'> Area : </p>
                                <p className='text-xl lg:col-span-2'>{property.area} sq ft</p>
                            </div>
                        

                        
                            <div className='grid grid-cols-2 lg:grid-cols-3'>
                                <p className='font-bold text-xl'> Status : </p>
                                <p className='text-xl lg:col-span-2'> {property.status}</p>
                            </div>

                            <div className='grid grid-cols-2 lg:grid-cols-3'>
                                <p className='font-bold text-xl'> Price : </p>
                                <p className='text-xl lg:col-span-2'>{property.price} $</p>
                            </div>
                        

                    </div>

                </div>
            </div>



        </div>
    );
};

export default DetailsPage;