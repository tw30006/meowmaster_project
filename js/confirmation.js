// Retrieve data from localStorage
var buyerName = localStorage.getItem("buyerName");
var buyerPhoneNumber = localStorage.getItem("buyerPhoneNumber");
var buyerEmail = localStorage.getItem("buyerEmail");

// Display the confirmation details
var confirmationOutputDiv = document.getElementById("confirmationOutput");
confirmationOutputDiv.innerHTML = "<p><strong>收件人姓名：</strong> " + buyerName + "</p>" +
                                  "<p><strong>收件人電話：</strong> " + buyerPhoneNumber + "</p>" +
                                  "<p><strong>收件人信箱：</strong> " + buyerEmail + "</p>";