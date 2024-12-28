import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from "react";

export default function Navbar({viewer, setViewer}) {

    const updateHooks = (number) => {
        setViewer(number);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{marginLeft:'auto'}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{display:'flex', justifyContent:'flex-end', marginTop:.5 + 'em', marginRight:1 + 'em'}}>
                                <button className={`nav-link ${viewer === 0 ? 'active' : ''}`} onClick={() => updateHooks(0)} aria-current="page">About</button>
                            </li>
                            <li className="nav-item" style={{display:'flex', justifyContent:'flex-end', marginTop:.5 + 'em', marginRight:1 + 'em'}}>
                                <button className={`nav-link ${viewer === 1 ? 'active' : ''}`} onClick={() => updateHooks(1)} aria-current="page">Projects</button>
                            </li>
                            <li className="nav-item" style={{display:'flex', justifyContent:'flex-end', marginTop:.5 + 'em', marginRight:1 + 'em'}}>
                                <button className={`nav-link ${viewer === 2 ? 'active' : ''}`} onClick={() => updateHooks(2)} aria-current="page">Skills</button>
                            </li>
                            <li className="nav-item" style={{display:'flex', justifyContent:'flex-end', marginTop:.5 + 'em', marginRight:1 + 'em'}}>
                                <button className={`nav-link ${viewer === 3 ? 'active' : ''}`} onClick={() => updateHooks(3)} aria-current="page">Resume</button>
                            </li>
                            <li className="nav-item" style={{display:'flex', justifyContent:'flex-end', marginTop:.5 + 'em', marginRight:1 + 'em'}}>
                                <button className={`nav-link ${viewer === 4 ? 'active' : ''}`} onClick={() => updateHooks(4)} aria-current="page">Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}