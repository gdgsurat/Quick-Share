var config = {
  apiKey: "AIzaSyCfjghxYB6x5312g9W-A5bfAPusD_VeMX8",
  authDomain: "quickshare-web.firebaseapp.com",
  databaseURL: "https://quickshare-web.firebaseio.com",
  projectId: "quickshare-web",
  storageBucket: "quickshare-web.appspot.com",
  messagingSenderId: "232482638684"
};
firebase.initializeApp(config);
var database = firebase.database();
var err = document.querySelector('#err');
initApp = function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      var greet = document.querySelector('.greeting');
      greet.innerHTML = `Welcome ${displayName}`;
      user.getIdToken().then(function (accessToken) {
        database.ref('users/' + uid).set({
          Name: displayName,
          Email: email
        }).then(() => {
          err.innerHTML = 'succesfully set name and email';
        }).catch(e => {
          err.innerHTML = e.message;
        });

      });
    } else {
      // User is signed out.
    }
  }, function (error) {
    console.log(error);
  });
};
var logOut = document.getElementById('logOut');
logOut.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    err.innerHTML = 'Succesfully Logged Out!';
    window.location.replace('/');
  });
});

window.addEventListener('load', function () {
  initApp()
});