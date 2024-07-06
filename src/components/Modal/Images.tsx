import { CarType } from "../../types"
import generateImage from "../../utils/generateImage"

interface Props {
    car: CarType,
    close: () => void,
}

const Images = ({ car, close }: Props) => {


    return (
        <div className="flex-1 flex-col">
            {/* büyük resim */}
            <div className="w-full h-40 bg-pattern bg-center rounded-lg">
                <img className="h-full mx-auto object-contain" src={generateImage(car)} alt="car" />
            </div>
            {/* küçük resimler */}
            <div className="flex gap-3 mt-1 justify-between">

                <div className="flex-1 flex relative h-20 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain min-w-[100px]" 
                    src={generateImage(car, "29")} alt="car" />
                </div>
                <div className="flex-1 flex relative h-20 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain min-w-[100px]" 
                    src={generateImage(car, "33")} alt="car" />
                </div>
                <div className="flex-1 flex relative h-20 bg-primary-blue-100">
                    <img className="h-full mx-auto object-contain min-w-[100px]" 
                    src={generateImage(car, "13")} alt="car" />
                </div>

            </div>
        </div>
    )
}

export default Images
