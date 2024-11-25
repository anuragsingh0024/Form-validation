const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cPassword = document.getElementById('confirm-password')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    validateInputs();
})

const validateInputs = () => {
           const usernameValue = username.value.trim();
           const emailValue = email.value.trim();
           const passwordValue = password.value.trim();
           const cPasswordValue = cPassword.value.trim();

           if(usernameValue === ''){
                  setError(username, "Username is must be required")
           }
           else {
              setSuccess(username)
           }

           if(emailValue === ''){
            setError(email, "Email must be required")
           }
           else if(!isValidEmail(emailValue)){
                  setError(email, "Please Enter a valid email")
           }
           else {
            setSuccess(email)
           }

           if(passwordValue === ''){
             setError(password, "Password must be required")
           }
           else if(passwordValue.length<8){
               setError(password, "Password must be atleast 8 characters")
           }
           else {
            setSuccess(password)
           }

          if(cPasswordValue===''){
            setError(cPassword, "Password must be required")
          }
        else  if(cPasswordValue != passwordValue){
              setError(cPassword, "Password does'nt match")
          }
          else {
           setSuccess(cPassword)
          }
}

const setError = (element, message)=>{
         const inputControl = element.parentElement;
         const displayError = inputControl.querySelector('.error');

         displayError.textContent = message
         inputControl.classList.remove('success')
         inputControl.classList.add('error')
}

const setSuccess = (element)=> {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error')

    displayError.textContent = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const  isValidEmail = (email) => {
   
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);

}