function validarNota(nota)
{
    const numExp = /\d/;
    let exito = true;
    if(nota<1 || nota>10 || !numExp.test(nota))
    {
        exito = false;
    }
    return exito;
}

function validarMatematica()
{
    const nota = document.getElementById("Matematica").value;
    const requerimientoNota = document.getElementById("requerimientoMatematica");
    const errorMensaje = "La nota debe ser un número entre 1 y 10";
    if(nota.toString().length > 0)
    {
        //requerimientoNota.textContent = "";
        if(validarNota(nota))
            {
                requerimientoNota.style.display = "none";
            }
            else
            {
                requerimientoNota.textContent = errorMensaje;
                requerimientoNota.style.display = "block";
            }
    }
    return validarNota(nota);
}
function validarLengua()
{
    const nota = document.getElementById("Lengua").value;
    const requerimientoNota = document.getElementById("requerimientoLengua");
    const errorMensaje = "La nota debe ser un número entre 1 y 10";
    if(nota.toString().length > 0)
    {
        //requerimientoNota.textContent = "";
        if(validarNota(nota))
            {
                requerimientoNota.style.display = "none";
            }
            else
            {
                requerimientoNota.textContent = errorMensaje;
                requerimientoNota.style.display = "block";
            }
    }
    return validarNota(nota);
}
function validarEFSI()
{
    const nota = document.getElementById("EFSI").value;
    const requerimientoNota = document.getElementById("requerimientoEFSI");
    const errorMensaje = "La nota debe ser un número entre 1 y 10";
    if(nota.toString().length > 0)
    {
        //requerimientoNota.textContent = "";
        if(validarNota(nota))
            {
                requerimientoNota.style.display = "none";
            }
            else
            {
                requerimientoNota.textContent = errorMensaje;
                requerimientoNota.style.display = "block";
            }
    }
    return validarNota(nota);
}

function calcularPromedio()
{
    if(validarForm())
    {
        const matematica = parseFloat(document.getElementById("Matematica").value);
        const lengua = parseFloat(document.getElementById("Lengua").value);
        const EFSI = parseFloat(document.getElementById("EFSI").value);
        const promedio = document.getElementById("promedio");
        console.log(matematica);
        let calculo = (matematica + lengua + EFSI)/3
        promedio.textContent = "El promedio es: " + calculo;
    }
}

function mostrarMayorMateria()
{
    if(validarForm())
    {
        const matematica = parseFloat(document.getElementById("Matematica").value);
        const lengua = parseFloat(document.getElementById("Lengua").value);
        const EFSI = parseFloat(document.getElementById("EFSI").value);
        var listado = [
            {nombre: "matematica", valor: matematica},
            {nombre: "lengua", valor: lengua},
            {nombre: "EFSI", valor: EFSI}
        ];
        const mayor = document.getElementById("notaMayor");
        let max = 0;
        let maxString = "";
        let mas2 = false;
        listado.forEach(valor => {
            if(max < valor)
            {
                max = valor
                maxString = nombre;
            }
            else if(max == valor)
            {
                mas2 = true;
                maxString += " y " + nombre; 
            }
        });
        if(!mas2)
        {
            mayor.textContent = "La materia que mayor nota obtuvo fue: " + maxString;
        }
        else
        {
            mayor.textContent = "Las materias que mayor nota obtuvieron fueron: " + maxString;
        }
    }
}

function validarForm()
{
    let exito = true;
    if(!validarMatematica() || !validarEFSI() || !validarEFSI())
    {
        alert("Complete los datos correctamente");
        exito = false;
    }
    return exito;
}