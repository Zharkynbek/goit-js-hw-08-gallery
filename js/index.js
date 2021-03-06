import images from './gallery-items.js'

const ulRef = document.querySelector('.js-gallery')
const modalOpenRef = document.querySelector('.js-lightbox')
const modalImgRef = document.querySelector('.lightbox__image')
const closeModalRef = document.querySelector('.lightbox__button')

const galleryRef = images.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${original}" data-source="${preview}" alt="${description}></a></li>`
}).join('')

ulRef.insertAdjacentHTML('afterbegin', galleryRef)

// Open/Close function

ulRef.addEventListener('click', onOpenModal)
closeModalRef.addEventListener('click', onCloseModal)
window.addEventListener('click', closeModalOverlay)
window.addEventListener('keyup', onCloseModalRef)


// Open Modal

function onOpenModal(ev) {
    ev.preventDefault();
    if (ev.target.tagName === 'IMG') {
        modalOpenRef.classList.add('is-open')
        modalImgRef.src = ev.target.src
        modalImgRef.alt = ev.target.alt
    }   
}
// Close with Click on X

function onCloseModal() {
     modalOpenRef.classList.remove('is-open')
}

// Close with Click on Overlay

function closeModalOverlay(e) {
    if (e.target.tagName !== 'IMG') {
        modalOpenRef.classList.remove('is-open')
    }   
}

// Close with Escape

function onCloseModalRef(event) {
    if (event.key === 'Escape') {
        modalOpenRef.classList.remove('is-open')
    }   
}