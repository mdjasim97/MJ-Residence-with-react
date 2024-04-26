import React from 'react';

const Meeting = () => {


    const handleMeeting = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const phone = form.get("phone");
        const email = form.get("email");
        const date = form.get('date');
        const time = form.get("time");
        const comment = form.get("comment");

        console.log("Meeting : ", name, phone, email, date, time, comment)
    }


    return (
        <div className='lg:my-20'>

            <h1 className="text-center text-3xl lg:text-5xl font-bold mt-10">Schedule a Meeting</h1>
            <div className='grid grid-cols-4 lg:text-xl'>
                <p className='col-span-1 hidden lg:flex '>MEETING SCHEDULE</p>
                <p className='col-span-2 hidden lg:flex border-b-2'></p>
                <p className='col-span-1 text-center hidden lg:flex flex-col lg:text-center'>Contact Us</p>
            </div>


            <div className='grid  lg:grid-cols-3'>

                <div className='lg:col-span-2 border-2 rounded-2xl lg:p-5 lg:mr-10 p-2 m-2 mt-10'>
                    <p className='text-2xl lg:text-4xl lg:my-16 lg:pr-10 text-justify p-2 lg:text-center'>Submit Your Details, We Will Get In Touch & Schedule A Meeting.</p>


                    <form className="lg:mr-10" onSubmit={handleMeeting}>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">NAME</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PHONE</span>
                            </label>
                            <input name='phone' type="Text" placeholder="Enter Your Mobile Number" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">DATE & TIME </span>
                            </label>
                            <div className='lg:flex items-center'>
                                <input name='date' type="date" placeholder="Enter Your Email" className="input input-bordered w-full my-2 lg:mr-5" required />
                                <input name='time' type="time" placeholder="Enter Your Email" className="input input-bordered w-full" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">COMMENT</span>
                            </label>
                            <textarea name='comment' placeholder="Write Something" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> Book Now</button>
                        </div>
                    </form>


                </div>

                <div className='border-2 rounded-2xl lg:my-10 m-2 p-2'>
                    <h1 className='text-3xl text-center mb-5 lg:mb-0 lg:mt-10 lg:hidden'>Contact Us</h1>
                    <p className='text-2xl lg:text-4xl lg:pt-10 text-justify'> Call us directly and schedule a meeting right now </p>

                    <button className='bg-black h-16 w-full text-4xl text-white my-16'> 01784293797</button>
                </div>
            </div>

        </div>
    );
};

export default Meeting;