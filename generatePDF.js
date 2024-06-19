import puppeteer from "puppeteer";
import fs from "node:fs";

const sourceFile = "source/hello_world.html";
const outputPath = "hello_world.pdf";

async function generatePdf(htmlContent, outputPath) {
	const browser = await puppeteer.launch({
		headless: "shell",
	});
	try {
		const page = await browser.newPage();
		await page.setContent(htmlContent, {
			waitUntil: "networkidle2",
		});

		const pdfOptions = {
			path: outputPath,
			format: "A5",
			landscape: true,
			displayHeaderFooter: false,
		};

		console.log("Generating...");
		await page.pdf(pdfOptions);
	} catch (e) {
		console.error(e);
	} finally {
		await browser.close();
	}
}

(async () => {
	const htmlContent = await fs.readFileSync(sourceFile, "utf-8");

	generatePdf(htmlContent, outputPath)
		.then(() => {
			console.log("PDF generated successfully.");
		})
		.catch((error) => {
			console.error("Error generating PDF:", error);
		});
})();
