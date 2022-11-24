import Image1 from '../assets/1.jpg'
import Image2 from '../assets/2.jpg'
import Image3 from '../assets/4.jpg'
import Image4 from '../assets/6.jpg'
import token from '../assets/token (2).png'
import mask from '../assets/mask.png'
import sea from '../assets/sea.png'

function Email() {
    
    return (
        <>
            <section className='d-flex p-5  pt-3' style={{fontFamily:"Calibri"}} >
                <main className='pt-5 pb-4 w-75'  >
                    <div className='pt-3  tw-font-semibold tw-text-6xl  tw-text-zinc-700 ' style={{ lineHeight: "80px"}}>Rent a <span className='text-primary ' style={{fontSize:"4.2rem"}}>Place</span> away from <span className='text-primary'  style={{fontSize:"4.2rem"}}>Home</span> in the <span className='text-primary'  style={{fontSize:"4.2rem"}}>Metaverse</span></div>
                    <div className=' pt-5    fs-3 me-5 pe-5'>We provide you  access to luxury and affordable houses in the metaverse, get a chance to turn your imagination into reallity at your comfort zone </div>
                    <form action="" className='pt-5 d-flex'>
                        <input className='w-50 border border-2 form-control rounded-0 p-3 rounded-start  ' type="search" placeholder='search for location' />
                        <button className='btn rounded-end rounded-0 p-2 px-5 btn-primary' style={{width:"35%"}}>Search</button>
                    </form>
                </main>
                <div className=' tw-relative  ' style={{width:'550px'}} >
                    <img className='tw-rounded-3xl  tw-absolute ' style={{ top: "140px" }} src={Image1} width={"220px"} alt="" />
                    <img className='tw-rounded-3xl tw-absolute ' style={{ right: "0%", top: "50px" }} src={Image2} width={"220px"} alt="" />
                    <img className='tw-rounded-3xl tw-absolute ' style={{ top: "320px" }} src={Image3} width={"220px"} alt="" />
                    <img className='tw-rounded-3xl tw-absolute ' style={{ top: "230px", right: "0%" }} src={Image4} width={"220px"} alt="" />
                </div>
            </section>
            <main className='bg-primary p-3 mt-5  d-flex tw-justify-around tw-text-white' style={{ fontFamily: "Arial, Helvetica, sans-serif", alignItems: "center" }}>
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