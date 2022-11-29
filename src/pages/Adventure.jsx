import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import real1 from "../assets/D.jpg"
import real2 from "../assets/3.jpg"
import real3 from "../assets/A.jpg"
import real4 from "../assets/B.jpg"
import real5 from "../assets/N.jpg"
import real6 from "../assets/T.jpg"
import real7 from "../assets/L.jpg"
import real8 from "../assets/O.jpg"


function Adventure() {
    const [Home, setHome] = useState([
        { image: real1},
        { image: real2},
        { image: real3},
        { image: real4},
        { image: real5},
        { image: real6},
        { image: real7},
        { image: real8}
    ])



    return (
        <>
            <main className=" d-flex flex-wrap tw-gap-6 tw-px-12 max-[973px]:tw-px-6 max-[843px]:tw-gap-3  mb-5 tw-justify-center">
                {
                    Home.map((value, index) =>
                        <div className="card px-2 pt-2 border border-2  Adv" key={index} style={{ width: "17.2rem",fontSize:"11px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif" }}>
                            <div>
                            <img src={value.image } loading="lazy" className="card-img " alt="..." />
                            <div className="card-img-overlay text-end">
                                <FontAwesomeIcon icon={faHeart} color="whitesmoke" size="xl"  />
                            </div>
                            </div>

                            <div className="card-body " style={{paddingLeft:"0px",paddingRight:"0px"}}>
                                <div className="card-title tw-flex tw-justify-between   ">
                                   <p>Desert King</p>
                                   <strong>1MBT per night</strong>
                                </div>
                                <div className="card-subtitle tw-flex tw-justify-between  max-[415px]:tw-flex-wrap">
                                  <p>2345km away</p>
                                  <p>available for 2weeks stay</p>
                                </div>
                                <div className="mt-auto tw-flex gap-2  max-[415px]:tw-flex-wrap">
                                    <FontAwesomeIcon icon={faStar}  color="#A02279"/> 
                                    <FontAwesomeIcon icon={faStar}  color="#A02279"/> 
                                    <FontAwesomeIcon icon={faStar}  color="#A02279"/> 
                                    <FontAwesomeIcon icon={faStar}  color="#A02279"/> 
                                    <FontAwesomeIcon icon={faStar}  color="#A02279"/> 
                                </div>
                                
                            </div>
                        </div>
                    )
                }
            </main>

        </>
    );
}

export default Adventure;