function submitForm() {
    var Name = document.getElementById("Name").value;
    var rollno = document.getElementById("rollno").value;
    var batch = document.getElementById("batch").value;
    var section = document.getElementById("section").value;
  
     var userInfo = { 
   NAME: Name,
   ROLLNO: rollno,
   BATCH: batch,
   SECTION: section
   };
  
    console.log(userInfo); 