import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, description, author } = PKG;

console.log(`${name} ${version}`);
console.log(`${description}`);
console.log(`Author: ${author}`);

const block = new Block(Date.now(), 'pr3v10s-h4sh', 'h4sh', 'd4t4');
console.log(block.toString());