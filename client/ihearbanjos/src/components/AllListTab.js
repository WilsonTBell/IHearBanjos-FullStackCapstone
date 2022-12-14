import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";

export const AllListTab = ({ tab }) => {
    return (
        <Card>
            <p className="text-left px-2">Posted by: {tab.banjoist.name}</p>
            <CardBody>
                <p>
                    <strong>Tab: <Link to={`/tab/${tab.id}`}>{tab.title.toUpperCase()}</Link></strong>
                </p>
                <p>Type: {tab.type.name}</p>
                <p>Difficulty: {tab.difficulty.name}</p>
                <Button>Add to Favorites</Button>
            </CardBody>
        </Card>
    )
}