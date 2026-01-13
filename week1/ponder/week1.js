
// let selectElem = document.getElementById('webdevlist');
// selectElem.addEventListener('change', function(){
//     let codeValue = selectElem.value;
//     console.log(codeValue);
// })
        
// try hidding or highlighting

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    
    const Headers= document.querySelectorAll('h2')

    document.querySelector('.highlight')?.classList.remove('highlight');

    if (codeValue == 'html'){
        Headers[0].classList.add('highlight')

        // console.log(Headers[0])
    }

    else if (codeValue == 'css'){
        Headers[1].classList.add('highlight')

    }

    else{
        Headers[2].classList.add('highlight')
    }


})
                