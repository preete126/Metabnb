import home from '../assets/home.png'
import './default.css'
function Defaults({children}) {
   
    return (
        <>
            <nav className='d-flex tw-justify-between nav p-4 ps-5 pe-5 '>
                <div className='d-flex tw-text-4xl tw-font-bold  meta'>
                   <img src={home} width={50} alt="" /> Metabnb
                </div>
                <div className='d-flex gap-5 tw-text-xl Menu' >
                    <div>Home</div>
                    <div>Place to stay</div>
                    <div>NFTs</div>
                    <div>Community</div>
                </div>
                <div className=' tw-text-base Menu'>
                    <button className='btn btn-primary '>Connect wallet</button>
                </div>
            </nav>
            <div>{children}</div>
        </>
    );
}

export default Defaults;