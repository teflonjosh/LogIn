function validate() // 1.Declare Function 
{
// 2.List Passwords and Username to validate as if/else: 
if ( document.getElementById("text1").value == "josh" // a.source need to match HTML in body
&& document.getElementById("text2").value == "josh") // b.source need to match  HTML in body
{
 alert( "Username and Password Validated"); // 3.Approval message
location.href="https://stackoverflow.com";  // a.Provide location site to open when approved 
 }
    else 
    {
        alert ( "Incorrect Passord or Username. Please try again."); // 4. Denial message
        location.reload() // a.Re-set Page
    } 
}
