//Shows pop-up for Log-In Screen
function toggleLogin() {
  Swal.fire({
    title: 'Login',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    preConfirm: () => {
      const username = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value

      if (username == "admin" && password == "Admin123" || username == "volunteer" && password == "volunteer") {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Logged in successfully'
        })
        document.getElementById("w_account").innerHTML = "<img src=\"../resources/person.png\" style=\"height:20px; margin-right: 10px;\">" + "user69420" + "<a onclick=\"logout()\"> | LOG OUT</a>";
      } 
      else {
        Swal.showValidationMessage(`Please enter correct Log In Information`)
      } 
    }
  })
}


function logout() {
  // document.getElementById("w_account").innerHTML = "<a onclick=\"toggleLogin()\" style=\"cursor: pointer;\">LOG IN</a> | <a onclick=\"toggleSignup()\" style=\"cursor:pointer;\">SIGN UP</a>";
  // Swal.fire({
  //         icon: 'success',
  //         title: 'Log Out Successful!',
  //         text: 'You have logged out',
  //         button: 'Continue'
  //       })
    Swal.fire({
      title: 'Are you sure you want to Log Out?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Log Out Successful!', '', 'success')
        document.getElementById("w_account").innerHTML = "<a onclick=\"toggleLogin()\" style=\"cursor: pointer;\">LOG IN</a> | <a onclick=\"toggleSignup()\" style=\"cursor:pointer;\">SIGN UP</a>";
      } 
    })
}

function toggleSignup() {
  Swal.fire({
    title: 'Sign Up',
    html: `<input type="text" class="swal2-input" placeholder="Username" id="login">
    <input type="email" class="swal2-input" name="Mail" placeholder="johndoe@example.com" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    <input type="password" class="swal2-input" placeholder="Password" id="password">
    <input type="password" class="swal2-input" name="ConfirmPassword" placeholder="Confirm Password" id="con_password">`,
    confirmButtonText: 'Sign Up',
    focusConfirm: false,
    preConfirm: () => {
      //Variables of fields in sign up
      const username = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      const email = Swal.getPopup().querySelector('#email').value
      const conpass = Swal.getPopup().querySelector('#con_password').value

      //Variables for proper characters
      var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
      var strongPass = /^[A-Za-z]\w{7,14}$/;
      
      //empty fields
      if(!username || !password || !email || !conpass) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'ERROR!',
        //   text: 'Fill in all the fields!',
        //   button: 'Try again'
        // })

        Swal.showValidationMessage(`Please Fill in all the fields!`)
      } else if(!email.match(validRegex)) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'ERROR!',
        //   text: 'Use a valid email!',
        //   button:'Try again',
        // })

        Swal.showValidationMessage(`Please use a valid email!`)
      } else if (!password.match(strongPass)) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'USE STRONG PASSWORD',
        //   text: 'Must contain at least one  number and one uppercase and lowercase letter, and at least 7 to 14 characters',
        //   button:'Try again',
        // })

        
        Swal.showValidationMessage(`Password must contain at least one NUMBER, one UPPERCASE and LOWERCASE letter, and at least 7 to 14 characters`)
        
      }else if (password != conpass) {
        Swal.showValidationMessage(`Passwords don't match!`)
      } 
      
      else {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully!',
          text: 'You have signed up!',
          button: 'Continue'
        })
      }
    } 
  })
}

async function openSidebar() {
  await Swal.fire({
    html:'<div class="sidemenu"><ul><li><a href="index.html">HOME</a></li><br><br><li><a href="post.html">POST</a></li><br><br><li><a href="map.html">MAP</a></li><br><br><li><a href="cont.html">CONTACT</a></li><br><br><li><a href="about.html">ABOUT</a></li><ul></div>',
    position: 'top-start',
    showClass: {
      popup: `
      animate__animated
      animate__fadeInLeft
      animate__faster
    `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutLeft
        animate__faster
    `
    },
    grow: 'column',
    width: 300,
    showConfirmButton: false,
    showCloseButton: true
  })
}



