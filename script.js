document.querySelector("button").onclick = function(){
    var email = document.querySelector(".email").value,
        confirm_email = document.querySelector(".confirm_email").value;

        if(email != confirm_email) {
            alert("Email didn't match try again!");
        }
        else if(email == confirm_email){
            alert("Thank you for signing your life away!!!");
        }
}