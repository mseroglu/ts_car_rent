import { CarType } from "../../types"
import Images from "./Images"


interface Props {
    car: CarType,
    isOpen: boolean,
    close: () => void,
}

const Modal = ({ car, isOpen, close }: Props) => {


    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-zinc-600 z-20 bg-opacity-55 grid place-items-center">

                    <div className="bg-white p-6 max-w-lg m-auto max-h-[95vh] 
                        rounded-2xl flex flex-col gap-1 shadow-lg overflow-auto relative">

                        <button onClick={close} className="cursor-pointer p-1 absolute end-1 top-1 rounded-full bg-white z-10">
                            <img src="/close.svg" alt="" />
                        </button>
                        {/* foroğraflar */}
                        <Images car={car} close={close} />

                        {/* bilgiler */}
                        {Object.entries(car).map(([key, value], i) => (
                            <div key={i} className="flex justify-between bg-primary-blue-100">
                                {/* tüm _ işaretleri boşluk ile değiştir, string verince replice ilk bulduğunu tek değiştirir */}
                                <h4 className="capitalize">{key.replace(/_/g, " ").toString()}</h4> 
                                <p className="capitalize">{value}</p>
                            </div>
                        )
                        )

                        }

                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
