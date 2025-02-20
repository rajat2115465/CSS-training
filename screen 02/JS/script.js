$(document).ready(function () {
    /**
     * this function add or remove Assign department field based on indicator type selected.
     */
    $(document).on("change", "#inlineRadio1", function () {
        $("#assign").show(); 
    });
    $(document).on("change", "#inlineRadio2", function () {
        $("#assign").hide(); 
    });
    /**
     * this function is used to open and close the sidebar panel.
     */
    $(document).on("click","#left-arrow",function(){
        $('.sidebar').hide();
        $(this).hide();
        $('#right-arrow').css('display','flex');
    })
    $(document).on("click","#right-arrow",function(){
        $('.sidebar').show();
        $(this).hide();
        $('#left-arrow').show();
    })
/**
 * this function is used to check the form validation after submission of form.
 */
    $("#indicator-form").submit(function(event){
        event.preventDefault();
        let isValid = true;
        $(".validation").css('display','none');
        if (!$("input[name='type']:checked").val()) {
            $("#indicatorTypeError").show();
            isValid = false;
        }
        function validateField(id) {
            if ($("#" + id).val().trim() === "") {
                $("#" + id + "Error").show();
                isValid = false;
            }
        }
        validateField("indicatorId");
        validateField("indicatorName");
        validateField("baselineValue");
        validateField("valueType");
        validateField("department");
        validateField("target2030");
        validateField("tag");
        validateField("goal");
        validateField("targetNumber");
        validateField("unit");
        validateField("year");
        if (isValid) {
            alert("Form submitted successfully!");
            $("#indicator-form")[0].reset();      //reset the form after submit.
        }
    });
});