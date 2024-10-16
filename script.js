// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

const btnGet = getEl('btnGet');
const imgFox = getEl('imgFox');


btnGet.addEventListener('click', handleBtnClick);

async function handleBtnClick() {
    // call API
    let resp = await fetch('https://randomfox.ca/floof/');
    let respJson = await resp.json();
    console.log(respJson);
    // extract the image from response
    let imageSrc = respJson.image;
    // set img src (html) to image value from response (DOM Manipulation)
    imgFox.src = imageSrc;

    /*
    fetch(some-url)
    .then( (resp)=>{return resp.json()})
    .then( (respJson)=>{ // use image} )
    .catch()
    */
}


function getEl(id) {
    let ref = document.getElementById(id);
    return ref;
}