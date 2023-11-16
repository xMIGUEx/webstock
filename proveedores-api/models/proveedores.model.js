const execQuery = require('./../helpers/execQuery');
const TYPES = require('tedious').TYPES;

const addProveedor = (proveedorData) => {
    const {
        NombreProveedor,
        DireccionProveedor,
        NoTelefono,
        Correo,
        Web,
        DescripcionProveedor,
    } = proveedorData;
    const query = `
    INSERT INTO [dbo].[Proveedores] (NombreProveedor, DireccionProveedor, NoTelefono, Correo, Web, DescripcionProveedor)
    VALUES (@nombreproveedor, @direccionproveedor, @notelefono, @correo, @web, @descripcionproveedor)
    `;
    const parameters = [
        {name: 'NombreProveedor', type: TYPES.VarChar, value: NombreProveedor},
        {name: 'DireccionProveedor', type: TYPES.VarChar, value: DireccionProveedor},
        {name: 'NoTelefono', type: TYPES.VarChar, value: NoTelefono},
        {name: 'Correo', type: TYPES.VarChar, value: Correo},
        {name: 'Web', type: TYPES.VarChar, value: Web},
        {name: 'DescripcionProveedor', type: TYPES.VarChar, value: DescripcionProveedor},
    ];
    return execQuery.execWriteCommand(query, parameters)
};



const updateProveedor = (proveedorData) => {
    const {
        IDProveedor,
        NombreProveedor,
        DireccionProveedor,
        NoTelefono,
        Correo,
        Web,
        DescripcionProveedor,
    } = proveedorData;
    const query = `
    UPDATE [dbo].[Proveedores]
    SET NombreProveedor=@nombreproveedor, DireccionProveedor=@direccionproveedor, NoTelefono=@notelefono, Correo=@correo, Web=@web, DescripcionProveedor=@descripcionproveedor
    WHERE IDProveedor = @IDproveedor
    `;
    const parameters = [
        {name: 'IDProveedor', type: TYPES.Int, value: IDProveedor},
        {name: 'NombreProveedor', type: TYPES.VarChar, value: NombreProveedor},
        {name: 'DireccionProveedor', type: TYPES.VarChar, value: DireccionProveedor},
        {name: 'NoTelefono', type: TYPES.VarChar, value: NoTelefono},
        {name: 'Correo', type: TYPES.Int, VarChar: Correo},
        {name: 'Web', type: TYPES.Int, VarChar: Web},
        {name: 'DescripcionProveedor', type: TYPES.VarChar, value: DescripcionProveedor},
    ];
    return execQuery.execWriteCommand(query, parameters)
};

const deleteProveedor = (IDProveedor) => {
    const query = `
    DELETE FROM [dbo].[Proveedores]
    WHERE IDProveedor = @IDproveedor
    `
    const parameters = [
        {name: 'IDProveedor', type: TYPES.Int, value: IDProveedor}
    ];
    return execQuery.execWriteCommand(query, parameters);
};

const allProveedor = () => {
    const query = `
    SELECT * FROM [dbo].[Proveedores]
    `;
    return execQuery.execReadCommand(query);
};

const getByIDProveedor = (IDProveedor) => {
    const query = `
    SELECT * FROM [dbo].[Proveedores]
    WHERE IDProveedor = @IDproveedor
    `;
    const parameters = [
        {name: 'IDProveedor', type: TYPES.Int, value: IDProveedor}
    ];
    return execQuery.execReadCommand(query, parameters);
}

module.exports = {
    addProveedor,
    updateProveedor,
    deleteProveedor,
    allProveedor,
    getByIDProveedor,
}