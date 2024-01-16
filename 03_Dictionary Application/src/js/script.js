//
//Def consts
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('result-container');
const wordTitle = document.getElementById('wordTitle');
const wordDescription = document.getElementById('wordDescription');
const audioButton = document.getElementById('audioButton');

//add event
searchButton.addEventListener("click",()=>{
    search();
});

searchInput.addEventListener("keyup",(event)=>{
    
    if(event.key === "Enter"){
        search();
    }
});

//funcion event buscar
function search(){

    const searchTerm = searchInput.value.trim();
    if(searchTerm === ''){
        alert('Ingresa una palabra para buscar...')
        return;
    }

    fetchDictionaryData(searchTerm);

}
//accion search event --buscar
async function fetchDictionaryData(searchTerm){

    //conet to api
    try{
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        if(!response.ok){
            throw new Error('Error al acceder a los datos');    
        }

        const data = await response.json();
        displayResult(data);

    }catch(error){
        console.log(error);
        alert('Oh disculpe ocurio un error.');
    }

}

//show seach in html
function displayResult(data){

    resultContainer.style.display = 'block';

    const wordData = data[0] 
    wordTitle.textContent = wordData.word;
    wordDescription.innerHTML =  `
       <ul> 
        ${wordData.meanings.map(meaning=>`
            <li>
                <p><strong>Parte de la oracion: </strong> ${meaning.partOfSpeech}</p>
                <p><strong>Definicion: </strong> ${meaning.definitions[0].definition}</p>
            </li>
        
        `).join('\n')}

       </ul>

    `;

}


audioButton.addEventListener("click",()=>{

    const searchTerm = searchInput.value.trim();
    if(searchTerm === ''){
        alert('Ingresa una palabra para buscar...')
        return;
    }

    speak(searchTerm);

});


function speak(word){

    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    speech.volume = 2;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);

}