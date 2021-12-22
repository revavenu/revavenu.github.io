function triggerEvent() {

  var email_suffix;
  var email_address;

  email_suffix = document.getElementById("email-suffix").value;

  if (email_suffix == "") {
    alert("Name must be filled.");
    return false;
  } else if(/[^a-zA-Z0-9]/.test(email_suffix)) {
    alert("Name must be AlphaNumeric.");
    document.getElementById("email-suffix").value = '';
    return false;
  } else {

  	email_address = "jidesh+" + email_suffix + "@clevertap.com";

  	clevertap.event.push("Product viewed", {
  	  "Product ID": "1",
  	  "Product Image": "https://d35fo82fjcw0y8.cloudfront.net/2018/07/26020307/customer-success-clevertap.jpg",
  	  "Product Name": "CleverTap",
  	  "Date": new Date()
  	});

  	clevertap.profile.push({
  	  "Site": {
  	   	"Email": email_address
  	  }
  	});
  	document.getElementById("main-content").innerHTML = email_suffix + ", thanks for confirming! Click Home to return.";
  }
}