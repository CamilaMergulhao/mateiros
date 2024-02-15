export default function slide() {
    let time = 5000,
        currentImageIndex = 0,
        images = document.querySelectorAll('#slider img'),
        max = images.length;

    function nextImg() {
        // Remove a classe 'selected' da imagem anterior
        images[currentImageIndex].classList.remove('selected');

        currentImageIndex++;

        if (currentImageIndex >= max)
            currentImageIndex = 0;

        // Adiciona a classe 'selected' à nova imagem
        images[currentImageIndex].classList.add('selected');
    }

    function start() {
        setInterval(() => {
            // Troca de imagem
            nextImg();
        }, time);
    }

    window.addEventListener('load', start);
};
