function vote()
{
   var name = document.getElementById("Name").value;
   var age = document.getElementById("Age").value;

   if (age>18)
   {
    alert(name +" You are Eligible");
   }
   else{
    alert(name +" You are not Eligible");
   }
   document.getElementById("Name").value ="";
   document.getElementById("Age").value ="";
}

