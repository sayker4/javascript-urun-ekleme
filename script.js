var formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});
// Ürün Fiyat Formatı formatter.format(2500); /* $2,500.00 */

pc = [
	{
		id: 0,
		marka: 'lenovo',
		model: 'z50-70',
		ram: '8GB',
		islemci: 'intel i5',
		fiyat: 5000,
	},
	{
		id: 1,
		marka: 'casper',
		model: 'excalibur',
		ram: '16GB',
		islemci: 'intel i9',
		fiyat: 10000,
	},
	{
		id: 2,
		marka: 'monster',
		model: 'abra',
		ram: '32GB',
		islemci: 'intel i9',
		fiyat: 15000,
	}
]

function urunEkle() {
	idEkle = pc.length;
	var markaEkle = document.getElementById("markaEkle").value;
	var modelEkle = document.getElementById("modelEkle").value;
	var ramEkle = document.getElementById("ramEkle").value;
	var islemciEkle = document.getElementById("islemciEkle").value;
	var fiyatEkle = document.getElementById("fiyatEkle").value;
	objectEkle = { id: idEkle, marka: markaEkle, model: modelEkle, ram: ramEkle, islemci: islemciEkle, fiyat: fiyatEkle };
	pc.push(objectEkle);
	console.table(objectEkle)
	// Eklenen Ürünün İçin Buton Oluşturma
	var button = document.createElement('p');
	button.innerHTML = "<button class='button' onclick='urunGoster(" + idEkle + ")'>Ürün " + Number(idEkle + 1) + "</button> ";
	document.getElementById("buttons").appendChild(button);
}

for (i = 0; i < pc.length; i++) {
	//var button = document.getElementById("buttons").innerHTML ="<button onclick='urunGoster("0")'>Ürün 1</button> ";
	var button = document.createElement('p');
	button.innerHTML = "<button class='button' onclick='urunGoster(" + i + ")'>Ürün " + Number(i + 1) + "</button> ";
	document.getElementById("buttons").appendChild(button);
}

function urunGoster(urunId) {
	document.getElementById("urunSayfaId").innerHTML = pc[urunId].id+1;
	document.getElementById("marka").innerHTML = "<b style='color:orange'>Marka:</b> " + pc[urunId].marka;
	document.getElementById("model").innerHTML = "<b style='color:orange'>Model:</b> " + pc[urunId].model;
	document.getElementById("ram").innerHTML = "<b style='color:orange'>RAM:</b> " + pc[urunId].ram;
	document.getElementById("islemci").innerHTML = "<b style='color:orange'>İşlemci:</b> " + pc[urunId].islemci;
	document.getElementById("fiyat").innerHTML = "<hr style='border: 1px solid #ddd;background-color:#ddd'><b style='color:green'>Fiyat:</b> <i style='color:green'>" + formatter.format(pc[urunId].fiyat) + "</i>";
}