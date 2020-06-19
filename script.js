function converter(){
    let input = Number(document.querySelector('#inputNumbers').value)
    
    //input check
    let entrada = String(input)
    for(let i=0; i<entrada.length; i++){
        if(entrada.charAt(i) != 0 && entrada.charAt(i) != 1){
            window.alert('invalid number')
            //Clear the box input
            document.querySelector('#inputNumbers').value=''
        }
    }

    //Mode easy
    result = parseInt(entrada, 2)

    //Mode hard
    // for(let i=0; i<entrada.length; i++){
    //     result += entrada.charAt(i)*(Math.pow(2,entrada.length-(i+1)))
    // }
    
    //Check to clear the exit button
    for(let i=0; i<entrada.length; i++){
        if(entrada.charAt(i) != 0 && entrada.charAt(i) != 1){
            document.querySelector('#outputNumbers').value = 0
        }else{
            document.querySelector('#outputNumbers').value = result
        }
    }
    
}