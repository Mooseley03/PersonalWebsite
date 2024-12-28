import Navbar from "./Navbar";
import Footer from "./Footer";
import React, {useState} from "react";

export default function Resume({viewer, setViewer, isExpanded, setIsExpanded}) {

    return (
        <div>
            <Navbar viewer={viewer} setViewer={setViewer} />
            <p>This is the Resume page</p>
            <Footer />
        </div>
    );
}