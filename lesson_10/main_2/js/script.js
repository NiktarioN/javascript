class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createElem() {
		let elem = document.createElement('div');
		elem.classList.add('elem');
		elem.textContent = 'Выполняю домашнее задание для урока № 10';
		elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
		document.body.appendChild(elem);
	}
}

let newObj = new Options('400px', '500px', 'red', '20px', 'center'),
	anotherOne = new Options('166px', '300px', 'green', '18px', 'left');

newObj.createElem();
anotherOne.createElem();