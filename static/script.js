
/* =========================
   MARKETPLACE SEARCH
========================= */

function searchProducts() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        const name =
            product.dataset.name;

        if (name.includes(search)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


/* =========================
   CATEGORY FILTER
========================= */

function filterProducts() {

    const category =
        document.getElementById("categoryFilter").value;

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


/* =========================
   BUY PRODUCT
========================= */

function buyProduct(productName) {

    alert(
        "You selected " +
        productName +
        ".\n\nLogin to place your order."
    );

    openLogin();
}


/* =========================
   LOGIN
========================= */

function openLogin() {

    document.getElementById("loginModal")
        .style.display = "flex";
}


function closeLogin() {

    document.getElementById("loginModal")
        .style.display = "none";
}


function login() {

    const role =
        document.getElementById("loginRole").value;

    alert(
        "Login successful!\n\nRole: " + role
    );

    closeLogin();
}


/* =========================
   BULK REQUIREMENT
========================= */

function openRequirement() {

    document.getElementById("requirementModal")
        .style.display = "flex";
}


function closeRequirement() {

    document.getElementById("requirementModal")
        .style.display = "none";
}


function submitRequirement() {

    const product =
        document.getElementById("requirementProduct").value;

    const quantity =
        document.getElementById("requirementQuantity").value;

    const price =
        document.getElementById("requirementPrice").value;

    if (!product || !quantity || !price) {

        alert("Please fill all required fields.");

        return;
    }

    alert(
        "Requirement submitted!\n\n" +
        "Product: " + product +
        "\nQuantity: " + quantity + " kg" +
        "\nExpected Price: ₹" + price + "/kg"
    );

    closeRequirement();
}


/* =========================
   FARMER PRODUCT LISTING
========================= */

function addProduct(event) {

    event.preventDefault();

    const name =
        document.getElementById("productName").value;

    const quantity =
        document.getElementById("productQuantity").value;

    const price =
        document.getElementById("productPrice").value;

    const location =
        document.getElementById("productLocation").value;

    alert(
        "Product listed successfully!\n\n" +
        "Product: " + name +
        "\nQuantity: " + quantity + " kg" +
        "\nPrice: ₹" + price + "/kg" +
        "\nLocation: " + location
    );

    event.target.reset();
}


/* =========================
   ROUTE CALCULATION
========================= */

async function calculateRoute() {

    const distance =
        document.getElementById("distance");

    const duration =
        document.getElementById("duration");

    distance.innerText = "Calculating...";
    duration.innerText = "Calculating...";

    try {

        /*
        Pune Farmer
        longitude = 73.8567
        latitude  = 18.5204

        Pimpri Buyer
        longitude = 73.7868
        latitude  = 18.6298
        */

        const url =
            "https://router.project-osrm.org/route/v1/driving/" +
            "73.8567,18.5204;" +
            "73.7868,18.6298" +
            "?overview=false";

        const response =
            await fetch(url);

        const data =
            await response.json();

        if (data.routes && data.routes.length > 0) {

            const route =
                data.routes[0];

            distance.innerText =
                (route.distance / 1000).toFixed(2)
                + " km";

            duration.innerText =
                (route.duration / 60).toFixed(0)
                + " minutes";

        } else {

            distance.innerText = "Route not found";
            duration.innerText = "--";

        }

    } catch (error) {

        console.error(error);

        distance.innerText = "Error";
        duration.innerText = "Error";

    }
}


/* =========================
   SCROLL FUNCTIONS
========================= */

function scrollToMarketplace() {

    document
        .getElementById("marketplace")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function showSection(sectionId) {

    document
        .getElementById(sectionId)
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   CLOSE MODALS
========================= */

window.onclick = function(event) {

    const loginModal =
        document.getElementById("loginModal");

    const requirementModal =
        document.getElementById("requirementModal");

    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }

    if (event.target === requirementModal) {
        requirementModal.style.display = "none";
    }

};

