import React, { useState } from 'react'
import {Avatar, Icon, List, ListItem, ListItemIcon, ListItemText, Collapse, Divider} from "@material-ui/core";
import useStyles from '../../../theme/useStyles';
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from '../../../context/store';

const MenuMobile = (props) => {
    const imagenDefault = 'https://avatars.githubusercontent.com/u/83479419?s=400&u=4ae4338f58e83f456ffbbae5aff88cffd52d6da2&v=4';

    const [ {sesionUsuario}, dispatch ] = useStateValue();

    const classes = useStyles();
    
    const [openCliente, setOpenCliente] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);

    const handleClickCliente = () => {
        setOpenCliente((prevOpen) => !prevOpen);
    };

    const handleClickAdmin = () => {
        setOpenAdmin((prevOpen) => !prevOpen);
    };

    const salirSesion = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        dispatch({
            type: "SALIR_SESION",
            nuevoUsuario: null,
            autenticado: false
        });

        props.history.push("/login");
    }

    return (
        <>
            <ListItem button onClick={handleClickCliente} className={classes.listItem}>
                <div className={classes.linkAppBarMobil}>
                    <Avatar
                    alt="Mi imagen"
                    className={classes.avatarPerfilAppBar}
                    src={sesionUsuario ? (sesionUsuario.usuario.imagen ? sesionUsuario.usuario.imagen : imagenDefault) : imagenDefault}
                    />
                    <ListItemText>{sesionUsuario ? (sesionUsuario.autenticado ? sesionUsuario.usuario.nombre + ' ' + sesionUsuario.usuario.apellido : "Iniciar sesion") : "Iniciar sesion"}</ListItemText>
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem> 
            <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobil} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Mi Perfil
                            </ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobil} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <listItem button onClick={salirSesion}>
                                <ListItemText>
                                    Cerrar Sesion
                                </ListItemText>
                            </listItem>
                        </Link>
                    </ListItem>
                    <Divider/>
                </List>
            </Collapse>
            {/* admin */}
            <ListItem button onClick={handleClickAdmin} className={classes.listItem}>
                <div className={classes.linkAppBarMobil}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>admin_panel_settings</Icon>
                    </ListItemIcon>
                    <ListItemText>Admin</ListItemText>
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem> 
            <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobil} to="/admin/usuarios">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Usuarios
                            </ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobil} to="/admin/listaProductos">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Productos
                            </ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.linkAppBarMobil} to="/admin/listaPedidos">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>
                                Pedidos
                            </ListItemText>
                        </Link>
                    </ListItem>
                    <Divider/>
                </List>
            </Collapse>
            {/* fin admin */}
            <ListItem button className={classes.listItem} onClick={props.clickHandler}>
                <Link className={classes.linkAppBarMobil} to="/carrito">
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>
                        MIS PEDIDOS
                    </ListItemText>
                </Link>
            </ListItem>
        </>
    );
};

export default withRouter(MenuMobile);
