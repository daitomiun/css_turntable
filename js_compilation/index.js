"use strict";
let turntableId = document.getElementById("box__rotate");
let sceneId = document.getElementById("interactionLayerId");
let lastX;
let lastY;
let currentX = -25;
let currentY = 25;
let isDragging = false;
let isDebugMode = true;
sceneId === null || sceneId === void 0 ? void 0 : sceneId.addEventListener("mousedown", (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    e.preventDefault();
});
sceneId === null || sceneId === void 0 ? void 0 : sceneId.addEventListener("mouseup", (e) => {
    isDragging = false;
});
sceneId === null || sceneId === void 0 ? void 0 : sceneId.addEventListener("mouseout", (e) => {
    isDragging = false;
});
sceneId === null || sceneId === void 0 ? void 0 : sceneId.addEventListener("mousemove", (e) => {
    if (isDragging && isDebugMode) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        currentX += deltaY * 0.5;
        currentY += deltaX * 0.5;
        turntableId.style.transform = `translate3d(250px, 250px, 0px) rotateX(${currentX}deg) rotateY(${currentY}deg)`;
        lastX = e.clientX;
        lastY = e.clientY;
    }
});
//# sourceMappingURL=index.js.map