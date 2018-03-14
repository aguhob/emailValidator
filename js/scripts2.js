/*from 3/9/18 */
$( document ).ready( function () {
  
  $("#submit").click( function() {
    //if a function is clear, need space bw parens.
      console.log("clicked");
      
  var emailText = $("#email").val();
//  var passwordText = $("#password").val();
    var isEmail = validateEmail(emailText);
      
      console.log(isEmail);
      
      //a javascript object, adding css. use a comma not color:. property in first argument, value in 2nd.
      
    $("#error").css("visibility", "visible");
      
    if (emailText == "maguhob@gmail.com") {
      
        if (passwordText == "123456") {
          
          var message = "you entered the right password.";
          $("#error").html(message);      
            
          } else {
              var message = "incorrect password.";
              $("#error").html(errorMessage);
          } 
        
    } else {
        var errorMessage = "no user with email " + emailText +" exists.";
        $("#error").html("<p>" + errorMessage + "</p>" )     
        }
    
  });
});

function validateEmail(email) {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    