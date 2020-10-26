const fs = require('fs');
const path = require('path');
const fileName = "./package.json";
const slidesDir = "slides";

// Gets the package.json
let rawStr = fs.readFileSync(fileName, 'utf8');
let package = JSON.parse(rawStr);

//Clear existing slide builds
let slideKeys = [];
for(const key in package["scripts"]){
    if(key.startsWith("slide:")){
        slideKeys.push(key);
    }
}
for(const i in slideKeys){
    const key = slideKeys[i];
    delete package["scripts"][key];
}

//Gets all slides, add individual builds to scripts
let slide_files = fs.readdirSync("slides", {withFileTypes: true});
for( const i in slide_files){
    let file = slide_files[i];
    if(file.isFile() && file.name.endsWith(".md")){
        const slidePath = path.join(slidesDir, file.name);
        const slideName = path.basename(file.name, ".md");
        package["scripts"]["slide:"+slideName] = `reveal-md ${slidePath} -w --css slide-style.css --preprocessor preproc.js`;
    }
}

package["scripts"]["slide:all"] = ``;

// Writes back to package.json
fs.writeFileSync(fileName, JSON.stringify(package, null, 1));

