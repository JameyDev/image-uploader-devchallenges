const initApp = function () {
    const imgDropArea = document.querySelector('.img-drop-area');

    const active = () => imgDropArea.classList.add('green-border', 'green-bg');

    const inActive = () => imgDropArea.classList.remove('green-border', 'green-bg');

    const preventDef = (ev) => ev.preventDefault();

    const events = ['dragenter', 'dragover', 'dragleave', 'drop'];
    events.forEach(eventName => {
        imgDropArea.addEventListener(eventName, preventDef);
    });

    const dragInto = [events[0], events[1]];
    dragInto.forEach(eventName => {
        imgDropArea.addEventListener(eventName, active);
    });

    const dragNDrop = [events[2], events[3]];
    dragNDrop.forEach(eventName => {
        imgDropArea.addEventListener(eventName, inActive);
    });

    imgDropArea.addEventListener('drop', handleDrop);
}

document.addEventListener("DOMContentLoaded", initApp);

const handleDrop = function(e) {
    const data = e.dataTransfer;
    const files = data.files;
    const fileArr = [...files];
    fileArr.forEach(file => {
        console.log(file.name);
        // add image to DOM
    });
}