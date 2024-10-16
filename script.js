function getId(id) {
    let reference = document.getElementById(id);
    return reference;
}


// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

const button1 = getId('button1');
const imgDog = getId('dog');


button1.addEventListener('click', buttonClick);

async function buttonClick() {
    // call API
    let response = await fetch('https://random.dog/woof.json');
    let responseJson = await response.json();
   
    // extract the image from response
    let dogSrc = responseJson.url;
    // set img src (html) to image value from response (DOM Manipulation)
    imgDog.src = dogSrc;

    /*
    fetch(some-url)
    .then( (resp)=>{return resp.json()})
    .then( (respJson)=>{ // use image} )
    .catch()
    */
}

