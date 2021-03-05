import images from './gallery-items.js'

const ulRef = document.querySelector('.js-gallery')
const modalOpenRef = document.querySelector('.js-lightbox')
const modalImgRef = document.querySelector('.lightbox__image')
const closeModalRef = document.querySelector('.lightbox__button')

const galleryRef = images.map(({ original, description }) => {
    
    return `<li class="gallery__item"><a class="gallery__link"><img class="gallery__image" src="${original}" alt="${description}></a></li>`
})

ulRef.insertAdjacentHTML('beforeend', galleryRef)

// Open/Close function

ulRef.addEventListener('click', onOpenModal)
closeModalRef.addEventListener('click', onCloseModal)
window.addEventListener('click', closeModalOverlay)
window.addEventListener('keyup', onCloseModalRef)


// Open Modal

function onOpenModal(e) {
    if (e.target.tagName === 'IMG') {
        modalOpenRef.classList.add('is-open')
        modalImgRef.src = e.target.src
        modalImgRef.alt = e.target.alt
    }   
}
// Close with Click on Image

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