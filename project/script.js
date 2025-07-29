function saveData() {
    const name=document.getElementById("name").value.trim();
    const age=document.getElementById("age").value.trim();

    if(name === "" || age === ""){
        alert("please fill in all fields");
        return;
    }

    const user = {name,age};
    const jsonData = JSON.stringify(user);
    localStorage.setItem("userprofile", jsonData);

    alert("data saved suessfully!");
    displayData(user);
}

function loadData(){
    const data = localStorage.getItem("userprofile");

    if(!data){
        document.getElementById("output").innerHTML = "<p>No data found.</p>";
        return;
    }
    const user = JSON.parse(data);
    displayData(user);

}

function clearData(){
    localStorage.removeItem("userprofile");
    document.getElementById("output").innerHTML = "<p> Data cleared.</p>";
    document.getElementById("name").value="";
    document.getElementById("age").value="";

}

function displayData(user){
document.getElementById("output").innerHTML =`
<p><strong>name:</strong> ${user.name}</p>
<p><strong>age:</strong> ${user.name}</p>
`;
}