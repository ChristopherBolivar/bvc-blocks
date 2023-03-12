console.log('hello')

let bvcModals = document.querySelectorAll('.buenavista-blocks-modal');
console.log(bvcModals);



    //activate modal when a link containing the modal id as an achor is clicked
    let modalLinks = document.querySelectorAll('a[href*="#"]');

    modalLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            console.log(event.target.hash === undefined, 'hash')
            let hash = event.target.hash === undefined ? event.target.parentElement.hash.substring(1) : event.target.hash.substring(1) ;
           
            bvcModals.forEach(function(modal) {
                if(modal.dataset.modalId === hash ) {
                modal.classList.remove('modal-deactivate');
                modal.classList.add('modal-activate');
                } else {
                modal.classList.remove('modal-activate');
                modal.classList.add('modal-deactivate');
                }
            });
        });
    }
);

//deactivate modal when esc key is pressed
document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        bvcModals.forEach(function(modal) {
            modal.classList.remove('modal-activate');
            modal.classList.add('modal-deactivate');
        });
    }
}
);
    

