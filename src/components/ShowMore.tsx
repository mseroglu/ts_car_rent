import { useSearchParams } from "react-router-dom"
import Botton from "./Botton"


const ShowMore = () => {

    // 1) URL de limit parametresi yoksa:
    // Kullanıcı yeni girmiştirve varsayılan olarak ekranda 5 araç vardır
    // Butona tıklanınca url e patametre eklenmeli ve değeri 10 olmalı

    // 2) URL limit parametresi varsa değeri 5 er artmalı
    const [params, setParams] = useSearchParams()

    const limit = Number(params.get("limit")) || 5

    const increaseLimit = () => {
        // yeni limit
        const newLimit = limit + 5

        // paramertreleri güncelle
        params.set("limit", String(newLimit))

        // url i güncelle
        setParams(params)
     }

    return (
        <div className="w-full flex-center my-10">
           {limit < 30 && <Botton title="Daha Fazla Araç" handleClick={increaseLimit} />}
        </div>
    )
}

export default ShowMore
