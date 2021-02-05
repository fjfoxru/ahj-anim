export default class Collapse {
    constructor() {
        this.height = 0;
    }

    bindToDOM(button, container) {
        button.addEventListener('click', (evt) => {
            container.classList.add('collapsing');
            let height = container.querySelector('.collapse__body').getBoundingClientRect().height;
            if (height > 0) {
                // Если открыто
                this.height = height;
                container.style.height = 0 + 'px';
                container.addEventListener('transitionend', () => {
                    container.classList.remove('show');
                });


            } else {
                // Если закрыто
                container.classList.add('show');
                let newHeight = container.querySelector('.collapse__body').getBoundingClientRect().height;
                container.style.height = newHeight + 'px';
            }
            


            





            
        });
    }
}