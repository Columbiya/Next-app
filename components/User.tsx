import { IUser } from "../models/IUser"

const User= ({ name, username, phone }: IUser) => {
    return (
        <div>
            <p>{name}</p>
            <hr />
            <p>{username}</p>
            <hr />
            <p>{phone}</p>
            <hr />
        </div>
    )
}

export default User