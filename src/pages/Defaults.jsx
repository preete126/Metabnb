
import './default.css'
function Defaults({children}) {
        
    return (
        <>
            <nav className='d-flex tw-justify-between nav p-3 ps-5 pe-5 '>
                <div className='tw-text-4xl tw-font-bold  meta'>
                    <i class="fa fa-camera-retro fa-lg" aria-hidden="true"></i> Metabnb
                </div>
                <div className='d-flex gap-4 tw-text-base Menu' >
                    <div>Home</div>
                    <div>Place to stay</div>
                    <div>NFTs</div>
                    <div>Community</div>
                </div>
                <div className='d-flex gap-3 tw-text-base Menu'>
                    <button>Connect wallet</button>
                </div>
            </nav>
            <div>{children}</div>
        </>
    );
}

export default Defaults;