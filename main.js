const dateElement = document.getElementById("date");
const option = {weekday : "long", month : "short", day : "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-us", option);

document.getElementById("icon").addEventListener("click", () => {
    if(document.getElementById("note").value == ""){
        alert("This field can't be empty")
        return false;
    }
    const note = document.getElementById("note").value
    console.log(note);
    const cat = document.getElementById("catt").value
    console.log(cat);
    
})
document.getElementById("note").addEventListener("keyup", function(event) {
    if(event.keycode === 13){
        event.preventDefault();
        document.getElementById("icon").click();
    }
})