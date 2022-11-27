import home from '../assets/home.png'
import home1 from '../assets/home (1).png'
import './default.css'
import face from '../assets/face.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import {Link} from "react-router-dom"


function Defaults({ children }) {

    return (
        <>
            <nav className='d-flex tw-justify-between nav p-4 ps-5 pe-5 '>
                <div className='d-flex tw-text-4xl tw-font-bold  meta'>
                    <img src={home} width={50} alt="" /> Metabnb
                </div>
                <div className='d-flex gap-5 tw-text-xl Menu' >
                    <a href='#' className='text-decoration-none text-dark'>Home</a >
                    <Link to={"/places"} className='text-decoration-none text-dark'>Place to stay</Link >
                    <a href='#' className='text-decoration-none text-dark'>NFTs</a >
                    <a href='#' className='text-decoration-none text-dark'>Community</a >
                </div>
                <div className=' tw-text-base Menu'>
                    <button className='btn btn-primary px-4 py-2' data-toggle="modal" data-target="#staticBackdrop">Connect wallet</button>
                   <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdrop" aria-hidden="true">
                     <div className="modal-dialog">
                       <div className="modal-content">
                         <div className="modal-header">
                           <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                           </button>
                         </div>
                         <div className="modal-body">
                           
                         </div>
                          
                       </div>
                     </div>
                   </div>
                   
                </div>
            </nav>
            <div>{children}</div>
            <footer className='px-5 tw-flex tw-justify-between max-[670px]:tw-flex-col max-[670px]:tw-gap-5 text-white tw-bg-black tw-py-20'>
                <div style={{ marginTop: "-0.7rem" }}>
                    <div className='d-flex tw-text-4xl tw-font-bold nav '>
                        <img src={home1} width={50} alt="" /> Metabnb
                    </div>
                    <div className='d-flex gap-5 icons py-5 mt-5'>
                        <div> <img src={face} width={35} alt="" /></div>
                        <div> <img src={instagram} width={23} alt="" /></div>
                        <div> <img src={twitter} width={23} alt="" /></div>

                    </div>
                    <div className='tw-text-xs'>© 2022 Metabnb. Coded by Ismail Mubarokah</div>
                </div>
                <details>
                    <summary className=' tw-font-semibold fs-5 '><a href="#" className='text-white text-decoration-none'>Community</a></summary>
                    <div className='d-flex tw-flex-col mt-4' style={{ lineHeight: "35px" }} >
                        <a href='#' className='text-white text-decoration-none'>NFTs</a>
                        <a href='#' className='text-white text-decoration-none'>Token</a>
                        <a href='#' className='text-white text-decoration-none'>Landlords</a>
                        <a href='#' className='text-white text-decoration-none'>Discord</a>
                    </div>
                </details>
                <details>
                    <summary className='tw-font-semibold fs-5 '><a href='#' className='text-white text-decoration-none'>Places</a></summary>
                    <div className='d-flex tw-flex-col mt-4' style={{ lineHeight: "35px" }}>
                        <a href='#' className='text-white text-decoration-none'>Castle</a>
                        <a href='#' className='text-white text-decoration-none'>Farms</a>
                        <a href='#' className='text-white text-decoration-none'>Beach</a>
                        <a href='#' className='text-white text-decoration-none' >Learn more</a>
                    </div>
                </details>
                <details>
                    <summary className='tw-font-semibold fs-5'><a href='#' className='text-white text-decoration-none'>About Us</a></summary>
                    <div className='d-flex tw-flex-col mt-4' style={{ lineHeight: "35px" }}>
                        <a href='#' className='text-white text-decoration-none'>Roadmaps</a>
                        <a href='#' className='text-white text-decoration-none'>Creators</a>
                        <a href='#' className='text-white text-decoration-none'>Career</a>
                        <a href='#' className='text-white text-decoration-none' >Contact Us</a>
                    </div>
                </details>
                
                
            </footer>
        </>
    );
}

export default Defaults;