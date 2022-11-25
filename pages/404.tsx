import Link from "next/link"
import MainLayout from "../components/MainLayout"

const ErrorPage = (props) => {
    return (
        <MainLayout title={"Error page"}>
            <h1>Error 404</h1>
            <p>Please go back to safety</p>
            <Link href="/"><a>Home</a></Link>
        </MainLayout>
    )
}

export default ErrorPage