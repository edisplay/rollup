const asset = 'resolved';
const chunk = 'resolved';

const asset$1 = new URL('assets/asset-unresolved-9548436d.txt', import.meta.url).href;
const chunk$1 = new URL('chunk.js', import.meta.url).href;

import('./nested/chunk.js').then(result => console.log(result, chunk, chunk$1, asset, asset$1));
