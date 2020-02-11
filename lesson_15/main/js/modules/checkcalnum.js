const checkCalNum = (item) => {
	item.setAttribute('type', 'text');
	item.addEventListener('input', function () {
		this.value = this.value.replace(/[\D,\+]/, '');
	});
}

module.exports = checkCalNum;