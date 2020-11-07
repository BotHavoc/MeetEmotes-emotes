const fs = require('fs');

const filetypes = ["png","gif"]
let data = { "bundles": {} }

let dir = { "emotes": [], "dir": {}};

fs.readdir("./emotes", (err, bundles) => {
	console.log(bundles);
	bundles.forEach(bundle => {
		data["bundles"][bundle] = {};
		fs.readdir("./emotes/" + bundle, (err, files) => {
			console.log("READ: " + bundle);
				let nf = 0;
				files.forEach(f => {
					nf++;
					let name = f.split(".")[0];
					data["bundles"][bundle][name] = f;
					dir["emotes"].push(name);
					dir["dir"][name] = bundle + "/" + f;
					if(nf == files.length){
						console.log("DONE: " + bundle);
					}
				});
		})
	})
	setTimeout(() => {
		fs.writeFileSync('emotes.json', JSON.stringify(data, null, 2));
		fs.writeFileSync('directory.json', JSON.stringify(dir, null, 2));
	}, 2000);
})

