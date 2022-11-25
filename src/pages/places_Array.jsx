import location from "../assets/location.jpg"
import Adventure from "./Adventure";
import Advent from "./Advent_2";

function Houses() {
    return (  
        <>
            <nav className="d-flex gap-5 px-5 pb-5 icons  tw-text-2xl" style={{fontFamily:"Calibri",paddingTop:"100px"}}>
                <div>Resturant</div>
                <div>Cottage</div>
                <div>Castle</div>
                <div>fantast city</div>
                <div>beach</div>
                <div>Carbins</div>
                <div>Off-grid</div>
                <div>Farm</div> 
                <button className="btn py-2 px-3 d-flex icons gap-4  border-dark"><span className="tw-text-xl">Location</span> <img src={location} width={25} alt="" /> </button>
            </nav>
            <Advent/>
            <Adventure/>
            
        </>
    );
}

export default Houses;