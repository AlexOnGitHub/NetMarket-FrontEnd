import React from "react";
import useStyles from "../../../theme/useStyles";
import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MenuMobilePublico = (props) => {
    const clases = useStyles();

    return (
        <>
            <ListItem button onClick={props.clickHandler} className={clases.listItem}>
                <Link to="/login" className={clases.linkAppBarMobil}>
                        <ListItemIcon className={clases.listItemIcon}>
                            <Icon>person</Icon>
                        </ListItemIcon>           
                        <ListItemText>Login</ListItemText>                             
                </Link>
            </ListItem> 
            <ListItem button onClick={props.clickHandler} className={clases.listItem}>
                <Link to="/carrito" className={clases.linkAppBarMobil}>
                        <ListItemIcon className={clases.listItemIcon}>
                            <Icon>shopping_cart</Icon>
                        </ListItemIcon>           
                        <ListItemText>Mis Pedidos</ListItemText>                             
                </Link>
            </ListItem> 
        </>
    );
};

export default MenuMobilePublico;