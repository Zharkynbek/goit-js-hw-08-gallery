import images from './gallery-items.js'

const ulRef = document.querySelector('.js-gallery')
const modalOpenRef = document.querySelector('.js-lightbox')
const modalImgRef = document.querySelector('.lightbox__image')
const closeModalRef = document.querySelector('.lightbox__button')

const galleryRef = images.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${original}" data-source="${preview}" alt="${description}"></a></li>`;
})
// console.log(galleryRef);
let activeIndex = 0;
    

ulRef.insertAdjacentHTML('beforeend', galleryRef.join(''))

// Open/Close function

ulRef.addEventListener('click', onOpenModal)
closeModalRef.addEventListener('click', onCloseModal)
window.addEventListener('click', closeModalOverlay)
window.addEventListener('keyup', onCloseModalRef)
// window.addEventListener('keyup', rightArrowClick)
// window.addEventListener('keyup', leftArrowClick)
window.addEventListener('keyup', changeModalImg)





// Open Modal

function onOpenModal(ev) {
    ev.preventDefault();
    if (ev.target.tagName === 'IMG') {
        modalOpenRef.classList.add('is-open')
        modalImgRef.src = ev.target.src
        modalImgRef.alt = ev.target.alt
    }
    
    for (let i = 0; i < galleryRef.length; i += 1) {
        if (galleryRef[i].includes(ev.target.src)) {
            console.log(galleryRef[i]);
            console.log(ev.target.src);
            activeIndex = i
        }
    }
}

function changeModalImg(e) {
    if (e.key === 'ArrowRight' && activeIndex < images.length-1) {
        activeIndex += 1
        modalImgRef.src = images[activeIndex].original
    } if (e.key === 'ArrowLeft' && activeIndex > 0) {
        activeIndex -= 1
        modalImgRef.src = images[activeIndex].original
    }
}






// function rightArrowClick(e) {
//     if (e.key === 'ArrowRight' && activeIndex < images.length-1) {
//         activeIndex += 1
//         modalImgRef.src = images[activeIndex].original
//     }
// }

// function leftArrowClick(e) {
//     if (e.key === 'ArrowLeft' && activeIndex > 0) {
//         activeIndex -= 1
//         modalImgRef.src = images[activeIndex].original
//     }
// }

// Close with Click on X

function onCloseModal() {
     modalOpenRef.classList.remove('is-open')
}

// Close with Click on Overlay

function closeModalOverlay(e) {
    if (e.target.tagName !== 'IMG') {
      onCloseModal()
    }   
}

// Close with Escape

function onCloseModalRef(event) {
    if (event.key === 'Escape') {
        onCloseModal()
    }
}

