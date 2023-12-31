/**Prototype chain
 * 
 */

Object.prototype.param0 = '0'
const avo = {param1 : 'A'}
const pai = {__proto__: avo, param2: 'B'}
const filho = {__proto__: pai, param3: '  C'}

console.log(filho.param0, filho.param1, filho.param2, filho.param3)