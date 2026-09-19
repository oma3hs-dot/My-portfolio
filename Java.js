document.querySelector("#submit").addEventListener("click", () => {

    let name = document.querySelector("#iname").value;

    if (name != "") {

        alert("Hello, " + name + " !");

    }

});

document.querySelector("#iname").addEventListener("keyup", () => {

    let name = document.querySelector("#iname").value;

    document.querySelector("#count").innerHTML = name.length + " / 30";

});