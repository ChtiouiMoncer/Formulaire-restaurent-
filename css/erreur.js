$(document).ready(function() {
    $("#form").validate({
      rules: {
        "checkbox[]": {
          required: true,
          minlength: 1
        },
        radio: "required",
      },

      // FIX
      // Using highlight and unhighlight options we can add the error class to the parent ul which can then be selected and styled
                  highlight: function(element, errorClass, validClass) {
                        $(element).addClass(errorClass).removeClass(validClass);
        // Keeps the default behaviour, adding error class to element but seems to break the default radio group behaviour but the below fixes that
                        $(element).closest('ul').addClass(errorClass);
        // add error class to ul element for checkbox groups and radio inputs
                  },
                  unhighlight: function(element, errorClass, validClass) {
                        $(element).removeClass(errorClass).addClass(validClass);
        // keeps the default behaviour removing error class from elements
                        $(element).closest('ul').removeClass(errorClass);
        // remove error class from ul element for checkbox groups and radio inputs
                  },
      // FIX END

      errorLabelContainer: ".js-errors",
      errorElement: "li",

      messages: {
        "checkbox[]": "Please select at least one checkbox",
        radio: "Please choose from the Radio Group",
      },
    });
  });