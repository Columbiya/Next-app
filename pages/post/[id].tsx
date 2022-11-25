import { GetServerSideProps, NextPageContext } from "next"
import { Router, useRouter } from "next/router"
import MainLayout from "../../components/MainLayout"
import { IPost } from "../../models/IPost"

async function getPosts() {
    const response = await fetch(`${process.env.BASE_URL}/posts?_limit=20`)
    const posts = await response.json()

    return posts
}

async function getSinglePost(id: number): Promise<IPost> {
    const response = await fetch(`${process.env.BASE_URL}/posts/${id}`)
    const post = await response.json() as IPost

    return post
}

interface PostPageProps {
    post: IPost
}

const PostPage = ({ post }: PostPageProps) => {
    const router = useRouter()

    console.log(post)

    return (
        <MainLayout title={"PostPage"}>
            <h1>Post number {router.query.id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <button onClick={() => router.push(`/`)}>Go back to home</button>
        </MainLayout>
    )
}

// export async function getStaticProps(context) {
//     const id = context.params.id
//     const post = await getSinglePost()


//     return {
//         props: {
//             post
//         }
//     }
// }

// export async function getStaticPaths() {
//     let paths = await getPosts()

//     paths = paths.map(post => ({
//         params: {id: post.id}
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

export const getServerSideProps =  async (context: PostNextPageContext) => {
    const { id } = context.query
    const post = await getSinglePost(+id)

    return {
        props: {
            post
        }
    }
}

export default PostPage