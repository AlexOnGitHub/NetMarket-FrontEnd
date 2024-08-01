import React from 'react'
import {Container, Grid, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Typography, Icon, Button} from "@material-ui/core";
import useStyles from '../../../theme/useStyles';

const ListaPedidos = (props) => {
    const classes = useStyles();

    const verDetalles = () => {
        const id = "db61de6c-fa5a-4033-beab-8d294b7209cf";
        props.history.push("/ordenCompra/" + id);
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant='h4' className={classes.text_title}>
                PEDIDOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>FECHA</TableCell>
                            <TableCell>TOTAL</TableCell>
                            <TableCell>PAGADO</TableCell>
                            <TableCell>ENTREGADO</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>465832c3-d53d-4993-b4ec-8594ac7dedbe</TableCell>
                            <TableCell>Alex Garcia</TableCell>
                            <TableCell>2024-05-02</TableCell>
                            <TableCell>$60.00</TableCell>
                            <TableCell>2024-05-02</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' color='inherit' onClick={verDetalles}>
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>db61de6c-fa5a-4033-beab-8d294b7209cf</TableCell>
                            <TableCell>Lupita Villarreal</TableCell>
                            <TableCell>2024-05-01</TableCell>
                            <TableCell>$40.00</TableCell>
                            <TableCell>2024-05-01</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant='contained' color='inherit' onClick={verDetalles}>
                                    DETALLES
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ListaPedidos;
