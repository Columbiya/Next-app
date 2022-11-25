import React from "react"
import MainLayout from "../../components/MainLayout"
import User from "../../components/User"
import { GetServerSideProps } from 'next'
import { IUser } from "../../models/IUser"

async function getUsers(): Promise<IUser[]> {
    const users = fetch(`${process.env.BASE_URL}/users`).then(response => response.json()) as Promise<IUser[]>
    return users
}

const About = ({ users }: { users: IUser[] }) => {

    return (
        <MainLayout title="About Page">
            <h1>Hello world!</h1>

            {users.map(user => (
                <User key={user.id} {...user} />
            ))}
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const users = await getUsers()
    
    return {
        props: {
            users
        }
    }
}

export default About