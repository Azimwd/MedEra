const stepMenuOne = document.querySelector(".formbold-step-menu1");
const stepMenuTwo = document.querySelector(".formbold-step-menu2");
const stepMenuThree = document.querySelector(".formbold-step-menu3");

const stepOne = document.querySelector(".formbold-form-step-1");
const stepTwo = document.querySelector(".formbold-form-step-2");
const stepThree = document.querySelector(".formbold-form-step-3");

const formNextBtn = document.querySelector(".formbold-btn");
const formSubmitBtn = document.querySelector(".formbold-btn.submit");
const formBackBtn = document.querySelector(".formbold-back-btn");

const doctor_select = document.querySelector("#id_doctor-select");
const doctor_name = document.querySelector("#id_doctor-name");
const doctor_id = document.querySelector("#id_doctor_id-input");
const doctor_specialization = document.querySelector("#id_doctor-specialization");
const doctor_email = document.querySelector("#doctor-email");
const doctor_phone = document.querySelector("#id_doctor-phone");
const doctor_description = document.querySelector("#id_octor-description");
const doctor_times = document.querySelector("#id_doctor-times");
const doctor_info = document.querySelector("#doctor-info");

function NextBtn(){
  formNextBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (stepMenuOne.className == "formbold-step-menu1 active") {
      event.preventDefault();
  
      stepMenuOne.classList.remove("active");
      stepMenuTwo.classList.add("active");
  
      stepOne.classList.remove("active");
      stepTwo.classList.add("active");
  
      formBackBtn.classList.add("active");
    } else if (stepMenuTwo.className == "formbold-step-menu2 active") {
      event.preventDefault();
      
      stepMenuTwo.classList.remove("active");
      stepMenuThree.classList.add("active");
  
      stepTwo.classList.remove("active");
      stepThree.classList.add("active");
  
      formBackBtn.classList.remove("active");
      formBackBtn.classList.add("active");
  
      formNextBtn.classList.remove("active");
      formSubmitBtn.classList.add("active");
  
    } 
  });
}

function BackBtn(){
  formBackBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (stepMenuTwo.className == "formbold-step-menu2 active") {
      stepMenuOne.classList.add("active");
      stepMenuTwo.classList.remove("active");
      stepMenuThree.classList.remove("active");
  
      stepOne.classList.add("active");
      stepTwo.classList.remove("active");
      stepThree.classList.remove("active");
  
      formBackBtn.classList.remove("active");
  
      formNextBtn.classList.add("active");
      formSubmitBtn.classList.remove("active");
  
    } else if (stepMenuThree.className == "formbold-step-menu3 active") {
      event.preventDefault();
  
      stepMenuOne.classList.remove("active");
      stepMenuTwo.classList.add("active");
      stepMenuThree.classList.remove("active");
  
      stepOne.classList.remove("active");
      stepTwo.classList.add("active");
      stepThree.classList.remove("active");
  
      formBackBtn.classList.add("active");
  
      formNextBtn.classList.add("active");
      formSubmitBtn.classList.remove("active");
    }
  });
}


function clearselect(){
  document.addEventListener("DOMContentLoaded", function () {
    const doctorSelect = document.getElementById("id_doctor-select");
    if (doctorSelect) {
        doctorSelect.value = "Choose doctor";
    }
  });  
}


let doctorId
function doctor_information(){
  $(document).ready(function () {
    $(doctor_select).change(function () {
      doctorId = $(this).val();
      if (doctorId) {
        $.ajax({
          url: `/recording/${doctorId}/`,
          method: "GET",
          success: function (data) {
            $(doctor_id).text(doctorId);
            $(doctor_name).text(data.name);
            $(doctor_specialization).text(data.specialization);
            $(doctor_phone).text(data.phone);
            $(doctor_description).text(data.description);
  
            const timesList = $(doctor_times);
            timesList.empty();
            let cout_for_value = 8;
            for (const [time, available] of Object.entries(
              data.available_times
            )) {
              if (available) {
                timesList.append(
                  `<option disabled="disabled" value="time${cout_for_value}">${time} There is already a recording</option>`
                );
              } else {
                timesList.append(`<option value="time${cout_for_value}">${time}</option>`);
              }
              cout_for_value += 1;
            }
            const id_doctor_name_input = document.querySelector("#id_doctor-name_input");
            const doctor_name_span = document.querySelector(".doctor_name");
            id_doctor_name_input.value = doctor_name_span.textContent;
            $(doctor_info).show();
          },
          error: function () {
            $(doctor_info).hide();
          },
        });
      } else {
        $(doctor_info).hide();
      }
    });
  });

};


function update_time(){
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
  formSubmitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const selectedTime = doctor_times.value;

      if (selectedTime && doctorId) {
          fetch(`/recording/update-time/${doctorId}/`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  'X-CSRFToken': csrftoken,
              },
              body: JSON.stringify({ time: selectedTime }),
          })
          .then(response => response.json())
          .then(data => {
              if (data.success) {
                document.querySelector('form').submit();
                  // window.location.href = '/';
              } else {
                  // console.log(data.message);
              }
          })
          .catch(error => console.error("Error:", error));
      } else {
          alert("Please select a doctor and a time.");
      }
  });
}


NextBtn();
BackBtn();
clearselect()
doctor_information();
update_time();