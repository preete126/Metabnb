import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import real1 from "../assets/real5.jpg"
import real2 from "../assets/real13.jpg"
import real3 from "../assets/real7.jpg"
import real4 from "../assets/real16.jpg"
import real5 from "../assets/real9.jpg"
import real6 from "../assets/O.jpg"
import real7 from "../assets/real11.jpg"
import real8 from "../assets/real15.jpg"

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
            <main className=" d-flex flex-wrap gap-4 px-5 mb-5">
                {
                    Home.map((value, index) =>
                        <div className="card p-2 border border-2" key={index} style={{ width: "17.2rem",fontSize:"11px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif" }}>
                            <div  style={{height:"200px"}}>
                            <img src={value.image }  className="card-img " alt="..." />
                            <div className="card-img-overlay text-end">
                                <FontAwesomeIcon icon={faHeart} color="whitesmoke" size="xl"  />
                            </div>
                            </div>

                            <div className="card-body " style={{paddingLeft:"0px",paddingRight:"0px"}}>
                                <div className="card-title d-flex tw-justify-between">
                                   <p>Desert King</p>
                                   <strong>1MBT per night</strong>
                                </div>
                                <div className="card-subtitle d-flex tw-justify-between">
                                  <p>2345km away</p>
                                  <p>available for 2weeks stay</p>
                                </div>
                                <div className="mt-auto d-flex gap-2 ">
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