// Mengambil data JSON menggunakan AJAX

$.getJSON('data/products.json', function(data) {
    // membuat variabel products untuk mengilangkan key 'products'nya
    let products = data.products;
    // method pengulangan(looping) pada jquery dinamakan $.each
    $.each(products, function (i, data) {
        // arti kode di bawah adalah: jquery carikan saya elemen yang id nya daftar-menu lalu tambahkan di akhir(append) sebuah elemen baru (string html pembuat card)
        $('#daftar-menu').append('<div class="col-md-4">        <div class="card mb-3"><img src="'+ data.images[0] + '"class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.title + '/h5><p class="card/text">' + data.description + '</p><h5 class="card-title">' + data.price + '</h5><a href="#" class="btn btn-primary">Order Now</a></div></div></div>')
    });
});