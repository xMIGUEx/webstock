function getProveedores() {
    // Crea una nueva solicitud HTTP GET
    const xhr = new XMLHttpRequest();
  
    // Establece la URL de la solicitud
    xhr.open("GET", "https://backend-ing.onrender.com/api/proveedores");
  
    // Establece el método de solicitud
    xhr.responseType = "json";
  
    // Escucha la respuesta de la solicitud
    xhr.onload = function() {
      // Si la solicitud se realizó correctamente
      if (xhr.status === 200) {
        // Obtiene los datos de la respuesta
        const proveedores = xhr.response;
  
        // Muestra los datos en la página web
        // ...
      }
    };
  
    // Envia la solicitud
    xhr.send();
  }
  