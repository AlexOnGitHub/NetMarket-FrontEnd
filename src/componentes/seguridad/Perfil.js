import React, { useEffect, useState } from 'react'
import {Container, Typography, Grid, Button, TextField, Divider, Avatar, Icon, TableContainer, TableHead, TableCell, TableBody, Table, TableRow} from "@material-ui/core";
import useStyles from '../../theme/useStyles';
import ImageUploader from 'react-images-upload';
import {useStateValue} from '../../context/store';
import { v4 as uuidv4 } from 'uuid';
import {actualizarUsuario} from '../../actions/UsuarioAction';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Perfil = (props) => {
    const imagenDefault = "https://avatars.githubusercontent.com/u/83479419?s=400&u=4ae4338f58e83f456ffbbae5aff88cffd52d6da2&v=4";

    const [{sesionUsuario}, dispatch] = useStateValue();

    const [usuario, setUsuario] = useState({
        id: '',
        nombre: '',
        apellido: '',
        imagen: '',
        password: '',
        file: '',
        imagenTemporal: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsuario(prev => ({
            ...prev,
            [name]:value
        }));
    };

    useEffect( () => {
        if(sesionUsuario){
            setUsuario(sesionUsuario.usuario);
        }
    }, [sesionUsuario]);

    const subirImagen = (imagenes) => {
        let foto = imagenes[0];
        let fotoUrl = "";

        try {
            fotoUrl = URL.createObjectURL(foto);
        } catch (e) {
            console.log(e);
        }

        setUsuario((prev) => ({
            ...prev,
            file: foto,
            imagenTemporal: fotoUrl
        }));
    };

    const guardarUsuario = (e) => {
        e.preventDefault();
        actualizarUsuario(sesionUsuario.usuario.id, usuario, dispatch)
        .then(response => {
            if(response.status === 200){
                window.localStorage.setItem('token' , response.data.token);
                props.history.push('/');
            }else{
                dispatch({
                    type: "OPEN_SNACKBAR",
                    openMensaje: {
                        open: true,
                        mensaje: "Error al actualizar el perfil de usuario."
                    }
                })
            }
        });
    };

    const verDetalles = () => {
        const id = "4eefa1c8-8a64-4a5a-837c-104c3ab4a63f";
        props.history.push("/ordenCompra/" +id);
    }

    const classes = useStyles();
    const keyImage = uuidv4();
    return (
        <Container className={classes.containermt}>
            <Grid container spacing={2}>
                <Grid item md={3} xs={12}>
                    <Typography variant='h5' className={classes.text_title}>
                        PERFIL DE USUARIO
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                        <ImageUploader 
                        key={keyImage}
                        onChange={subirImagen}
                        withIcon={false}
                        buttonStyles={{ borderRadius: "50", padding: 10, margin: 0, position: "absolute", bottom: 15, left: 15}}
                        className={classes.imageUploader}
                        buttonText={<Icon>add_a_photo</Icon>}
                        label={<Avatar alt="Mi perfil" className={classes.avatarPerfil} 
                        src={usuario.imagenTemporal ? usuario.imagenTemporal : (usuario.imagen ? usuario.imagen : imagenDefault)}
                        />}
                        imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
                        maxFileSize={5242880}/>
                        <TextField
                        label="Nombre"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        name='nombre'
                        value={usuario.nombre}
                        onChange={handleChange}
                        />
                        <TextField
                        label="Apellidos"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        name='apellido'
                        value={usuario.apellido}
                        onChange={handleChange}
                        />
                        <TextField
                        label="Correo Electronico"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        name='email'
                        value={usuario.email}
                        onChange={handleChange}
                        />
                        <Divider className={classes.divider}/>
                        <TextField
                        label="Password"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        />
                        <TextField
                        label="Confirmar Password"
                        variant='outlined'
                        fullWidth
                        className={classes.gridmb}
                        />
                        <Button variant='contained' color='primary' onClick={guardarUsuario}>
                            ACTUALIZAR
                        </Button>
                    </form>
                </Grid>
                <Grid item md={9} xs={12}>
                    <Typography variant='h5' className={classes.text_title}>
                        MIS PEDIDOS
                    </Typography>
                    <TableContainer className={classes.form}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>FECHA</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>PAGADO</TableCell>
                                    <TableCell>ENTREGADO</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>4eefa1c8-8a64-4a5a-837c-104c3ab4a63f</TableCell>
                                    <TableCell>2024-01-07</TableCell>
                                    <TableCell>90.00</TableCell>
                                    <TableCell>2024-10-07</TableCell>
                                    <TableCell>
                                        {/* <Icon className={classes.iconNotDelivered}>
                                            clear
                                        </Icon> */}
                                        <Icon className={classes.iconDelivered}>
                                            check
                                        </Icon>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant='contained' onClick={verDetalles}>
                                            DETALLES
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default withRouter(Perfil);
