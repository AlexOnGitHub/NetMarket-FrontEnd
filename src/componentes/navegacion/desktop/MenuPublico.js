import React from "react";
import useStyles from "../../../theme/useStyles";
import { Button, Icon } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom";

const MenuPublico = () => {
    const clases = useStyles();
    
    return (
        <>
            <Button color="inherit" className={clases.buttonIcon}>
                <Link to="/carrito" className={clases.linkAppBarDesktop}>
                    <Icon className={clases.mr}>shopping_cart</Icon>
                    MIS PEDIDOS
                </Link>
            </Button> 
            <Button color="inherit" className={clases.buttonIcon}>
                <Link to="/login" className={clases.linkAppBarDesktop}>
                    <Icon className={clases.mr}>person</Icon>
                    LOGIN
                </Link>
            </Button> 
        </>
    );
};

export default MenuPublico;