import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import { Banjoists } from "./Banjoists";
import { AllTabs } from "./AllTabs";
import { MyTabs } from "./MyTabs";
import { TabDetail } from "./TabDetail";

export default function ApplicationViews({ isLoggedIn, isAdmin }) {
    return (
        <main>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route
                        path="profiles"
                        element={!isLoggedIn ? <Navigate to="/login" /> :
                            isAdmin ? <Banjoists /> : <h1>Access Denied!</h1>}
                    />
                    <Route path="profiles/details/:profileId" element={!isLoggedIn ? <Navigate to="/login" /> :
                        isAdmin ? <UserDetails /> : <h1>Access Denied!</h1>}
                    />
                    <Route path="tab/delete/:tabId" element={isLoggedIn ? <TabDelete /> : <Navigate to="/login" />} />
                    <Route path="tab/add" element={isLoggedIn ? <TabAddForm /> : <Navigate to="/login" />} />
                    <Route path="tab/:tabId" element={isLoggedIn ? <TabDetail /> : <Navigate to="/login" />} />
                    <Route path="tab" element={isLoggedIn ? <AllTabs /> : <Navigate to="/login" />} />
                    <Route path="mytabs" element={isLoggedIn ? <MyTabs /> : <Navigate to="/login" />} />
                    <Route path="*" element={<p>Whoops, nothing here...</p>} />
                </Route>
            </Routes>
        </main>
    );
};