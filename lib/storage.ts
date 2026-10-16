// Storage is optional: private/embedded browsing must still be playable.
export function getStored(key:string){try{return globalThis.localStorage.getItem(key)}catch{return null}}
export function putStored(key:string,value:string){try{globalThis.localStorage.setItem(key,value)}catch{}}
