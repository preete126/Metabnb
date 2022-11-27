import location from "../assets/location.jpg"
import Adventure from "./Adventure";
import Advent from "./Advent_2";

function Houses() {
    return (  
        <>
            <nav className="d-flex tw-gap-11 px-5 pb-5 icons  tw-text-2xl max-[1030px]:tw-text-xl max-[1030px]:tw-gap-8 max-[965px]:tw-text-xl max-[965px]:tw-gap-4 max-[836px]:tw-text-base " style={{fontFamily:"Calibri",paddingTop:"100px"}}>
                <div className="d-flex tw-gap-11 icons max-[1030px]:tw-gap-8 max-[965px]:tw-gap-3 max-[737px]:tw-w-96  max-[737px]:tw-truncate ">
                    <div>Resturant</div>
                    <div>Cottage</div>
                    <div>Castle</div>
                    <div>fantast city</div>
                    <div>beach</div>
                    <div>Carbins</div>
                    <div>Off-grid</div>
                    <div>Farm</div> 
                    
                </div>
                <button className="btn py-2 tw-px-3 d-flex icons tw-gap-8 max-[1030px]:tw-gap-1 max-[1030px]:tw-px-0 border-dark"><span className="tw-text-xl max-[1030px]:tw-text-lg max-[562px]:tw-text-base  ">Location</span> <img src={location} className="max-[562px]:tw-w-4 tw-w-6 max-[546px]:tw-hidden "  alt="" /> </button>
            </nav>
            <Advent/>
            <Adventure/>
            
        </>
    );
}

export default Houses;