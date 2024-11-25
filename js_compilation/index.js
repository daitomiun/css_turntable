"use strict";
let layerId = "interaction-layer-id";
let layerClass = "interaction--layer";
let turntableId = document.getElementById("box__rotate");
let interactionLayerId = document.getElementById(layerId);
let debugId = document.getElementById("debug");
let sceneId = document.getElementById("sceneId");
let lastX;
let lastY;
let currentX = -25;
let currentY = 25;
let isDragging = false;
let isDebugMode = true;
debugId === null || debugId === void 0 ? void 0 : debugId.addEventListener("click", () => {
    if (isDebugMode) {
        console.log("delete Layer");
        interactionLayerId.style.display = "none";
        debugId.innerHTML = "Enter Debug mode";
        isDebugMode = false;
    }
    else {
        console.log("create Layer");
        debugId.innerHTML = "Exit Debug mode";
        interactionLayerId.style.display = "block";
        isDebugMode = true;
    }
    console.log("debug mode is: ", isDebugMode);
});
interactionLayerId === null || interactionLayerId === void 0 ? void 0 : interactionLayerId.addEventListener("mousedown", (e) => {
    console.log("layer interaction check");
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    e.preventDefault();
});
interactionLayerId === null || interactionLayerId === void 0 ? void 0 : interactionLayerId.addEventListener("mouseup", (e) => {
    isDragging = false;
});
interactionLayerId === null || interactionLayerId === void 0 ? void 0 : interactionLayerId.addEventListener("mouseout", (e) => {
    isDragging = false;
});
interactionLayerId === null || interactionLayerId === void 0 ? void 0 : interactionLayerId.addEventListener("mousemove", (e) => {
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