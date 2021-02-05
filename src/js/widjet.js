export default class Widjet {
    constructor(container) {
        const elementInDOM = document.createElement('div');
        elementInDOM.classList.add('widjet');
        
        elementInDOM.insertAdjacentHTML('afterbegin', `
            <div class="widjet__button widjet-anim widjet-show" data-id="button">Кнопка</div>
            <div class="widjet__modal widjet-anim widjet-hide" data-id="modal">
            <div data-id="modal-close">x</div>
                <p>ffff</p>       
            </div>
        `);
        container.appendChild(elementInDOM);
        this.elementInDOM = elementInDOM;
        const button = this.elementInDOM.querySelector('[data-id=button]');
        const modal = this.elementInDOM.querySelector('[data-id=modal]');
        const modalClose = this.elementInDOM.querySelector('[data-id=modal-close]');
        button.addEventListener('click', () => {
            modal.classList.remove('widjet-hide');
            modal.classList.add('widjet-show');

            button.classList.add('widjet-hide');
            button.classList.remove('widjet-show');
        });
        modalClose.addEventListener('click', () => {
            button.classList.remove('widjet-hide');
            button.classList.add('widjet-show');

            modal.classList.add('widjet-hide');
            modal.classList.remove('widjet-show');
            
        });
    }

}