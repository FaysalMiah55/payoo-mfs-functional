document.getElementById("btn-login")
    .addEventListener('click', function(event){
        event.preventDefault()

        // get the number
        const mobileNumber = document.getElementById("input-mobile").value
        // get pin number
        const pinNumber = document.getElementById("input-pin").value

        // validation phone and pin
        if(mobileNumber === '01610' && pinNumber === '1234'){
            // go to home 
            window.location.href = '/home.html'
        }
        else{
            alert("incorrect phone or pin number! try again")
        }
    })