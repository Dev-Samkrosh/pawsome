import multiparty from 'multiparty'; // Importación del paquete multiparty para procesamiento de formularios multipart

export default async function handle(req, res) {
  const form = new multiparty.Form(); // Creación de una instancia de multiparty.Form
  
  // Se procesa la solicitud para obtener los campos y archivos enviados
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err); // Si hay un error al procesar el formulario, se rechaza la promesa con el error
      resolve({ fields, files }); // Se resuelve la promesa con los campos y archivos obtenidos
    });
  });

  console.log(files.length); // Se imprime la cantidad de archivos recibidos
  console.log(fields); // Se imprime la información de los campos del formulario

  return res.json('ok'); // Se responde con un mensaje JSON de 'ok'
}

export const config = {
  api: { bodyParser: false }, // Se deshabilita el bodyParser predeterminado de Next.js para permitir el manejo personalizado de la solicitud
};