import styles from "./discoCard.css"

export enum Attribute {
    "imageDisco" = "imageDisco",
    "nameAlbum" = "nameAlbum",
    "nameArtist" = "nameArtist",
    "price" = "price",
    "cantidadStock" = "cantidadStock"
}

class DiscoCard extends HTMLElement {
    imageDisco?: string;
    nameAlbum?: string;
    nameArtist?: string;
    price?: number;
    cantidadStock?: number;

    static get observedAttributes() {
		const classAttribute: Record<Attribute, null> = {
            imageDisco: null,
            nameAlbum: null,
            nameArtist: null,
            price: null,
            cantidadStock: null,
		};
		return Object.keys(classAttribute);
	}

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    attributeChangedCallback(propName: Attribute, oldValue: any, newValue: any) {
		switch (propName) {
			case Attribute.price:
				if (newValue) {
					this.price = Number(newValue);
				} else {
					this.price = undefined;
				}
				break;

			case Attribute.cantidadStock:
				if (newValue) {
					this.cantidadStock = Number(newValue);
				} else {
					this.cantidadStock = undefined;
				}
				break;

			default:
				this[propName] = newValue;
				break;
		}
	}

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <div class = "container-disco">
                <img src = "${this.imageDisco}">
                <div class = "disco-info">
                    <small>Name of the Album: ${this.nameAlbum}</small>
                    <small>Name of the Artist: ${this.nameArtist}</small>
                    <small>Price: ${this.price}</small>
                    <small>Stock: ${this.cantidadStock}</small>
                </div>
            </div>
            `
        }
    };
};

customElements.define("disco-card", DiscoCard);
export default DiscoCard