const dataPenduduk = [
    {
        umur: "0-4",
        laki: "11.606,4",
        perempuan: "11.146,1",
        total: "22.752,6"
    },
    {
        umur: "5-9",
        laki: "11.225,3",
        perempuan: "10.730,2",
        total: "21.955,5"
    },
    {
        umur: "10-14",
        laki: "11.250,0",
        perempuan: "10.766,1",
        total: "22.016,1"
    },
    {
        umur: "15-19",
        laki: "5.000",
        perempuan: "4.800",
        total: "9.800"
    },
    {
        umur: "20-24",
        laki: "7.000",
        perempuan: "6.500",
        total: "13.500"
    },
    {
        umur: "24-28",
        laki: "4.000",
        perempuan: "3.500",
        total: "7.500"
    },
    {
        umur: "28-35",
        laki: "1.000",
        perempuan: "500",
        total: "1.500"
    }
];

const dataTenaga = [
    
];

const dataPendidikan = [
    
];

const dataKesehatan = [
    
];

function tampilkanData(kategori) {

    const tabel = document.getElementById("dataPenduduk");

    if (kategori === "penduduk") {

        tabel.innerHTML = "";

        dataPenduduk.forEach(function(data) {

            const baris = `
                <tr>
                    <td>${data.umur}</td>
                    <td>${data.laki}</td>
                    <td>${data.perempuan}</td>
                    <td>${data.total}</td>
                </tr>
            `;

            tabel.innerHTML += baris;
        });

    }

    else if (kategori === "tenaga") {

        tabel.innerHTML = "";

        dataTenaga.forEach(function(data) {

            const baris = `
                <tr>
                    <td>${data.umur}</td>
                    <td>${data.laki}</td>
                    <td>${data.perempuan}</td>
                    <td>${data.total}</td>
                </tr>
            `;

            tabel.innerHTML += baris;
        });
'ini ditambahin lagi buat data pendidikan sama data kesehatan, dan ada lagi klo masih ada datanya'
    }
}