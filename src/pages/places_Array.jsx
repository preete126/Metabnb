import location from "../assets/location.jpg"
import Adventure from "./Adventure";
import Advent from "./Advent_2";

function Houses() {
    return (  
        <>
            <nav className="d-flex flex-wrap tw-gap-11 tw-font-medium tw-px-12 pb-5 icons  tw-text-2xl  max-[1030px]:tw-gap-8 max-[621px]:tw-gap-5 max-[573px]:tw-text-xl max-[473px]:tw-gap-3 max-[973px]:tw-px-6  icons" style={{fontFamily:"Calibri",paddingTop:"100px",lineHeight:"10px"}}>
                
                    <div>Resturant</div>
                    <div>Cottage</div>
                    <div>Castle</div>
                    <div>fantast city</div>
                    <div>beach</div>
                    <div>Carbins</div>
                    <div>Off-grid</div>
                    <div>Farm</div> 
                    
                <button className="btn py-2 tw-px-3 d-flex icons tw-gap-8  border-dark"><span className="tw-text-xl max-[1030px]:tw-text-lg max-[562px]:tw-text-base  ">Location</span> <img src={location} className="max-[562px]:tw-w-4 tw-w-6 max-[546px]:tw-hidden "  alt="" /> </button>
            </nav>
            <Advent/>
            <Adventure/>
            
        </>
    );
}

export default Houses;