// TODO here this will be used as an importer to all segmented ts files
console.log('hello');

let turntableId = document.getElementById("box__rotate");

let lastX: number;
let lastY: number;
let currentX = -25;
let currentY = 25;

let isDragging = false;

turntableId?.addEventListener("mousedown", (e) => {
	isDragging = true;
	lastX = e.clientX;
	lastY = e.clientY;

	e.preventDefault();

});

turntableId?.addEventListener("mouseup", (e) => {
	isDragging = false;
});

turntableId?.addEventListener("mouseout", (e) => {
	isDragging = false;
});

turntableId?.addEventListener("mousemove", (e) => {
	if (isDragging) {
		const deltaX = e.clientX - lastX;
		const deltaY = e.clientY - lastY;

		currentX += deltaY * 0.5;
		currentY += deltaX * 0.5;

		turntableId!.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

		lastX = e.clientX;
		lastY = e.clientY;
	}
});



console.log(turntableId);
