const { stat } = require('fs');
const os = require('os')

setInterval(() => {

    const { freemem, totalmem } = os;

const total = parseInt(totalmem() / 1024 / 1024 );
const mem = parseInt(freemem() / 1024 / 1024);
const percent = parseInt((mem / total) * 100);

const stats = {
    free: `${mem} MB`,
    total: `${total}`,
    usage: `${percent}`

}
console.clear();
console.log('======STATUS MEMORY======');
console.table(stats);



}, 2000)

