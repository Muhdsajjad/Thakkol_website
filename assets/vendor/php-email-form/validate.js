/**
* PHP Email Form Validation - v3.5
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach(function (e) {
//     e.addEventListener('submit', function (event) {
//       event.preventDefault();

//       let thisForm = this;

//       console.log(e);


//       let action = thisForm.getAttribute('action');
//       // let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');


//       console.log(action);

//       if (!action) {
//         displayError(thisForm, 'The form action property is not set!')
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');


//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: { 'X-Requested-With': 'XMLHttpRequest' }
//     })
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         thisForm.querySelector('.loading').classList.remove('d-block');
//         if (data.trim() == 'OK') {
//           thisForm.querySelector('.sent-message').classList.add('d-block');
//           thisForm.reset();
//         } else {
//           throw new Error(data ? data : 'Server error: ' + action);
//         }
//       })
//       .catch((error) => {
//         displayError(thisForm, error);
//       });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();


$("#contact-form").submit((e) => {
  console.log(e.target);
  e.preventDefault()

  let thisForm = e.target

  console.log($("#contact-form").serialize());

  $.ajax({
    url: $("#contact-form").attr('action'),
    crossDomain: true,
    // headers: {
    //   'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
    // },
    data: $("#contact-form").serialize(),
    method: "POST",
    type: 'json',
    // dataType: 'jsonp',
    beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');
    },
    success: function (response) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.add('d-block');

      // swal("Your data has  submitted successfuly. please contact us  +91 80781 55047", "", "success");
      $("#contact-form")[0].reset()

      //window.location.href="https://google.com"
    },
    error: function (err) {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.error-message').innerHTML = err;
      thisForm.querySelector('.error-message').classList.add('d-block');

    },
    complete: function () { // Set our complete callback, adding the .hidden class and hiding the spinner.
      // $('#form-btn').removeClass('d-none')
      // $('.loaderr').addClass('d-none')
    },
  })
})
