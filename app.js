let container = document.getElementById('container');

for (let i = 0; i < 600; i++) {
    let newDiv = document.createElement('div'); 
    newDiv.className = "block";

    container.appendChild(newDiv);
}
