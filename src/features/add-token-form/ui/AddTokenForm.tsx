import {useStoreActions} from "@shared/lib/store/hooks";

import {AddTokenFormHeader} from "@features/add-token-form/ui/AddTokenFormHeader";
import {AddTokenFormSearch} from "@features/add-token-form/ui/AddTokenFormSearch";
import {AddTokenFormScrolledList} from "@features/add-token-form/ui/AddTokenFormScrolledList";
import {AddTokenFormListItem} from "@features/add-token-form/ui/AddTokenFormListItem";
import {Button} from "@shared/ui";
import {useAddTokenFormSearch, useFormDataState} from "@features/add-token-form/lib/hooks";





export const AddTokenForm = () => {
    const {setIsFormHidden} = useStoreActions();
    const {filteredInput, setFilteredInput, filteredData} = useAddTokenFormSearch();
    const {formDataState,setQuantity,addAsset,resetFormDataState} =useFormDataState()

    const handleFormSubmit = () =>{
        if(formDataState.token && formDataState.quantity) {
            addAsset({...formDataState.token,quantity: formDataState.quantity});
            handleFormReset();
        } else {
            console.log('NotValid')
        }
    }
    const handleFormReset = () => {
        resetFormDataState()
        setIsFormHidden();
    }

    return(
        <div
            onClick={(e)=>{if(e.target === e.currentTarget) handleFormReset()}}
            className={`absolute left-0 top-0 bg-bg/5 backdrop-blur-[3px] w-screen h-screen flex flex-col items-center justify-center z-9999`}>
            <div
                className='flex flex-col gap-1 h-[500px] min-w-[450px] bg-bg overflow-hidden border border-main rounded-lg'>
                <AddTokenForm.Header/>
                <AddTokenForm.Search filteredInput={filteredInput} setFilteredInput={setFilteredInput}/>
                <AddTokenForm.ScrolledList data={filteredData}/>
                <input className={`py-4 px-10 outline-none border-t border-main`}
                       type="number"
                       placeholder={'Кол-во'}
                       value={formDataState.quantity}
                       onChange={(e)=> setQuantity(e.target.value)}
                />
            </div>
            <div className={'flex gap-20 pt-5'}>
                <Button title={'Отмена'} onClick={handleFormReset}/>
                <Button title={'Добавить'} onClick={handleFormSubmit}/>
            </div>
        </div>
    )
}

AddTokenForm.Header = AddTokenFormHeader;
AddTokenForm.Search = AddTokenFormSearch;
AddTokenForm.ScrolledList = AddTokenFormScrolledList
AddTokenForm.ListItem = AddTokenFormListItem;
