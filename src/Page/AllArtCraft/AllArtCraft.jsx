import { Link, useLoaderData } from "react-router-dom";
// import card1 from "../../assets/card1.jpg"
// import card2 from "../../assets/card2.jpg"
// import card3 from "../../assets/card3.jpg"

const AllArtCraft = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (
        <div className="my-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 items-baseline grid-cols-1 gap-10 mt-5">
                {
                    // cards.map(card => <div key={card._id} className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                    //     <img className="lg:w-[450px] w-[350px] h-[200px]" src={card.photo} alt="" />
                    //     <div className="my-3">
                    //         <div className="flex justify-between items-center gap-2 px-2">
                    //             <div>
                    //                 <h2><span className="text-base font-semibold">subcategory:</span> {card.subcategory}</h2>
                    //                 <h2><span className="text-base font-semibold">item:</span> {card.itme}</h2>
                    //             </div>
                    //             <div>
                    //                 <h2><span>Price:</span> ${card.price}</h2>
                    //                 <h2><span>Rating:</span> {card.rating}</h2>
                    //             </div>
                    //         </div>
                    //         <button className="mt-5 btn w-full btn-primary"><Link to={`/viewpage/${card._id}`}>View Details </Link></button>
                    //     </div>
                    // </div>)
                }

                {/* <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                    <img className="lg:w-[450px] w-[350px] h-[200px]" src={card2} alt="" />
                    <div className="my-3">
                        <div className="flex justify-between items-center gap-2 px-2">
                            <div>
                                <h2><span className="text-base font-semibold">subcategory:</span> Landscape Painting</h2>
                                <h2><span className="text-base font-semibold">item:</span> Mountain view canvas</h2>
                            </div>
                            <div>
                                <h2><span>Price:</span> $520</h2>
                                <h2><span>Rating:</span> 4.5</h2>
                            </div>
                        </div>
                        <button className="mt-5 btn w-full btn-primary">View Details</button>
                    </div>
                </div>

                <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                    <img className="lg:w-[450px] w-[350px] h-[200px]" src={card3} alt="" />
                    <div className="my-3">
                        <div className="flex justify-between items-center gap-2 px-2">
                            <div>
                                <h2><span className="text-base font-semibold">subcategory:</span> Landscape Painting</h2>
                                <h2><span className="text-base font-semibold">item:</span> Mountain view canvas</h2>
                            </div>
                            <div>
                                <h2><span>Price:</span> $520</h2>
                                <h2><span>Rating:</span> 4.5</h2>
                            </div>
                        </div>
                        <button className="mt-5 btn w-full btn-primary">View Details</button>
                    </div>
                </div>

                <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                    <img className="lg:w-[450px] w-[350px] h-[200px]" src={card1} alt="" />
                    <div className="my-3">
                        <div className="flex justify-between items-center gap-2 px-2">
                            <div>
                                <h2><span className="text-base font-semibold">subcategory:</span> Landscape Painting</h2>
                                <h2><span className="text-base font-semibold">item:</span> Mountain view canvas</h2>
                            </div>
                            <div>
                                <h2><span>Price:</span> $520</h2>
                                <h2><span>Rating:</span> 4.5</h2>
                            </div>
                        </div>
                        <button className="mt-5 btn w-full btn-primary">View Details</button>
                    </div>
                </div>

                <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                    <img className="lg:w-[450px] w-[350px] h-[200px]" src={card2} alt="" />
                    <div className="my-3">
                        <div className="flex justify-between items-center gap-2 px-2">
                            <div>
                                <h2><span className="text-base font-semibold">subcategory:</span> Landscape Painting</h2>
                                <h2><span className="text-base font-semibold">item:</span> Mountain view canvas</h2>
                            </div>
                            <div>
                                <h2><span>Price:</span> $520</h2>
                                <h2><span>Rating:</span> 4.5</h2>
                            </div>
                        </div>
                        <button className="mt-5 btn w-full btn-primary">View Details</button>
                    </div>
                </div>

                <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                    <img className="lg:w-[450px] w-[350px] h-[200px]" src={card3} alt="" />
                    <div className="my-3">
                        <div className="flex justify-between items-center gap-2 px-2">
                            <div>
                                <h2><span className="text-base font-semibold">subcategory:</span> Landscape Painting</h2>
                                <h2><span className="text-base font-semibold">item:</span> Mountain view canvas</h2>
                            </div>
                            <div>
                                <h2><span>Price:</span> $520</h2>
                                <h2><span>Rating:</span> 4.5</h2>
                            </div>
                        </div>
                        <button className="mt-5 btn w-full btn-primary">View Details</button>
                    </div>
                </div> */}
            </div>
            <div >
                <div className="overflow-x-auto lg:w-[1200px] mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-center">Sl</th>
                                <th className="text-center">subcategory_Name</th>
                                <th className="text-center">item_name</th>
                                <th className="text-center"> price</th>
                                <th className="text-center"> rating</th>
                                <th className="text-center"> customization</th>
                                <th className="text-center">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cards.map((card, inx) => <tr key={card._id}>
                                    <th className="text-center">{inx + 1}</th>
                                    <th className="text-center">{card.subcategory}</th>
                                    <td className="text-center"> {card.itme}</td>
                                    <td className="text-center">${card.price}</td>
                                    <td className="text-center">{card.rating}</td>
                                    <td className="text-center">{card.customization}</td>
                                    <th className="text-center"><button className="mt-5 btn w-full btn-primary"><Link to={`/viewpage/${card._id}`}>View Details </Link></button></th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllArtCraft;