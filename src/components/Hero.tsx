import { motion } from "framer-motion"
import Botton from "./Botton"
import { RefObject } from "react"


interface Props {
  catalogRef: RefObject<HTMLDivElement>
}


const Hero = ({ catalogRef }: Props) => {
  // Katalog alanına git
  const handleClick = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset Yolculuğa Başla</h1>
        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısnız?
          Araç kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel kılabilirsin.
        </p>

        <Botton title="Arabaları Keşfet" designs="mt-10" handleClick={handleClick} />
      </div>

      <div className="flex justify-center">
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7
          }}
          animate={{
            translateX: 0,
            scale: 1
          }}
          transition={{
            duration: 0.8,
          }}
          src="/hero.png" className="object-contain" alt="araba" />
      </div>

    </div>
  )
}

export default Hero
