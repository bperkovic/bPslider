$(document).ready(function () {

    var prviRedSlika =
        [
            "img/slider-image-7.jpg",
            "img/slider-image-6.jpg",
            "img/slider-image-9.jpg",
            "img/slider-image-8.jpg",
            "img/slider-image-5.jpg"
        ];

    var drugiRedSlika =
        [
            "img/slider-image-4.jpg",
            "img/slider-image-1.jpg",
            "img/slider-image-2.jpg",
            "img/slider-image-3.jpg"
        ];

    var prviRed = document.querySelector(".prviSlajder");
    var drugiRed = document.querySelector(".drugiSlajder");


    function slikeUPrvomRedu() {
        for (var i = 0; i < prviRedSlika.length; i++) {
            var slika = document.createElement("li");
            slika.classList.add("slika");
            slika.innerHTML = '<img src="' + prviRedSlika[i] + '"/>';
            prviRed.appendChild(slika);
        }
    }

    function slikeUDrugomRedu() {
        for (var i = 0; i < drugiRedSlika.length; i++) {
            var slika = document.createElement("li");
            slika.classList.add("slika");
            slika.innerHTML = '<img src="' + drugiRedSlika[i] + '"/>';
            drugiRed.appendChild(slika);
        }
    }


    document.getElementById("naslov").innerHTML = "Lorem ipsum dolor <br> sit amet consectetuer <br> adipiscing elit";
    document.getElementById("text").innerHTML = "Ut wisi enim ad minim venian, quis <br> nostrud exerci tation ullamcorper <br> suscipit lobortis nisl ut aliquio ex ea <br> commodo consequat. Duis autem vel <br> eum iriure dolor in hendrerit in valputate <br> velit esse molestie consequat.";


    $("#lijeviGumb").hover(function () {

        document.getElementById("lijevo").innerHTML = '<img src="img/arrow-blue-left.png"/>';


    },
        function () {
            document.getElementById("lijevo").innerHTML = '<img src="img/arrow-gray-left.png"/>';
        })

    $("#desniGumb").hover(function () {
        document.getElementById("desno").innerHTML = '<img src="img/arrow-blue-right.png"/>';

    },
        function () {
            document.getElementById("desno").innerHTML = '<img src="img/arrow-gray-right.png"/>';
        })


    function pomicanjePrvogRedaUDesno() {
        $("ul.prviSlajder > li:first-child").remove().appendTo(".prviSlajder");
    }

    function pomicanjePrvogRedaULijevo() {
        $("ul.prviSlajder > li:last-child").remove().prependTo(".prviSlajder");
    }

    function pomicanjeDrugogRedaUDesno() {
        $("ul.drugiSlajder > li:first-child").remove().appendTo(".drugiSlajder");
    }

    function pomicanjeDrugogRedaULijevo() {
        $("ul.drugiSlajder > li:last-child").remove().prependTo(".drugiSlajder");
    }

    $("#desno").click(function () {
        pomicanjePrvogRedaUDesno();
        pomicanjeDrugogRedaUDesno();
    });

    $("#lijevo").click(function () {
        pomicanjePrvogRedaULijevo();
        pomicanjeDrugogRedaULijevo();

    });


    slikeUPrvomRedu();
    slikeUDrugomRedu();
})