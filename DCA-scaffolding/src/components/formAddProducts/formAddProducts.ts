import styles from "./formAddProducts.css"

class FormAddProducts extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()
        const form = this.shadowRoot?.querySelector('#form-add-disco') as HTMLFormElement;
		if (form) {
			form.addEventListener('submit', (event) => {
				event.preventDefault();
				const formData = new FormData(form);
				this.dispatchEvent(
					new CustomEvent('form-submitted', {
						detail: formData,
						bubbles: true,
						composed: true,
					})
				);
			});
		}
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <div class = "container-form">
                <form id = "form-add-disco">
                    <div class = "img-1">
                        <input type = "text" placeHolder = "Add Image Album" name = "img1" required></input>
                    </div>
                    <div class = "name-album">
                        <input type = "text" placeHolder = "Name of the album" name = "nameAlbum" required></input>
                    </div>
                    <div class = "name-artist">
                        <input type = "text" placeHolder = "Name of the artist" name = "nameArtist" required></input>
                    </div>
                    <div class = "price">
                        <input type = "number" placeHolder = "Price of the vinil" name = "price" required></input>
                    </div>
                    <div class = "cantidad-stock">
                        <input type = "number" placeHolder = "Cantidad" name = "stock" required></input>
                    </div>
                    <div>
						<input type = "submit" id = "save-vinil" value = "Buy"></input>
					</div>
                </form>
            </div>
            `
        }
    }
};

customElements.define("form-add-products", FormAddProducts);
export default FormAddProducts;