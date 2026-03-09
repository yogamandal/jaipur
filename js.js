function toggleMenu() {

    let nav = document.getElementById("nav");

    if (nav.style.display === "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }

}

function filterProducts(category) {

    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        if (category === "all") {
            product.style.display = "block";
        }

        else if (product.classList.contains(category)) {
            product.style.display = "block";
        }

        else {
            product.style.display = "none";
        }

    });

}