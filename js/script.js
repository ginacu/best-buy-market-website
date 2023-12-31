// Mengambil data JSON menggunakan AJAX

function tampilkanSemuaProduk() {
    $.getJSON('data/products.json', function(data) {
        // membuat variabel products untuk mengilangkan key 'products'nya
        let products = data.products;
        // method pengulangan(looping) pada jquery dinamakan $.each
        $.each(products, function (i, data) {
            // arti kode di bawah adalah: jquery carikan saya elemen yang id nya daftar-produk lalu tambahkan di akhir(append) sebuah elemen baru (string html pembuat card)
            $('#daftar-produk').append('<div class="col-md-4"><div class="card mb-4"><img src="'+ data.images[0] + '"class="card-img-top" ><div class="card-body"><h5 class="card-title">' + data.title + '/h5><p class="card/text">' + data.description + '</p><h5 class="card-title">' + data.price + '</h5><a href="#" class="btn btn-primary">Order Now</a></div></div></div>')
        });
    });
}

tampilkanSemuaProduk()

$('.nav-link').on('click', function() {
    // hapus semua kelas 'active' pada kelas nav-link
    $('.nav-link').removeClass('active');
    // pada this(atau li/tag yang kita klik) tambahkan active, berfungsi agar kelas active muncul ketika kita klik navnya
    $(this).addClass('active');
    // $('.nav-item').addClass('.bg-white');

    // mengubah h1 misal "All Item" menjadi tulisan sesuai dengan kategori / nav yang diklik
    // variabel kategori menampung semua tulisan kategori yang kita klik, this = pada li yg kita klik, .html() = ambil html nya
    let kategori = $(this).html();
    $('h1').html(kategori);
    
    // membuat agar ketika klik 'All Item' maka semua item akan muncul meskipun tidak ada kategori yang namanya 'All Item'
    if(kategori == 'ALL ITEM') {
        tampilkanSemuaProduk();
        location.reload(); // me-reload pages untuk menghilangkan bug yang menampilkan menu lain setelah klik kategori lain a.k.a data menjadi double setelah klik kategori lain sebelum klik all item
    }

    // menampilkan item sesuai dengan kategori yang dipilih
    $.getJSON('data/products.json', function(data) {
        let products = data.products;
        let content = '';

        $.each(products, function (i, data) {
            if (data.category == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="'+ data.images[0] + '"class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.title + '/h5><p class="card/text">' + data.description + '</p><h5 class="card-title">' + data.price + '</h5><a href="#" class="btn btn-primary">Order Now</a></div></div></div>';
            }
        });

        $('#daftar-produk').html(content);

    });

});

// logika membuka menu bar ketika screen mengecil

$('#menu-icon').click(function() {
    $('.nav').toggleClass('open');
});
