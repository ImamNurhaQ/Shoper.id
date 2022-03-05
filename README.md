# Shoper.id

Tema: e-commerce

Routers & tampilan:

1.	HOMEPAGE ( ‘ / ’ )
Landing page awal bagi user, menampilkan pilihan untuk login ke user (pembeli) atau admin

2.	LOGIN PAGE 
Page yang berfungsi bagi user untuk melakukan login. Jika belum memiliki akun, user diharuskan membuat akun terlebih dahulu.

3.	REGISTER ACCOUNT ('/shoperRegister')
Page yang berisi form bagi user untuk mendaftar akun. Setelah mendaftar, user akan di redirect ke page LOGINPAGE

USER:
4.	USER HOME (PEMBELI) (‘/shoperRegister’)
Page yang tampil ketika pembeli login ke website. Disini kita dapat melihat yang dijual di website, adapun tambahan action dalam page ini adalah product detail 

5.	PRODUCT LIST (‘/:CategoryId’)
Menampilkan list barang yang dimiliki oleh kategori tertentu dalam website. Disini user dapat melihat lebih jauh lagi detail produk melewati tombol ‘Detail Product’

6.	PRODUCT DETAIL (‘ /:ProductId/detail’)
Menampilkan detail produk yang dimiliki dalam website. Disini user dapat melakukan pembelian produk melewati tombol ‘angkut’
 
7.	PRODUCT TRANSACTION (‘/:ProductId/detail/transaction’)
Disini user akan melakukan input barang yang akan dibeli. Ketika klik ‘Bungkus’ maka stok akan otomatis berkurang sesuai jumlah barang yang diinput. Berikut adalah tampilan ketika user membeli barang sejumlah 1.

ADMIN:
8.	ADMIN HOME (‘ /shop ‘) 
Page yang tampil ketika admin login ke website. Disini kita dapat melihat list product yang tersedia dalam website, adapun tambahan action dalam page ini adalah add product, detail, search dan delete

9.	EDIT FORM (‘ shoper/1/edit ‘)
Form yang muncul ketika admin mengklik edit, page ini akan merubah data produk sesuai dengan input yang dimasukkan oleh admin.
 
10.	ADD PRODUCT FORM (‘shoper/add’)
Form yang muncul ketika admin mengklik add product, page ini akan menambah data produk sesuai dengan input yang dimasukkan oleh admin.

