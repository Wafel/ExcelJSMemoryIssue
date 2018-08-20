const _ = require('lodash');
const express = require('express');
const router = express.Router();
const Excel = require('exceljs');
const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);

router.get('/memory-issue', async (req, res, next) => {
    const options = {
        filename: `test-${new Date().getTime()}.xlsx`
    };
    const workbook = new Excel.stream.xlsx.WorkbookWriter(options);

    const sheetsCount = parseInt(req.query.sheetsCount) || 3;
    const columnsCount = parseInt(req.query.columnsCount) || 10;
    const rowsCount = parseInt(req.query.rowsCount) || 1000000;

    _.range(sheetsCount).forEach(sheetIndex => workbook.addWorksheet(`Sheet ${sheetIndex}`));

    for (let sheetIndex = 1; sheetIndex <= sheetsCount; sheetIndex++) {

        let worksheet = workbook.getWorksheet(sheetIndex);

        for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
            worksheet.addRow(_.range(columnsCount)).commit();
            await setImmediatePromise();
        }

    }


    await workbook.commit();

    res.json({
        fileName: options.filename,
        sheetsCount,
        columnsCount,
        rowsCount
    });
});

module.exports = router;
