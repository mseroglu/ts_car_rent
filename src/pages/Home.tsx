import { useEffect, useRef, useState } from "react"
import Botton from "../components/Botton"
import Filter from "../components/Filter"
import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import { fetchCars } from "../utils/fetchCars"
import { CarType } from "../types"
import Warning from "../components/Warning"
import Card from "../components/Card"
import ShowMore from "../components/ShowMore"
import { useSearchParams } from "react-router-dom"
import { fuels, years } from "../utils/constants"


const Home = () => {
    const [cars, setCars] = useState<CarType[] | undefined>(undefined)
    const [isError, setIsError] = useState<boolean>(false)
    // katalog divinin referansı
    const catalogRef = useRef<HTMLDivElement>(null)
    // url deki param eriş
    const [params] = useSearchParams()    

    useEffect(() => {
        // urldeki tüm parametrelerden bir nesne oluştur 
        const paramsObj = Object.fromEntries(params.entries())
        
        //console.log("paramsObj fetche gider > ", paramsObj)

        fetchCars(paramsObj)
            .then((res) => setCars(res))
            .catch((err) => setIsError(true))
    }, [params])



    return (
        <div className="mb-40 ">
            <Hero catalogRef={catalogRef} />

            <div ref={catalogRef} className="mt-12 padding-x padding-y max-width ">
                <div className="home__text-container">

                    <h1 className="text-3xl font-extrabold">Araba Kataloğu</h1>

                    <p>Beğenebileceğin arabaları keşfet</p>

                    <div className="home__filters">
                        <SearchBar />
                        <div className="home__filter-container">
                            <Filter options={fuels} name="fuel_type" />
                            <Filter options={years} name="year" />
                        </div>
                    </div>
                    
                </div>

                {!cars
                    ? (<Warning>Yükleniyor...</Warning>)
                    : isError
                        ? (<Warning>Bir hata oluştu, Üzgünüz!</Warning>)
                        : cars.length < 1
                            ? (<Warning>İstediğiniz tür de araç bulunamadı..</Warning>)
                            : cars.length > 1 && (<section>
                                <div className="home__cars-wrapper">
                                    {cars?.map((car, i) => (
                                        <Card key={i} car={car} />
                                    ))
                                    }
                                </div>
                                <ShowMore />
                            </section>)
                }

            </div>


        </div>
    )
}

export default Home
