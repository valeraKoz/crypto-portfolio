import {AddTokenForm} from "@features/add-token-form/ui/AddTokenForm";
import {Loader} from "@shared/ui";
import {useGetAvailableCurrencySelector} from "@features/add-token-form/lib/store";
import {AvailableCurrency} from "@entities/stock-token/model";

export const AddTokenFormScrolledList =(
    {data}:{data: AvailableCurrency[]}
)=>{
    const {isLoading} = useGetAvailableCurrencySelector();
    return (
        <>
            {
                isLoading ? <Loader/> : (
                    <div className='h-full overflow-y-scroll text-center'>
                        {
                            data && data.map((item, index) => (
                                <AddTokenForm.ListItem item={item} key={index}/>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}



// Добавить монеты - фича
// Форма добавления - виджет