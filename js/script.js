// Funciones de validación básicas
function validarString(cadena, min, max) {
    var res = false;

    if (min == 0 && max != null) {
        if ((isNaN(cadena) && cadena.length <= max) || cadena == "")
            res = true;
    }

    if (min > 0 && max == null) {
        if (isNaN(cadena) && cadena.length >= min)
            res = true;
    }

    if (min > 0 && max != null) {
        if (isNaN(cadena) && cadena.length >= min && cadena.length <= max)
            res = true;
    }
    return res;
}

function validarTelefono(cadena) {
    // Formato de teléfono [679]99999999 - primer dígito 6, 7 o 9 y 8 dígitos más
    if ((validarNumero(cadena, 9, 9) && (cadena.charAt(0) == '9' || cadena.charAt(0) == '7' || cadena.charAt(0) == '6'))) {
        return true;
    } else {
        return false;
    }
}

function validarNumero(cadena, min, max) {
    if (!isNaN(cadena) && cadena.length >= min && cadena.length <= max) {
        return true;
    } else {
        return false;
    }
}

function validarEdad(cadena, min, max) {
    if (!isNaN(cadena) && cadena >= min && cadena <= max) {
        return true;
    } else {
        return false;
    }
}

function validarCp(cadena, min, max) {
    if (!isNaN(cadena) && parseInt(cadena) >= min && parseInt(cadena) <= max && cadena.length === 5) {
        return true;
    } else {
        return false;
    }
}

function validarIntereses(campo) {
    if (campo.selectedOptions.length > 0) {
        return true;
    } else {
        return false;
    }
}

function esBlanco(campo) {
    if (campo == "") {
        return true
    } else {
        return false
    }
}

function autocompletarProvincia(codigoPostal) {
    const provincias = {
        '01': 'Álava',
        '02': 'Albacete',
        '03': 'Alicante',
        '04': 'Almería',
        '05': 'Ávila',
        '06': 'Badajoz',
        '07': 'Baleares',
        '08': 'Barcelona',
        '09': 'Burgos',
        '10': 'Cáceres',
        '11': 'Cádiz',
        '12': 'Castellón',
        '13': 'Ciudad Real',
        '14': 'Córdoba',
        '15': 'A Coruña',
        '16': 'Cuenca',
        '17': 'Girona',
        '18': 'Granada',
        '19': 'Guadalajara',
        '20': 'Gipuzkoa',
        '21': 'Huelva',
        '22': 'Huesca',
        '23': 'Jaén',
        '24': 'León',
        '25': 'Lleida',
        '26': 'La Rioja',
        '27': 'Lugo',
        '28': 'Madrid',
        '29': 'Málaga',
        '30': 'Murcia',
        '31': 'Navarra',
        '32': 'Ourense',
        '33': 'Asturias',
        '34': 'Palencia',
        '35': 'Las Palmas',
        '36': 'Pontevedra',
        '37': 'Salamanca',
        '38': 'Santa Cruz de Tenerife',
        '39': 'Cantabria',
        '40': 'Segovia',
        '41': 'Sevilla',
        '42': 'Soria',
        '43': 'Tarragona',
        '44': 'Teruel',
        '45': 'Toledo',
        '46': 'Valencia',
        '47': 'Valladolid',
        '48': 'Bizkaia',
        '49': 'Zamora',
        '50': 'Zaragoza',
        '51': 'Ceuta',
        '52': 'Melilla'
    };

    if (codigoPostal && codigoPostal.length >= 2) {
        const codigo = codigoPostal.substring(0, 2);
        return provincias[codigo] || '';
    }
    return '';
}

// Validar DNI con algoritmo en base a letra
function validarDni(dni) {
    if (dni.length < 7 || dni.length > 9) {
        return false;
    }
    
    // Validar formato básico (números + letra al final)
    const regex = /^[0-9]{7,8}[A-Za-z]$/;
    if (!regex.test(dni)) {
        return false;
    }
    
    // Validar letra del DNI
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const numero = parseInt(dni.substr(0, dni.length - 1));
    const letra = dni.substr(-1).toUpperCase();
    
    return letras.charAt(numero % 23) === letra;
}

function validarFecha(fecha) {
    // Validar formato dd/mm/yyyy
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = fecha.match(regex);
    
    if (!match) {
        return false;
    }
    
    const dia = parseInt(match[1]);
    const mes = parseInt(match[2]);
    const año = parseInt(match[3]);
    
    // Crear fecha
    const fechaObj = new Date(año, mes - 1, dia);
    
    // Verificar que la fecha es válida
    if (fechaObj.getDate() !== dia || fechaObj.getMonth() !== (mes - 1) || fechaObj.getFullYear() !== año) {
        return false;
    }
    
    // Verificar que no sea superior a hoy
    const hoy = new Date();
    hoy.setHours(23, 59, 59, 999); // Final del día de hoy
    
    return fechaObj <= hoy;
}

function validarSexo() {
    const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
    if (!sexoSeleccionado) {
        return false;
    }
    
    const valor = sexoSeleccionado.value;
    return valor === 'masculino' || valor === 'femenino' || valor === 'no binario';
}

function validarArchivo(archivo) {
    if (!archivo.files || archivo.files.length === 0) {
        return false;
    }
    
    const file = archivo.files[0];
    const extensionesValidas = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    
    return extensionesValidas.includes(file.type);
}

function validarCodigoPostal(codigoPostal) {
    return codigoPostal.length >= 4 && codigoPostal.length <= 5 && !isNaN(codigoPostal);
}

function validarProvincia(provincia) {
    return provincia.trim() !== '';
}

function validarSituacionLaboral(situacion) {
    return situacion.trim() !== '';
}

function validarTerminos(terminos) {
    return terminos.checked;
}

// Funciones para mostrar/ocultar elementos y cambiar estilos
function mostrar(elemento) {
    elemento.style.display = "block";
}

function noMostrar(elemento) {
    elemento.style.display = "none";
}

function entraFoco(elemento) {
    elemento.style.backgroundColor = "lightblue";
}

function saleFoco(elemento) {
    elemento.style.backgroundColor = "";
}

// Función para aplicar estilos de error
function aplicarEstiloError(elemento) {
    elemento.classList.add('campo-error');
    elemento.classList.remove('campo-valido');
}

// Función para aplicar estilos de éxito
function aplicarEstiloExito(elemento) {
    elemento.classList.add('campo-valido');
    elemento.classList.remove('campo-error');
}

// Función para limpiar estilos
function limpiarEstilos(elemento) {
    elemento.classList.remove('campo-error', 'campo-valido');
}

// Funciones de validación en línea
function validarStringInside(elemento, min, max, capaerror) {
    if (!validarString(elemento.value, min, max)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        return true;
    }
}

// Funciones específicas de validación en línea
function validarNombreInside(elemento, min, max, capaerror) {
    const esValido = validarStringInside(elemento, min, max, capaerror);
    verificarFormularioCompleto();
    return esValido;
}

function validarApellidoInside(elemento, min, max, capaerror) {
    const esValido = validarStringInside(elemento, min, max, capaerror);
    verificarFormularioCompleto();
    return esValido;
}

function validarDniInside(elemento, capaerror) {
    if (!validarDni(elemento.value)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        verificarFormularioCompleto();
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        verificarFormularioCompleto();
        return true;
    }
}

function validarFechaInside(elemento, capaerror) {
    if (!validarFecha(elemento.value)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        verificarFormularioCompleto();
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        verificarFormularioCompleto();
        return true;
    }
}

function validarSexoInside(capaerror) {
    if (!validarSexo()) {
        mostrar(capaerror);
        verificarFormularioCompleto();
        return false;
    } else {
        noMostrar(capaerror);
        verificarFormularioCompleto();
        return true;
    }
}

function validarArchivoInside(elemento, capaerror) {
    if (!validarArchivo(elemento)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        verificarFormularioCompleto();
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        verificarFormularioCompleto();
        return true;
    }
}

function validarCodigoPostalInside(elemento, capaerror) {
    if (!validarCodigoPostal(elemento.value)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        // Limpiar provincia si el CP es inválido
        document.getElementById('provincia').value = '';
        verificarFormularioCompleto();
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        // Autocompletar provincia si el CP es válido
        const provinciaAuto = autocompletarProvincia(elemento.value);
        if (provinciaAuto) {
            document.getElementById('provincia').value = provinciaAuto;
            aplicarEstiloExito(document.getElementById('provincia'));
            noMostrar(document.getElementById('errorProvincia'));
        }
        verificarFormularioCompleto();
        return true;
    }
}

function validarSituacionLaboralInside(elemento, capaerror) {
    if (!validarSituacionLaboral(elemento.value)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        verificarFormularioCompleto();
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        verificarFormularioCompleto();
        return true;
    }
}

function validarTerminosInside(elemento, capaerror) {
    if (!validarTerminos(elemento)) {
        mostrar(capaerror);
        verificarFormularioCompleto();
        return false;
    } else {
        noMostrar(capaerror);
        verificarFormularioCompleto();
        return true;
    }
}

function validarTelefonoInside(elemento, capaerror) {
    if (!validarTelefono(elemento.value)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        return true;
    }
}

function validarEdadInside(elemento, min, max, capaerror) {
    if (!validarEdad(elemento.value, min, max)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        return true;
    }
}

function validarCpInside(elemento, min, max, capaerror) {
    if (!validarCp(elemento.value, min, max)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        // Limpiar provincia si el CP es inválido
        document.getElementById('provincia').value = '';
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        // Autocompletar provincia si el CP es válido
        const provinciaAuto = autocompletarProvincia(elemento.value);
        if (provinciaAuto) {
            document.getElementById('provincia').value = provinciaAuto;
            // Aplicar estilo de éxito a la provincia también
            aplicarEstiloExito(document.getElementById('provincia'));
            noMostrar(document.getElementById('errorProvincia'));
        }
        return true;
    }
}

function validarInteresesInside(elemento, capaerror) {
    if (!validarIntereses(elemento)) {
        aplicarEstiloError(elemento);
        mostrar(capaerror);
        verificarFormularioCompleto();
        return false;
    } else {
        aplicarEstiloExito(elemento);
        noMostrar(capaerror);
        verificarFormularioCompleto();
        return true;
    }
}

// Función de validación final del formulario
function validarFormulario() {
    var res = true;

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var dni = document.getElementById('dni');
    var fechaNacimiento = document.getElementById('fechaNacimiento');
    var subirDni = document.getElementById('subirDni');
    var intereses = document.getElementById('intereses');
    var codigoPostal = document.getElementById('codigoPostal');
    var provincia = document.getElementById('provincia');
    var situacionLaboral = document.getElementById('situacionLaboral');
    var terminos = document.getElementById('terminos');

    var errorNombre = document.getElementById('errorNombre');
    var errorApellido = document.getElementById('errorApellido');
    var errorDni = document.getElementById('errorDni');
    var errorFechaNacimiento = document.getElementById('errorFechaNacimiento');
    var errorSexo = document.getElementById('errorSexo');
    var errorSubirDni = document.getElementById('errorSubirDni');
    var errorIntereses = document.getElementById('errorIntereses');
    var errorCodigoPostal = document.getElementById('errorCodigoPostal');
    var errorProvincia = document.getElementById('errorProvincia');
    var errorSituacionLaboral = document.getElementById('errorSituacionLaboral');
    var errorTerminos = document.getElementById('errorTerminos');

    // Validar cada campo y mostrar errores
    if (!validarString(nombre.value, 2, 60)) {
        res = false;
        aplicarEstiloError(nombre);
        mostrar(errorNombre);
    } else {
        aplicarEstiloExito(nombre);
        noMostrar(errorNombre);
    }

    if (!validarString(apellido.value, 2, 80)) {
        res = false;
        aplicarEstiloError(apellido);
        mostrar(errorApellido);
    } else {
        aplicarEstiloExito(apellido);
        noMostrar(errorApellido);
    }

    if (!validarDni(dni.value)) {
        res = false;
        aplicarEstiloError(dni);
        mostrar(errorDni);
    } else {
        aplicarEstiloExito(dni);
        noMostrar(errorDni);
    }

    if (!validarFecha(fechaNacimiento.value)) {
        res = false;
        aplicarEstiloError(fechaNacimiento);
        mostrar(errorFechaNacimiento);
    } else {
        aplicarEstiloExito(fechaNacimiento);
        noMostrar(errorFechaNacimiento);
    }

    if (!validarSexo()) {
        res = false;
        mostrar(errorSexo);
    } else {
        noMostrar(errorSexo);
    }

    if (!validarArchivo(subirDni)) {
        res = false;
        aplicarEstiloError(subirDni);
        mostrar(errorSubirDni);
    } else {
        aplicarEstiloExito(subirDni);
        noMostrar(errorSubirDni);
    }

    if (!validarIntereses(intereses)) {
        res = false;
        aplicarEstiloError(intereses);
        mostrar(errorIntereses);
    } else {
        aplicarEstiloExito(intereses);
        noMostrar(errorIntereses);
    }

    if (!validarCodigoPostal(codigoPostal.value)) {
        res = false;
        aplicarEstiloError(codigoPostal);
        mostrar(errorCodigoPostal);
    } else {
        aplicarEstiloExito(codigoPostal);
        noMostrar(errorCodigoPostal);
    }

    if (!validarProvincia(provincia.value)) {
        res = false;
        aplicarEstiloError(provincia);
        mostrar(errorProvincia);
    } else {
        aplicarEstiloExito(provincia);
        noMostrar(errorProvincia);
    }

    if (!validarSituacionLaboral(situacionLaboral.value)) {
        res = false;
        aplicarEstiloError(situacionLaboral);
        mostrar(errorSituacionLaboral);
    } else {
        aplicarEstiloExito(situacionLaboral);
        noMostrar(errorSituacionLaboral);
    }

    if (!validarTerminos(terminos)) {
        res = false;
        mostrar(errorTerminos);
    } else {
        noMostrar(errorTerminos);
    }

   
    if (res) {
        mostrarDatos();
        return false; 
    }

    return false; 
}

// Función para verificar si el formulario está completo y habilitar/deshabilitar botón
function verificarFormularioCompleto() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const dni = document.getElementById('dni');
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const subirDni = document.getElementById('subirDni');
    const intereses = document.getElementById('intereses');
    const codigoPostal = document.getElementById('codigoPostal');
    const provincia = document.getElementById('provincia');
    const situacionLaboral = document.getElementById('situacionLaboral');
    const terminos = document.getElementById('terminos');
    const botonEnviar = document.getElementById('botonEnviar');

    const esValido = validarString(nombre.value, 2, 60) &&
                    validarString(apellido.value, 2, 80) &&
                    validarDni(dni.value) &&
                    validarFecha(fechaNacimiento.value) &&
                    validarSexo() &&
                    validarArchivo(subirDni) &&
                    validarIntereses(intereses) &&
                    validarCodigoPostal(codigoPostal.value) &&
                    validarProvincia(provincia.value) &&
                    validarSituacionLaboral(situacionLaboral.value) &&
                    validarTerminos(terminos);

    botonEnviar.disabled = !esValido;
}

// Función para borrar el formulario
function borrarFormulario() {
    // Limpiar todos los campos
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('dni').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('subirDni').value = '';
    document.getElementById('intereses').selectedIndex = -1;
    document.getElementById('codigoPostal').value = '';
    document.getElementById('provincia').value = '';
    document.getElementById('situacionLaboral').selectedIndex = 1; // Volver por defecto "Estudiante"
    document.getElementById('terminos').checked = false;

    // Limpiar selección de radio buttons
    const radios = document.querySelectorAll('input[name="sexo"]');
    radios.forEach(radio => radio.checked = false);

    // Limpiar todos los estilos de error y éxito
    const campos = document.querySelectorAll('input, select');
    campos.forEach(campo => {
        limpiarEstilos(campo);
    });

    // Ocultar todos los mensajes de error
    const errores = document.querySelectorAll('.mensaje-error');
    errores.forEach(error => {
        noMostrar(error);
    });

    // Deshabilitar botón enviar
    document.getElementById('botonEnviar').disabled = true;
}

// Función para mostrar los datos del formulario
function mostrarDatos() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var dni = document.getElementById('dni').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var archivo = document.getElementById('subirDni').files[0] ? document.getElementById('subirDni').files[0].name : 'No seleccionado';
    var intereses = Array.from(document.getElementById('intereses').selectedOptions)
        .map(option => option.text)
        .join(', ');
    var codigoPostal = document.getElementById('codigoPostal').value;
    var provincia = document.getElementById('provincia').value;
    var situacionLaboral = document.getElementById('situacionLaboral').options[document.getElementById('situacionLaboral').selectedIndex].text;

    const mensaje = "🎉 ¡FORMULARIO ENVIADO CORRECTAMENTE! 🎉\n\n" +
        "📋 DATOS REGISTRADOS:\n" +
        "━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
        "👤 Nombre: " + nombre + "\n" +
        "📝 Apellido: " + apellido + "\n" +
        "🆔 DNI: " + dni + "\n" +
        "📅 Fecha de Nacimiento: " + fechaNacimiento + "\n" +
        "⚧️ Sexo: " + (sexo.charAt(0).toUpperCase() + sexo.slice(1)) + "\n" +
        "📄 Archivo DNI: " + archivo + "\n" +
        "🎯 Intereses: " + intereses + "\n" +
        "📮 Código Postal: " + codigoPostal + "\n" +
        "🏙️ Provincia: " + provincia + "\n" +
        "💼 Situación Laboral: " + situacionLaboral + "\n" +
        "✅ Términos y Condiciones: Aceptados\n\n" +
        "🔥 ¡Bienvenido/a al club DeJóvenes Leganés! 🔥";

    alert(mensaje);
}