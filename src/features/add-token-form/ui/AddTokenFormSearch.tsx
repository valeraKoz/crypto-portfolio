import {CiSearch} from "react-icons/ci";


export const AddTokenFormSearch = (
    {filteredInput,setFilteredInput}:{filteredInput: string,setFilteredInput:React.Dispatch<React.SetStateAction<string>>}
)=>{
    return (
        <div
            className='translate-x-[102%] hover:translate-x-[11%] duration-100 rounded-lg flex w-[90%] items-center border border-neutral-800 hover:border-main p-1'>
            <CiSearch size={25} className={'mr-3'}/>
            <input type="text"
                   className='pl-3 w-full outline-none'
                   placeholder='Поиск по названию монеты'
                   value={filteredInput}
                   onChange={(e) => setFilteredInput(e.target.value)}
            />
        </div>
    )
}