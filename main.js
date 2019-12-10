const openModalWindow = () => {
	let container = document.getElementById('container')
	let modalWindow = document.createElement('div')
	
	let modalContent = document.createElement('div');
	modalContent.className = 'modalContent';
	
	let wrapper = document.createElement('div');
	wrapper.className = 'wrapper';
	
	let close = document.createElement('button');
	close.innerText = "close";
	
	container.appendChild(modalWindow)
	modalWindow.appendChild(wrapper);
	wrapper.appendChild(modalContent);
	modalContent.appendChild(close);
	
	close.onclick = () => {
		container.removeChild(modalWindow)
	}
}
