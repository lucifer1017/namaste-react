import { useState, useEffect } from "react";
import { INDRES_API } from './constants'
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menuData = await fetch(INDRES_API + resId);
        const response = await menuData.json();

        setResInfo(response);


    }
    return resInfo;
}
export default useRestaurantMenu;