const errorMensaje = "La nota debe ser un valor entre 1 y 10 inclusives";

function validarNota(nota)
{
    let exito = true;
    if(nota<1 || nota>10)
    {
        exito = false;
    }
    return exito;
}

function validarMatematica()
{
    const nota = document.getElementById("Matematica").value;
    const requerimientoNota = document.getElementById("requerimientoMatematica");
    if(nota.length > 0)
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
    if(!validarForm())
    {
        const matematica = document.getElementById("Matematica").value;
        const lengua = document.getElementById("Lengua").value;
        const EFSI = document.getElementById("EFSI").value;
        const promedio = document.getElementById("");
        calculo = (matematica + lengua + EFSI)/3
        promedio.textContent = "El promedio es: " + calculo;
    }
}

function mostrarMayorMateria()
{
    if(!validarForm())
    {
        const matematica = document.getElementById("Matematica").value;
        const lengua = document.getElementById("Lengua").value;
        const EFSI = document.getElementById("EFSI").value;
        var listado = [
            {nombre: "matematica", valor: matematica},
            {nombre: "lengua", valor: lengua},
            {nombre: "EFSI", valor: EFSI}
        ];
        const mayor = document.getElementById("");
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
    if(!validarMatematica())
    {
        alert("Complete los datos correctamente");
        exito = false;
    }
    return exito;
}