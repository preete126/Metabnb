import location from "../assets/images/location.jpg"
import Adventure from "./Adventure";
import Advent from "./Advent_2";

function Houses() {
    return (  
        <>
            <nav className="d-flex flex-wrap tw-justify-between  tw-font-medium tw-px-12   pb-5    tw-text-2xl  max-[1030px]:tw-gap- max-[621px]:tw-gap- max-[573px]:tw-text-xl max-[473px]:tw-gap- tw-gap-2 max-[973px]:tw-px-6  tw-pt-12 pb-4 max-md:tw-pt-6  icons" style={{fontFamily:"Calibri",lineHeight:"20px"}}>
                
                    <div className="pb-2">Resturant</div>
                    <div className="pb-2">Cottage</div>
                    <div className="pb-2">Castle</div>
                    <div className="pb-2">fantast city</div>
                    <div className="pb-2">beach</div>
                    <div className="pb-2">Carbins</div>
                    <div className="pb-2">Off-grid</div>
                    <div className="pb-2">Farm</div> 
                    
                <button className="btn py-2 tw-px-3 d-flex icons tw-gap-8  border-dark"><span className="tw-text-xl max-[1030px]:tw-text-lg max-[562px]:tw-text-base  ">Location</span> <img src={location} className="max-[562px]:tw-w-4 tw-w-6 max-[546px]:tw-hidden "  alt="" /> </button>
            </nav>
            <Advent/>
            <Adventure/>
            
        </>
    );
}

export default Houses;