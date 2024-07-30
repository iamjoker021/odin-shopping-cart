import { Link } from "react-router-dom"

export default function Error() {
    return (
        <>
            <h1>Opps, 404 Not Found, Use Nav bar to go to desired page</h1>
            <Link to="/">
            You can go back to the home page by clicking here, though!
            </Link>
        </>
    )
}