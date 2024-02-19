 // Creo tres variables que acceden a las id de los botones de conversión, de invertir y de limpiar 
 let btnConvertir = document.getElementById("convertir");
 let btnInvertir = document.getElementById("invertir");
 let btnLimpiar = document.getElementById("limpiar");
 // Creo otra variable que será usada para acceden el formulario
 let campoFormulario = document.getElementById("formulario");

 // ---- BOTÓN LIMPIAR ----
 // Añadiré un escuchador de eventos en el que cuando haga click al botón limpiar
 // borre el contenido del input

 btnLimpiar.addEventListener("click", function () {
     // Creo una variable para que acceda al valor del input
     let campoValor = document.getElementById("valor");
     // Para que me la limpie, hace falta que cuando clique el botón
     // El valor del input se vacíe
     campoValor.value = " ";
 });


 // ---- BOTÓN INVERTIR ----
 // Añado un escuchador de eventos en el que cuando haga click en el botón invertir:
 // Invierta las unidades de energía asignadas previamente con el select
 // Para ello:
 btnInvertir.addEventListener("click", function () {
     // Creo dos variables en el que cogemos los valores de los dos select 
     let valorOrigen = campoFormulario.origen.value;
     let valorDestino = campoFormulario.destino.value;
     // Intercambio los valores entre los dos select
     campoFormulario.destino.value = valorOrigen;
     campoFormulario.origen.value = valorDestino;
 });

 // ---- BOTÓN CONVERTIR ----
 btnConvertir.addEventListener("click", function () {
     // Creo dos variables en el que cogemos los valores:
     // Del input donde voy a escribir el valor que voy a convertir
     let campoValor = document.getElementById("valor");
     // Y del párrafo donde mostraré el resultado de la conversión
     let campoResultado = document.getElementById("resultado");

     // Creo la variable resultado que será la almacenará el resultado al hacer la fórmula
     let resultado;

     // A continuación para convertir las unidades, hago dos switch en uno ya que como hay que comprobar que dos variables cumplen un resultado hay que combinarlas
     // Para que en el caso de que quiera convertir esta unidad a otra
     // El programa haga la fórmula que le digo e imprimo el resultado de la operación en el párrafo vacío
     
     // Cuando las unidades de ambos select coinciden pues no hace falta hacer ninguna fórmula
     // puesto que es el mismo valor

     // Dependiendo la unidad a la que vaya a convertir, en el caso de que el resultado vaya a dar o un número grande o muchos decimales
     // uso la función toPrecision con el resultado, para que me coja la cantidad de los dígitos significativos que yo le ponga a la función.
     // Uso Math.pow en muchos casos, porque los número al ser tan grandes el resultado es esto por 10 elevado a lo que sea por lo que también hay que calcularlo
         switch (campoFormulario.origen.value + campoFormulario.destino.value) {
             // ---- JULIOS ----
             case "julios" + "julios":
                 campoResultado.innerText = campoValor.value + "J son " + campoValor.value + "J";
                 break;
             case "julios" + "calorias":
                 resultado = campoValor.value * 0.2388;
                 campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(3) +"cal";
                 break;
             case "julios" + "electronvoltios":
                 resultado = campoValor.value * (6241506363094 * Math.pow(10, 18));
                 campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(5) + "eV";
                 break;
             case "julios" + "kilojulios":
                 resultado = campoValor.value * 0.001;
                 campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(5) +"kJ";
                 break;
             case "julios" + "kilocalorias":
                 resultado = campoValor.value * 0.000239006;
                 campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(5) +"kcal";
                 break;
             case "julios" + "kilovatioshora":
                 resultado = campoValor.value * (27777777777777776 * Math.pow(10, -7));
                 campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(5) + "kWh";
                 break;


                 // ---- CALORÍAS ----
             case "calorias" + "julios":
                 resultado = campoValor.value * 4184;
                 campoResultado.innerText = campoValor.value + "cal son " + resultado + "J";
                 break;
             case "calorias" + "calorias":
                 campoResultado.innerText = campoValor.value + "cal son " + campoValor.value + "cal";
                 break;
             case "calorias" + "electronvoltios":
                 resultado = campoValor.value * (2,6131938841002 * Math.pow(10,19));
                 campoResultado.innerText = campoValor.value + "cal son " + resultado.toPrecision(5) + "eV";
                 break;
             case "calorias" + "kilojulios":
                 resultado = campoValor.value * 0.0041868;
                 campoResultado.innerText = campoValor.value + "cal son " + resultado.toPrecision(3) + "kJ";
                 break;
             case "calorias" + "kilocalorias":
                 resultado = campoValor.value * 0.001;
                 campoResultado.innerText = campoValor.value + "cal son " + resultado.toPrecision(2) + "kcal";
                 break;
             case "calorias" + "kilovatioshora":
                 resultado = campoValor.value * 0.000001163;
                 campoResultado.innerText = campoValor.value + "cal son " + resultado.toPrecision(3) + "kWh";
                 break;


                 // ---- ELECTRONVOLTIOS  ----
             case "electronvoltios" + "julios":
                 resultado = campoValor.value * (1,6021774232052327 * Math.pow(10,-19));
                 campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "J";
                 break;
             case "electronvoltios" + "calorias":
                 resultado = campoValor.value * (3,826735086051347 * Math.pow(10,-20));
                 campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "cal";
                 break;
             case "electronvoltios" + "electronvoltios":
                 campoResultado.innerText = campoValor.value + "eV son " + campoValor.value + "eV";
                 break;
             case "electronvoltios" + "kilojulios":
                 resultado = campoValor.value * (1,6021774232052328 * Math.pow(10,-22));
                 campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "kJ";
                 break;
             case "electronvoltios" + "kilocalorias":
                 resultado = campoValor.value * (3826735086051347 * Math.pow(10,-23));
                 campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "kCal";
                 break;
             case "electronvoltios" + "kilovatioshora":
                 resultado = campoValor.value * (44504928422367573 * Math.pow(10,-25));
                 campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "kWh";
                 break;

                 // ---- KILOJULIOS  ----
             case "kilojulios" + "julios":
                 resultado = campoValor.value * 1000;
                 campoResultado.innerText = campoValor.value + "kJ son " + resultado + "J";
                 break;
             case "kilojulios" + "calorias":
                 resultado = campoValor.value * 238.85;
                 campoResultado.innerText = campoValor.value + "kJ son " + resultado.toPrecision(3) + "cal";
                 break;
             case "kilojulios" + "electronvoltios":
                 resultado = campoValor.value * (6,241506363094 * Math.pow(10,21));
                 campoResultado.innerText = campoValor.value + "kJ son " + resultado.toPrecision(5) + "eV";
                 break;
             case "kilojulios" + "kilojulios":
                 campoResultado.innerText = campoValor.value + "kJ son " + campoValor.value + "kJ";
                 break;
             case "kilojulios" + "kilocalorias":
                 resultado = campoValor.value * 0.238846;
                 campoResultado.innerText = campoValor.value + "kJ son " + resultado.toPrecision(3) + "kcal";
                 break;
             case "kilojulios" + "kilovatioshora":
                 resultado = campoValor.value * 0.00027778;
                 campoResultado.innerText = campoValor.value + "kJ son " + resultado.toPrecision(5) + "kWh";
                 break;

                 // ---- KILOCALORÍAS ----
             case "kilocalorias" + "julios":
                 resultado = campoValor.value * 4186.8;
                 campoResultado.innerText = campoValor.value + "kcal son " + resultado.toPrecision(3) +"J";
                 break;
             case "kilocalorias" + "calorias":
                 resultado = campoValor.value * 1000;
                 campoResultado.innerText = campoValor.value + "kcal son " + resultado + "cal";
                 break;
             case "kilocalorias" + "electronvoltios":
                 resultado = campoValor.value * (2,6131936951817053 *Math.pow(10, 22));
                 campoResultado.innerText = campoValor.value + "kCal son " + resultado.toPrecision(5) + "eV";
                 break;
             case "kilocalorias" + "kilojulios":
                 resultado = campoValor.value * 4.1868;
                 campoResultado.innerText = campoValor.value + "kcal son " + resultado.toPrecision(3) +"kJ";
                 break;
             case "kilocalorias" + "kilocalorias":
                 campoResultado.innerText = campoValor.value + "kcal son " + campoValor.value +"kcal";
                 break;
             case "kilocalorias" + "kilovatioshora":
                 resultado = campoValor.value * 0.001163;
                 campoResultado.innerText = campoValor.value + "kCal son " + resultado.toPrecision(3) + "kWh";
                 break;

                 // ---- KILOVATIOS-HORA  ----
             case "kilovatioshora" + "julios":
                 resultado = campoValor.value * 3600000;
                 campoResultado.innerText = campoValor.value + "kWh son " + resultado + "J";
                 break;
             case "kilovatioshora" + "calorias":
                 resultado = campoValor.value * 859845.22785899;
                 campoResultado.innerText = campoValor.value + "kWh son " + resultado.toPrecision(6) + "cal";
                 break;
             case "kilovatioshora" + "electronvoltios":
                 resultado = campoValor.value * (2,2469421600000004 * Math.pow(10,25));
                 campoResultado.innerText = campoValor.value + "kWh son " + resultado.toPrecision(5) + "eV";
                 break;
             case "kilovatioshora" + "kilojulios":
                 resultado = campoValor.value * 3600;
                 campoResultado.innerText = campoValor.value + "kWh son " + resultado + "kJ";
                 break;
             case "kilovatioshora" + "kilocalorias":
                 resultado = campoValor.value * 859.845;
                 campoResultado.innerText = campoValor.value + "kWh son " + resultado + "kCal"; 
                 break;
             case "kilovatioshora" + "kilovatioshora":
                 campoResultado.innerText = campoValor.value + "kWh son " + campoValor.value +"kWh";
                 break;
         }
      // OTRA FORMA DE HACERLO ES USANDO IF PONIENDOLE EL VALOR  DEL PRIMER SELECT Y EL VALOR DEL SEGUNDO SELECT
            // Y DEPENDIENDO DE LA COMBINACIÓN TENDRÁN FÓRMULAS DISTINTAS

            /* // JULIOS
            if (campoFormulario.origen.value == "julios" && campoFormulario.destino.value == "julios") {
                campoResultado.innerText = campoValor.value + "J son " + campoValor.value + "J";
            } 
            else if (campoFormulario.origen.value == "julios" && campoFormulario.destino.value == "calorias") {
                resultado = campoValor.value * 0.2388;
                campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(3) +"cal";
            } 
            else if (campoFormulario.origen.value == "julios" && campoFormulario.destino.value == "electronvoltios") {
                resultado = campoValor.value * (6241506363094 * Math.pow(10, 18));
                campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(5) + "eV";
            }
            else if (campoFormulario.origen.value == "julios" && campoFormulario.destino.value == "kilojulios") {
                resultado = campoValor.value * 0.001;
                campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(5) +"kJ";
            }
            else if (campoFormulario.origen.value == "julios" && campoFormulario.destino.value == "kilocalorias") {
                resultado = campoValor.value * 0.000239006;
                campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(5) +"kcal";
            } 
            else if (campoFormulario.origen.value == "julios" && campoFormulario.destino.value == "kilovatioshora") {
                resultado = campoValor.value * (27777777777777776 * Math.pow(10, -7));
                campoResultado.innerText = campoValor.value + "J son " + resultado.toPrecision(5) + "kWh";
            }

            // CALORÍAS
            else if (campoFormulario.origen.value == "calorias" && campoFormulario.destino.value == "julios") {
                resultado = campoValor.value * 4184;
                campoResultado.innerText = campoValor.value + "cal son " + resultado + "J";
            } 
            else if (campoFormulario.origen.value == "calorias" && campoFormulario.destino.value == "calorias") {
                campoResultado.innerText = campoValor.value + "cal son " + campoValor.value + "cal";
            } 
            else if (campoFormulario.origen.value == "calorias" && campoFormulario.destino.value == "electronvoltios") {
                resultado = campoValor.value * (2,6131938841002 * Math.pow(10,19));
                campoResultado.innerText = campoValor.value + "cal son " + resultado.toPrecision(5) + "eV";
            }
            else if (campoFormulario.origen.value == "calorias" && campoFormulario.destino.value == "kilojulios") {
                resultado = campoValor.value * 0.0041868;
                campoResultado.innerText = campoValor.value + "cal son " + resultado.toPrecision(3) + "kJ";
            }
            else if (campoFormulario.origen == "calorias" && campoFormulario.destino.value == "kilocalorias") {
                resultado = campoValor.value * 0.001;
                campoResultado.innerText = campoValor.value + "cal son " + resultado.toPrecision(2) + "kcal";
            } 
            else if (campoFormulario.origen.value == "calorias" && campoFormulario.destino.value == "kilovatioshora") {
                resultado = campoValor.value * 0.000001163;
                campoResultado.innerText = campoValor.value + "cal son " + resultado.toPrecision(3) + "kWh";
            }
            
            // ELECTRÓN VOLTIOS
            else if (campoFormulario.origen.value == "electronvoltios" && campoFormulario.destino.value == "julios") {
                resultado = campoValor.value * (1,6021774232052327 * Math.pow(10,-19));
                campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "J";
            } 
            else if (campoFormulario.origen.value == "electronvoltios" && campoFormulario.destino.value == "calorias") {
                resultado = campoValor.value * (3,826735086051347 * Math.pow(10,-20));
                campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "cal";
            } 
             else if (campoFormulario.origen.value == "electronvoltios" && campoFormulario.destino.value == "electronvoltios") {
                campoResultado.innerText = campoValor.value + "eV son " + campoValor.value + "eV";
            } 
             else if (campoFormulario.origen.value == "electronvoltios" && campoFormulario.destino.value == "kilojulios") {
                resultado = campoValor.value * (1,6021774232052328 * Math.pow(10,-22));
                campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "kJ";            
            }
            else if (campoFormulario.origen.value == "electronvoltios" && campoFormulario.destino.value == "kilocalorias") {
                resultado = campoValor.value * (3826735086051347 * Math.pow(10,-23));
                campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "kCal";
            } 
            else if (campoFormulario.origen.value == "electronvoltios" && campoFormulario.destino.value == "kilovatioshora") {
                resultado = campoValor.value * (44504928422367573 * Math.pow(10,-25));
                campoResultado.innerText = campoValor.value + "eV son " + resultado.toPrecision(5) + "kWh";
            }

            // KILOJULIOS
            else if (campoFormulario.origen == "kilojulios" && campoFormulario.destino.value == "julios") {
                resultado = campoValor.value * 1000;
                campoResultado.innerText = campoValor.value + "kJ son " + resultado + "J";
            } 
            else if (campoFormulario.origen == "kilojulios" && campoFormulario.destino.value == "calorias") {
                resultado = campoValor.value * 238.85;
                campoResultado.innerText = campoValor.value + "kJ son " + resultado.toPrecision(3) + "cal";
            }
            else if (campoFormulario.origen.value == "kilojulios" && campoFormulario.destino.value == "electronvoltios") {
                resultado = campoValor.value * (6,241506363094 * Math.pow(10,21));
                campoResultado.innerText = campoValor.value + "kJ son " + resultado.toPrecision(5) + "eV";
            }
            else if (campoFormulario.origen == "kilojulios" && campoFormulario.destino.value == "kilojulios") {
                campoResultado.innerText = campoValor.value + "kJ son " + campoValor.value + "kJ";
            }
            else if (campoFormulario.origen == "kilojulios" && campoFormulario.destino.value == "kilocalorias") {
                resultado = campoValor.value * 0.238846;
                campoResultado.innerText = campoValor.value + "kJ son " + resultado.toPrecision(3) + "kcal";
            } 
            else if (campoFormulario.origen.value == "calorias" && campoFormulario.destino.value == "kilovatioshora") {
                resultado = campoValor.value * 0.00027778;
                campoResultado.innerText = campoValor.value + "kJ son " + resultado.toPrecision(5) + "kWh";
            }
            
            // KILOCALORIAS
            else if (campoFormulario.origen.value == "kilocalorias" && campoFormulario.destino.value == "julios") {
                resultado = campoValor.value * 4186.8;
                campoResultado.innerText = campoValor.value + "kcal son " + resultado.toPrecision(3) +"J";
            } 
            else if (campoFormulario.origen.value == "kilocalorias" && campoFormulario.destino.value == "calorias") {
                resultado = campoValor.value * 1000;
                campoResultado.innerText = campoValor.value + "kcal son " + resultado + "cal";
            }
            else if (campoFormulario.origen.value == "kilocalorias" && campoFormulario.destino.value == "electronvoltios") {
                resultado = campoValor.value * (2,6131936951817053 *Math.pow(10, 22));
                campoResultado.innerText = campoValor.value + "kCal son " + resultado.toPrecision(5) + "eV";
            }
            else if (campoFormulario.origen.value == "kilocalorias" && campoFormulario.destino.value == "kilojulios") {
                resultado = campoValor.value * 4.1868;
                campoResultado.innerText = campoValor.value + "kcal son " + resultado.toPrecision(3) +"kJ";
            }
            else if (campoFormulario.origen.value == "kilocalorias" && campoFormulario.destino.value == "kilocalorias") {
                campoResultado.innerText = campoValor.value + "kcal son " + campoValor.value + "kcal";
            }
            else if (campoFormulario.origen.value == "kilocalorias" && campoFormulario.destino.value == "kilovatioshora") {
                resultado = campoValor.value * 0.001163;
                campoResultado.innerText = campoValor.value + "kCal son " + resultado.toPrecision(3) + "kWh";          
            }

            // KILOVATIOS-HORA
            else if (campoFormulario.origen.value == "kilovatioshora" && campoFormulario.destino.value == "julios") {
                resultado = campoValor.value * 3600000;
                campoResultado.innerText = campoValor.value + "kWh son " + resultado + "J";
            } 
            else if (campoFormulario.origen.value == "kilovatioshora" && campoFormulario.destino.value == "calorias") {
                resultado = campoValor.value * 859845.22785899;
                campoResultado.innerText = campoValor.value + "kWh son " + resultado.toPrecision(6) + "cal";
            }
            else if (campoFormulario.origen.value == "kilovatioshora" && campoFormulario.destino.value == "electronvoltios") {
                resultado = campoValor.value * (2,2469421600000004 * Math.pow(10,25));
                campoResultado.innerText = campoValor.value + "kWh son " + resultado.toPrecision(5) + "eV";
            }

            else if (campoFormulario.origen.value == "kilovatioshora" && campoFormulario.destino.value == "kilojulios") {
                resultado = campoValor.value * 3600;
                campoResultado.innerText = campoValor.value + "kWh son " + resultado + "kJ";
            }
            else if (campoFormulario.origen.value == "kilovatioshora" && campoFormulario.destino.value == "kilocalorias") {
                resultado = campoValor.value * 859.845;
                campoResultado.innerText = campoValor.value + "kWh son " + resultado + "kCal"; 
            }
             else if (campoFormulario.origen.value == "kilovatioshora" && campoFormulario.destino.value == "kilovatioshora") {
                campoResultado.innerText = campoValor.value + "kWh son " + campoValor.value +"kWh";
            }
           */
 });