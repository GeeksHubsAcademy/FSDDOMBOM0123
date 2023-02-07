
//Poca utilidad...
// document.write("<h1>Hola Mundo Cruel</h1>");

// let parrafosCapturados = document.getElementsByTagName("p");

// let inputPlayer1 = document.getElementById("player1");

// parrafosCapturados[2].addEventListener('mouseover',(e)=>{

//     console.log(e.target.innerHTML);
//     console.log("Don't mess with Jose.");
// });

// inputPlayer1.addEventListener('change', ()=> {

//     console.log(inputPlayer1.value);

// });


///////////////////////////////////////////////////////////

//EJEMPLO  DISTINTOS INPUTS LOCALIZAR EN CUAL ESTAMOS ESCRIBIENDO

//////////////////////////////////////////////////////////

//Estoy transformando la HTMLCOLLECTION que obtengo al tener los inputs en un array, para
//después, poder mapearlo.
let inputs = Array.from(document.getElementsByTagName("input"));

inputs.map(
    (input) => {
        input.addEventListener('change', ()=>{
            console.log(`Estas escribiendo en ${input.name} 
            y has escrito ${input.value}`);
        })
    }
)