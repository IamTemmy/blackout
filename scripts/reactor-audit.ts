import assert from 'node:assert/strict';
import {createRoom,drawReactor} from '../lib/game/engine.ts';
console.log('| Red before spin | Meltdowns / 10,000 | Actual | Expected | Error (pp) |');console.log('|---|---:|---:|---:|---:|');
for(let red=1;red<=5;red++){const r=createRoom('AUDIT',0);r.seed=100000+red;let dead=0;for(let i=0;i<10000;i++){const result=drawReactor(r,red);assert.equal(result.red,red);assert.equal(result.dead,result.segment<red);dead+=+result.dead;}const actual=dead/10000,expected=red/6,error=Math.abs(actual-expected);console.log(`| ${red}/6 | ${dead} | ${(actual*100).toFixed(2)}% | ${(expected*100).toFixed(2)}% | ${(error*100).toFixed(2)} |`);assert.ok(error<=.015,`red=${red} exceeded tolerance`);}
