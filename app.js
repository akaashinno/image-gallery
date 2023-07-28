let imageIndex = 0;
let imageList = document.querySelectorAll(".gallery img");

function showImageAtIndex(index) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageList[index].src;
}

function openPopup(imageSrc,imageAlt) {
    let popup = document.getElementById("popup");
    popup.style.display = "block";

    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;

    imageIndex = Array.from(imageList).findIndex(img =>img.alt === imageAlt);
    console.log(imageIndex)
    
    
    // console.log(img.src,"condition wala hai");}
    // })
    // let altAttr = Array.from(imageList)[imageIndex].alt;
    // console.log(altAttr);

    // let index = Array.from(imageList).findIndex(img => img.alt === altAttr);

    // imageIndex = index !== -1 ? index : 0;
    
    // console.log(imageList)
    // imageIndex = Array.from(imageList).indexOf(img=>img.src == imageSrc);
    
    // console.log(imageIndex);
}

function closePopup(e) {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}

function showPreviousImage() {
    if (imageIndex > 0) {
        imageIndex--;
    } else {
        imageIndex = imageList.length - 1;
    }
    showImageAtIndex(imageIndex);
}

function showNextImage() {
    if (imageIndex < imageList.length - 1) {
        imageIndex++;
    } else {
        imageIndex = 0;
    }
    showImageAtIndex(imageIndex);
}

let miniPopup = document.getElementById("mini-popup");

miniPopup.addEventListener("click", function(event) {
        event.stopPropagation();
});