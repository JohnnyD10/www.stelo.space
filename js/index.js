log = e => {
	console.log(e)
	return e
}

var bckScroll = 50;

onload = () => {
	const bckStyle = document.getElementById('background').style

	addEventListener('wheel', e => {
		bckScroll += e.deltaY
		bckScroll = bckScroll > 100 ? 100 : bckScroll < 0 ? 0 : bckScroll

		bckStyle.perspectiveOrigin = '50% ' + bckScroll + '%'

	})
}

customElements.define('fetch-svg', class extends HTMLElement{
	constructor(){
		super()
	}
	connectedCallback(){
		fetch(this.getAttribute('data-fetch'))
			.then( res => res.text())
			.then( res => {
				if(res){
					let svg = (new DOMParser()).parseFromString(res, 'image/svg+xml').firstElementChild
					this.appendChild(svg)
				}
				
			})
			.catch( err => log(err))
	}
})