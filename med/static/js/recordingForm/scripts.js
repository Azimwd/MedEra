const stepMenuOne = document.querySelector(".formbold-step-menu1");
const stepMenuTwo = document.querySelector(".formbold-step-menu2");
const stepMenuThree = document.querySelector(".formbold-step-menu3");

const stepOne = document.querySelector(".formbold-form-step-1");
const stepTwo = document.querySelector(".formbold-form-step-2");
const stepThree = document.querySelector(".formbold-form-step-3");

const formSubmitBtn = document.querySelector(".formbold-btn");
const formBackBtn = document.querySelector(".formbold-back-btn");

formSubmitBtn.addEventListener("click", function (event) {
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
    formSubmitBtn.textContent = "Next Step";
    formBackBtn.classList.add("active");
  } else if (stepMenuTwo.className == "formbold-step-menu3 active") {
    event.preventDefault();

    stepMenuTwo.classList.remove("active");
    stepMenuThree.classList.add("active");

    stepTwo.classList.remove("active");
    stepThree.classList.add("active");

    formBackBtn.classList.remove("active");
    formSubmitBtn.textContent = "Submit";
    formBackBtn.classList.add("active");
  }
});

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
    formSubmitBtn.textContent = "Next Step";
  } else if (stepMenuThree.className == "formbold-step-menu3 active") {
    event.preventDefault();

    stepMenuOne.classList.remove("active");
    stepMenuTwo.classList.add("active");
    stepMenuThree.classList.remove("active");

    stepOne.classList.remove("active");
    stepTwo.classList.add("active");
    stepThree.classList.remove("active");

    formBackBtn.classList.add("active");
  }
});

const doctor_select = document.querySelector("#doctor-select");

const doctor_name = document.querySelector("#doctor-name");
const doctor_specialization = document.querySelector("#doctor-specialization");
const doctor_email = document.querySelector("#doctor-email");
const doctor_phone = document.querySelector("#doctor-phone");
const doctor_description = document.querySelector("#doctor-description");
const doctor_times = document.querySelector("#doctor-times");
const doctor_info = document.querySelector("#doctor-info");

document.addEventListener("DOMContentLoaded", function () {
  const doctorSelect = document.getElementById("doctor-select");
  if (doctorSelect) {
      doctorSelect.value = "Choose doctor";
  }
});

doctor_information();

function doctor_information(){
  $(document).ready(function () {
    $(doctor_select).change(function () {
      const doctorId = $(this).val();
      if (doctorId) {
        $.ajax({
          url: `/recording/${doctorId}/`,
          method: "GET",
          success: function (data) {
            $(doctor_name).text(data.name);
            $(doctor_specialization).text(data.specialization);
            $(doctor_phone).text(data.phone);
            $(doctor_description).text(data.description);
  
            const timesList = $(doctor_times);
            timesList.empty();
            for (const [time, available] of Object.entries(
              data.available_times
            )) {
              if (available) {
                timesList.append(
                  `<option disabled="disabled">${time} There is already a recording</option>`
                );
              } else {
                timesList.append(`<option>${time}</option>`);
              }
            }

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

