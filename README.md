# Shoper.id
Kelompok Imam & Ali : Shoper.id

Tema: e-commerce

Konsep:
1.	Toko e-commerce dimana kita bisa membeli barang secara online

Dokumentasi:
●	Platform home memiliki tampilan 2 login: login admin dan login user

●	Fitur admin:
1.	Admin memiliki 3 fitur; addProduct, Search, dan delete
2.	addProduct berfungsi menambah produk yang akan ditampilkan
3.	SeeDetail akan digunakan untuk mengakses semua komponen product
4.	Search digunakan untuk mencari produk yang akan diinput dalam inputan search bar
5.	Delete digunakan untuk menghapus produk dari list

●	Fitur user:
1.	Show list product, 
2.	Dalam list product: 
a.	Detail, liat detail produk 
b.	addQuantity, menambah quantity (Total Produk) untuk masuk ke keranjang (Transaction) 
c.	addtoTransaction, menginput data barang dan quantity yg sudah diinput ke keranjang  
3.	Dalam addToTransaction (keranjang):
a.	Show produk yg sudah kita klik ‘addToKeranjang’ kedalam page keranjang (Transaction)
b.	Buy, membeli barang yg diinput, langsung mengurangi quantity dalam list product
c.	Delete, menghapus barang yg ingin dibeli

1.	Routes:
a.	Routes pake yg kemaren
b.	Untuk tambahan, setiap selesai ‘Buy’ di fitur keranjang redirect ke list product

