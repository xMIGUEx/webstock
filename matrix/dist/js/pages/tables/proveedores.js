async function getProveedores() {
    // Realiza la solicitud HTTP
    const response = await fetch("https://backend-ing.onrender.com/api/proveedores");
  
    // Verifica el estado de la respuesta
    if (response.status === 200) {
      // Obtiene los datos de la respuesta
      const data = await response.json();
  
      // Muestra los datos en la página web
      // ...
    }
  }