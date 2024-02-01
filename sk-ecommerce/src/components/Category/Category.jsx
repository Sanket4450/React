import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Category({ name, icon}) {
    return (
        <div className="w-16 flex flex-col space-y-2 items-center">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex justify-center items-center hover:cursor-pointer"><FontAwesomeIcon icon={icon} /></div>
            <h4 className="font-sans text-sm font-semibold">{name}</h4>
        </div>
    )
}
