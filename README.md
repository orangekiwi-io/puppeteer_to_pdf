# puppeteer_to_pdf
Simple node program to generated a PDF from a local html file using puppeteer.

## Getting started
Run `npm install` to install.

Run `node ./generatePDF.js` to run the code with the sample "hello_world.html" file in the source directory. Hopefully you should get the same result as `hello_world_example.pdf`.

## Notes
* In this simple program, you need to include any CSS within the `<style>` tag in the HTML file.
* If you want to save the generated PDF document into a different directory, that directory will need to be created **before** running the program. This program does not check if the directory exist etc. It is a quick and simple example.
