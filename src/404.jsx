import "./pages/default.css"
import { Link } from "react-router-dom"
function Page404() {
    return (<section className="notFound">
        <Link to={'/'}>
            <button className="btn btn-primary fs-4 fw-bold w-25 tw-absolute" style={{ bottom: "2%", left: "50%", transform: "translate(-50%, -50%)" }} >Go Back</button>
        </Link>
    </section>);
}

export default Page404;