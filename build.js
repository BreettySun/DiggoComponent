const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.join(__dirname, "diggo-component");
const HTML_TARGET_DIR = path.join(__dirname, "diggo-component-html");
const CSS_TARGET_DIR = path.join(__dirname, "diggo-component-css");

// Ensure target directory exists
function ensureDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
}

ensureDir(HTML_TARGET_DIR);
ensureDir(CSS_TARGET_DIR);

// Traverse component directory
fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.forEach((dirent) => {
		const componentName = dirent.name;
		const componentDir = path.join(COMPONENTS_DIR, componentName);
		const htmlSrc = path.join(componentDir, "index.html");
		const cssSrc = path.join(componentDir, "index.css");
		const htmlDest = path.join(HTML_TARGET_DIR, `${componentName}.html`);
		const cssDest = path.join(CSS_TARGET_DIR, `${componentName}.css`);

		// Copy and rename html
		if (fs.existsSync(htmlSrc)) {
			fs.copyFileSync(htmlSrc, htmlDest);
			console.log(`✅ ${htmlSrc} -> ${htmlDest}`);
		} else {
			console.warn(`⚠️  ${htmlSrc} does not exist`);
		}
		// Copy and rename css
		if (fs.existsSync(cssSrc)) {
			fs.copyFileSync(cssSrc, cssDest);
			console.log(`✅ ${cssSrc} -> ${cssDest}`);
		} else {
			console.warn(`⚠️  ${cssSrc} does not exist`);
		}
	});
console.log("🎉 All component files have been processed!");
