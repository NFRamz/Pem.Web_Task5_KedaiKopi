
        //background gambar gerak di kontak section (di index.html)
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

                    imageContainer.innerHTML = '';
                    
                    const appendImages = (imageList) => {
                        imageList.forEach(imageData => {
                            const img = document.createElement('img');
                            img.className = 'w-auto h-full object-cover flex-shrink-0';
                            img.src = imageData.directLink;
                            img.onerror = function() { 
                                this.style.display='none'; 
                            };
                            imageContainer.appendChild(img);
                        });
                    };

                    appendImages(images);

                } catch (error) {
                    console.error("err_1(kontak section.js):", error);
                }
            }

            fetchAndDisplayImages();
        });