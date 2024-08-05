# Dynamic Form Generator

## Descripcion
El Generador de Formularios Dinámicos es una aplicación web construida con React y Vite que permite crear y gestionar formularios dinámicos de manera sencilla. Utiliza Material-UI para el diseño y Formik junto con Yup para la gestión y validación de formularios.

## Caracteristicas
* Formularios Dinámicos: Genera formularios basados en una configuración dinámica.
* Validaciones: Utiliza Yup para definir y aplicar validaciones a los campos del formulario.
* Interfaz Moderna: Diseñado con Material-UI para una interfaz de usuario atractiva y moderna.
* Temas: Ofrece soporte para temas claros y oscuros.

## Tecnologias
* React: Biblioteca de JavaScript para construir interfaces de usuario.
* Vite: Herramienta de construcción rápida para proyectos frontend.
* Material-UI: Biblioteca de componentes React para diseño.
* Formik: Biblioteca para la gestión de formularios en React.
* Yup: Biblioteca para la validación de esquemas.

## Instalacion
Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:
* Clona el Repositorio
```git clone https://github.com/tu-usuario/dynamic-form-generator.git```

* Navega al Directorio del Proyecto
``` cd dynamic-form-generator ```

* Instala las Dependencias
``` npm install ```

* Inicia el Servidor de Desarrollo
``` npm run dev ```

Luego abre tu navegador y ve a http://localhost:3000 para ver la aplicación en acción.

## Uso
Una vez que la aplicación esté en funcionamiento, verás un formulario generado dinámicamente basado en la configuración definida. Puedes:

* Completar los campos del formulario.
* Seleccionar opciones en los campos de selección.
* Enviar el formulario para ver cómo se procesan los datos.

## Configuracion de Formulario
La configuración del formulario se encuentra en `src/formConfig.js`. Puedes modificar este archivo para agregar, eliminar o ajustar los campos del formulario y las validaciones.

### Ejemplo de Configuracion
```javascript
const formConfig = {
    initialValues: {
        name: '',
        age: '',
        gender: '',
    },
    validationSchema: {
        name: yup.string().required('Name is required'),
        age: yup.number().required('Age is required').min(0, 'Age must be greater than zero'),
        gender: yup.string().required('Gender is required'),
    },
    fields: [
        { name: 'name', type: 'text', label: 'Name' },
        { name: 'age', type: 'text', label: 'Age' },
        {
            name: 'gender',
            type: 'select',
            label: 'Gender',
            options: [
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
            ],
        },
    ],
};

```

## Contribuciones
Si deseas contribuir al proyecto, por favor sigue estos pasos:

* Fork el Repositorio
* Crea una Rama para tu Modificación
* Realiza tus Cambios y Commits
* Envía un Pull Request

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

