import home from '../assets/images/home.png'
import home1 from '../assets/images/home (1).png'
import '../assets/style/default.css'
import face from '../assets/images/face.png'
import metafox from '../assets/images/metafox.png'
import wallet from '../assets/images/wallet.png'
import twitter from '../assets/images/twitter.png'
import instagram from '../assets/images/instagram.png'
import { Link } from "react-router-dom"


function Defaults({ children }) {

    return (
        <>
            <section className='tw-px-10 pt-2 max-[973px]:tw-px-3 max-[415px]:tw-px-0'>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link to={"/"} className=' navbar-brand    tw-font-bold  meta'> <img src={home} width={50} className='d-inline-block align-text-bottom ' alt="" /><span className='tw-text-4xl max-[310px]:tw-text-3xl'>Metabnb</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav w-75 justify-content-center  tw-gap-8  tw-ml-3 max-[1030px]:tw-ml-1 max-[1000px]:tw-gap-6 max-[1000px]:tw-ml-0   me-auto mb-2 mb-lg-0  mt-0 mt-lg-2 max-[991px]:tw-gap-0" >
                                <li className="nav-item">
                                    <Link to={"/"} className=' nav-link active fs-5  ' aria-current="page">Home</Link >
                                </li>
                                <li className="nav-item">
                                    <Link to={"/places"} className=' nav-link active fs-5  '>Place to stay</Link >
                                </li>

                                <li className="nav-item">
                                    <a href='#' className=' nav-link active fs-5  '>NFTs</a >
                                </li>
                                <li className="nav-item">
                                    <a href='#' className=' nav-link active fs-5  '>Community</a >
                                </li>
                            </ul>
                            <div className=' tw-text-base Menu'>
                                <button className='btn btn-primary px-4 py-2 ' data-bs-toggle="modal" data-bs-target="#exampleModal">Connect wallet</button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title tw-font-semibold" id="exampleModalLabel">Connect Wallet</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body py-3">
                                                <p>Choose your preferred wallet:</p>
                                                <div className='form-group border border-1 bg-light rounded d-flex p-1 px-2'>
                                                    <img src={metafox} width={44} loading='lazy' alt="" />
                                                    <button className='btn  form-control p-2 text-start  d-flex  tw-justify-between fw-bold'> Metamask <span>⇨</span></button>
                                                </div>
                                                <div className='form-group border border-1 bg-light rounded mt-3 d-flex p-1 px-2'>
                                                    <img src={wallet} width={44} loading='lazy' alt="" />
                                                    <button className='btn  form-control p-2 text-start  d-flex  tw-justify-between fw-bold'> WalletConnect <span>⇨</span></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </section>
            <div>{children}</div>
            <footer className='tw-px-12 text-white tw-bg-black tw-py-20 max-[973px]:tw-px-6 max-[415px]:tw-px-2 '>
                <main className='tw-flex tw-justify-between max-[670px]:tw-flex-wrap max-[670px]:tw-gap-5 '>
                    <div className=' tw-flex tw-flex-col tw-justify-between   foot' style={{ marginTop: "-1rem" }}>
                        <div className='d-flex tw-text-4xl  tw-font-bold navs '>
                            <img src={home1} width={50} alt="" /> <span>Metabnb</span>
                        </div>
                        <div className='d-flex gap-5 icons  social1'>
                            <div> <img src={face} width={35} alt="" /></div>
                            <div> <img src={instagram} width={23} alt="" /></div>
                            <div> <img src={twitter} width={23} alt="" /></div>

                        </div>

                    </div>
                    <div>
                        <div className=' tw-font-semibold fs-5 '><a href="#" className='text-white text-decoration-none'>Community</a></div>
                        <div className='d-flex tw-flex-col mt-4' style={{ lineHeight: "35px" }} >
                            <a href='#' className='text-white text-decoration-none'>NFTs</a>
                            <a href='#' className='text-white text-decoration-none'>Token</a>
                            <a href='#' className='text-white text-decoration-none'>Landlords</a>
                            <a href='#' className='text-white text-decoration-none'>Discord</a>
                        </div>
                    </div>
                    <div>
                        <div className='tw-font-semibold fs-5 '><a href='#' className='text-white text-decoration-none'>Places</a></div>
                        <div className='d-flex tw-flex-col mt-4' style={{ lineHeight: "35px" }}>
                            <a href='#' className='text-white text-decoration-none'>Castle</a>
                            <a href='#' className='text-white text-decoration-none'>Farms</a>
                            <a href='#' className='text-white text-decoration-none'>Beach</a>
                            <a href='#' className='text-white text-decoration-none' >Learn more</a>
                        </div>
                    </div>
                    <div>
                        <div className='tw-font-semibold fs-5'><a href='#' className='text-white text-decoration-none'>About Us</a></div>
                        <div className='d-flex tw-flex-col mt-4' style={{ lineHeight: "35px" }}>
                            <a href='#' className='text-white text-decoration-none'>Roadmaps</a>
                            <a href='#' className='text-white text-decoration-none'>Creators</a>
                            <a href='#' className='text-white text-decoration-none'>Career</a>
                            <a href='#' className='text-white text-decoration-none' >Contact Us</a>
                        </div>
                    </div>
                </main>
                <div className='  gap-5 my-3 tw-justify-center icons social2 d-none'>
                    <div> <img src={face} width={35} alt="" /></div>
                    <div> <img src={instagram} width={23} alt="" /></div>
                    <div> <img src={twitter} width={23} alt="" /></div>

                </div>
                <div className='tw-text-xs text-center ' style={{ marginTop: "1.5rem" }}>© 2022 Metabnb. Coded by Ismail Mubarokah</div>

            </footer>
        </>
    );
}

export default Defaults;