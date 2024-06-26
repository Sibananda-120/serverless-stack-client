import React from "react";
import { Routes, Route } from 'react-router-dom';
import NewNote from "./containers/NewNote";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Notes from "./containers/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <UnauthenticatedRoute exact path="/login" element={<Login />} />
            <UnauthenticatedRoute exact path="/signup" element={<Signup />} />
            <AuthenticatedRoute exact path="/notes/new" element={<NewNote />} />
            <AuthenticatedRoute exact path="/notes/:id" element={<Notes />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
