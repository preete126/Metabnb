import img1 from "../assets/images/5.jpg"
import img2 from "../assets/images/S.jpg"
import img3 from "../assets/images/U.jpg"

function Nfts() {
    return (
        <>
            <section className="bg-primary tw-px-12 max-[973px]:tw-px-6  tw-flex gap-5 icons max-[769px]:tw-flex-col sect " style={{paddingTop:"80px",paddingBottom:"120px"}}>
                <main className="pt-5 text-white w-75 wid" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
                    <div className="mt-5 tw-text-5xl tw-font-semibold max-[930px]:tw-text-4xl">Metabnb NFTs</div>
                    <div className="py-5 tw-text-lg tw-mr-28 max-[1030px]:tw-mr-2" style={{ lineHeight: "40px" }}>Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs. This NFTs gives our customers access to loads of our exclussive services.</div>
                    <button className="btn btn-light text-primary p-2 px-4 tw-font-semibold">Learn more</button>
                </main>
                <main className="w-75 max-[769px]:tw-flex  max-[769px]:tw-gap-6 wid ">
                    <div className="mt-5  tw-ml-28 max-[915px]:tw-ml-10 max-[769px]:tw-ml-0" >
                        <img className="rounded-3 tw-rotate-12 tw-mx-auto max-[769px]:tw-w-96  tw-w-80 max-[1030px]:tw-w-60 max-[980px]:tw-w-52 max-[915px]:tw-w-44 " src={img1}  alt="" />
                    </div>
                    <div>
                        <img className="rounded-3 max-[769px]:tw-w-96 tw-w-80 max-[1030px]:tw-w-60  max-[980px]:tw-w-52  max-[915px]:tw-w-44 fir" style={{ transform: "rotate(330deg)", marginTop:"-3rem"}} src={img2} alt="" />
                    </div>
                    <div className="tw-ml-48 max-[915px]:tw-ml-28  max-[769px]:tw-ml-0">
                        <img className="rounded-3 max-[769px]:tw-w-96 tw-w-80 max-[915px]:tw-w-44 mx-auto sec " style={{ transform: "rotate(350deg)", marginTop:"-11.5rem" }} src={img3}  alt="" />
                    </div>
                </main>
            </section>
        </>
    );
}

export default Nfts;