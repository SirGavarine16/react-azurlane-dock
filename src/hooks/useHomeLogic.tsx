import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import useForm from "./useForm";
import { UIContext } from "../contexts";
import { ShipgirlCardData } from "../constants";
import { getAllShipgirls } from "../controllers";
import { filterShipgirlsByHullType, filterShipgirlsByNationality, filterShipgirlsByRarity } from "../utils";

const shipgirlsPerPage = 96;

const useHomeLogic = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { startLoading, finishLoading } = useContext(UIContext);

    const [shipgirls, setShipgirls] = useState<ShipgirlCardData[]>([]);

    const { formData, setFormField } = useForm({
        nationality: searchParams.get('n') ?? 'all',
        rarity: searchParams.get('r') ?? 'all',
        hullType: searchParams.get('h') ?? 'all',
        search: searchParams.get('s') ?? '',
    });
    const { nationality, rarity, hullType, search } = formData;

    const selectedPage = useMemo(() => {
        return parseInt(searchParams.get('p') ?? '1');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams.get('p')]);

    const pageStart = useMemo(() => {
        return (selectedPage - 1) * shipgirlsPerPage;
    }, [selectedPage]);

    const pageEnd = useMemo(() => {
        return selectedPage * shipgirlsPerPage;
    }, [selectedPage]);

    const filteredShipgirls: ShipgirlCardData[] = useMemo(() => {
        if (shipgirls.length === 0) {
            return [];
        }
        let _displayedShipgirls = shipgirls;
        _displayedShipgirls = filterShipgirlsByNationality(nationality, shipgirls);
        _displayedShipgirls = filterShipgirlsByRarity(rarity, _displayedShipgirls);
        _displayedShipgirls = filterShipgirlsByHullType(hullType, _displayedShipgirls);
        if (search !== '')
            _displayedShipgirls = _displayedShipgirls.filter((shipgirl) => shipgirl.name.toLowerCase().includes(search.toLowerCase()));
        return _displayedShipgirls;
    }, [shipgirls, nationality, rarity, hullType, search]);

    const displayedShipgirls: ShipgirlCardData[] = useMemo(() => {
        return filteredShipgirls.slice(pageStart, pageEnd);
    }, [filteredShipgirls, pageStart, pageEnd]);

    const totalPages: number = useMemo(() => {
        if (filteredShipgirls.length === 0) {
            return 0;
        }
        return Math.ceil(filteredShipgirls.length / shipgirlsPerPage);
    }, [filteredShipgirls]);

    useEffect(() => {
        const getShipgirls = async () => {
            startLoading();
            const data = await getAllShipgirls();
            setShipgirls(data.shipgirls);
            finishLoading();
        }

        getShipgirls();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [displayedShipgirls]);

    useEffect(() => {
        searchParams.delete('p');
        setSearchParams(searchParams);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredShipgirls]);

    useEffect(() => {
        if (nationality !== 'all') {
            searchParams.set('n', nationality);
        } else {
            searchParams.delete('n');
        }
        setSearchParams(searchParams);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nationality]);

    useEffect(() => {
        if (rarity !== 'all') {
            searchParams.set('r', rarity);
        } else {
            searchParams.delete('r')
        }
        setSearchParams(searchParams);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rarity]);

    useEffect(() => {
        if (hullType !== 'all') {
            searchParams.set('h', hullType);
        } else {
            searchParams.delete('h');
        }
        setSearchParams(searchParams);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hullType]);

    useEffect(() => {
        if (search !== '') {
            searchParams.set('s', search);
        } else {
            searchParams.delete('s');
        }
        setSearchParams(searchParams);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const onPaginationChange = (event: ChangeEvent<unknown>, page: number) => {
        searchParams.set('p', page.toString());
        setSearchParams(searchParams);
    }

    return {
        formData,
        setFormField,
        displayedShipgirls,
        totalPages,
        selectedPage,
        onPaginationChange,
    }
}

export default useHomeLogic;