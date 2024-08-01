import React, { useState } from 'react'
import {Button, Avatar, Icon, MenuItem, ListItemIcon, ListItemText, Menu} from "@material-ui/core";
import useStyles from '../../../theme/useStyles';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MenuAdmin = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }

    return (
        <>
                <Button color='inherit' className={classes.buttonIcon} onClick={handleClick}>
                    <div className={classes.linkAppBarDesktop}>
                        <Icon className={classes.mr}>admin_panel_settings</Icon>
                            ADMIN
                        <Icon>keyboard_arrow_down</Icon>
                    </div>
                </Button>
                <Menu
                elevation={2}
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClosed={handleClose}
                >
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobil} to="/admin/usuarios">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>Usuarios</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobil} to="/admin/listaProductos">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobil} to="/admin/listaPedidos">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>Pedidos</ListItemText>
                        </Link>
                    </MenuItem>
                </Menu>      
        </>
    );
};

export default MenuAdmin;
