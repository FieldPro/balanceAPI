  const dataApi = {
	//url: "https://sandbox.wallets.africa/self/balance",
	url: "https://api.wallets.africa",
	WalletBalance:  97900,
	WalletCurrency: "NGN",
}

const {url, WalletBalance, WalletCurrency} = dataApi

const urlApi = `${url}` //${WalletBalance}/${WalletCurrency}
fetch(urlApi)
	.then( (data) => data.json())
	.then( (NGN) => html(NGN) )

const html = (data) => {
	console.log(data)
	const xhtml = `
		<div class="name">${data.name}</div>
		`
}  
