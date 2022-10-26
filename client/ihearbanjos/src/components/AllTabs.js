import React, { useEffect, useState } from "react";
import { getAllTabs } from "../modules/tabManager";
import { TabList } from "./TabList";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export const AllTabs = () => {
    const [tabs, setTabs] = useState([])
    const navigate = useNavigate()

    const getTabs = () => {
        getAllTabs().then(tabs => setTabs(tabs))
    }

    useEffect(() => {
        getTabs();
    }, []);

    return (
        <div>
            <Button
                onClick={() => navigate("add")}
                className="btn btn-primary">
                New Tab
            </Button>
            <TabList tabs={tabs} />
        </div>
    )
}