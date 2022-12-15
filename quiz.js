// let correctas = [1,3,2,3,1,1,3,4,1]

// let opcionElegida=[];

// let cantidadCorrectas = 0;


// function corregir(){
//     cantidadCorrectas = 0;
//     for (let i = 0; i < correctas.length; i++) {
//         if (correctas[i]== opcionElegida[i]) {
//             cantidadCorrectas++;
//         }
        
//     }

//     document.getElementById("resultado"),innerHTML = cantidadCorrectas;

// }

const preguntas = [
    {
        pregunta: "1.¿Cuál es el lugar más frío de la tierra?", 
        respuestas: [
            "Antartida",
            "Rusia",
            "China",
            "Andorra"
        ],
        correcta: "Antartida"
    }, 
    {
        pregunta: "2. ¿Cuál es el río más largo del mundo?", 
        respuestas: [
            "Ebro",
            "Nilo",
            "Amazonas",
            "Turia"
        ],
        correcta: "Amazonas"
    }, 
    {
        pregunta: "3. ¿Quién pintó “la última cena”?", 
        respuestas: [
            "Picasso",
            "Leonardo da Vinci",
            "banksy",
            "Guillermo"
        ],
        correcta: "Guillermo"
    }, 
    {
        pregunta: "4.¿Quién es el autor de el Quijote?", 
        respuestas: [
            "Anonimo",
            "George orwell",
            "Cervantes",
            "Pepe el del bar"
        ],
        correcta: "Cervantes"
    },
    {
        pregunta:'5.¿En qué país se encuentra la torre de Pisa?', 
        respuestas: [
            "italia",
            "Andorra",
            "China",
            "No existe"
        ],
        correcta: "Italia"
    }, 
    {
        pregunta: "6. ¿Qué año llegó Cristóbal Colón a América?", 
        respuestas: [
            "Marie Curie",
            "Pokemon",
            "Fire Emblem",
            "Mario Kart"
        ],
        correcta: "Pokemon"
    }, 
    {
        pregunta: "7. ¿Dónde se encuentra la famosa Torre Eiffel?", 
        respuestas: [
            "Madrid",
            "Moscow",
            "Paris",
            "New York"
        ],
        correcta: "Paris"
    },
    {
        pregunta: "8. ¿En qué año comenzó la II Guerra Mundial?", 
        respuestas: [
            "2022",
            "1563",
            "1965",
            "1939"
        ],
        correcta: "1939"
    }, 
    {
        pregunta: "9. ¿Dónde se encuentra la Sagrada Familia?", 
        respuestas: [
            "Alicante",
            "Amsterdam",
            "Madrid",
            "Barcelona"
        ],
        correcta: "Barcelona"
    },
    {
        pregunta: '10. ¿Cuál es el océano más grande?', 
        respuestas: [
            "Pacifico ",
            "Mar negro",
            "Mediterranio",
            "Son todos lo mismo"
        ],
        correcta: "Pacifico"
    }
]





const bloque = document.querySelector("main");
const juego = document.getElementById("quiz");

function pintarPreguntas(juego){
 
    for (let i = 0; i < preguntas.length; i++) { 
        
        let div = document.createElement("div")

               
    let card =  `<article>
        
        <legend id=`+i+`>${preguntas[i].pregunta}</legend>
        <div>
        <input id=${preguntas[i].respuestas[0]} type="radio" name=pregunta`+[i]+` value=${preguntas[i].respuestas[0]}>
        <label for=${preguntas[i].respuestas[0]}>${preguntas[i].respuestas[0]}</label>
        </div>
        <div>
        <input id=${preguntas[i].respuestas[1]} type="radio" name=pregunta`+[i]+` value=${preguntas[i].respuestas[1]}>
        <label for=${preguntas[i].respuestas[1]}>${preguntas[i].respuestas[1]}</label>
        </div>
        <div>
        <input id=${preguntas[i].respuestas[2]} type="radio" name=pregunta`+[i]+` value=${preguntas[i].respuestas[2]}>
        <label for=${preguntas[i].respuestas[2]}>${preguntas[i].respuestas[2]}</label>
        </div>
        <div>
        <input id=${preguntas[i].respuestas[3]} type="radio" name=pregunta`+[i]+` value=${preguntas[i].respuestas[3]}>
        <label for=${preguntas[i].respuestas[3]}>${preguntas[i].respuestas[3]}</label>
        </div>
        </fieldset>
    </article>`
    
        div.innerHTML = card

        juego.appendChild(div)
    
    }
}














function pintarResultados(){
    
    let checkAll = document.querySelectorAll("input:checked")

    if (checkAll.length !== preguntas.length){
        alert("Responde a todas las preguntas");
    } else {

    for (let i = 0; i < preguntas.length; i++) {
        let userAnswer  = document.querySelector("input[name=pregunta"+i+"]:checked").value;    

        if (userAnswer === preguntas[i].correcta){
            let label = document.getElementById(""+i)
            label.style.backgroundColor = "green";
        } else {
            let label = document.getElementById(""+i)
            label.style.backgroundColor = "red";
        }

    }}
    }
    function refresh(){
        document.location.reload(true);
    }

    pintarPreguntas(juego)

    document.getElementById("submit").addEventListener("click", pintarResultados)
    document.getElementById("retry").addEventListener("click", refresh)