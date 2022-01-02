import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function HomeMenu() {
    const [isHandheld, setIsHandheld] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // change to tablet/mobile menu at 768px or less
        const changeMode = () =>
            window.innerWidth <= 768 ? setIsHandheld(true) : setIsHandheld(false);
            window.addEventListener("resize", changeMode);
    });

    return <header>{isHandheld ? <MobileMenu /> : <DesktopMenu />}</header>;
}

export default HomeMenu;