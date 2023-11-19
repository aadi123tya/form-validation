const username = document.querySelector('#user')
const email = document.querySelector('#user_email')
const submit = document.querySelector('#submit')
const input = document.querySelector('input');






// email validation
function emailValidation() {
  
    if (email.value != "") {
      const firstletter = email.value.charCodeAt(0);
  
      
      if (firstletter >= 69 && firstletter <= 90) return false
      else if (
        !email.value.includes("gmail") ||
        !email.value.includes("@") ||
        !email.value.includes(".com")
      )
        return false
      else return true
    } 
  }

 

  submit.addEventListener('click',function(){
    if(username.value==''){alert('Username is empty')}
    else if(email.value==''){alert('email is empty')}
    else if(!emailValidation()){alert('email is not valid')}
    else{
        
        document.querySelector('h1').innerHTML='You Logged in'
        const user={
            username:username.value,
            email:email.value,

        }
        console.log(user)
        username.value='';
        email.value='';
        
    }
    
  
  },false)

