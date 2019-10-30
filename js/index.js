document.addEventListener("deviceReady", onDeviceReady, false);

function onDeviceReady() 
{ 
   console.log("Device ready...");
   document.getElementById('btn').addEventListener('click', getCameraImage, false);
   console.log("button active...");
}

function getCameraImage()
{
	let opts = {
		quality : 20, 
		allowEdit : false, 
		destinationType : Camera.DestinationType.FILE_URI,
		sourceType : Camera.PictureSourceType.CAMERA,
		mediaType : Camera.MediaType.PICTURE,
		encodingType : Camera.EncodingType.JPEG,
		cameraDirection : Camera.Direction.BACK,
		targetWidth: 300,
		targetHeight : 400
		};
	
	navigator.camera.getPicture(onCaptureSuccess, onCaptureError, opts);
}

function onCaptureSuccess(ImageURI)
{
	var msg = document.getElementById('msg');
	msg.textContent = ImageURI;
	var smallImage = document.getElementById('cameraImage');
	smallImage.src = ImageURI;
}

{
	var msg = document.getElementById('msg');
	msg.textContent = 'Capture error: ' + message;
	
}

