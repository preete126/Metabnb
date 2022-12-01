import Image1 from '../assets/1.jpg'
import Image2 from '../assets/2.jpg'
import Image3 from '../assets/4.jpg'
import Image4 from '../assets/7.jpg'
import token from '../assets/token (2).png'
import mask from '../assets/mask.png'
import sea from '../assets/sea.png'

function Email() {

    return (
        <>
            <section className='d-flex tw-px-12 pb-4  tw-pt-10 max-[1030px]:tw-pt-0 max-md:tw-flex-col max-[973px]:tw-px-6' style={{ fontFamily: "Calibri" }} >
                <main className='tw-pt-12 pb-4 '  >
                    <div className='tw-pt-8  tw-font-semibold tw-text-6xl max-[1030px]:tw-text-5xl  tw-text-zinc-700 max-[915px]:tw-text-4xl max-[915px]:tw-pr-16 max-md:tw-text-6xl max-md:tw-pr-0 ' style={{ lineHeight: "80px" }}>
                        Rent a <span className='text-primary ' >Place</span> away from <span className='text-primary' >Home</span> in the <span className='text-primary' >Metaverse</span>
                    </div>
                    <div className=' tw-pt-8  tw-pr-28 tw-text-2xl max-[1030px]:tw-text-xl max-[1030px]:tw-pr-10 max-md:tw-pr-0' style={{ fontFamily: "sans-serif" }} >We provide you  access to luxury and affordable houses in the metaverse, get a chance to turn your imagination into reality at your comfort zone </div>
                    <form action="" className='tw-pt-12 d-flex'>
                        <input className=' border border-2 form-control rounded-0 p-3 rounded-start  ' type="search" placeholder='search for location' style={{ width: "50%" }} />
                        <button className='btn rounded-end rounded-0 p-2 tw-text-center btn-primary tw-w-56 max-[1030px]:tw-w-48 max-[460px]:tw-w-44' >Search</button>
                    </form>
                </main>
                <div className=' tw-relative d-flex gap-2 w-100 tw-pt-10  max-[1030px]:tw-pt-20 max-sm:tw-pt-5'>
                    <div className='tw-pt-20 tw-mt-6 max-[480px]:tw-mt-0 max-[440px]:tw-pt-10'>
                        <img className='tw-rounded-3xl tw-w-96   ' src={Image1} alt="" />
                        <img className='tw-rounded-3xl tw-w-96  mt-2' src={Image4} alt="" />
                    </div>
                    <div>
                        <img className='tw-rounded-3xl tw-w-96  ' src={Image3} alt="" />
                        <img className='tw-rounded-3xl tw-w-96  mt-2' src={Image2} alt="" />
                    </div>

                </div>
            </section>
            <main className='bg-primary p-3 mt-5  d-flex tw-justify-around tw-text-white' style={{ fontFamily: "Arial, Helvetica, sans-serif", alignItems: "center" }}>
                <div className='tw-text-3xl max-sm:tw-text-xl max-[500px]:tw-text-lg  tw-font-semibold d-flex gap-2 '><img src={token} className='tw-w-8 max-[580px]:tw-w-6 max-[440px]:tw-w-5 '  alt="" /> MBToken</div>
                <div className=' tw-text-2xl max-sm:tw-text-xl max-[500px]:tw-text-lg tw-font-medium d-flex gap-2' style={{ alignItems: "center", fontFamily: "'Courier New', Courier, monospace", wordSpacing: "-10px" }} > <img src={mask} className='tw-w-10 max-[580px]:tw-w-7 max-[580px]:tw-w-6' alt="" />  M E T A M A S K</div>
                <div className='tw-text-3xl max-sm:tw-text-xl  max-[500px]:tw-text-lg  tw-font-semibold d-flex gap-2' style={{ alignItems: "center" }}> <img src={sea} className='tw-w-10 max-[580px]:tw-w-6' alt="" />  OpenSea</div>
            </main>
            <div>
                <h1 className='tw-font-bold tw-text-5xl max-[975px]:tw-text-4xl text-center py-5 inn'>Inspiration for your next adventure</h1>

            </div>
        </>
    );
}

export default Email;