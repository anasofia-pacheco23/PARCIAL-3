import styles from './index.css';
import "./screens/index"
import { addObserver, appState } from './store';
import { Screens } from './types/navigation';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			switch (appState.screen) {
				case Screens.HOME:
					const initView = this.ownerDocument.createElement('screen-home');
					this.shadowRoot?.appendChild(initView);
					break;
                case Screens.ADDPRODUCTS:
                    const addProductsView = this.ownerDocument.createElement('screen-add-products');
                    this.shadowRoot?.appendChild(addProductsView);
                    break;
                case Screens.MODIFYPRODUCTS:
                    const modifyProductsView = this.ownerDocument.createElement('screen-modify-products');
                    this.shadowRoot?.appendChild(modifyProductsView);
                    break;
			}
		}
	}
}

customElements.define('app-container', AppContainer);