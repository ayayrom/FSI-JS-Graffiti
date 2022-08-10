let header = document.querySelector('#page-header');
header.style.textAlign = 'left';

let dogImages = document.querySelectorAll('.dog-image');
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelectorAll('.dog-name');
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left';
}

let footer = document.querySelector('.footer');
footer.style.backgroundColor = "cyan";
footer.style.borderStyle = 'solid';

let images = document.querySelectorAll('.dog-image')
for(let i = 0; i < images.length; i++){
    images[i].style.transform = 'rotate(180deg)';
}
// Select some elements...