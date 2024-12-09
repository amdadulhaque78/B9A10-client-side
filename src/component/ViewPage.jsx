import { useLoaderData, useParams } from "react-router-dom";
// import card1 from "../assets/card1.jpg"

const ViewPage = () => {
    const viewCard = useLoaderData()
    const {id} = useParams()
    const view = viewCard.find(view => view._id === id)
    console.log(view)
    const {subcategory, itme, description, photo, price, rating, customization, time, stock, username, email} = view;
    return (
        <div className="my-10">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-5 border-2 lg:w-[1140px] md:w-[600px] w-[350px] mx-auto">
                <div className=" w-full p-3">
                    <img src={photo} alt="" />
                </div>
                <div className=" w-full p-3 space-y-3">
                    <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-2">
                        <h2><span className="text-base font-semibold">Subcategory Name:</span> {subcategory}</h2>
                        <h2><span className="text-base font-semibold"> Item Name:</span> {itme}</h2>
                    </div>
                    <div>
                        <p><span className="text-base font-semibold">Short Description:</span> {description}</p>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
                        <h2><span className="text-base font-semibold">Price:</span> ${price}</h2>
                        <h2><span className="text-base font-semibold">Rating:</span> {rating}</h2>
                        <h2><span className="text-base font-semibold">Customization:</span> {customization}</h2>
                        <h2><span className="text-base font-semibold">Processing Time:</span> {time}</h2>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
                        <h2><span className="text-base font-semibold">Stock Status:</span> {stock}</h2>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
                        <h2><span className="text-base font-semibold">User Email:</span> {email}</h2>
                        <h2><span className="text-base font-semibold">User Name:</span> {username}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPage;