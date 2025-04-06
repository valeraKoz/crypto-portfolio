import {useStoreActions} from "@shared/lib/store/hooks";
import {Button} from "@shared/ui";

export const PortfolioListHeader = () =>{
    const {setIsFormHidden} = useStoreActions()
    return (
        <div className={'container flex items-center justify-between py-5 max-h-[100px]'}>
            <h1 className={'text-2xl'}>CryptoFolioApp</h1>
            <Button title={'Добавить монеты'} onClick={()=>setIsFormHidden()}/>
        </div>
    )
}