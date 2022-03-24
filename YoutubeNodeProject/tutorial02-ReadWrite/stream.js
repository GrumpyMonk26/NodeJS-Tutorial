const fs = require('fs');

const rs = fs.createReadStream('./lorem.txt', {encoding: 'utf8'})
const ws = fs.createWriteStream('./newLorem.txt');

// pipe is aa shorter way to write the following
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);