import { Link, useLoaderData, useParams } from "react-router-dom";

const Category = () => {
    const categorys = useLoaderData()
    // console.log(filcate)
    const {category} = useParams()
    console.log(category)
    const catego = categorys.filter(catego => catego.subcategory == category)
    console.log(catego)
    return (
        <div>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 items-baseline grid-cols-1 gap-10 mt-5">
                    {
                        catego.map(card => <div key={card._id} className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[200px]" src={card.photo} alt="" />
                            <div className="my-3">
                                <div className="flex justify-between items-center gap-2 px-2">
                                    <div>
                                        <h2><span className="text-base font-semibold">subcategory:</span> {card.subcategory}</h2>
                                        <h2><span className="text-base font-semibold">item:</span> {card.itme}</h2>
                                    </div>
                                    <div>
                                        <h2><span>Price:</span> ${card.price}</h2>
                                        <h2><span>Rating:</span> {card.rating}</h2>
                                    </div>
                                </div>
                                <button className="mt-5 btn w-full btn-primary"><Link to={`/viewpage/${card._id}`}>View Details </Link></button>
                            </div>
                        </div>)
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
        </div>
    );
};

export default Category;