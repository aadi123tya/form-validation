const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const Username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#ConfirmPassword");
const MobileNumber = document.querySelector("#Number");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const pass_word_suggest = document.querySelector("#checkbox");
const checkbox = document.querySelector("#checkbox");
const login = document.querySelector('#login');
const generatePassword = document.querySelector('#genPassword');


let pass;

//VALIDATION FUNCTION

email.addEventListener("click", emailValidation, false);

function emailValidation() {
  
  if (email.value != "") {
    const firstletter = email.value.charCodeAt(0);

    const symbols = [".com", "gmail", "@"];
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

function genPass() {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()+1234567890'
  let pass = ''
  for(let i=0;i<12;i++)
  {
    let idx = Math.floor(Math.random()*str.length);
    pass+=str.charAt(idx);

  }
  return pass

}


generatePassword.addEventListener('click',function(){
  password.value = genPass();
    
},false)




// password type changer
checkbox.addEventListener(
  "click",
  function () {
    if (password.type == "text") {
      password.type = "password";
      
    } else {
      password.type = "text";
    }
  },
  false
);

// assign the value of the password to confirm password
document.querySelector("#same_asButton").addEventListener(
  "click",
  () => {
    confirmPassword.value = password.value;
  },
  false
);

//check for emptyness
function checkempty() {
  let arr = [
    Name.value,
    email.value,
    Username.value,
    password.value,
    confirmPassword.value,
    MobileNumber.value,
  ];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "") {
      pass = i;
      return false;
    }
  }
  return true;
}


//submit
submit.addEventListener(
  "click",
  () => {
    let compo = [
      "Name",
      "email",
      "Username",
      "password",
      "confirmPassword",
      "MobileNumber",
    ];
    if (!checkempty()) alert(`${compo[pass]} is Empty`);
    else if (!emailValidation()) alert(`email is not valid`);
    else if (password.value != confirmPassword.value)
      alert(`${password.value}!= ${confirmPassword.value}`);
    else if (MobileNumber.value.length > 10 || MobileNumber.value.length < 10)
      alert(`MobileNumber is not valid`);
    else{
       document.querySelector('#signin').innerHTML='Sign in';

       const user={
        Name_1:Name.value,
        email_1:email.value,
        username_1:Username.value,
        password_1:password.value,
        confirmPassword_1:confirmPassword.value,
        MobileNumber_1:MobileNumber.value
       }
       console.log(user);
       
      }
  },
  false
);

//Reset

reset.addEventListener('click',()=>{
Name.value=''
password.value=''
confirmPassword.value = ''
Username.value =''
MobileNumber.value=''
email.value =''
console.log("reset")
document.querySelector('#signin').innerHTML='Sign Up'

},false)



