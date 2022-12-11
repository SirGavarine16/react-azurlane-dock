import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { ShipgirlCardData } from "../constants";
import { getFavoritesInLocalStorage } from "../controllers";

const shipgirlsPerPage = 48;

const useFavoriteShipgirlsLogic = () => {
    const shipgirls = getFavoritesInLocalStorage();
    const [selectedPage, setSelectedPage] = useState(1);

    const totalPages = useMemo(() => {
        return Math.ceil(shipgirls.length / shipgirlsPerPage);
    }, [shipgirls]);

    const pageStart = useMemo(() => {
        return (selectedPage - 1) * shipgirlsPerPage;
    }, [selectedPage]);

    const pageEnd = useMemo(() => {
        return selectedPage * shipgirlsPerPage;
    }, [selectedPage]);

    const displayedShipgirls: ShipgirlCardData[] = useMemo(() => {
        return shipgirls.slice(pageStart, pageEnd);
    }, [shipgirls, pageStart, pageEnd]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [displayedShipgirls]);

    const onPaginationChange = (event: ChangeEvent<unknown>, page: number) => {
        setSelectedPage(page);
    }

    return {
        displayedShipgirls,
        totalPages,
        selectedPage,
        onPaginationChange,
    }
}

export default useFavoriteShipgirlsLogic;