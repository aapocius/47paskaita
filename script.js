'use strict';

//Sukurti tuščią masyvą.
// Sukurti input, kuris pridės žodžius į masyvą.
// Suprogramuoti žodžių iš masyvo pridėjimą į DOM.
// Suprogramuoti žodžių iš masyvo pridėjimą į localstorage.
// Suprogramuoti žodžių pridėjimą iš localstorage atgal į masyvą.
// Papildomai: suprogramuoti žodžių ištrinimą iš masyvo ir per DOM.

var names   = [];
var nameInput   = document.getElementById("name");
var messageBox  = document.getElementById("display");

function insert ( ) {
 
 names.push( nameInput.value );  
 clearAndShow();
}



function clearAndShow () {
  // isvalo laukeli
  
  nameInput.value = "";
  
  // parodo 
 messageBox.innerHTML = "";
 messageBox.innerHTML += names.join("<br/> ") ;
  console.log(names);
//   location.reload();

//prideda masyva i localstorge
  localStorage.setItem("names", JSON.stringify(names));
var lsNames = JSON.parse(localStorage.getItem("names"));
// location.reload();

//trinimas neveikia :(
}
function deletename ( ){
dellnames = names.indexOf('names');
names.splice(dellnames.lenght -1);
dellnames();
}





// localStorage.setItem('myarray', JSON.stringify(names));
// var storedarray = JSON.parse(localStorage.getItem('myarray'));

// var lsnames = [];
// // lsnames[0] = prompt('naujas elementas?');
// localStorage.setItem('lsnames', JSON.stringify(lsnames));

// var savedlsnames = JSON.parse(localStorage.getItem('lsnames'));


// localstorage.lsnames = JSON.stringify(lsnames);
// var savedlsnames = JSON.parse(localStorage.lsnames);
