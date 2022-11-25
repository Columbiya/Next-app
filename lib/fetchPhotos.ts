import { IPhoto } from "../models/IPhoto"

export async function fetchPhotos(): Promise<IPhoto[]> {
    const res = await fetch(`${process.env.BASE_URL}/photos?_limit=20`)
    const data = await res.json() as IPhoto[]

    return data
}
