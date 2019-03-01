$(".reg-btn").click(function() {
    $(".hidden").slideToggle("slow");
    if ($("#login-btn").text() === "Connexion") {
        $("#login-btn").text("Créer un compte");
        $(".question").text("Déjà membre ?");
        $(".reg-btn").text("Connexion");
    } else {
        $("#login-btn").text("Connexion");
        $(".question").text("Pas encore enregistré ?");
        $(".reg-btn").text("Créer un compte");
    }
});

$('#login-btn').click(function(){
    $('.login-box').slideUp("slow");
    if ($('#login-btn').text()==="Login") {
        $('.success-box').delay(600).fadeIn("slow");
    } else {
        $('.success-box h1').text('Compte créé');
        $('.success-box').delay(600).fadeIn("slow");
    }
});