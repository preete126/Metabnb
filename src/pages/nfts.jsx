import img1 from "../assets/5.jpg"
import img2 from "../assets/S.jpg"
import img3 from "../assets/U.jpg"

function Nfts() {
    return (
        <>
            <section className="bg-primary px-5 d-flex tw-justify-between gap-5" style={{paddingTop:"80px",paddingBottom:"120px"}}>
                <main className="pt-5 text-white w-75" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
                    <div className="mt-5 tw-text-5xl tw-font-semibold">Metabnb NFTs</div>
                    <div className="py-5 fs-5 pe-5 me-5" style={{ lineHeight: "40px" }}>Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs. This NFTs gives our customers access to loads of our exclussive services.</div>
                    <button className="btn btn-light text-primary p-2 px-4 tw-font-semibold">Learn more</button>
                </main>
                <main className="w-75">
                    <div className="mt-5" style={{paddingLeft:"10rem"}} >
                        <img className="rounded-3 tw-rotate-12 ms-5 " src={img1} width={"80%"} alt="" />
                    </div>
                    <div>
                        <img className="rounded-3" style={{ transform: "rotate(340deg)",marginTop:"-6rem" }} src={img2} width={"60%"} alt="" />
                    </div>
                    <div  style={{marginTop:"-10rem", paddingLeft:"15rem"}}>
                        <img className="rounded-3 " style={{ transform: "rotate(350deg)" }} src={img3} width={"100%"} alt="" />
                    </div>
                </main>
            </section>
        </>
    );
}

export default Nfts;