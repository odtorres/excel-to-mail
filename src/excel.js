const excelToJson = require('convert-excel-to-json');

exports.getData = async function exportFileToJson() {
    return await excelToJson({
        sourceFile: `./data.xlsx`,
        columnToKey: {
            A: 'to',
            B: 'name',
            C: 'subject',
            D: 'content',
        },
        header: {
            rows: 1
        },
        //sheets: ["Hoja1"]
    })
}