/** @format */
console.log("Connected =]");

//==FLASHLIGHT EFFECT (FUCNTION, QUERY)==//
const spotlightEl = document.querySelector("#spotlight");

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 10px, #000000ee 350px)`;
}

document.addEventListener("mousemove", handleMouseMove);
console.log(spotlightEl);

//==PASSWORD SECTION==//

const correctPin = "0268"; // Set your desired PIN
const pinInput = document.getElementById("pinInput");

function checkPin() {
  const enteredPin = pinInput.value;
  if (enteredPin === correctPin) {
    // Redirect to the actual website or unlock content
    window.location.href =
      "http://127.0.0.1:5500/GitHub-Missions/mission2-justhaylz/mission2.html";
  } else {
    alert("Incorrect PIN. Try again.");
  }
}

//==FORM AND LOOP SECTION==//

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function submitForm() {
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Create an array to store form data
  const formDataArray = [];

  // Add form data to the array
  formDataArray.push(name);
  formDataArray.push(email);
  formDataArray.push(phone);
  formDataArray.push(message);

  const submitToAdd = {
    name: submitE1.value,
    email: submitE2.value,
    phone: submit3.value,
    message: submit4.value,
  };

  formDataArray.push(submitToAdd);

  for (let i = 0; i < formDataArray.length; i++) {
    console.log((submitToAdd += formDataArray[i]));
  }
}

//  form.addEventListener('submit', function (event) {
//     for (i = 0; i < form.elements.length; i++);

// const input = form.elements[i];

//      if (input.elements === "INPUT") {
//        form.push(input.value);
//      }
//    }
//  );
//  console.log(form);
