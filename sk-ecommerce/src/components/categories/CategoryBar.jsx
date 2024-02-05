import { Category } from './Category'
import { categories } from '../../data/categories'

export function CategoryBar() {
    return (
        <div>
            <div className="max-md:hidden flex justify-evenly my-10 mx-auto lg:w-[1024px] text-slate-800">
                {categories.map((category) => (
                    <Category
                        key={category.id}
                        name={category.name}
                        icon={category.icon}
                    />
                ))}
            </div>
            <div className="md:hidden mx-auto sm:w-[90vw] my-10 text-slate-800">
                <div className="flex justify-evenly">
                    {categories.slice(0, 4).map((category) => (
                        <Category
                            key={category.id}
                            name={category.name}
                            icon={category.icon}
                        />
                    ))}
                </div>
                <div className="flex justify-evenly mt-10">
                    {categories.slice(4).map((category) => (
                        <Category
                            key={category.id}
                            name={category.name}
                            icon={category.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
