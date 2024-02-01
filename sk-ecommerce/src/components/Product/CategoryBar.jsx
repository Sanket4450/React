import { categories } from "../../data/categories"
import { NavLink } from "react-router-dom"

export function CategoryBar() {
    return (
        <div className="max-md:hidden md:w-[90vw] lg:w-[950px] my-8 mx-auto bg-slate-900 flex">
            {
                categories.map(category => (
                    <Category key={category.id} name={category.name} />
                ))
            }
        </div>
    )
}

function Category({ path, name, style }) {
    return (
        <NavLink to={path} className="w-[12.5%] text-white text-center font-sans py-3 hover:bg-slate-700 hover:cursor-pointer">{name}</NavLink>
    )
}
