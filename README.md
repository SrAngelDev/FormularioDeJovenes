# Formulario DeJóvenes Leganés

Formulario web interactivo para recopilar datos de jóvenes interesados en unirse al programa **DeJóvenes Leganés**. Incluye validaciones en tiempo real, autocompletado de provincia a partir del código postal y resúmenes visuales al finalizar.

## ✨ Características principales
- **Validaciones inmediatas** en cada campo con mensajes de error descriptivos.
- **Autocompletado de provincia** según los dos primeros dígitos del código postal.
- **Habilitación automática** del botón *Enviar* solo cuando el formulario está completo y correcto.
- **Resumen animado** tras el envío con los datos clave introducidos por la persona usuaria.
- **Diseño responsive** con estilos modernos y estados visuales para campos válidos o con error.

## 🧱 Estructura del proyecto
```
FormularioDeJovenes/
├── index.html          # Maquetación principal del formulario y scripts inline de apoyo
├── css/
│   └── styles.css      # Paleta de colores, layout y estados visuales de los campos
├── js/
│   └── script.js       # Reglas de validación, autocompletado y lógica de envío
└── img/
    └── logoExtra2.png  # Identidad visual del programa DeJóvenes Leganés
```

## 🚀 Puesta en marcha
1. Clona o descarga este repositorio.
2. Abre `index.html` directamente en tu navegador **o** sirve la carpeta con una extensión como *Live Server* (VS Code) para disfrutar de autorecarga.
3. Completa el formulario para ver las validaciones en acción.

> ℹ️ No se requiere backend: todos los datos se gestionan en el navegador.

## ✅ Validaciones incluidas
- **Nombre y apellido**: texto entre 2 y 60/80 caracteres.
- **DNI**: formato correcto con letra verificada según el algoritmo oficial.
- **Fecha de nacimiento**: formato `dd/mm/yyyy` y fecha no futura.
- **Sexo**: selección obligatoria entre las tres opciones disponibles.
- **Subida de DNI**: archivo de imagen (`jpg`, `jpeg`, `png`, `gif`).
- **Intereses**: al menos una opción seleccionada.
- **Código postal**: 4-5 dígitos numéricos; autocompleta la provincia.
- **Provincia**: debe quedar informada (ya sea autocompletada o manualmente).
- **Situación laboral**: selección obligatoria.
- **Términos y condiciones**: casilla de aceptación obligatoria.

## 🛠️ Personalización rápida
- **Añadir nuevos intereses**: edita las opciones del `<select>` en `index.html`.
- **Cambiar la paleta de colores**: ajusta las variables CSS declaradas en `:root` dentro de `css/styles.css`.
- **Modificar reglas de validación**: amplía o adapta las funciones en `js/script.js` (`validarDni`, `validarFecha`, etc.).
- **Extender el resumen final**: edita la función `mostrarDatos()` para incluir nuevos campos o integraciones.
- **Actualizar el mapeo de códigos postales a provincias**: modifica el objeto `provincias` en `js/script.js`.
- **Incorporar nuevos campos**: añade los elementos HTML necesarios en `index.html` y actualiza las funciones de validación en `js/script.js`.
  
