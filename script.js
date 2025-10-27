const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;
console.log(answer);

input.addEventListener("keypress",function(e){
    if(e.keyCode===13){
        play();
    }
})

button.addEventListener("click",play);

function play() {
    const userNumber = document.querySelector("#guess").value;
    if(userNumber<1 || userNumber>20){
        Swal.fire({
            icon: 'error',
            title: 'Oй',
            text: 'Введи число от 1 до 10!',
          })
    }
    else if(isNaN(userNumber)){
        Swal.fire({
            icon: 'error',
            title: 'Oй',
            text: 'Введи число!',
          })
    }
    else{
        if(userNumber < answer){
            Swal.fire('Введи выше')
        }
        else if(userNumber > answer){
            Swal.fire('Введи ниже')
        }
        else{
            Swal.fire({
                title: 'Победа!',
                
                imageUrl: 'https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'victory',
              })
        }
        }
  guess.value='';
        
    }

