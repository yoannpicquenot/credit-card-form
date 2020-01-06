(() => {
    document.months = [];

    document.querySelector('.toggle').onclick = (event) => {
        const card = document.querySelector('.card');

        if (card.classList.contains('reverse')) {
            card.classList.remove('reverse');
        } else {
            card.classList.add('reverse');
        }
    };
})();