import React, {Fragment} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import './Layout.css';

const Layout = props => (
    <Fragment>
        <Toolbar />
        <header>Header will be here</header>
        <main className="Layout-Content">
            {props.children}
        </main>
    </Fragment>
);

export default Layout;
