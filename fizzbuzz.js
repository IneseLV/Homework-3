function FizzBuzz(value1, value2){
    let returnArray= [];
    for(let i = 1; i<101;i++){
        returnArray[i] = ((i%value1==0 ? 'Fizz' : '') + (i%value2==0 ? 'Buzz' : '') || i);
    }
    return returnArray;
}
        

function BuzzIt(){
    let output="";
    let val1=document.getElementById('Fizzvalue').value;
    let val2=document.getElementById('Buzzvalue').value;
    output=FizzBuzz(val1,val2);
    document.getElementById('results').innerHTML=output;
}

function BuzzItTemplate(){
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');

    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;

    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;

    output = FizzBuzz(val1, val2);
    for(i=1; i<output.length; i+=5){
        resultsHTML += templateHTML.replace('{{val1}}', output[i])
                                    .replace('{{val2}}', output[i+1])
                                    .replace('{{val3}}', output[i+2])
                                    .replace('{{val4}}', output[i+3])
                                    .replace('{{val5}}', output[i+4]);
    }
    document.getElementById('results').innerHTML = resultsHTML;
}