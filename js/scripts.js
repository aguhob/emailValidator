/*from 3/14/18*/

$( document ).ready( function () {
  
  $("#submit").click( function(e) {
      
    var emailText = $("#email").val();
    
    var isEmail = validateEmail(emailText);
                      
    if (isEmail) {
                
            var message = "valid email";
            
            $("#error").html(message);      
            $("#error").css("visibility", "visible");
            
          } else {
              var message = "not valid email.";
              
              $("#error").html(message);
              $("#error").css("visibility", "visible");
        } 
        
    }); 
});

function validateEmail(email) {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    