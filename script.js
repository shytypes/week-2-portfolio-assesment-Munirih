function redirectToFormPage() {
    window.open("form.html", "_blank");
}

const form = document.getElementById("contact-form");

function handleFormSubmit(event) {
     
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#surName").value;        
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const submittedData = document.querySelector(".contact");

    event.preventDefault();
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
    };

    
     submittedData.innerHTML = `
        <div id="submitted-data">
            <h2>Confirming your inputs</h2>
            <p><strong>First Name:</strong> ${userData.firstName}</p>
            <p><strong>Last Name:</strong> ${userData.lastName}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Message:</strong> ${userData.message}</p>
        </div>
    `;


    setTimeout(() => {
        window.location.href = "confirmation.html"; 
    }, 15000);
}

form.addEventListener("submit", handleFormSubmit);


