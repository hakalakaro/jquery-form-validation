// this function runs when the document is ready
$(document).ready(function () {
    // adds a datepicker to form
    $("#datepicker").datepicker();
    // makes messagebox size bigger with a little animation
    $("#viesti").animate({ width: "350px", height: "150px" }, "slow");
    // validates the form - this will make sure that all the fields are filled before submitting the form
    //and will also show error message if any field is empty.
    $("#basic-form").validate({
        submitHandler: function (form) {
            alert("Form Submitted Successfully");
        }
    });
});