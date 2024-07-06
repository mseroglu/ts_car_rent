import ReactSelect from "react-select"

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { makes } from "../utils/constants"
import { useSearchParams } from "react-router-dom"

const Button = ({ design }: { design?: string }) => {


  return (
    <button className={"ml-3 gap-x-10" + " " + design}>
      <img src="/magnifying-glass.svg" width={40} height={40} alt="" />
    </button>
  )
}



const SearchBar = () => {
  const [params, setParams] = useSearchParams()
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")

  const options = useMemo(() => makes.map((item, i) => ({ label: item, value: i === 0 ? "" : item })), [])


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (make && model) setParams({ make, model })
    if (make && !model) setParams({ make })
    if (!make && model) setParams({ model })
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item ">
        <ReactSelect
          defaultValue={{
            value: params.get("make") || "",
            label: params.get("make") || "Marka Seçiniz"
          }}
          onChange={(selected) => selected && setMake(selected.value)}
          options={options} className="w-full text-black" />
        <Button design="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <img className="absolute w-6 ml-3" src="/model-icon.png" alt="" />
        <input
          defaultValue={params.get("model") || ""}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text" placeholder="örn: corolla" />
        <Button design="sm:hidden" />
      </div>
      <Button design="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
