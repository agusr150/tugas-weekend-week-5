//Object berisi para seller minuman
//object ini disediakan

/**
 *  Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
 *  Semua sellers direpresentasikan dengan object bernama "sellers", yang memiliki properti berupa object juga.
 *  satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar 
 *  "discount" (40%).
 * 
 *  Implementasikan function beliTermurah yang akan menerima input berupa array berisi minuman yang ingin dibeli oleh user.
 *  Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan total harga 
 *  yang paling murah.
 */
function beliTermurah(toBuy) {
	var sellers = {
		BobaFett: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.15
		},
		BobaFest: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.35
		},
		ChatTime: {
			items: [
				{ name: 'Fett Drink', price: 18000 },
				{ name: 'Dragon Boba Juice', price: 24000 },
				{ name: 'Star Big Boba', price: 21000 }
			],
			discount: 0.1
		},
		Kokumi: {
			items: [
				{ name: 'Fett Drink', price: 32000 },
				{ name: 'Dragon Boba Juice', price: 42000 },
				{ name: 'Star Big Boba', price: 27000 }
			],
			discount: 0.4
		}
	};

	var arg=[]
	for (var i=0; i<toBuy.length; i++){
		var toko =[], harga=[], hargaDisc=[]
		for (var j in sellers){
			//console.log(sellers[j]["discount"])
			produk = sellers[j]["items"]
			//console.log(produk)
			for (var k=0; k<produk.length; k++){
				//console.log(produk[k]["name"])
				if(produk[k]["name"]===toBuy[i]){
					toko.push(j)
					harga.push(produk[k]["price"])
					hargaDisc.push(produk[k]["price"]*(1-sellers[j]["discount"]))
				}
			}
		}
		//console.log(toko)
		//console.log(harga)
		//console.log(hargaDisc)
		var cheapest = hargaDisc[0] //initial
		var tokoCheap = toko[0]
		for (var l=1; l<toko.length; l++){
			if(hargaDisc[l]<cheapest){
				tokoCheap = toko[l]
				cheapest = hargaDisc[l]
			}	
		}
		arg[i] = toBuy[i]+' bisa dibeli dengan harga paling murah '+cheapest+' di '+tokoCheap
	}

	var laporan = arg[0]
	for (var i=1; i<arg.length; i++){
		laporan = laporan+"\n"+arg[i]
	}
	if(toBuy.length<1){laporan = 'Pembeli tidak membeli apa-apa'}

return laporan
}

var tc1 = ['Star Big Boba', 'Dragon Boba Juice'];
var tc2 = ['Fett Drink'];
var tc3 = [];
var tc4 = ['Star Big Boba', 'Dragon Boba Juice', 'Fett Drink'];

console.log("no.1")
console.log(beliTermurah(tc1));
/*
Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
*/
console.log("no.2")
console.log(beliTermurah(tc2)); //Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime
console.log("no.3")
console.log(beliTermurah(tc3)); //Pembeli Tidak Membeli Apa-Apa
console.log("no.4")
console.log(
	beliTermurah(tc4)
); /**Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime */