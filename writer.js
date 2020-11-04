const fs = require('fs');

const filetypes = ["png","gif"]
let data = { "filetypes": filetypes, "emotes": {"png": [], "gif": []} }

fs.readdir("./emotes", (err, files) => {
	let nft = 0;
	filetypes.forEach(ft => {
		let tfiles = files.filter(f => f.split(".").pop()===ft);
		tfiles.sort();
		let nf = 0;
		tfiles.forEach(f => {
			data["emotes"][ft].push(f.substring(0, f.length - ft.length - 1));
		})
	})
	fs.writeFileSync('emotes.json', JSON.stringify(data, null, 2));
})

