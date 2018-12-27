$(document).ready(function ($) {
    $('#m_date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });
    $('#m_time').timepicker();


    $().ready(function () {
        $("#mainForm").validate({
            rules: {
                nom: {
                    required: true,
                    minlength: 3,


                },
                prenom: {
                    required: true,
                    minlength: 3

                },

                temps: {
                    required: true
                },
                date: {
                    required: true
                },

                civilite: {
                    required: true
                },

                num: {

                    required: true,
                    digits: true,
                    minlength: 8,
                    maxlength: 8
                },



            },
            messages: {
                nom: {

                    required: "Veuillez fournir un nom",
                    minlength: "Votre nom est trop courte"

                },
                prenom: {
                    required: "Veuillez fournir un prenom",
                    minlength: "Votre prenom est trop courte"
                },
                temps: {
                    required: "Veuillez Choisir le temps de votre réservation s.v.p"

                },
                date: {
                    required: "Veuillez Choisir la date de votre réservation s.v.p"

                },
                civilite: {
                    required: "Veuillez Choisir votre civilite s.v.p<br />"
                },
                num:
                {

                    required: "Veuillez entrer votre numéro de téléphone s.v.p",
                    digits: "le numéro de téléphone doit étre composé seulemment par des chiffres",
                    minlength: "le numéro de téléphone doit étre composé par 8 chiffres"
                },

                //cmd:
                //{
                //required: "Veuillez Choisir ce que vous voulez commandez s.v.p"

                //}


            },

            errorPlacement: function (error, element) {
                if (element.is(":radio")) {
                    error.appendTo(element.parents('.container'));
                }
                else {
                    error.insertAfter(element);
                }
            },






        });



    });


});


$(function () {
    $('#m_people').change(function () {
        $('.chair').hide();
        $('#' + $(this).val()).show();
    });
});


$("input[type='submit']").click(function () {
    if ($('#mainForm').valid()) {
        var str = '';
        var x = '';
        $("input[type='radio']:checked").each(function () {
            var idVal = $(this).attr("id");
            x = $("label[for='" + idVal + "']").text();
        });

        var plats = [];
        var tex = [];
        $.each($("input[name='cmd']:checked"), function () {
            plats.push($(this).val());
            tex.push($(this).data('prix'));

        });
        var sum = eval(tex.join("+"));
        //alert("My favourite colors are: " + plats.join(", "));


        str += 'Bienvenue ' + x + ' ' + '<b>' + $('#nomid').val() + ' ' + $('#prenom').val() + '</b>  <br />';
        str += 'Votre Commande Du ' + '<ins>' + $('#m_date').val() + '</ins>' + ' à ' + $('#m_time').val() + ' a bien éte validé <br />';
        str += 'Les Plats commandés sont : <br />'
        str += '<b>'+plats.join(", ") + '</b><br />';
        str += 'Le Montant Total De Votre Reservation est '+ '<b style="color:red;">' + eval(tex.join("+")) + 'DT.' + '</b>';


        $('.bg-success').append(str);
11
    }
    return false;
});

$(".a").on('click', function () {
    var tex = $(this).data('id');
    alert(tex);
});









