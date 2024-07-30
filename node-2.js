var cr = require('crypto')
let eng="Nandha College Of Technology";
let cry_eng = cr.createHmac('sha256',eng).update("Welcome Node js",'utf-8').digest("hex");
console.log(cry_eng);
const key = cr.createPublicKey('dharun@2004.pem','utf-8');
const dec_eng = cr.publicDecrypt(key,cry_eng);


// let dec_eng= cr.publicDecrypt(key);
console.log(dec_eng.toString('utf-8'));


/*
import {
    createReadStream,
  } from 'node:fs';
  import { argv } from 'node:process';
  const {
    createHmac,
  } = await import('node:crypto');
  


const filename = argv[2];

const hmac = createHmac('sha256', 'a secret');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.

const data = input.read();
if (data)
  hmac.update(data);
else {
  console.log(`${hmac.digest('hex')} ${filename}`);
}
});*/