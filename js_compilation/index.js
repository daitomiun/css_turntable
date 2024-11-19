"use strict";
// TODO here this will be used as an importer to all segmented ts files
console.log('hello');
let turntableId = document.getElementById("box__rotate");
let lastX;
let lastY;
let currentX = -25;
let currentY = 25;
let isDragging = false;
turntableId === null || turntableId === void 0 ? void 0 : turntableId.addEventListener("mousedown", (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    e.preventDefault();
});
turntableId === null || turntableId === void 0 ? void 0 : turntableId.addEventListener("mouseup", (e) => {
    isDragging = false;
});
turntableId === null || turntableId === void 0 ? void 0 : turntableId.addEventListener("mouseout", (e) => {
    isDragging = false;
});
turntableId === null || turntableId === void 0 ? void 0 : turntableId.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        currentX += deltaY * 0.5;
        currentY += deltaX * 0.5;
        turntableId.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
        lastX = e.clientX;
        lastY = e.clientY;
    }
});
console.log(turntableId);
//# sourceMappingURL=index.js.map