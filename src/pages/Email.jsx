import Image1 from '../assets/I.jpg'
import Image2 from '../assets/A.jpg'
import Image3 from '../assets/L.jpg'
import Image4 from '../assets/M.jpg'

function Email() {
    return (
        <section className='d-flex p-5  pe-1 gap-1'  >
            <main className='pt-3 w-75'>
                <div className='  tw-font-semibold  tw-text-zinc-700 ' style={{ lineHeight: "80px", fontSize: "57px" }}>Rent a <span className='text-primary'>Place</span> away from <span className='text-primary'>Home</span> in the <span className='text-primary'>Metavere</span></div>
                <div className=' pt-5    tw-text-2xl pe-5'>We provide you  access to luxury and affordable houses in the metaverse, get a chance to turn your imagination into reallity at your comfort zone </div>
                <form action="" className='pt-5 d-flex'>
                    <input className='w-50 form-control rounded-0 p-2 rounded-start  '  type="email" placeholder='search for location' />
                    <button className='btn rounded-end rounded-0 p-2 px-5 btn-primary'>Search</button>
                </form>
            </main>
            <div className='d-flex flex-wrap gap-3 w-50 ' >
                <img className='tw-rounded-3xl   ' style={{border:"1px solid red"}} src={Image1} width={"200px"} alt="" />
                <img className='tw-rounded-3xl   ' style={{border:"1px solid red"}} src={Image2} width={"200px"} alt="" />
                <img className='tw-rounded-3xl   ' style={{border:"1px solid red"}} src={Image3} width={"200px"} alt="" />
                <img className='tw-rounded-3xl   ' style={{border:"1px solid red"}} src={Image4} width={"200px"} alt="" />
            </div>
        </section>
    );
}

export default Email;