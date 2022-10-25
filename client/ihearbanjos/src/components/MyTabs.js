import React, { useEffect, useState } from "react";
import { getMyTabs } from "../modules/tabManager";
import { TabList } from "./TabList";

export const MyTabs = () => {
    const [tabs, setTabs] = useState();

    useEffect(() => {
        getMyTabs().then((tabs) => {
            setTabs(tabs);
        })
    }, []);

    return <TabList tabs={tabs} />;
}