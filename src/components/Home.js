import React from "react";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <div>
            <div className="grid-container grid-container--home">
                <div>
                    <h1 className="text-accent fs-500 ff-sans-cond uppercase">So, you want to enter the
                        <span className="fs-800 ff-serif text-white d-block">METAVERSE</span></h1>

                    <p>Let’s face it; if you want to enter the Metaverse, you might as well genuinely go all the way and not hover on the edge of it. We are just at the beginning of this revolution, strap yourself in and get ready for a truly out of this world experience!</p>
                </div>
                <div>
                    <a href="#" className="large-button uppercase  ff-serif text-white bg-blue">Enter</a>
                </div>

            </div>
        </div>




    )
}