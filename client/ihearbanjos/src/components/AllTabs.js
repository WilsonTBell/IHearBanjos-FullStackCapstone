import React, { useEffect, useState } from "react";
import getAllTabs from "../modules/tabManager";
import { TabList } from "./TabList";

export const AllTabs = () => {
    const [tabs, setTabs] = useState([])

    const getTabs = () => {
        getAllTabs().then(tabs => setTabs(tabs))
    }

    useEffect(() => {
        getTabs();
    }, []);

    return <TabList tabs={tabs} />
}