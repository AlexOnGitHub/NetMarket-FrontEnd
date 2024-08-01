import React, { useState } from 'react'
import {Button, Avatar, Icon, MenuItem, ListItemIcon, ListItemText, Menu, ListItem} from "@material-ui/core";
import useStyles from '../../../theme/useStyles';
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from '../../../context/store';

const MenuCliente = (props) => {
    const imagenDefault = 'https://avatars.githubusercontent.com/u/83479419?s=400&u=4ae4338f58e83f456ffbbae5aff88cffd52d6da2&v=4';

    const [ {sesionUsuario}, dispatch ] = useStateValue();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () =>{
        setAnchorEl(null);
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

    const usuarioAutenticado = sesionUsuario && sesionUsuario.usuario && sesionUsuario.autenticado;
    const classes = useStyles();
    return (
        <>
            <Button color='inherit' className={classes.buttonIcon}>
                <Link className={classes.linkAppBarDesktop} to="/carrito">
                    <Icon className={classes.mr}>shopping_cart</Icon>
                    MIS PEDIDOS
                </Link>
            </Button>
            <div>
                <Button color='inherit' className={classes.buttonIcon} onClick={handleClick}>
                    <div className={classes.linkAppBarDesktop}>
                        <Avatar 
                        alt='Mi imagen'
                        className={classes.avatarPerfilAppBar}
                        src={usuarioAutenticado ? (sesionUsuario.usuario.imagen || imagenDefault) : imagenDefault}
                        />
                        {usuarioAutenticado 
                        ? `${sesionUsuario.usuario.nombre} ${sesionUsuario.usuario.apellido}`
                        : "Iniciar sesion"}
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
                        <Link className={classes.linkAppBarMobil} to="/perfil">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>Mi Perfil</ListItemText>
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.listItem} onClick={handleClose}>
                        <Link className={classes.linkAppBarMobil} to="/">
                            <ListItemIcon className={classes.ListItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItem button onClick={salirSesion}>
                                <ListItemText>Cerrar Sesion</ListItemText>
                            </ListItem>
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    );
};

export default withRouter(MenuCliente);
