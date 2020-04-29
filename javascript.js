let imageUrl = document.getElementById('url');
let topText = document.getElementById('upper');
let bottomText = document.getElementById('bottom');
let pic = document.getElementById('picDiv')


document.getElementById('forms').addEventListener('submit',addMeme)

function addMeme(){
    return pic.appendChild(displayImage());
}

function displayImage(){  
    let element = document.createElement('div')
    element.setAttribute("position", "relative");
    element.setAttribute("class", "memeContainer");
    element.appendChild(addImage());
    if (document.getElementById('upper').value !== null){
        element.appendChild(addTopText());
    }
    if (document.getElementById('bottom').value !== null){
        element.appendChild(addBottomText())
    }

    element.addEventListener('click', function(){
        deleteMeme(element);
    })
    clearValues()
    return element;
}





function addImage(){
let image = document.createElement('IMG')
image.setAttribute('src', document.getElementById('url').value)  
return image;
}

function addTopText() {
let top = document.createElement('p');
top.setAttribute('id', 'topInput');
top.innerHTML = document.getElementById('upper').value
top.setAttribute('position', 'absolute')
return top;
}

function addBottomText() {
    let bottom = document.createElement('p');
    bottom.setAttribute("id", "bottomInput");
    bottom.innerHTML = document.getElementById("bottom").value;
    bottom.setAttribute("position", "absolute");
    return bottom;
}

function clearValues() {
    document.getElementById("url").value = "";
    document.getElementById("upper").value = "";
    document.getElementById("bottom").value = "";
}

function deleteMeme(element){
    element.remove();
}

