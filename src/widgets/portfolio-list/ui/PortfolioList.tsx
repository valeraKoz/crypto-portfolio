import {PortfolioListHeader} from "@widgets/portfolio-list/ui/PortfolioListHeader";
import {PortfolioListContent} from "@widgets/portfolio-list/ui/PortfolioListContent";
import {TokenTable} from "@features/tokenTable";
import {BgCircle} from "@shared/ui";


export const PortfolioList = ()=>{




    return (
        <div className='relative z-1 container overflow-hidden flex flex-col justify-beetween gap-6 bg-white/5 shadow-lg p-12 rounded-lg'>
            <PortfolioList.Header/>
            <TokenTable/>
            <BgCircle color={'green'} position={{bottom:0, left:0}}/>
            <BgCircle color={'pink'} position={{top:0, right:0}}/>
        </div>
    )
}

PortfolioList.Header = PortfolioListHeader;
PortfolioList.Content = PortfolioListContent;


