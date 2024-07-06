import { MouseEventHandler } from "react"

type Props = {
    title: string,
    designs?: string,
    type?: "submit" | "reset" | "button",
    disabled?: boolean,
    icon?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>


}

const Botton = ({ title, designs, type, disabled, icon, handleClick }: Props) => {
    return (
        <button
        onClick={handleClick}
            disabled={disabled}
            type={type}
            className={designs + " " +
                "custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white "}>
            <span>{title}</span>
            {icon && <img className="absolute right-5" src={icon} alt={title} />}
        </button>
    )
}

export default Botton
