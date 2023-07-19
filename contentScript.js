function addButton() {
    function onButtonClick(e) {
        e.preventDefault();
        console.log("Kliknięto przycisk!");
    }

    const links = document.querySelectorAll('a[data-cy="listing-item-link"]');

    links.forEach(link => {

        const button = document.createElement("button");
        button.textContent = "Ukryj ofertę";

        button.addEventListener("click", onButtonClick);

        link.querySelector('article').appendChild(button);
    });
}

addButton();
