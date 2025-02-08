// Assuming dataset is defined or imported correctly
let givedatatouser = document.getElementById('givedatatouser');
let beachNameDom = document.getElementById('beache-name');
let isForTourismDom = document.getElementById('is-for-tourism');
let weatherDom = document.getElementById('Weather');
let swiperImages = document.querySelectorAll('.swiper-slide img');

const renderData = (event) => {
    if (event.key === "Enter") {
        let beachName = document.getElementById('beachSearch').value;

        dataset.forEach((beach) => {
            if (beach.id === beachName) {
                givedatatouser.style.display = 'flex';
                gsap.from(givedatatouser, 
                    {
                        x:1000,
                        
                    }
                )
                
                
                beachNameDom.textContent = `Beach Name: ${beach.id}`;
                isForTourismDom.textContent = `Is Suitable for Tourism: ${beach.whether[1].is_suitable ? 'Yes' : 'No'}`;
                weatherDom.textContent = `Weather Today: ${beach.whether[0].Today}`;
                
                // Update the swiper images
                swiperImages.forEach((img, index) => {
                    if (index < beach.images.length) {
                        img.src = beach.images[index];
                    } else {
                        img.src = ''; 
                    }
                });
            }
        });
    }
}

document.body.addEventListener('keypress', (event) => {
    renderData(event);
});
