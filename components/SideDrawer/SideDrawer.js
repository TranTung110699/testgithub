import React from 'react';

import './SideDrawer.css';

import book from './images/book.png';
import category from './images/category.png';
import user from './images/user.png';
import logout from './images/logout.png';

const sideDrawer = props =>{
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses ='side-drawer open';
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li>                    
                    <a href={{}}><img href={{}} src={book} />Book Management</a>
                </li>
                <li>
                    <a href={{}}><img href={{}} src={category} />Category Management</a>
                </li>
                <li>
                    <a href={{}}><img href={{}} src={user} />User Management</a>
                </li>
                <li>
                    <a href={{}}>Logout<img href={{}} src={logout} /></a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;