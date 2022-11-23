import Image1 from '../assets/I.jpg'
import Image2 from '../assets/A.jpg'
import Image3 from '../assets/L.jpg'
import Image4 from '../assets/M.jpg'
import token from '../assets/token (2).png'
import mask from '../assets/mask.png'
import sea from '../assets/sea.png'

function Email() {
    
    return (
        <>
            <section className='d-flex p-5  pt-1'  >
                <main className='pt-5 pb-4 w-75'  >
                    <div className='pt-3  tw-font-semibold  tw-text-zinc-700 ' style={{ lineHeight: "80px", fontSize: "57px" }}>Rent a <span className='text-primary tw-text-6xl'>Place</span> away from <span className='text-primary tw-text-6xl '>Home</span> in the <span className='text-primary tw-text-6xl'>Metavere</span></div>
                    <div className=' pt-3    tw-text-2xl me-5 pe-5'>We provide you  access to luxury and affordable houses in the metaverse, get a chance to turn your imagination into reallity at your comfort zone </div>
                    <form action="" className='pt-3 d-flex'>
                        <input className='w-50 border border-2 form-control rounded-0 p-3 rounded-start  ' type="search" placeholder='search for location' />
                        <button className='btn rounded-end rounded-0 p-2 px-5 btn-primary w-25'>Search</button>
                    </form>
                </main>
                <div className=' tw-relative w-50 ps-4'  >
                    <img className='tw-rounded-3xl  tw-absolute ' style={{ top: "140px" }} src={Image1} width={"200px"} alt="" />
                    <img className='tw-rounded-3xl tw-absolute ' style={{ right: "0%", top: "50px" }} src={Image2} width={"200px"} alt="" />
                    <img className='tw-rounded-3xl tw-absolute ' style={{ top: "290px" }} src={Image3} width={"200px"} alt="" />
                    <img className='tw-rounded-3xl tw-absolute ' style={{ top: "200px", right: "0%" }} src={Image4} width={"200px"} alt="" />
                </div>
            </section>
            <main className='bg-primary p-3  d-flex tw-justify-around tw-text-white' style={{ fontFamily: "Arial, Helvetica, sans-serif", alignItems: "center" }}>
                <div className='fs-3 tw-font-semibold d-flex gap-2'><img src={token} width={30} alt="" /> MBToken</div>
                <div className=' fs-4 tw-font-medium d-flex gap-2' style={{ alignItems: "center", fontFamily: "'Courier New', Courier, monospace", wordSpacing: "-10px" }} > <img src={mask} width={40} alt="" />  M E T A M A S K</div>
                <div className='fs-3 tw-font-semibold d-flex gap-2' style={{ alignItems: "center" }}> <img src={sea} width={35} alt="" />  OpenSea</div>
            </main>
            <div>
                <h1 className='tw-font-bold tw-text-5xl text-center py-5'>Inspiration for your next adventure</h1>
              
            </div>
        </>
    );
}

export default Email;