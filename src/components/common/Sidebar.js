import React, { useState } from 'react';
import {
    FaUserAlt,
    FaCommentAlt,
    FaLock,
    FaHome,
    FaUnlock,
    FaShoppingBag,
    FaShoppingCart
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

"*": {
    margin: 0,
    padding: 0,
    textDecoration: "none",
},

    dashboardContainer: {
        display: 'flex',
      
    },

   
    sideBar: {
        background: '#252525e2',
        color: '#fff',
        height: '100vh',
       
        transition: 'all 0.5s',
        padding: 15,
        textAlign: 'center',
     
    },
    menuBtn: {
        cursor: 'pointer',
        display: 'block',
    },

    mainContent: {
        flexGrow: 1,
        
    },

    main1:{
        height: '100vh',
        overflowY : 'scroll',
        padding: 20,
    },

    topSection: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px 5px',
    },
    logo: {
        fontSize: 30,
    },

    link: {
        display: 'flex',
        color: '#fff',
        padding: '10px 10px',
        gap: 15,
        transition: 'all 0.5s',
        '&:hover': {
            background: 'rgba(209, 31, 31, 0.851)',
            color: '#f6f6f6',
            transition: 'all 0.5s',
        },
    },
    active: {
        background: 'rgba(59, 132, 178, 0.868)',
        color: '#ff0606d5',
    },
    icon: {
        fontSize: 25,
    },
    linkText: {
        fontSize: 25,
    },
    logout: {
        position: 'absolute',
        bottom: 0,
    },
    '@media only screen and (max-width: 768px)': {
        sidebar: {
            minWidth: 50,
        },
        menuBtn: {
            display: 'block',
            cursor: 'pointer',
        },
        linkText: {
            display: 'block',
            fontSize: 0,
        },
        logo: {
            display: 'block',
            fontSize: 0,
        },
        active: {
            display: 'block',
        },
    },
}));


export const Sidebar = ({ children }) => {

    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/Product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/AddCart/:id",
            name: "Cart",
            icon: <FaShoppingCart />
        },
        {
            path: "/About",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/Contact",
            name: "Contact",
            icon: <FaCommentAlt />
        },
        {
            path: "/Login",
            name: "Login",
            icon: <FaUnlock />
        },
        {
            path: "/Logout",
            name: "Logout",
            icon: <FaLock />
        }
    ]
    return (
        <div className={classes.dashboardContainer}>
            <div  className={classes.sideBar} >
                <div className={classes.top_section}>
                    <div style={{ marginLeft: isOpen ? "4px" : "-5px" }} className={classes.menuBtn}>
                        <img src="/image/Capermint.png" alt="Logo" width={50} onClick={toggle} />
                        <h1 style={{ display: isOpen ? "block" : "none" }} className={classes.logo}>Capermint</h1>
                    </div>

                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={classes.link} activeclassName={classes.active}>
                            <div className={classes.icon}>{item.icon}</div>
                            <div style={{ display: isOpen ? "flex" : "none" }} className={classes.linkText}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div className={classes.mainContent}>
                <main className={classes.main1}>{children}</main>
            </div>
        </div>
    )
}
