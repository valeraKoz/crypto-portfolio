import {PortfolioList} from "@widgets/portfolio-list/ui";
import {AddTokenForm} from "@features/add-token-form";
import {useTokenFormIsHiddenSelector} from "@features/add-token-form/lib/store";

export function App() {
    const formIsHidden = useTokenFormIsHiddenSelector();

    return (
        <div className={'relative w-full h-screen flex flex-col items-center gap-2'}>
            <PortfolioList/>
            {!formIsHidden && (<AddTokenForm/>)}
        </div>
    )
}


