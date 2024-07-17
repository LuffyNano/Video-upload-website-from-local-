document.addEventListener('DOMContentLoaded', function() {
  const videoInput = document.getElementById('video-input');
  const uploadBtn = document.getElementById('upload-btn');
  const videoList = document.getElementById('video-list');

  uploadBtn.addEventListener('click', function() {
    const file = videoInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const videoUrl = event.target.result;
        addVideoToGallery(videoUrl);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a video file to upload.');
    }
  });

  function addVideoToGallery(videoUrl) {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.autoplay = false;
    video.loop = false;

    const likeBtn = document.createElement('button');
    likeBtn.textContent = 'Like';
    likeBtn.addEventListener('click', function() {
      alert('You liked the video!');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function() {
      videoItem.remove();
    });

    videoItem.appendChild(video);
    videoItem.appendChild(likeBtn);
    videoItem.appendChild(removeBtn);
    videoList.appendChild(videoItem);
  }
});
