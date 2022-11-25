import React from 'react'
import { IPhoto } from '../models/IPhoto'

const Photo = ({ albumId, id, title, url, thumbnailUrl }: IPhoto) => {
    return (
        <div>
            <p>{title}</p>
            <p>{id}</p>
            <img src={url} alt="" />
        </div>
    )
}

export default Photo