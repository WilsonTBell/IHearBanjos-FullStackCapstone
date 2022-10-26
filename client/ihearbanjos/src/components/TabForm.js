import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addTab } from "../modules/tabManager";

export const TabForm = () => {
    const navigate = useNavigate();
    const [tab, setTabName] = useState({
        Id: 0,
        Name: ""
    });

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        return addTab(tab)
            .then(() => {
                navigate("/tabs")
            })
    }


    return <>


        <Form className="tabForm">
            <FormGroup>
                <Label for="Name">Tab</Label>
                <Input
                    id="tab"
                    name="tab"
                    type="text"
                    value={tab.Name}
                    onChange={
                        (evt) => {
                            const copy = { ...tab }
                            copy.Name = evt.target.value
                            setTabName(copy)
                        }
                    }
                />
            </FormGroup>
            <FormGroup>
                <Button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                    className="btn btn-primary">Save</Button>
            </FormGroup>
        </Form>
        <Button onClick={() => navigate("/tab")}>Cancel</Button>


    </>

}