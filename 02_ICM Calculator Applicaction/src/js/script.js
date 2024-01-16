document.getElementById("bmiForm").addEventListener('submit',function(e){

    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('meters').value);
   const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && height && weight){

        const bmi = weight / (height * height);
        const resultElement = document.getElementById("result");

        let category = '';

        if(bmi < 18.5){
            category = 'Por debajo del peso';
        }else if (bmi >= 18.5 && bmi < 24.9){
            category = 'Saludable'
        }else if (bmi >= 25 && bmi < 29.9){
            category = 'Con sobrepeso'    
        }else if (bmi >= 30 && bmi < 39.9){
            category = 'Obecidad'
        }else{
            category = 'Obesidad extrema o de alto riesgo'
        }

        let resultMessage ='<legend><span class="number"></span>Resultado</legend>'+'<label for="age">Tu ICM: ' + bmi.toFixed(2) + '</label><br>';
        resultMessage += '<label for="age">Tu categoria es: ' + category +'</label>';

        resultElement.innerHTML = resultMessage;


    }



});