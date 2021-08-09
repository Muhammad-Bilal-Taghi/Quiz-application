const fblogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      console.log("user===>", user)
   })
    .catch((error) => {
        console.log(error.message)
      
    });
    }

    let signup = () => {
        var email = document.getElementById('email').value
        var password = document.getElementById('pass').value
        // console.log(email,password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    
    
    let signin = () => {
        var email = document.getElementById('emails').value
        var password = document.getElementById('passw').value
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    } 