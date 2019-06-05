$(document).ready(function(){
  console.log('jquery enabled');
  $("form#appointment").submit(function(event){
    event.preventDefault()
    var name = $('#input1').val();
    var description = $('#input2').val();
    var date = $('#date').val();
    var time = $('#appt').val();
    alert('Thank you ' + name + '. Your appointment has been booked for ' + date + " at " + time + " for " + description + ".");
  });
});
