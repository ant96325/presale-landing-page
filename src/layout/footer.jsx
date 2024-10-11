import { pageName } from "../datas/commons"
import {
    Instagram,
    Telegram, 
    X
} from '@mui/icons-material';

const Footer = () => {
    return (
        <div className="flex flex-col gap-10">
            <div id="divider" className="h-[1px] bg-neutral-800" />
            <div id="content" className="flex justify-between">
                <div id="logo">
                    <img src="assets/imgs/logo.png" className="h-[30px]"/>
                </div>
                <div id="copyright">
                    Copyright 2024 {pageName}. All Rights Reserved.
                </div>
                <div id="contact-link" className="flex gap-4">
                    <Telegram className="text-primary-color"/>
                    <X className="text-primary-color"/>
                    <Instagram className="text-primary-color"/>
                </div>
            </div>
        </div>
    )
}

export default Footer