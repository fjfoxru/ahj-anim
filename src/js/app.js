// TODO: write code here
import Collapse from './collapse';
import Widjet from './widjet';

const collapseButton = document.querySelector('[data-id=open-collapse]');
const collapseContainer = document.querySelector('[data-id=collapse]');

const collapse = new Collapse();
collapse.bindToDOM(collapseButton, collapseContainer);

const widjetContainer = document.querySelector('[data-section=widjet]');
const widjet = new Widjet(widjetContainer);
