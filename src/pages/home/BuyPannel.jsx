import { useEffect, useState } from "react"

const TimePannel = ({value, type}) => {
    return <div className="flex flex-col items-center w-[100px] h-[50px] bg-[#1d2f4f] rounded-full -tracking-3">
        <div className="font-bold text-[18px]">{value}</div>
        <div className="text-[14px]">{type}</div>
    </div>
}

const BuyPannel = ({total = 60 * 60 * 24}) => {
    const [percent, setPercent] = useState(0);
    const [day, setDay] = useState(1);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(60);
    const [curPrice, setCurPrice] = useState(0.001);
    const [listPrice, setListPrice] = useState(0.00089);
    const [totalSupply, setTotalSupply] = useState(125877796);
    const [curSupply, setCurSupply] = useState(12205000)
    const [stage, setStage] = useState(1)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPercent(prev => prev + 1);
            setDay(Math.floor((total - percent) / total))
            setHour(Math.floor((total - percent) / 3600))
            setMin(Math.floor((total - percent - hour * 3600) / 60 ))
            setSec(prev => prev == 0 ? 59 : prev - 1)
        }, 1000);
        return () => clearInterval(timeout);
    })
    return (
        <div className="w-full ">
            <div id="layer1" className="flex flex-col items-center bg-[#14233d] py-3 px-5 gap-3 rounded-t-[20px]">
                <div id="title" className="font-bold"> BUY IN BEFORE PRICE INCREASES! </div>
                <div id="time_panel" className="flex gap-3 justify-between">
                    <TimePannel value={day} type={"Days"} />
                    <TimePannel value={hour} type={"Hours"} />
                    <TimePannel value={min} type={"Minutes"} />
                    <TimePannel value={sec} type={"Seconds"} />
                </div>
                <div className="w-full bg-white rounded-full">
                    <div className={`bg-[rgb(139,99,234)] h-4 rounded-full px-1`} style={{width: (percent * 100 / total).toString()+'%'}}/>
                </div>   
                <div>
                    ${totalSupply.toLocaleString()} / ${curSupply.toLocaleString()} - STAGE {stage}
                </div>   
                <div className="flex justify-between text-[14px] w-full">
                    <div>Current Price: ${curPrice}</div>
                    <div>List Price: ${listPrice}</div>
                </div>
            </div>
            <div id="layer2" className="flex flex-col bg-[#324973] rounded-b-[20px] p-5 gap-3">
                <div className="flex justify-between w-full">
                    <div>Choose a network</div>
                    <div className="rounded-full bg-[#14233d] p-[2px] flex gap-3 items-center">
                        <div className="bg-[#55c0ec] flex rounded-full w-[90px] h-[28px] items-center justify-center gap-1">
                            <div className="rounded-full h-4 w-4">
                                <img src="data:image/png;base64,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" className="rounded-full" alt="chain"></img>
                            </div>
                            ETH
                        </div>
                        <div className="flex justify-center w-[90px] h-[28px] items-center gap-1">
                            <div className="rounded-full h-4 w-4">
                                <img src="data:image/png;base64,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" alt="BNB Smart Chain"></img>
                            </div>
                            BSC
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-start">
                    <div className="rounded-full flex items-center justify-center gap-1 bg-[#55c0ec] px-[50px] h-7">
                        <div className="rounded-full h-4 w-4">
                            <img src="data:image/png;base64,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" className="rounded-full" alt="chain"></img>
                        </div>
                        ETH
                    </div>
                    <div className="rounded-full flex items-center justify-center gap-1 bg-[#14233d] px-[50px] h-7">
                        <div className="rounded-full h-4 w-4">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA7VBMVEUAAAAgn3Akn3gnn3slonsmonoloXsmoXomoXwlonsln3glonsmonsln3ogn3gjn3kmoXsnoXwon3gnonwmoXsnonsln3onn3kmoXskn3wjn3wmonwloHsmoXsgn4Aln3oloXomn3onoXomn3kmoHsmn3kkn3sln3wln30moXsnoHwmoHwloHsmoHsmoXvk8+////+S0L3I6N7j9O/y+feFyrVcuJxBrYtPs5R3xayu28274dbJ597X7ebW7eag1cVqv6Q0poPW7ua74tat3M13xKxBrIs0p4NPspRqvqSg1sVcuZyT0L2u287x+ffPkGq2AAAALnRSTlMAEEBwj6/P3++/YJ+fYCBQ328gr1+PMHDvQFCvn88QkJCw36CfUHCQYKCvr7/PUOjrHwAAAAFiS0dEMK7cLeQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflARoNBSjIg3E2AAADZUlEQVRo3sWaa3uaMBTHg2jFrXTMWVt6sXbrelnbQ0Ax9TK1ChbKtu//cfZCVxVDCJCs/5fxec7PnHNyQk6CEJeUklqu7FU1AACtWquU1ZKCREn58LEKFO3t6wcCrKs1YKhWkFFiWl+q8in/nzeAS4aey/5nDbiVA1EyIJMyIupfILP2M4S7oUEOcU9CKUNOHXItvroBuWVwuKmpQQEZzVT3Q0E1UpIfCutIsn0moQFClOilJghSU3x+buuYmq2KMPsABm3FlUGgDnft6yBUDXkBSAjDPghWRaqDAADMLQDFQRbml03LpLQJFAVslQxDBuBYYUegMGBjCoYcwFsUTkAO4C2RTmUBaqtFDLIAoLAWmQjAMsw1eYAaw0PgdLbV3TAY+6njAsNHvGXI3gD0eAuSnqGO5gKcIYTOZQIMhFogEwAKKskFmEiVCzhCF3IB7YRC9Cby1LcHw5H1M7YOrPFoOHGnT88pgEuUfBJ+6k/Gs7nn+r3FCwB4sRksgp5vzx1rNJkukgHn6Ct1/Lk/sOZu72VjyEtwURC+OuNBlJintAPNYmK97rjZY8SA+JblUudxjCiDv/CY7I567CD7XSukERDNPqbYTwOASx+mAIYYBzkAv+lVmwIIMf7jZgUshhhbtInTghxaGFuDaSzF7XX5n8VmSNwRxtgh1CBT09SfYYzxeOJGaQuJTN2BhTHGTi8hTROqNfGd5dLtjkcD2+1HUUQIIc9ACCEkivp9ezIYrbbVjue/JG6ajFIRhK/OjL0ZdzueHS6YpSK12AU937W9ubP5ETBzPM92/WDBUeykl2tT9oYjfctMKKeCAOcIoW8yAVf/48OrJRNwwPj4FQFYHhBUeYBlo7MlD7DqJ9RkAS5XZzRTFuA78xhbHLBuJqhyAOtedkuTAdjshlzLAOgp7ZyigK12Dk8iZQXEbhNORQOu4k1BTSxg9yZBFwugXLfciAS0KZ3fVkomhd5aQZ7WMkcYuI/fB+/T3hfWnr1NvgK5FmFfZV3iXEu2L8BLt6kXdYX6/Frz/a8aEWrd5LXf5n2poOeahHab4cL6Lrv9H9neJ2SdhGFmvtXPgtDUXO8SeBGGmvsZysl9uvkHExVRXX9gWlcFvKGp63ePNOPVM13gCx1Tbd8//Hv+83jfVk1O438B830kEHGn198AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDEtMjZUMTM6MDQ6NTIrMDA6MDC9qknGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAxLTI2VDEzOjA0OjUyKzAwOjAwzPfxegAAAABJRU5ErkJggg==" alt="USDT" />
                        </div>
                        USDT
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-[14px] flex justify-start">You pay </div>
                    <div className="flex px-5 w-full bg-[#14233d] h-10 rounded-full items-center gap-2">
                        <input type="number" className="bg-transparent outline-none w-full" value={0}/>
                        <div className="flex items-center gap-1">
                            ETH
                            <div className="rounded-full h-5 w-5">
                                <img src="data:image/png;base64,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" className="rounded-full" alt="chain"></img>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start pl-3 gap-2 text-[14px] text-third-color">
                        <div className="rounded-full bg-[#14233d] bg-opacity-50 py-1 px-2">$250 + 5%</div>
                        <div className="rounded-full bg-[#14233d] bg-opacity-50 py-1 px-2">$500 + 5%</div>
                        <div className="rounded-full bg-[#14233d] bg-opacity-50 py-1 px-2">$1000 + 5%</div>
                        <div className="rounded-full bg-[#14233d] bg-opacity-50 py-1 px-2">$5000 + 5%</div>
                        <div className="rounded-full bg-[#14233d] bg-opacity-50 py-1 px-2">Max</div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-[14px] flex justify-start">You receive </div>
                    <div className="flex px-5 w-full bg-[#14233d] h-10 rounded-full items-center gap-2">
                        <input type="number" className="bg-transparent outline-none w-full" value={0}/>
                        <div className="flex items-center gap-1">
                            JWL
                            <div className="rounded-full h-5 w-5">
                                <img src="assets/imgs/token.png" className="rounded-full" alt="chain"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 pt-2">
                    <div className="flex justify-between px-5 w-full bg-[#14233d] bg-opacity-70 h-6 rounded-full items-center gap-2 text-[14px]">
                        <div className="text-third-color ">Your potential returns at stage {stage}</div>
                        <div className="text-[#f3ba2f]">600%</div>
                    </div>
                </div>
                <div className="bg-primary-color rounded-full py-1">
                    Connect Wallet
                </div>
                <div className="flex rounded-full mt-4 justify-between gap-4 items-center">
                    <div className="border-[#55c0ec] border-[1px] rounded-full py-1 flex justify-center w-full"> How to buy </div>
                    <div className="border-[#55c0ec] border-[1px] rounded-full py-1 flex justify-center w-full"> Refferal and Earn </div>
                </div>
            </div>
        </div>
    )
}

export default BuyPannel;