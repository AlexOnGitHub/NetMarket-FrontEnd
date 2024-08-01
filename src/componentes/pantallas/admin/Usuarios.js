import React, { useEffect, useState } from 'react'
import {Container, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Typography, Icon, Button} from "@material-ui/core";
import useStyles from '../../../theme/useStyles';
import {getUsuarios} from '../../../actions/UsuarioAction';
import { Pagination } from '@material-ui/lab';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Usuarios = (props) => {
    const [requestUsuarios, setRequestUsuarios] = useState({
        pageIndex: 1,
        pageSize: 20,
        search: ""
    });

    const [paginadorUsuarios, setPaginadorUsuarios] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    const handleChange = (event, value) => {
        setRequestUsuarios((prev) => ({
            ...prev,
            pageIndex: value
        }));
    };

    useEffect(() => {
        const getListaUsuarios = async () => {
            const response = await getUsuarios(requestUsuarios);
            setPaginadorUsuarios(response.data);
        };
        getListaUsuarios();
    },[requestUsuarios])

    const editaUsuario = (id) => {
        props.history.push("/admin/usuario/" +id);
    };

    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                USUARIOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>USERNAME</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                paginadorUsuarios.data && paginadorUsuarios.data.length > 0 ? (
                                    paginadorUsuarios.data.map((usuario) => (
                                        <TableRow key={usuario.id}>
                                            <TableCell>{usuario.id}</TableCell>
                                            <TableCell>{usuario.nombre + ' ' + usuario.apellido}</TableCell>
                                            <TableCell>{usuario.email}</TableCell>
                                            <TableCell>{usuario.userName}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => editaUsuario(usuario.id)}
                                                >
                                                    <Icon>edit</Icon>
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => editaUsuario(usuario.id)}
                                                >
                                                    <Icon>delete</Icon>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center">
                                            No se encontraron usuarios.
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                         
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={paginadorUsuarios.pageCount} page={paginadorUsuarios.pageIndex} onChange={handleChange} />
        </Container>
    );
};

export default withRouter(Usuarios);
