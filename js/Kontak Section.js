

    // --- Dynamic Scrolling Background ---
    document.addEventListener('DOMContentLoaded', () => {
        const imageContainer = document.getElementById('image-container');
        const apiUrl = 'https://apidl.asepharyana.tech/api/search/pinterest?query=Kopi%20hangat';

        async function fetchAndDisplayImages() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const images = await response.json();

                // Clear any existing content
                imageContainer.innerHTML = '';
                
                // Function to append images to the container
                const appendImages = (imageList) => {
                     imageList.forEach(imageData => {
                        const img = document.createElement('img');
                        // Apply Tailwind classes directly to the image
                        img.className = 'w-auto h-full object-cover flex-shrink-0';
                        img.src = imageData.directLink;
                        // Add an error handler for broken image links
                        img.onerror = function() { 
                            this.style.display='none'; 
                        };
                        imageContainer.appendChild(img);
                    });
                };

                // Append the list of images twice for a seamless loop
                appendImages(images);
                appendImages(images);

            } catch (error) {
                console.error("Failed to fetch images:", error);
                // Optionally display a fallback
                imageContainer.innerHTML = '<p class="text-white p-4">Could not load background images.</p>';
            }
        }

        fetchAndDisplayImages();
    });