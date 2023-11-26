export function screenshots() {
const scrn = document.querySelectorAll('.screenshot__image');
const modal1 = document.querySelector('.modal-1')
const modal2 = document.querySelector('.modal-2')
const modal3 = document.querySelector('.modal-3')
const modal4 = document.querySelector('.modal-4')
const closeCross = document.querySelector('.modal__close')
scrn.forEach(el => el.addEventListener("click", attachElem))

// function handleClick(event) {
//     console.log("click");
//     modal.classList.add('modal__active');
//     }
// }

function attachElem(event) {
    if (this.classList.contains('pic-1')) {
    modal1.classList.add('modal__active');
    modal1.addEventListener('click', handleOutside);
    document.addEventListener('keydown', closeByEsc);
    closeCross.addEventListener('click', closeModal)
    } else if (this.classList.contains('pic-2')) {
        modal2.classList.add('modal__active');
        modal2.addEventListener('click', handleOutside);
        document.addEventListener('keydown', closeByEsc);
        closeCross.addEventListener('click', closeModal)
        } else if (this.classList.contains('pic-3')) {
            modal3.classList.add('modal__active');
            modal3.addEventListener('click', handleOutside);
            document.addEventListener('keydown', closeByEsc);
            closeCross.addEventListener('click', closeModal)
            } else if (this.classList.contains('pic-4')) {
                modal4.classList.add('modal__active');
                modal4.addEventListener('click', handleOutside);
                document.addEventListener('keydown', closeByEsc);
                closeCross.addEventListener('click', closeModal)
                }

};

function closeModal(event) {
    modal1.classList.remove('modal__active');
    modal2.classList.remove('modal__active');
    modal3.classList.remove('modal__active');
    modal4.classList.remove('modal__active');
    closeCross.removeEventListener('click', closeModal)
    modal1.removeEventListener('click', handleOutside);
    modal2.removeEventListener('click', handleOutside);
    modal3.removeEventListener('click', handleOutside);
    modal4.removeEventListener('click', handleOutside);
    document.removedEventListener('keydown', closeByEsc);
};

function handleOutside(event) {
    isClickOutside = !!event.target.closest('.modal__content');

    if (!isClickOutside) {
        closeModal();
    }

};

function closeByEsc(event) {
    if (event.key === 'Escape') {
        closeModal()
    }
}

}
