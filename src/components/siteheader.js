// Siteheader.js is
import React from 'react';
import Brand from './Brand';
import PrimaryNavigation from './PrimaryNavigation';

function SiteHeader() {
    return (
        <header>
            <Brand/>
            <PrimaryNavigation/>
        </header>
    )
}

export default SiteHeader;