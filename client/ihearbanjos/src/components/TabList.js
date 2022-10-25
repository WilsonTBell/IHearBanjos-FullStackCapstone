import { Tab } from "./Tab";

export const TabList = ({ tabs }) => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                {tabs?.map((tab) => (
                    <Tab tab={tab} key={tab?.id} user={tab.banjoist} />
                ))}
            </div>
        </div>
    )
}