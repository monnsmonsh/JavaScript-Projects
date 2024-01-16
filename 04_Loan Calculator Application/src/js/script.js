
//event btn
document.getElementById('calculateBtn').addEventListener('click',calculateLoan);

//calculate Prestamo
function calculateLoan(){


const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
const interestRate = parseFloat(document.getElementById("interestRateInput").value);
const loanTerm = parseFloat(document.getElementById("loanTermInput").value);


    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        //msg 
        alert("Ingresa datos validos");
    }
    //form de cal Prestamo
    const monthlyInterest = interestRate /100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterst = (monthlyPayment * totalPayments) - loanAmount;


    displayResult(monthlyPayment,totalInterst);

}

//show Prestamo
function displayResult(monthlyPayment, totalInterst){

    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>Pago por mes ${monthlyPayment.toFixed(2)}</p></strong>
        <p><strong>Total de intereses: ${totalInterst.toFixed(2)}</p></strong>
    `;
}