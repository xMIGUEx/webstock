const proveedoresRoute = require('express').Router();
const {v4: uuidv4} = require('uuid');
const proveedoresModel = require('../models/proveedores.model');

proveedoresRoute.get('/', async(req, res) => {
    proveedoresModel.allProveedor()
    .then(data => {
        res.status(200).json({ data });
    })
    .catch(error => {
        res.status(500).json({ data });
    });
});

proveedoresRoute.get('/:id', async (req, res) => {
    const {id:IDProveedor} = req.params;
    proveedoresModel.getBy (IDProveedor)
    .then(data => {
        if(data.length > 0) {
            res.status(200).json ({ data: {...data[0] } } );
        }
        else {
            res.status(404).json ({ error: 'No se encuentra el proveedor'});
        }
    })
    .catch(error => {
        res.status(500).json({error});
});
});

proveedoresRoute.post('/', async (req, res) => {
    const IDProveedor = uuidv4 ();
    const {
        idproveedor,
        nombreproveedor,
        direccionproveedor,
        notelefono,
        correo,
        web,
        descripcionproveedor,
    } = req.body;
        proveedoresModel.addProveedor({
        idproveedor,
        nombreproveedor,
        direccionproveedor,
        notelefono,
        correo,
        web,
        descripcionproveedor,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                IDProveedor,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error})
    });
});

proveedoresRoute.put('/:id', async (req, res) => {
    const {id: IDProveedor} = req.params;
    const {
        idproveedor,
        nombreproveedor,
        direccionproveedor,
        notelefono,
        correo,
        web,
        descripcionproveedor,
    } = req.body;
        proveedoresModel.updateProveedor({
        idproveedor,
        nombreproveedor,
        direccionproveedor,
        notelefono,
        correo,
        web,
        descripcionproveedor,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                IDProveedor,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error})
    });
});

proveedoresRoute.delete('/:id', async (req, res) => {
    const {id: IDProveedor} = req.params;
    proveedoresModel.deleteTodo(IDProveedor)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more });
    })
    .catch(error => {
        res.status(500).json({ error });
    })
});

module.exports = proveedoresRoute;
