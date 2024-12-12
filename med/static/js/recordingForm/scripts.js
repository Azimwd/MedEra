const stepMenuOne = document.querySelector('.formbold-step-menu1')
const stepMenuTwo = document.querySelector('.formbold-step-menu2')
const stepMenuThree = document.querySelector('.formbold-step-menu3')

const stepOne = document.querySelector('.formbold-form-step-1')
const stepTwo = document.querySelector('.formbold-form-step-2')
const stepThree = document.querySelector('.formbold-form-step-3')

const formSubmitBtn = document.querySelector('.formbold-btn')
const formBackBtn = document.querySelector('.formbold-back-btn')

formSubmitBtn.addEventListener("click", function(event){
  event.preventDefault()
  if(stepMenuOne.className == 'formbold-step-menu1 active') {
      event.preventDefault()

      stepMenuOne.classList.remove('active')
      stepMenuTwo.classList.add('active')

      stepOne.classList.remove('active')
      stepTwo.classList.add('active')

      formBackBtn.classList.add('active')

    } else if(stepMenuTwo.className == 'formbold-step-menu2 active') {
      event.preventDefault()

      stepMenuTwo.classList.remove('active')
      stepMenuThree.classList.add('active')

      stepTwo.classList.remove('active')
      stepThree.classList.add('active')

      formBackBtn.classList.remove('active')
      formSubmitBtn.textContent = 'Submit'
      formBackBtn.classList.add('active')

    }else if(stepMenuTwo.className == 'formbold-step-menu3 active') {
        
        event.preventDefault()
  
        stepMenuTwo.classList.remove('active')
        stepMenuThree.classList.add('active')
  
        stepTwo.classList.remove('active')
        stepThree.classList.add('active')
  
        formBackBtn.classList.remove('active')
        formSubmitBtn.textContent = 'Submit'
        formBackBtn.classList.add('active')
  
      } 
})

formBackBtn.addEventListener("click", function(event){
    event.preventDefault()
    if(stepMenuTwo.className == 'formbold-step-menu2 active') {
        stepMenuOne.classList.add('active')
        stepMenuTwo.classList.remove('active')
        stepMenuThree.classList.remove('active')

        stepOne.classList.add('active')
        stepTwo.classList.remove('active')
        stepThree.classList.remove('active')

        formBackBtn.classList.remove('active')
        formSubmitBtn.textContent = 'Next Step'

      }else if(stepMenuThree.className == 'formbold-step-menu3 active') {
          event.preventDefault()
    
          stepMenuOne.classList.remove('active')
          stepMenuTwo.classList.add('active')
          stepMenuThree.classList.remove('active')
  
          stepOne.classList.remove('active')
          stepTwo.classList.add('active')
          stepThree.classList.remove('active')
  
          formBackBtn.classList.add('active')
        } 
  })