import { CopyToClipboard } from "react-copy-to-clipboard";
import { ContentCopy, CopyAll, Instagram, Telegram, X, YouTube } from "@mui/icons-material";
import { useState } from "react";
import BuyPannel from "./BuyPannel";

const Home = () => {
    
    return (
        <div className="flex flex-col gap-14 py-10">
            <div className="flex justify-between">
                <div className="flex flex-col gap-5">
                    <div className="text-[40px] flex text-left font-bold">
                        Bridging Made <br />
                        Easy via Layer Zero
                    </div>
                    <div className="text-6 text-left">
                        Trade elegantly, deposit with best rewards and experience the speed and security powered by Jewel.
                    </div>
                    <div className="border-gradient-color flex flex-col gap-1 py-5 px-4 w-[580px]">
                        <div className="flex items-center gap-2 justify-start">
                            <div className="rounded-full h-5 w-5">
                                <img src="data:image/png;base64,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" className="rounded-full" alt="chain"></img>
                            </div>
                            Ethereum Contract:
                        </div>
                        {/* <CopyToClipboard text={"0x7e74ae9967a126c553f4a764b474bee4e2541500"} onCopy={copyInviteUrl}> */}
                        <div className="flex items-center gap-1 justify-start">
                            <div>0x7e74ae9967a126c553f4a764b474bee4e2541500</div>
                            <ContentCopy fontSize="26" className="text-secondary-color text-[26px]"/>
                        </div>
                        {/* </CopyToClipboard> */}
                    </div>
                    
                    <div className="border-gradient-color flex gap-3 py-5 px-3 w-[580px] text-left text-[18px] relative items-center">
                        <img src="assets/imgs/audit.png" className="h-[51px] w-[51px]"/>
                        <div>Project fully security audited by Coinsult. They povide contract security audits to boost investor confidence.</div>
                    </div>

                    <div className="border-gradient-color flex gap-3 py-5 px-3 w-[580px] text-left text-[18px] relative items-center">
                        <img src="assets/imgs/whitepaper.png" className="h-[51px] w-[51px]"/>
                        <div>
                            White Paper <br />
                            Jewel is a Web3 Platform that is Secure...
                        </div>
                    </div>

                    <div className="border-gradient-color flex gap-8 py-5 px-8 w-[580px] text-left relative items-center">
                        <Telegram fontSize="52" className="text-primary-color text-[52px]"/>
                        <X fontSize="44" className="text-[44px] text-primary-color" />
                        <Instagram fontSize="48" className="text-[48px] text-primary-color" />
                        <YouTube fontSize="52" className="text-[52px] text-primary-color" />
                    </div>
                </div>
                <div className="pl-10 w-full">
                  <BuyPannel />
                </div>
            </div>
            <div className="flex justify-center gap-20 py-2">
                <div className="flex flex-col gap-3">
                    <div className="text-[42px] font-bold text-primary-color">410,000M</div>
                    <div className="text-[14px]">Supply</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-[42px] font-bold text-primary-color">~10.25M</div>
                    <div className="text-[14px]">Supply Marketcap at listing(circulating)</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-[42px] font-bold text-primary-color">40,000+</div>
                    <div className="text-[14px]">Users on waiting list</div>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="border-[1px] w-full border-[#2bdaee] py-5 px-1 rounded-[10px] flex flex-col items-center gap-5">
                    <img src="assets/svgs/vault.svg"></img>
                    <div className="text-[24px] font-bold">Trade with Simple One Click</div>
                    <div className="">
                        Multiple assets, slippage control, we are making a DEX for everyone to use.
                    </div>
                </div>
                <div className="border-[1px] w-full border-[#a444e8] py-5 px-1 rounded-[10px] flex flex-col items-center gap-5">
                    <img src="assets/svgs/doller.svg"></img>
                    <div className="text-[24px] font-bold -tracking-[1px]">Best Mining Reward in JEWEL</div>
                    <div className="">
                        We provide the max liquidity reward with additional incentive boost back to the liquidity and token holders.
                    </div>
                </div>
                <div className="border-[1px] w-full border-[#df39bb] py-5 px-1 rounded-[10px] flex flex-col items-center gap-5">
                    <img src="assets/svgs/aggregator.svg"></img>
                    <div className="text-[24px] font-bold">Trust by Ecosystems</div>
                    <div className="">
                        We are making connections with wallets, aggregators and other protocols to make the ecosystem better
                    </div>
                </div>
            </div>
            <div className="flex gap-10">
                <img src="assets/imgs/chain.png" className="w-[500px]"/>
                <div className="flex flex-col gap-5 justify-start">
                    <div className="text-[48px] font-bold text-left">Many chains, One Platform</div>
                    <div className="text-left">
                        The Superchain is a horizontally scalable network of chains that share security, a communication layer, and an open source development stack. A permissionless system for deploying new chains to a shared network opens the door to massive scale, novel applications, and a new revenue model that rewards application developers for the fees their chains generate, and rewards protocol developers for the public goods they create.
                    </div>
                </div>
            </div>
            <div className="flex gap-10">
                <div className="flex flex-col gap-5 justify-start">
                    <div className="text-[48px] font-bold text-left">That’s proudly a public good.</div>
                    <div className="text-left">
                    The Jewel is fully Open Source public good. Revenues generated by Jewel Mainnet, and eventually the Superchain, are used to fund the public goods which enable it.
                    This isn’t just talk—we walk the walk. Ensuring that impact to the Collective is rewarded by profit to the individual means that the Jewel will always stay winning. Summoning the Superchain, together.                        
                    </div>
                </div>
                <img src="assets/imgs/intro2.png" className="w-[500px]"/>
            </div>
            <div className="flex gap-10 items-center">
                <div>
                    <img src="assets/imgs/intro3.png" className=""/>
                </div>
                <div className="flex flex-col gap-5 justify-start">
                    <div className="text-[48px] font-bold text-left">JEWEL Tokenomic and Distribution</div>
                    <div className="text-left flex flex-col gap-2">
                        <div>Retroactive Public Goods Funding: 22%</div>
                        <div>Ecosystem Fund: 19%</div>
                        <div>Core contributors: 17%</div>
                        <div>Presale: 15%</div>
                        <div>Fluidity: 14%</div>
                        <div>Airdrop: 8%</div>
                        <div>Sugar: 5%</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-10 items-center">
                <div className="flex flex-col gap-5 justify-start">
                    <div className="text-[48px] font-bold text-left">Audit and for User Security</div>
                    <div className="text-left flex flex-col gap-4">
                        <div>
                            All Matmo Contracts have been audited by Professional Auditing Organization. Their final audit report can be found in the following Github Repositories. All addresses used are open source and verifiable. An audit reduces the risk of smart contract bugs, but there’s always a risk. Invest only what you can afford to lose.
                        </div>
                        <div className="rounded-full border-[1px] border-[#55c0ec] w-[100px] py-1 px-2 justify-center flex hover:bg-[#55c0ec] cursor-pointer">
                            Audit
                        </div>
                    </div>
                </div>
                <img src="assets/imgs/intro4.png" className="w-[500px]"/>
            </div>
            <div className="flex flex-col gap-10 items-center">
                <div className="text-[48px] font-bold">
                    Roadmap
                </div>
                <img src="assets/svgs/roadmap.svg" />
            </div>
        </div>
    )
}

export default Home;