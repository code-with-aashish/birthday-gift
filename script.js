function login() {
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;

    if(name == "Roshan" || dob == "15feb1998") {
        alert("Please enter Name and Date of Birth");
    } else {
        window.location.href = "gallery.html";
    }
}
