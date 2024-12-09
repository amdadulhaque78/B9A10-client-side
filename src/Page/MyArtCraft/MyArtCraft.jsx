import { useLoaderData } from "react-router-dom";
import MyCard from "../../component/MyCard";
import { useContext, useEffect, useState } from "react";
import { authProvider } from "../../Auth/AuthProvider";

const MyArtCraft = () => {
    const { user } = useContext(authProvider);
    const myCard = useLoaderData();

    // console.log(myCard);
    const [loader, setLoader] = useState(myCard)
    console.log(loader)
    // const [displayFilter, setDisplayFilter] = useState();
    // console.log(displayFilter)
    const email = user.email
    console.log(email)
        useEffect(() => {
            fetch('https://art-craft-server-side-theta.vercel.app/artcraft')
                .then(res => res.json())
                .then(data => {
                    setLoader(data.filter((singleData) => singleData.email === email))
                })
        }, [])

    const handleFilter = Filter => {
        let filterCard = [];
        // console.log(Filter)
        // if (Filter === 'All') {
        //     filterCard = myCard;
        // }
        // else 
        if (Filter === 'Yes') {
            filterCard = myCard.filter(card => card.customization === 'Yes');
        }
        else if (Filter === 'No') {
            filterCard = myCard.filter(card => card.customization === 'No');
        }

        setLoader(filterCard);
    }

    return (
        <div className="my-10">
            <div className="flex justify-center ">
                <details className="dropdown">
                    <summary className="m-1 btn btn-primary w-[200px]">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        {/* <button onClick={() => handleFilter('All')} className="btn mb-2"><a>All</a></button> */}
                        <button onClick={() => handleFilter('Yes')} className="btn mb-2"><a>Yes</a></button>
                        <button onClick={() => handleFilter('No')} className="btn"><a>No</a></button>
                    </ul>
                </details>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 items-baseline grid-cols-1 gap-10 mt-5">
                {
                    loader.map(card => <MyCard key={card._id} loader={loader} setLoader={setLoader} card={card}></MyCard>)
                }

                {/* <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg mt-5">
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
                        <div className="mt-5 flex justify-between items-center">
                            <button className="btn bg-blue-500"><FaEye className="text-2xl font-semibold"></FaEye></button>
                            <button className="btn bg-orange-500"><FaEdit className="text-2xl font-semibold"></FaEdit></button>
                            <button className="btn bg-red-500"><FaDeleteLeft className="text-2xl font-semibold"></FaDeleteLeft></button>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg mt-5">
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
                        <div className="mt-5 flex justify-between items-center">
                            <button className="btn bg-blue-500"><FaEye className="text-2xl font-semibold"></FaEye></button>
                            <button className="btn bg-orange-500"><FaEdit className="text-2xl font-semibold"></FaEdit></button>
                            <button className="btn bg-red-500"><FaDeleteLeft className="text-2xl font-semibold"></FaDeleteLeft></button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default MyArtCraft;
