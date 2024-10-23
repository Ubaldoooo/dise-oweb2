
document.querySelectorAll('section a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const infoId = link.getAttribute('href'); 
        const infoElement = document.querySelector(infoId);
        
        
        if (infoElement.style.display === 'block') {
            infoElement.style.display = 'none';
        } else {
            
            document.querySelectorAll('.info').forEach((el) => el.style.display = 'none');
            infoElement.style.display = 'block';
        }
    });
});
