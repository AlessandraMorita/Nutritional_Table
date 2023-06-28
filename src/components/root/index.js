import React from 'react';
import { Outlet } from 'react-router-dom';
import Navegation from '../navegation/Navegation';
// import Outlet

const Root = () => {
    return (
        <div>
            <Navegation />
            <Outlet />
        </div>
    );
};

export default Root;