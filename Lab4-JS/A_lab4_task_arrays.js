function AgetResult(){
    let placeholderValue = document.getElementById('A-array-elements').value;
    let result='Вхідні: ';
    let elements = placeholderValue.split(' ');
    
    for (let i = 0; i < elements.length; i++) {
        result += elements[i] + ' ';
    }
    result +='\nСума елементів із парними індексами: ';
    result +=AGetSumm(AGetOddEvenArrays(elements).odd);
    result +='\nДобуток від\'ємних елементів: ';
    result +=ANegativeProduct(elements);

    result +='\nмаксимальний елемент серед додатних чисел: ';
    result +=AGetMaxPositive(elements).Value;
    result +='\nІндекс максимального елемента серед додатних чисел: ';
    result +=AGetMaxPositive(elements).Id;
    

    result +='\nСортування: ';
    let sortArray = ASort(elements);
    for (let i = 0; i < sortArray.length; i++) {
        result += sortArray[i] + ' ';
    }

    document.getElementById('A-result').value = result;
}

function AGetSumm(elements){
    let Summ=0;
    for(let i = 0; i < elements.length; i++){
        Summ += +elements[i];
    }
    return(Summ);  
}
function ANegativeProduct(elements){
    let Prod=1;
    for(let i = 0; i < elements.length; i++){
        if(elements[i]<0){
            Prod *= elements[i];
        }
    }
    return(Prod);  
}
function AGetMaxPositive(elements){
    let MaxPos = 0;
    let id = 0;
    for(let i = 0; i < elements.length; i++){
        if(+elements[i] > +MaxPos){
            MaxPos = +elements[i];
            id = i;
        }
    }
    return{
        Value: MaxPos,
        Id: id,
    };  
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
            if (+elements[indexMax] > +elements[j]) {
                indexMax = j;
            }
        }
        if (indexMax !== i) {
            [elements[i], elements[indexMax]] = [elements[indexMax], elements[i]];
        }
    }
    return(elements);
}