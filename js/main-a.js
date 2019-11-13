// Create function 'showImages' which
// adds the loaded HTML content to <ul> element



const ul = document.querySelector('ul');

const showImages = async (code) => {
    ul.innerHTML = await code;
};

const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.text();
    showImages(result);
};

getFetchData('images.html');