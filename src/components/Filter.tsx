import { useSearchParams } from "react-router-dom"
import ReactSelect, { SingleValue } from "react-select"

interface OptionsType {
  label: string,
  value: string
}

interface Props {
  options: OptionsType[]
  name: string
}


const Filter = ({ options, name }: Props) => {
  const [params, setParams] = useSearchParams()

  const handleChange = (e: SingleValue<OptionsType>) => {

    // e.value strin veya null gelebildiğinden ve fonksiyon sadece string kabul ettiğinden as ile tür dönüşümü yapıyoruz
    params.set(name, e?.value as string)
    // parametrenin değeri yoksa parametreyi sil
    params.delete(name, "")
    setParams(params)
  }

  return (
    <div className="w-fit">
      <ReactSelect
        defaultValue={{
          label: params.get(name) || options[0].label,
          value: params.get(name) || options[0].value
        }}
        onChange={handleChange}
        options={options}
        className="text-black min-w-[100px]" />
    </div>
  )
}

export default Filter
