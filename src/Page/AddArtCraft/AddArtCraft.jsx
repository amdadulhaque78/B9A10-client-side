import { useContext } from "react";
import { authProvider } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";

const AddArtCraft = () => {
    const {user} = useContext(authProvider);

    const handleArtCraft = e => {
        e.preventDefault()
        const form = e.target;
        const subcategory = form.subcategory.value;
        const itme = form.itme.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const username = form.username.value;
        const email = form.email.value;
        const addArtCraft = {subcategory, itme, description, photo, price, rating, customization, time, stock, username, email}
        console.log('Add Art&Craft',addArtCraft);

        fetch('https://art-craft-server-side-theta.vercel.app/artcraft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addArtCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Add New Art&craft',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })

    }
    return (
        <div className="my-10">
            <div className="lg:w-[800px] md:w-[450px] w-[350px] mx-auto border-2 rounded-lg shadow-lg">
                <div className="text-center p-2 lg:text-3xl text-base font-semibold my-2">
                    <h2>Add Art And Craft</h2>
                </div>
                <form onSubmit={handleArtCraft}>
                    {/* email  */}
                    <div className="mb-3 px-2">
                        <label className="text-base font-semibold">Subcategory Name</label>
                        <div>
                            <select name="subcategory" id="" className="w-full border-2 p-3">
                                <option value="select">Select Subcategory</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </div>
                    </div>

                    {/* itme  */}
                    <div className="mb-3 px-3">
                        <label className="text-base font-semibold">Item Name</label>
                        <div>
                            <input type="text" name="itme" placeholder="Enter Your Item Name" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* short description  */}
                    <div className="mb-3 px-3">
                        <label className="text-base font-semibold">Short Description</label>
                        <div>
                            <input type="text" name="description" placeholder="Enter Your Description" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* photo  */}
                    <div className="mb-3 px-3">
                        <label className="text-base font-semibold">Photo Url</label>
                        <div>
                            <input type="url" name="photo" placeholder="Enter Your Photo Url" id="" className="w-full p-3 border-2" />
                        </div>
                    </div>

                    {/* price and rating  */}
                    <div className="mb-3 px-3 flex lg:flex-row flex-col justify-between items-center gap-2">
                        <div className="w-full">
                            <label className="text-base font-semibold">Price</label>
                            <div>
                                <input type="text" name="price" placeholder="Enter Your Price" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="text-base font-semibold">Rating</label>
                            <div>
                                <input type="text" name="rating" placeholder="Enter Your Rating" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                    </div>

                    {/* customization and processing  */}
                    <div className="mb-3 px-3 flex lg:flex-row flex-col justify-between items-center gap-2">
                        <div className="w-full">
                            <label className="text-base font-semibold"> Customization</label>
                            <div>
                                <select name="customization" className="w-full border-2 p-3" id="">
                                    <option value="select">Select Customization</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="text-base font-semibold"> Processing Time</label>
                            <div>
                                <input type="text" name="time" placeholder="Enter Your Processing Time" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                    </div>

                    {/* stockStatus */}
                    <div className="mb-3 px-3 flex lg:flex-row flex-col justify-between items-center gap-2">
                        <div className="w-full">
                            <label className="text-base font-semibold"> Stock Status</label>
                            <div>
                                <select name="stock" className="w-full border-2 p-3" id="">
                                    <option value="select">Select Stock Status</option>
                                    <option value="In stock">In stock</option>
                                    <option value="Made to Order">Made to Order</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* user email and user name  */}
                    <div className="mb-3 px-3 flex lg:flex-row flex-col justify-between items-center gap-2">
                        <div className="w-full">
                            <label className="text-base font-semibold">User Name</label>
                            <div>
                                <input type="text" name="username" defaultValue={user?.displayName} placeholder="Enter Your User Name" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="text-base font-semibold">User Email</label>
                            <div>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Enter Your User Email" id="" className="w-full p-3 border-2" />
                            </div>
                        </div>
                    </div>


                    {/* button  */}
                    <div className="my-3 px-3">
                        <button className="btn btn-primary w-full">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArtCraft;
