import {DiscoCard} from "../../components/export";
import styles from "./home.css"
import { getDiscos } from "../../utils/firebase";
import { addObserver, appState, dispatch } from "../../store";
import { getDiscosAction } from "../../store/actions";

class Home extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	async connectedCallback() {
		if (appState.disco.length === 0) {
			const action = await getDiscosAction();
			dispatch(action);
		} else {
		    this.render();
	    }
    }

	async render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>${styles}</style>
				<div class = "disco-cards-container"></div>
				`;
		}
		appState.disco.forEach((disco: any) => {
            const discoContainer = this.ownerDocument.createElement("disco-card") as DiscoCard;

			const artistName = this.ownerDocument.createElement('small');
			artistName.innerText = disco.artistName;
			this.shadowRoot?.appendChild(artistName);

			const price = this.ownerDocument.createElement('small');
			price.innerText = disco.price;
			this.shadowRoot?.appendChild(price);
		});
	}
}

customElements.define('screen-home', Home);
export default Home;