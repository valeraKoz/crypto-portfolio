import {FilterValue} from "@features/tokenTable/lib";

export const TokenTableFilters = (
    {filterValue,setFilterValue}:{filterValue: FilterValue,setFilterValue: React.Dispatch<React.SetStateAction<FilterValue>>}
)=>{
    return (
        <div className='flex justify-between p-2 bg-white/6 rounded-lg'>
            <Filter filterValue={filterValue} setFilterValue={setFilterValue} title={'Монета'} value={'name'}/>
            <Filter filterValue={filterValue} setFilterValue={setFilterValue} title={'% от портфеля'} value={'percent'}/>
            <Filter filterValue={filterValue} setFilterValue={setFilterValue} title={'Стоимость 24ч'} value={'price'}/>
            <Filter filterValue={filterValue} setFilterValue={setFilterValue} title={'Баланс'} value={'balance'}/>
        </div>
    )
}

const Filter = (
    {
        filterValue,
        setFilterValue,
        title,
        value
    }:
        {
            filterValue: FilterValue,
            setFilterValue: React.Dispatch<React.SetStateAction<FilterValue>>,
            title: string,
            value: string
        }
) => {
    const handleToogleFilter = ()=>{
        if(!filterValue.startsWith(value)){
            setFilterValue(`${value}Up` as FilterValue);
        } else {
            if(filterValue.endsWith('Up')) setFilterValue(`${value}Down` as FilterValue);
            else setFilterValue(`${value}Up` as FilterValue);
        }
    }
    return(
        <button className='min-w-[150px] cursor-pointer' onClick={handleToogleFilter}>
            {title}
        </button>
    )
}