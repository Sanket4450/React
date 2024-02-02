import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Category({ name, icon }) {
    return (
        <div className="max-sm:w-16 w-[76px] flex flex-col space-y-2 items-center hover:cursor-pointer">
            <div className="max-sm:w-16 w-[76px] max-sm:h-16 h-[76px] bg-[#eaebef] max-sm:text-lg text-xl rounded-full flex justify-center items-center hover:cursor-pointer"><FontAwesomeIcon icon={icon} /></div>
            <h4 className="font-sans max-sm:text-[12px] text-[14px] font-semibold">{name}</h4>
        </div>
    )
}
