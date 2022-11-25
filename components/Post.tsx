import Link from "next/link"
import { useRouter } from "next/router"
import { IPost } from "../models/IPost"

const Post = ({ title, body, id }: IPost) => {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/post/${id}`)}>
            <h1>{title}</h1>
            <hr />
            <Link href="/post/[id]" as={`/post/${id}`}>
                <a>Read more</a>
            </Link>
        </div>
    )
}

export default Post