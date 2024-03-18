var languageButton =document.getElementById("Enbtn");
var languages =document.getElementById('en');

languageButton.addEventListener("click", () =>{

    languages.classList.toggle("hidden");
})

// modal
var submitbbutton= document.getElementById("submitbtn");
var modal = document.getElementById("modal");
var modalcontent = document.getElementById("modalcontent");
var X =getElementById= document.getElementById("close");




document.getElementById ("theform").addEventListener("submit", function(event){
    event.preventDefault();

    var userName =document.getElementById("name").value;
    var userEmail =document.getElementById('email').value;
    var userLocation= document.getElementById('location').value;
    var dateOfDeparture =document.getElementById("departdate").value;
    var dateOfArrival=document.getElementById("arrivedate").value;
    var userDestination=document.getElementById ("destination").value;

    document.getElementById("submittedDetails").innerHTML= "<strong>Name :</strong> " + userName +"<br> <strong>Email :</strong> " + userEmail + 
    "<br> <strong>Your location :</strong> " + userLocation + "<br> <strong>Your destination</strong> : " + userDestination
    + "<br><strong>Date of departure : </strong> " + dateOfDeparture + "<br> <strong>Date of arrival :</strong> " + dateOfArrival;
    modal.style.display="block";
});

X.onclick = ()=>{
    modal.style.display="none";
}
window.onclick =(event)=>{
    if(event.target==modal){
        modal.style.display="none";
    }
}

//hamburger

var hamburgerButton= document.getElementById("menu-btn");
var hamburgerMenu=document.getElementById("ham-menu");

hamburgerButton.addEventListener("click", ()=>{
    hamburgerButton.classList.toggle("show")
    hamburgerMenu.classList.toggle("show-menu")

});