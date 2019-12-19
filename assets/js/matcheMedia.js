window.addEventListener("load", function () {
    window.addEventListener("resize", function () {
        forfaitImages = document.querySelectorAll(".forfaits figure");
        h2 = document.querySelectorAll(".forfaits h2");
        forfaitTexte = document.querySelectorAll(".forfaitTexte")

        if (window.matchMedia("(max-width: 900px)").matches) {
            for (i = 0; i < h2.length; ++i) {
                $(forfaitImages[i]).insertAfter($(h2[i]));
            }
        }
        else {
            for (i = 0; i < h2.length; ++i) {
                $(forfaitImages[i]).insertAfter($(forfaitTexte[i]));
            }
        }
    })
})