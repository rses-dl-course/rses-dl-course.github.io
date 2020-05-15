const fs = require('fs');
const jsdom = require("jsdom");

// Embed SVGs into file, allows the definition of fragment animation
module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
      let re = /<object.*?data="(.*?)".*?>([- <>"'=a-zA-z0-9\n\/]*)<\/object>/gm;
      let paramRe = /<param class="".*?data="".*?\/>/gm;
      let svgx = /<svg/gm;
      let match = re.exec(markdown);


      function objReplace(match, svg_path, obj_body){
        //console.log("Replacing something " + svg_path + " " + obj_body);
        let svgRaw = fs.readFileSync(svg_path, 'utf8');
        let svgStr = svgRaw.slice(svgRaw.search(svgx));
        let svgDom = new jsdom.JSDOM(svgStr);
        let svgDoc = svgDom.window.document;


        let objDom = new jsdom.JSDOM(match);
        let objElem = objDom.window.document.body.children[0];

        for(let i in objElem.children){
            let child = objElem.children[i];
            if(child.tagName === "PARAM")
            {
                let idAttr = child.getAttribute("id");
                let classAttr = child.getAttribute("class");
                let indexAttr = child.getAttribute("data-fragment-index");
                //console.log(`Attr: ${idAttr} ${classAttr} ${indexAttr}`);

                if(idAttr){
                    let graphicsElem = svgDoc.getElementById(idAttr);
                    if(graphicsElem){
                        if(classAttr)
                            graphicsElem.setAttribute("class", classAttr);

                        if(indexAttr)
                            graphicsElem.setAttribute("data-fragment-index", indexAttr);
                    }
                }
            }

        }

        let processedSvgStr = svgDom.window.document.body.innerHTML;

        return processedSvgStr;

      }
      const processedMd = markdown.replace(re, objReplace);

    resolve(processedMd);

  });
};
