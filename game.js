const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play =!false;
let newWords ="";
let randWords ="";
let sWords =[ 'apple','function','knoweldge','ayuraveda','organic','ingredients','directions','aroma','herbs','massage'];


createNewWords= () => {
    let ranNum =(Math.random() * sWords.length);
    //console.log(ranNum);
    let newTempSwords = sWords[ranNum];
    //console.log(newTempSwords.split(""));
    return newTempSwords;
}

const scrambleWords=(arr) => {
      for( let i = arr.length-1; i>0 ; i--){
          let temp= arr[i];
          console.log(temp);
          let j = Math.floor(Math.random()* (i+1));
          console.log(i);
          console.log(j);

        }
        arr[i]=arr[j];
        arr[j]=temp;
        return arr;
}

btn.addEventListener('click', function{
    if(!play){
        paly=true;
        btn.innerHTML='Guess'
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("").join(""));
        //console.log (randWords.join(""));
        msg.innerHTML = randWords;

    }

    else {
        let tempWord = guess.value;
        if (tempWord==newWords){
            console.log('correct');
            play = flase ;
            msg.innerHTML =`Aweosme`
        }
        
        else {
            console.log('incorrect');
            msg.innerHTML =`Sorry!!!! It is ${newWords}`
        }
    }
})
