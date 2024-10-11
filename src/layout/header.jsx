import { menus } from "../datas/header";
const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div id="logo" className=" cursor-pointer">
                <img src="/assets/imgs/logo.png" className="h-[50px]"/>
            </div>
            <div id="leftbars" className="flex justify-between gap-10 items-center">
                <div id="menus" className="flex gap-5">
                    {menus.map((menu, idx) => (
                        <div key={`header_menu_${idx+1}`} className="cursor-pointer hover:text-[#55c0ec]">{menu}</div>
                    ))}      
                </div>
                <div id="buttons">
                    <div className="text-[16px] rounded-full bg-primary-color py-2 px-3 cursor-pointer hover:bg-[#29dcef]">Connect Wallet</div>
                </div>
            </div>
        </div>
    )
}

export default Header;