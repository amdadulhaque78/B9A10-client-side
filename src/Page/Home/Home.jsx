import bg1 from "../../assets/bg-1.jpg"
import bg2 from "../../assets/bg-2.jpg"
import bg3 from "../../assets/bg-3.jpg"
// import carton1 from "../../assets/c1.jpg"
// import carton2 from "../../assets/c2.jpeg"
// import carton3 from "../../assets/c3.jpeg"
// import carton4 from "../../assets/c4.jpg"
// import carton5 from "../../assets/c5.webp"
// import carton6 from "../../assets/c6.jpg"
// import card1 from "../../assets/card1.jpg"
// import card2 from "../../assets/card2.jpg"
// import card3 from "../../assets/card3.jpg"
import client1 from "../../assets/client1.png"
import client2 from "../../assets/client2.png"
import client3 from "../../assets/client3.png"
import client4 from "../../assets/client4.png"
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import { Link, useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { useTypewriter } from 'react-simple-typewriter'

const Home = () => {
    const cards = useLoaderData();
    const [cardse, setCards] = useState([])
    // console.log(cardse)
    useEffect(() => {
        fetch('https://art-craft-server-side-theta.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })
    }, [])

    // console.log(cards);

    const [text] = useTypewriter({
        words: ['Explore the World of Art & Craft!'],
        loop: 3
      })



    return (
        <div>
            <div className="carousel w-full mb-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bg1} className="w-full lg:h-[500px] h-[250px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="bg-white lg:p-5 p-2 text-center lg:w-[500px] mx-auto bg-opacity-[79%] ">
                            <h2 className="lg:text-2xl font-semibold">Unleash Your Creativity: {text}</h2>
                            <p className="text-base font-semibold">Art and craft allow us to explore our creativity, express our emotions, and connect with others on a deeper level.</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bg2} className="w-full lg:h-[500px] h-[250px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="bg-white lg:p-5 p-2 text-center lg:w-[500px] mx-auto bg-opacity-[79%] ">
                            <h2 className="lg:text-2xl font-semibold">Unleash Your Creativity: Explore the World of Art & Craft!</h2>
                            <p className="text-base font-semibold">Art and craft allow us to explore our creativity, express our emotions, and connect with others on a deeper level.</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bg3} className="w-full lg:h-[500px] h-[250px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="bg-white lg:p-5 p-2 text-center lg:w-[500px] mx-auto bg-opacity-[79%] ">
                            <h2 className="lg:text-2xl font-bold">Unleash Your Creativity: Explore the World of Art & Craft!</h2>
                            <p className="text-base font-semibold">Art and craft allow us to explore our creativity, express our emotions, and connect with others on a deeper level.</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="mb-10">
                <div className="lg:w-[500px] w[250px] mx-auto text-center space-y-2">
                    <Zoom>
                        <h2 className="lg:text-2xl font-bold">Art & Craft Categories</h2>
                        <p className="text-base font-semibold">Explore our store s vast selection of Art & Craft categories, ranging from painting and drawing supplies to DIY kits and crafting materials!</p>
                    </Zoom>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 items-baseline grid-cols-1 gap-10 mt-5">
                    <Zoom>
                        {
                            cardse.slice(0, 6).map(card => <Link key={card._id} to={`/category/${card.subcategory}`}>
                                <div className="lg:w-[450px] w-[350px] mx-auto  border-2 p-2 rounded-lg shadow-lg">
                                    <img className="lg:w-[450px] w-[350px] h-[200px]" src={card.photo} alt="" />
                                    <p className="text-center text-2xl font-bold mt-2">{card.subcategory}</p>
                                </div>
                            </Link>)
                        }
                    </Zoom>

                    {/* <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                        <img className="lg:w-[450px] w-[350px] h-[200px]" src={carton2} alt="" />
                        <p className="text-center text-2xl font-bold mt-2">Portrait Drawing</p>
                    </div>

                    <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                        <img className="lg:w-[450px] w-[350px] h-[200px]" src={carton3} alt="" />
                        <p className="text-center text-2xl font-bold mt-2">Watercolour Painting</p>
                    </div>

                    <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                        <img className="lg:w-[450px] w-[350px] h-[200px]" src={carton4} alt="" />
                        <p className="text-center text-2xl font-bold mt-2">Oil Painting</p>
                    </div>

                    <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                        <img className="lg:w-[450px] w-[350px] h-[200px]" src={carton5} alt="" />
                        <p className="text-center text-2xl font-bold mt-2">Charcoal Sketching</p>
                    </div>

                    <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                        <img className="lg:w-[450px] w-[350px] h-[200px]" src={carton6} alt="" />
                        <p className="text-center text-2xl font-bold mt-2">Cartoon Drawing</p>
                    </div> */}
                </div>
            </div>


            <div className="my-10">
                <div className="lg:w-[500px] w[250px] mx-auto text-center space-y-2">
                    <Zoom>
                        <h2 className="lg:text-2xl font-bold">Art & Craft items</h2>
                        <p className="text-base font-semibold">Amidst the quaint streets of a small town, a family-owned store brims with colorful threads, intricate beads, and the promise of endless creative possibilities!</p>
                    </Zoom>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 items-baseline grid-cols-1 gap-10 mt-5">
                    <Zoom>
                        {
                            cards.slice(0, 6).map(card => <div key={card._id} className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
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
                    </Zoom>

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

            <div className="my-10">
                <div className="lg:w-[500px] w[250px] mx-auto text-center space-y-2">
                    <Zoom>
                        <h2 className="lg:text-2xl font-bold">Our Client</h2>
                        <p className="text-base font-semibold">In the heart of downtown, our clients store beckons with its eclectic mix of artisanal treasures, captivating every passerby with its unique charm!</p>
                    </Zoom>
                </div>

                <Zoom>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 items-baseline grid-cols-1 gap-5 mt-5">
                        <div className="border-2 w-[350px] shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[150px]" src={client1} alt="" />
                        </div>

                        <div className="border-2 w-[350px] shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[150px]" src={client2} alt="" />
                        </div>

                        <div className="border-2 w-[350px] shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[150px]" src={client3} alt="" />
                        </div>

                        <div className="border-2 w-[350px] shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[150px]" src={client4} alt="" />
                        </div>
                        <div className="border-2 w-[350px] shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[150px]" src={client1} alt="" />
                        </div>

                        <div className="border-2 w-[350px] shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[150px]" src={client2} alt="" />
                        </div>

                        <div className="border-2 w-[350px] shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[150px]" src={client3} alt="" />
                        </div>

                        <div className="border-2 w-[350px] shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[150px]" src={client4} alt="" />
                        </div>
                    </div>
                </Zoom>
            </div>

            <div className="my-10">
                <div className="lg:w-[500px] w[250px] mx-auto text-center space-y-2">
                    <Zoom>
                        <h2 className="lg:text-2xl font-bold">Our Blog</h2>
                        <p className="text-base font-semibold">In our blog, explore a virtual emporium where words weave tales, ideas flourish, and creativity finds its sanctuary!</p>
                    </Zoom>
                </div>

                <Zoom>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-baseline gap-10 mt-5">
                        <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[200px]" src={blog1} alt="" />
                            <div className="text-justify p-5">
                                <p>
                                    Welcome to our art and craft blog, where creativity flourishes and inspiration abounds. Join us as we explore the latest trends, share DIY projects, and celebrate the beauty of handmade creations. From beginners guides to expert tips, theres something for everyone to discover and enjoy. Lets embark on a journey of imagination together, where every brushstroke and stitch tells a story of passion and craftsmanship
                                </p>
                                <button className="btn btn-primary mt-2">See More</button>
                            </div>
                        </div>

                        <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[200px]" src={blog2} alt="" />
                            <div className="text-justify p-5">
                                <p>
                                    Welcome to our art and craft blog, where creativity flourishes and inspiration abounds. Join us as we explore the latest trends, share DIY projects, and celebrate the beauty of handmade creations. From beginners guides to expert tips, theres something for everyone to discover and enjoy. Lets embark on a journey of imagination together, where every brushstroke and stitch tells a story of passion and craftsmanship
                                </p>
                                <button className="btn btn-primary mt-2">See More</button>
                            </div>
                        </div>

                        <div className="lg:w-[450px] w-[350px] mx-auto border-2 p-2 rounded-lg shadow-lg">
                            <img className="lg:w-[450px] w-[350px] h-[200px]" src={blog3} alt="" />
                            <div className="text-justify p-5">
                                <p>
                                    Welcome to our art and craft blog, where creativity flourishes and inspiration abounds. Join us as we explore the latest trends, share DIY projects, and celebrate the beauty of handmade creations. From beginners guides to expert tips, theres something for everyone to discover and enjoy. Lets embark on a journey of imagination together, where every brushstroke and stitch tells a story of passion and craftsmanship
                                </p>
                                <button className="btn btn-primary mt-2">See More</button>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Home;