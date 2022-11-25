import Link from 'next/link';
import React from 'react'

const Header = props => {
    // style в компоненте - локальные стили
    return (
        <>
            <header>
                <nav>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/photos">
                        <a>Photos</a>
                    </Link>
                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>
                </nav>
            </header>

            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    right: 0;
                    top: 0;
                }
            `}</style>
        </>

    )
}

export default Header;