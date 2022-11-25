import Head from 'next/head'
import Header from '../../components/Header'
import MainLayout from '../../components/MainLayout'
import Photo from '../../components/Photo'
import { IPhoto } from '../../models/IPhoto'
import { fetchPhotos } from '../../lib/fetchPhotos'

interface PhotosPageProps {
    photos: IPhoto[]
}

const PhotosPage = ({ photos }: PhotosPageProps) => { //но запрос не будет переотправляться, если вдруг фотки поменяются после билда. Для того, чтобы запрос делался, нужен ssr
    return (
        <MainLayout title="Photos Page">    
            {
                photos.map(p => (
                    <Photo key={p.id} {...p} />
                ))
            }
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const photos = await fetchPhotos()
    return {
        props: {
            photos
        }
    }
}

// export async function getStaticProps() {
//     const photos = await fetchPhotos()
//     return {
//         props: {
//             photos
//         }
//     }
// }

export default PhotosPage