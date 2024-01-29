import { SelectMenu } from '../ui/SelectMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft } from '@fortawesome/free-solid-svg-icons'

export function Converter({ options, fromOption, toOption, setFromOption, setToOption }) {
    return (
        <div className='flex justify-between items-center text-lg sm:text-xl lg:text-2xl'>
            <div>
                <p className='py-3'>From</p>
                <SelectMenu options={options} option={fromOption} selectOption={setFromOption} />
            </div>
            <FontAwesomeIcon icon={faRightLeft} className='text-2xl sm:text-3xl' />
            <div>
                <p className='py-3'>To</p>
                <SelectMenu options={options} option={toOption} selectOption={setToOption} />
            </div>
        </div>
    )
}
