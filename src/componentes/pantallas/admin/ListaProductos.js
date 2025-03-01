import React, { useEffect, useState } from 'react'
import {Container, Grid, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Typography, Icon, Button} from "@material-ui/core";
import useStyles from '../../../theme/useStyles';
import {getProductos} from '../../../actions/ProductoActions';
import { Pagination } from '@material-ui/lab';

const ListaProductos = (props) => {
    const [requestProductos, setRequestProductos] = useState({
        pageIndex: 1,
        pageSize: 20,
        search: ''
    });

    const [paginadorProductos, setPaginadorProductos] = useState({
        count: 0,
        pageIndex: 0,
        pageSize: 0,
        pageCount: 0,
        data: []
    });

    const handleChange = (event, value) => {
        setRequestProductos( (prev) => ({
            ...prev,
            pageIndex: value
        }));
    };

    useEffect( () => {
        const getListaProductos = async () => {
            const response = await getProductos(requestProductos);
            setPaginadorProductos(response.data);
        };
        getListaProductos();
    }, [requestProductos]);

    const classes = useStyles();

    const agregarProducto = () => {
        props.history.push("/admin/agregarProducto");
    };

    const editaProducto = (id) => {
        props.history.push("/admin/editarProducto/" + id);
    };

    return (
        <Container className={classes.containermt}>
            <Grid container>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography variant='h4' className={classes.text_title}>
                        PRODUCTOS
                    </Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <Button variant='contained' color='inherit' className={classes.buttonAgregar} onClick={agregarProducto}>
                        <Icon>add</Icon>
                        AGREGAR PRODUCTO
                    </Button>
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NOMBRE</TableCell>
                            <TableCell>PRECIO</TableCell>
                            <TableCell>MARCA</TableCell>
                            <TableCell>CATEGORIA</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginadorProductos.data.map((producto) => (
                            <TableRow key={producto.id}>
                                <TableCell>{producto.id}</TableCell>
                                <TableCell>{producto.nombre}</TableCell>
                                <TableCell>{producto.precio}</TableCell>
                                <TableCell>{producto.marcaNombre}</TableCell>
                                <TableCell>{producto.categoriaNombre}</TableCell>
                                <TableCell>
                                    <Button variant='contained' color='primary' onClick={() => editaProducto(producto.id)}>
                                        <Icon>edit</Icon>
                                    </Button>
                                    <Button variant='contained' color='secondary'>
                                        <Icon>delete</Icon>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={paginadorProductos.pageCount} page={paginadorProductos.pageIndex} onChange={handleChange}/>
        </Container>
    );
};

export default ListaProductos;
