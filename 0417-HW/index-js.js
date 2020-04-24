//js版

document.getElementById("addImg").addEventListener("click", function(event){
    let url = document.getElementById('imgUrl').value;
    let $img = document.createElement("img");
    let $div = document.createElement("div");
    $div.className = "col-6 col-md-4 mt-2 mb-2"
    $img.className = "img-thumbnail"
    $img.src = url;
    
    $div.appendChild($img)
    document.getElementById("imgList").appendChild($div);
}, false); 



