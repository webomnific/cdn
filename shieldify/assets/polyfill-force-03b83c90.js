import{b as n}from"./formatjs-8b196429.js";function f(t,u){for(var l=0;l<u.length;l++){const e=u[l];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={};Object.defineProperty(a,"__esModule",{value:!0});var i=n;Object.defineProperty(Intl,"PluralRules",{value:i.PluralRules,writable:!0,enumerable:!1,configurable:!0});const s=f({__proto__:null,default:a},[a]);export{s as p};
