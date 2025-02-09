import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Homepage({ viewer, setViewer, isExpanded, setIsExpanded }) {
    return (
        <div> {/* Removed height */}
            <Navbar viewer={viewer} setViewer={setViewer} />
            <p>This is the About</p>
            <Footer />
        </div>
    );
}
