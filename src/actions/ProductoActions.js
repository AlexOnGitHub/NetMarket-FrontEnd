import HttpCliente from '../services/HttpCliente';
import axios from 'axios';
import {uploadImage} from '../firebase';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const actualizarProducto = async (id, producto) => {
    if(producto.file){
        const urlImage = await uploadImage(producto.file);
        producto.imagen = urlImage;
    }
   
    return new Promise((resolve, reject) => {
        HttpCliente.put(`/api/producto/${id}`, producto)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        });
    });
};

export const registrarProducto = async (producto) => {
    
    if(producto.file){
        const urlImage = await uploadImage(producto.file);
        producto.imagen = urlImage;
    }

    return new Promise((resolve, reject) => {
        HttpCliente.post("/api/producto", producto)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            resolve(error);
        });
    });
};

export const getProductos = (request) => {
    return new Promise( (resolve, reject) => {
        instancia.get(`/api/Producto?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`)
        .then(response => {
            resolve(response);
        });
    })
};

export const getProducto = (id) => {
    return new Promise((resolve, reject) => {
        instancia.get(`/api/producto/${id}`)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        });
    });
};