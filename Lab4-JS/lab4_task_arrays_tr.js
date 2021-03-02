function getResult(){
    let placeholderValue = document.getElementById('tr-array-elements').value;
    let result='Вхідні: ';
    let elements = placeholderValue.split(' ');
    
    for (let i = 0; i < elements.length; i++) {
        result += elements[i] + ' ';
    }
    
    result +='\nМаксимальне число серед парних номерів: ';
    result +=AGetMax(GetOddEvenArrays(elements).odd);
    result +='\nМаксимальне число серед непарних номерів: ';
    result +=AGetMax(GetOddEvenArrays(elements).even);

    result +='\nМінімальне число серед парних номерів: ';
    result +=AGetMin(GetOddEvenArrays(elements).odd);
    result +='\nМінімальне число серед парних номерів: ';
    result +=AGetMin(GetOddEvenArrays(elements).even);
    

    result +='\nСортування: ';
    let sortArray = ASort(elements);
    for (let i = 0; i < sortArray.length; i++) {
        result += sortArray[i] + ' ';
    }

    document.getElementById('tr-result').value = result;
}

function AGetMax(elements){
    return(Math.max.apply(Math, elements));  
}
function AGetMin(elements){
    return(Math.min.apply(Math, elements));  
}
function AGetOddEvenArrays(elements){
    let oddArray=[];
    let evenArray=[];
    for (let i = 0; i < elements.length; i++) {
        if (i % 2 == 0){
            oddArray.push(elements[i])
        } else{
            evenArray.push(elements[i])
        }
    }
    return {
        odd: oddArray,
        even: evenArray,
    };
}
function ASort(elements){
    for (let i = 0, l = elements.length, k = l - 1; i < k; i++) {
        let indexMax = i;
        for (let j = i + 1; j < l; j++) {
            if (Number(elements[indexMax]) < Number(elements[j])) {
                indexMax = j;
            }
        }
        if (indexMax !== i) {
            [elements[i], elements[indexMax]] = [elements[indexMax], elements[i]];
        }
    }
    return(elements);
}