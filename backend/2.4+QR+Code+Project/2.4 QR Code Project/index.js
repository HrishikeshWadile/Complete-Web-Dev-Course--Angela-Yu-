/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { createPromptModule } from "inquirer";
import qr from "qr-image";
import fs from "fs";

var url = "";
const prompt = createPromptModule();
const question = [
  {
    type: "input",
    name: "url",
    message: "Enter the URL you want to convert to a QR code:",
  },
];

prompt(question).then((answers) => {
    
    // console.log("URL entered:", answers);
    var qr_svg = qr.image(answers.url, { type: "png" });
    var output = fs.createWriteStream("qr_code.png");
    qr_svg.pipe(output);
    output.on("close", () => {
      console.log("QR code image created successfully!");
    });
});

