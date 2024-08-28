import React, {useEffect} from 'react'
import '../../assets/styles/general.css'
import './Searchbarr.css'
import {setupSidebarToggle} from '../../utils/main';
import search from '../../assets/image-sidebar&tecProfile/search.svg'
import notification from '../../assets/image-sidebar&tecProfile/notification.svg'
import photo2 from '../../assets/image-sidebar&tecProfile/photo2.svg'

function Searchbarr() {
    useEffect(() => {
        setupSidebarToggle();
    }, []);
    return (
        
            <div className="d-flex flex-column">
                <nav className="search-nav d-flex justify-content-between align-content-center">
                    <div className="search">
                        <div>
                            <img src={search} alt="Search" />
                        </div>
                        <h6 className="fw-normal fs-14px">Search</h6>
                    </div>
                    <div className="notify">
                        <div className="me-2">
                            <img src={notification} alt="notification"/>
                        </div>
                        <h5>Ahmed</h5>
                        <div>
                            <img src={photo2} alt="photo2" />
                        </div>
                    </div>
                </nav>
            </div>
       

    )
}

export default Searchbarr