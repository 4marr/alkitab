var loader = document.getElementById("loader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

var api = "https://api-alkitab.vercel.app/api/book";

fetch(api)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        loader.style.display = "none";
        for (var i = 0; i < data.data.length; i++) {
            let kitabId = data.data[i].id;
            let suratsName = data.data[i].name;
            let countChapter = data.data[i].chapter;

            var li = document.createElement("li");
            li.classList.add("list-surats");

            var divJudul = document.createElement("div");
            divJudul.classList.add("surats-info");
            var namaAyat = document.createElement("p");
            namaAyat.classList.add("nama-surat");
            namaAyat.innerHTML = suratsName;
            var divSubJudul = document.createElement("div");
            divSubJudul.classList.add("surats-more-info");
            var terjemahanSurat = document.createElement("p");
            terjemahanSurat.classList.add("chapter-surat");
            terjemahanSurat.innerHTML = countChapter + " Chapter";

            divJudul.append(namaAyat);
            divSubJudul.append(terjemahanSurat);
            divJudul.append(divSubJudul);

            var div1 = document.createElement("div");
            var button = document.createElement("button");
            button.classList.add("get-info");

            div1.classList.add("get-info-surat");
            div1.append(button);

            button.style.fontSize = "0px";
            button.append(i);

            var divCont = document.createElement("div");
            divCont.classList.add("div-container");
            listContainerSearch.append(div1);
            li.append(divJudul);
            divCont.append(div1)
            divCont.append(li)
            listContainerSearch.append(divCont);

            // Download Button Event

            button.addEventListener("click", function (event) {
                window.location.href = `detailsurah.html?surah=${kitabId}&countChapter=${countChapter}&suratName=${suratsName}`
                loader.style.display = "flex";
            });
        }
    });

function refresh() {
    window.location.reload();
}
