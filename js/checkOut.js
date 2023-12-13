function saveAndRedirect() {
    // Get values from the form
    var name = document.getElementById("name").value;
    var phoneNumber = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // Save data to localStorage
    localStorage.setItem("buyerName", name);
    localStorage.setItem("buyerPhoneNumber", phoneNumber);
    localStorage.setItem("buyerEmail", email);

    // Redirect to the confirmation page
    window.location.href = "/Users/fletcherwu/MeowMaster/pages/confirmation.html";
}