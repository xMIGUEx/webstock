const proveedoresRoute = require('express').Router();
const proveedoresModel = require('../models/proveedores.model');

proveedoresRoute.get('/', async(req, res) => {
    proveedoresModel.allProveedor()
    .then(data => {
        res.status(200).json({ data });
    })
    .catch(error => {
        res.status(500).json({ error });
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
    const {
        IDProveedor,
        NombreProveedor,
        DireccionProveedor,
        NoTelefono,
        Correo,
        Web,
        DescripcionProveedor,
    } = req.body;
    proveedoresModel.addProveedor({
        IDProveedor,
        NombreProveedor,
        DireccionProveedor,
        NoTelefono,
        Correo,
        Web,
        DescripcionProveedor,
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


proveedoresRoute.put('/', async (req, res) => {
    const {
        IDProveedor,
        NombreProveedor,
        DireccionProveedor,
        NoTelefono,
        Correo,
        Web,
        DescripcionProveedor,
    } = req.body;
    proveedoresModel.updateProveedor({
        IDProveedor,
        NombreProveedor,
        DireccionProveedor,
        NoTelefono,
        Correo,
        Web,
        DescripcionProveedor,
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


proveedoresRoute.delete('/', async (req, res) => {
    const { IDProveedor } = req.body;
    proveedoresModel.deleteProveedor(IDProveedor)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more });
    })
    .catch(error => {
        res.status(500).json({ error });
    })
});

module.exports = proveedoresRoute;
