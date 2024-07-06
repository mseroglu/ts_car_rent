import { CarType } from "../types"
import { colors } from "./constants"


const generateImage = (car: CarType, angle?: string): string => {
    const url = new URL("https://cdn.imagin.studio/getimage")
    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("make", car.make)
    url.searchParams.append("zoomType", "fullscreen")
    url.searchParams.append("paintId", colors[
        Math.floor(Math.random() * colors.length)
    ])
    // açı varsa ekle yoksa ekleme
    if (angle) url.searchParams.append("angle", angle)
    // model adı / ayrılan uzun bir isimse - fotolar için
    url.searchParams.append("modelFamily", car.model.split("/")[0])

    return url.href
}

export default generateImage