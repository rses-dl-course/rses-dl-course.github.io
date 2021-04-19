const path = require('path')
const fs = require('fs')
const _ = require('lodash')

function splitNotebookSolution(sourcePath, labDir, solutionDir) {

    const fileBaseName = path.basename(sourcePath)

    let rawdata = fs.readFileSync(sourcePath);
    let nb = JSON.parse(rawdata)
    let labNb = _.cloneDeep(nb)
    let solutionNb = _.cloneDeep(nb)

    labNb.cells = []
    solutionNb.cells = []

    for (let cell of nb.cells) {

        // Always clear output
        if (cell.outputs)
            cell.outputs = []

        if (cell.cell_type === "code") {
            if (cell.source.length > 0 && cell.source[0].startsWith("#Solution")) {
                console.log("Found a solution cell")
                const solutionStrSplit = cell.source[0].split("-")
                if (solutionStrSplit.length > 1) {
                    //Split cell into a separate solution file
                    const solutionFileName = solutionStrSplit[1].trim()
                    const solutionTempNb = _.cloneDeep(solutionNb)
                    solutionTempNb.cells.push(cell)
                    const solutionFilePath = path.join(solutionDir, solutionFileName + ".ipynb")
                    console.log("Writing solution to " + solutionFilePath)
                    fs.writeFileSync(solutionFilePath, JSON.stringify(solutionTempNb), null, 2)

                    //Provide link to the file
                    labNb.cells.push({
                        "cell_type": "markdown",
                        "metadata": {},
                        "source": `Solution to ${solutionFileName} can be found [here](${solutionFilePath})`,
                    })
                } else {
                    console.log("Solution cell must have exercise name")
                    labNb.cells.push(cell)
                }
            } else {
                labNb.cells.push(cell)
            }
        } else {
            labNb.cells.push(cell)
        }
    }

    fs.writeFileSync(path.join(labDir, fileBaseName), JSON.stringify(labNb, null, 2))

}

splitNotebookSolution('notebooks/python/complete/L01_introduction_to_tf_keras.ipynb', 'notebooks/python/labs/', 'notebooks/python/labs/')
