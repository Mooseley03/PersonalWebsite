import Navbar from "./Navbar";
import Footer from "./Footer";
import React, {useState} from "react";

export default function Skills({viewer, setViewer, isExpanded, setIsExpanded}) {
    
    return (
        <div>
            <Navbar viewer={viewer} setViewer={setViewer} />
            <p>This is the skills page</p>
            <Footer />
        </div>
    );
}