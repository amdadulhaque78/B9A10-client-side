import { FaEdit, FaEye } from "react-icons/fa";
// import card2 from "../assets/card2.jpg"
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = ({ card, loader, setLoader }) => {
    // console.log(card)
    const { _id, photo, subcategory, itme, price, rating, email, username } = card;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://art-craft-server-side-theta.vercel.app/artcraft/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        window.location.reload();
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = loader.filter(load => load._id !== _id)
                        setLoader(remaining)
                    })
            }
        });
    }
    return (
        <div>
            <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg mt-5">
                <img className="lg:w-[450px] w-[350px] h-[200px]" src={photo} alt="" />
                <div className="my-3">
                    <div className="flex justify-between items-center gap-2 px-2">
                        <div>
                            <h2><span className="text-base font-semibold">subcategory:</span> {subcategory}</h2>
                            <h2><span className="text-base font-semibold">item:</span> {itme}</h2>
                        </div>
                        <div>
                            <h2><span>Price:</span> ${price}</h2>
                            <h2><span>Rating:</span> {rating}</h2>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-5">
                        <h2><span className="text-base font-semibold">User Email:</span> {email}</h2>
                        <h2><span className="text-base font-semibold">User Name:</span> {username}</h2>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <Link to={`/viewpage/${_id}`}>
                            <button className="btn bg-blue-500"><FaEye className="text-2xl font-semibold"></FaEye></button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn bg-orange-500"><FaEdit className="text-2xl font-semibold"></FaEdit></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500"><FaDeleteLeft className="text-2xl font-semibold"></FaDeleteLeft></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCard;
