// Mengambil data JSON menggunakan AJAX

$.getJSON('data/products.json', function(data) {
    // membuat variabel products untuk mengilangkan key 'products'nya
    let products = data.products;
    // method pengulangan(looping) pada jquery dinamakan $.each
    $.each(products, function (i, data) {
        console.log(i)
    })
});