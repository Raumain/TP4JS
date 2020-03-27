function sum(numbers){
    let size=numbers.length;
    let sum=0;
    for (let i=0;i<size;i++){
        sum+=numbers[i];
    }
    return sum;
}

function sum2(numbers){
    let sum=0;
    for (let number in numbers){
        sum+=numbers[number];
    }
    return sum;
}


function longestWord(words){
    let size=words.length;
    let longest=0;
    let lword;
    for (let i=0;i<size;i++){
        if (words[i].length>longest){
            lword=words[i];
            longest=words[i].length
        }
    }
    return lword;
}

function range(min, max, step){
    let size=math.floor((max-min)/step);
    let tab =[];
    let temp =min;
    for (let i=0;i<size;i++){
        tab[i]=temp;
        temp=temp + step;
        return tab
    }
}
function nbOccurences(text,mot){
    let tab=text.split(" ");
    let size=text.length;
    let occur=0;
    for (let i=0;i<size;i++){
        if (tab[i]==mot){
            occur++;
        }
    }
    return occur;
}