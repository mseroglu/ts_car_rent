import { useState } from "react"
import { CarType } from "../types"
import Botton from "./Botton"
import Modal from "./Modal"
import generateImage from "../utils/generateImage"

interface Props {
  car: CarType
}

const Card = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="car-card group">
      <h2 className="car-card__content-title">{car.make + " " + car.model} </h2>

      <div className="flex mt-6 text-3xl gap-1">
        <span className="text-lg font-semibold"> ₺ </span>
        <span> {Math.round((Math.random() * 35) + 10) * 100} </span>
        <span className="text-lg font-semibold self-end"> /gün </span>
      </div>

      <div>
        <img src={generateImage(car)} alt="car image" />
      </div>

      <div className="w-full">

        <div className="flex w-full justify-between group-hover:hidden ">
          <div className="flex flex-col flex-center">
            <img width={25} src="/steering-wheel.svg" alt="direksiyon" />
            <p>{car.transmission === "a" ? "Otomatik" : "Manuel"}</p>
          </div>

          <div className="flex flex-col flex-center">
            <img width={25} src="/tire.svg" alt="lastik" />
            <p>{car.drive}</p>
          </div>

          <div className="flex flex-col flex-center">
            <img width={25} src="/gas.svg" alt="gaslogo" />
            <p>{car.fuel_type}</p>
          </div>
        </div>

        <div  className="hidden group-hover:flex w-full py-[2px] ">
          <Botton 
          title="Daha Fazla" 
          designs="w-full" 
          icon="/right-arrow.svg"
          handleClick={(e)=> setIsOpen(true)} />
        </div>

      </div>
      <Modal car={car} isOpen={isOpen} close={()=> setIsOpen(false)} />
    </div>
  )
}

export default Card
