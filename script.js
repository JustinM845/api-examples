function getId(id) {
    return document.getElementById(id);
}

// API Button and Media Elements
const button1 = getId('button1');
const imgDog = getId('dog');         // For image display
const videoDog = getId('dogVideo');  // For video display

button1.addEventListener('click', buttonClick);

async function buttonClick() {
    try {
        // Call the API
        let response = await fetch('https://random.dog/woof.json');
        let responseJson = await response.json();
       
        // Extract the URL from the API response
        let apiOutput = responseJson.url;

        // Determine the file type by extension
        let fileType = apiOutput.split('.').pop().toLowerCase();

        // Reset both img and video displays
        imgDog.style.display = 'none';
        videoDog.style.display = 'none';
        videoDog.src = '';  // Clear video src to stop previous video from playing
        
        // Check the file type and display the appropriate media element
        if (['jpg', 'jpeg', 'png', 'gif'].includes(fileType)) {
            // It's an image, show the img element
            imgDog.src = apiOutput;
            imgDog.style.display = 'block';
        } else if (['mp4', 'webm'].includes(fileType)) {
            // It's a video, show the video element
            videoDog.src = apiOutput;
            videoDog.style.display = 'block';
        } else {
            console.log('Unsupported media type');
        }
    } catch (error) {
        console.error('Error fetching media:', error);
    }
}

