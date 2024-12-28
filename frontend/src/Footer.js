import "bootstrap/dist/css/bootstrap.css";

function Footer() {
    return (
        <div>
            <footer className="text-body-secondary py-5">
                <div className="container">
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0, paddingBottom: 0}}>
                        
                        <div style={{display: 'flex', alignItems: 'center', padding: '16px'}}>
                            <p style={{marginRight: '20px'}}>Ames, IA 50011</p>
                            <p>Phone: 123-456-7890</p>
                        </div>
                        
                        
                        <div style={{padding: '16px', textAlign: 'right'}}>
                            <p className="mb-1">
                                <a href="mailto: fakeemail@gmail.com" style={{color: 'black'}}>Contact Me</a>
                                <a href="#" style={{marginLeft: '2em', color: 'black'}}>Back to top</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;