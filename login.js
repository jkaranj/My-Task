document.getElementById("pass").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("button").click();
    }
  });

function passCheck() {
    const password = "123work123"
    const val = document.getElementById("pass").value;
    if(val == password)
    {
        console.log("correct");
        document.getElementById("msg").innerHTML = "correct";
        window.location.href = "home.html"
    }
    else if( val == "")
    {
        console.log("can't be empty");
        document.getElementById("msg").innerHTML = " field can't be empty";
    }
    else if( val != password)
    {
        console.log("incorrect");
        document.getElementById("msg").innerHTML = "Password is incorrect";
    }
}