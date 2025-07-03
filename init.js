const fs = require("fs");
const path = require("path");

// Get command-line parameters
const componentName = process.argv[2];

if (!componentName) {
	console.error(
		"Please provide a component name, e.g.: node init.js <d-button>"
	);
	process.exit(1);
}

// Ensure component name starts with 'd-'
const normalizedComponentName = componentName.startsWith("d-")
	? componentName
	: `d-${componentName}`;

// Target directory path
const targetDir = path.join(
	__dirname,
	"diggo-component",
	normalizedComponentName
);

// Create directory
function createDirectory(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
		console.log(`✅ Create directory: ${dirPath}`);
	} else {
		console.log(`⚠️  Directory already exists: ${dirPath}`);
	}
}

// Create file
function createFile(filePath, content) {
	if (!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, content, "utf8");
		console.log(`✅ Create file: ${filePath}`);
	} else {
		console.log(`⚠️  File already exists: ${filePath}`);
	}
}

// Generate index.html
function generateIndexHtml(componentName) {
	return `<!-- ${componentName} component -->`;
}

// Generate index.css
function generateIndexCss(componentName) {
	return `/* ${componentName} component styles */`;
}

// Generate test.html
function generateTestHtml(componentName) {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${componentName} Test</title>
      <link rel="stylesheet" href="./index.css">
  </head>
  <body>
      <!-- ${componentName} test content -->
  </body>
  </html>`;
}

// Main function
function main() {
	console.log(`🚀 Start creating component: ${normalizedComponentName}`);

	try {
		// Create directory
		createDirectory(targetDir);

		// Create file
		const indexHtmlPath = path.join(targetDir, "index.html");
		const indexCssPath = path.join(targetDir, "index.css");
		const testHtmlPath = path.join(targetDir, "test.html");

		createFile(indexHtmlPath, generateIndexHtml(normalizedComponentName));
		createFile(indexCssPath, generateIndexCss(normalizedComponentName));
		createFile(testHtmlPath, generateTestHtml(normalizedComponentName));

		console.log(`\n🎉 Component ${normalizedComponentName} created!`);
		console.log(`📁 Directory: ${targetDir}`);
		console.log(`📄 Files: index.html, index.css, test.html`);
	} catch (error) {
		console.error("❌ Error creating component:", error.message);
		process.exit(1);
	}
}

// Run main function
main();
