var config = {
    apiKey: "AIzaSyCfjghxYB6x5312g9W-A5bfAPusD_VeMX8",
    authDomain: "quickshare-web.firebaseapp.com",
    databaseURL: "https://quickshare-web.firebaseio.com",
    projectId: "quickshare-web",
    storageBucket: "quickshare-web.appspot.com",
    messagingSenderId: "232482638684"
  };
  firebase.initializeApp(config);
    var database=firebase.database();
    
      var uiConfig = {
        callbacks:{
          signInSuccess:function(currentUser,credentials,redirectUrl){
            // adding the next step after sign in
        
            var postListRef=database.ref().child('users/');
            var enter=document.getElementById('enter');
            function writeUserData(){
              console.log('this worked');
              var name=document.getElementById('names');
              var txtemails=document.getElementById('emails');
              var nameTxt=name.value;
              var emailTxt=txtemails.value;
              var err=document.getElementById('err');
              

              postListRef.push().set({
                Name:nameTxt,
                Email:emailTxt
              }).then(()=>{
                err.innerHTML='succesfully set name and email';
              }).catch(e=>{
                err.innerHTML=e.message;
              });
            }
          
          enter.addEventListener('click',writeUserData);  
          redirectUrl='http://localhost:5000/landingPage.html';
            

          },
          
        },

        signInSuccessUrl: 'http://localhost:5000/landingPage.html',
        signInOptions: [
          
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          
        ],
      };

      var second=document.getElementById('second');
      var logOut=document.getElementById('logOut');
      logOut.addEventListener('click',()=>{
        firebase.auth().signOut().then(()=>{
          err.innerHTML='Succesfully Logged Out!'
        })
      });
      initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            second.classList.remove('hide')
            second.classList.add('show');
            first.classList.remove('show')
            first.classList.add('hide');
          }
           else {
            // User is signed out.second.classList.remove('hide')
            second.classList.remove('show')
            second.classList.add('hide');
            first.classList.remove('hide')
            first.classList.add('show');

          }
        }, function(error) {
          console.log(error);
        });
        
      };

      window.addEventListener('load',initApp);

      


      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);

     