import {useEffect, useState} from "react";

export const useDevice = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize' , handleResize)

        return () => {
            window.removeEventListener('resize' ,handleResize)
        }

    }, []);

    const isMobile = width <= 580;
    const isTablet = width <= 1024;
    const isDesktop = width > 1024;
    console.log(window.innerWidth   )

    return {isMobile, isTablet, isDesktop}

}