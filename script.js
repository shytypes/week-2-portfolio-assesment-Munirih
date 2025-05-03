function redirectToFormPage() {
    window.open("form.html", "_blank");
}

const form = document.getElementById("contact-form");

function handleFormSubmit(event) {
     
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#surName").value;        
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const contactDetailsView = document.querySelector("#contact-details-view");

    event.preventDefault();
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
    };
/*
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "confirmation.html";

*/
    
    contactDetailsView.innerHTML = `
        <h2>Confirming your Contact Details</h2>
        <p><strong>First Name:</strong> ${userData.firstName}</p>
        <p><strong>Last Name:</strong> ${userData.lastName}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Message:</strong> ${userData.message}</p>
    `;

}

form.addEventListener("submit", handleFormSubmit);


