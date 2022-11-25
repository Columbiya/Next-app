import Head from "next/head"
import Header from "./Header"

interface MainLayoutProps {
    children: React.ReactNode,
    title: string
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
    //обернули всю страницу в layout

    return (
        <>
            <Header />

            <Head>
                <title>{title}</title>               
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&family=Hind:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <main>
                {children}
            </main> 

            <style jsx>{`
                main {
                    margin-top: 60px;
                }
            `}</style>
        </>
    )
}

export default MainLayout