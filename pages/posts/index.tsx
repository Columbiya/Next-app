import { GetServerSideProps } from "next"
import MainLayout from "../../components/MainLayout"
import Post from "../../components/Post"
import { IPost } from "../../models/IPost"

interface PostsProps {
    posts: IPost[]
}

const Posts = ({ posts }: PostsProps) => {
    
    return (
        <MainLayout title="Posts page">
            {!posts && <p>Loading....</p>}
            <div>
                {posts.map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch(`${process.env.BASE_URL}/posts?_limit=10`)
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Posts