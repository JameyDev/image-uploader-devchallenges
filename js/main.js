const initApp = function () {
    const imgDropArea = document.querySelector('.img-drop-area');

    const active = () => imgDropArea.classList.add('green-border', 'green-bg');

    const inActive = () => imgDropArea.classList.remove('green-border', 'green-bg');

    const preventDef = (e) => e.preventDefault();

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
        console.log(file);
        
        // add image to site
        const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
        if (validExtensions.includes(file.type)) {
            let reader = new FileReader();
            reader.onload = function () {
                let uploadArea = document.querySelector('.img-drop-area');
                let url = reader.result;
                let image = `<img src="${url}" alt="uploaded image">
                                <p class="text-center">${file.name}</p>`;
                uploadArea.insertAdjacentHTML('beforeend', image);
            }
            reader.readAsDataURL(file);
        } else {
            // tell user error
            alert('That is not an image file...');
        }

        //const imgArea = document.querySelector('.img-drop-area');
    });
}