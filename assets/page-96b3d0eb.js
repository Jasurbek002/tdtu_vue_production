import{e as oi,E as Kr,i as qr,_ as Wr,N as Xr}from"./Navigation-af334459.js";import{d as Yr,A as Jr,o as Me,e as ai,w as hi,_ as Qr,g as xe,u as Yt,c as Zr,h as to,F as eo,i as no,j as io}from"./index-343b9bd8.js";import{_ as so}from"./Col.vue_vue_type_script_setup_true_lang-e97cdd9b.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ro=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],h=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,h=s+2<t.length,c=h?t[s+2]:0,u=r>>2,p=(r&3)<<4|a>>4;let v=(a&15)<<2|c>>6,y=c&63;h||(y=64,o||(v=64)),i.push(n[u],n[p],n[v],n[y])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ji(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ro(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||p==null)throw new oo;const v=r<<2|a>>4;if(i.push(v),c!==64){const y=a<<4&240|c>>2;if(i.push(y),p!==64){const O=c<<6&192|p;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ao=function(t){const e=Ji(t);return Qi.encodeByteArray(e,!0)},ne=function(t){return ao(t).replace(/\./g,"")},ho=function(t){try{return Qi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=()=>co().__FIREBASE_DEFAULTS__,uo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ho(t[1]);return e&&JSON.parse(e)},Zi=()=>{try{return lo()||uo()||fo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},po=t=>{var e,n;return(n=(e=Zi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ts=t=>{const e=po(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},es=()=>{var t;return(t=Zi())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ne(JSON.stringify(n)),ne(JSON.stringify(o)),a].join(".")}function mo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function is(){try{return typeof indexedDB=="object"}catch{return!1}}function ss(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function yo(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="FirebaseError";class J extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=_o,Object.setPrototypeOf(this,J.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ge.prototype.create)}}class ge{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?vo(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new J(s,a,i)}}function vo(t,e){return t.replace(Io,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Io=/\{\$([^}]+)}/g;function ie(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ci(r)&&ci(o)){if(!ie(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ci(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=1e3,Eo=2,To=4*60*60*1e3,Ao=.5;function li(t,e=wo,n=Eo){const i=e*Math.pow(n,t),s=Math.round(Ao*i*(Math.random()-.5)*2);return Math.min(To,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return t&&t._delegate?t._delegate:t}class K{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new go;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ro(e))try{this.getOrInitializeService({instanceIdentifier:st})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=st){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=st){return this.instances.has(e)}getOptions(e=st){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Co(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=st){return this.component?this.component.multipleInstances?e:st:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Co(t){return t===st?void 0:t}function Ro(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Do(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(m||(m={}));const bo={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},ko=m.INFO,Po={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},Oo=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Po[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wn{constructor(e){this.name=e,this._logLevel=ko,this._logHandler=Oo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}const No=(t,e)=>e.some(n=>t instanceof n);let ui,fi;function Lo(){return ui||(ui=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mo(){return fi||(fi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rs=new WeakMap,tn=new WeakMap,os=new WeakMap,Fe=new WeakMap,En=new WeakMap;function xo(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Z(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rs.set(n,t)}).catch(()=>{}),En.set(e,t),e}function Fo(t){if(tn.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});tn.set(t,e)}let en={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||os.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Z(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bo(t){en=t(en)}function Uo(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Be(this),e,...n);return os.set(i,e.sort?e.sort():[e]),Z(i)}:Mo().includes(t)?function(...e){return t.apply(Be(this),e),Z(rs.get(this))}:function(...e){return Z(t.apply(Be(this),e))}}function $o(t){return typeof t=="function"?Uo(t):(t instanceof IDBTransaction&&Fo(t),No(t,Lo())?new Proxy(t,en):t)}function Z(t){if(t instanceof IDBRequest)return xo(t);if(Fe.has(t))return Fe.get(t);const e=$o(t);return e!==t&&(Fe.set(t,e),En.set(e,t)),e}const Be=t=>En.get(t);function jo(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Z(o);return i&&o.addEventListener("upgradeneeded",h=>{i(Z(o.result),h.oldVersion,h.newVersion,Z(o.transaction),h)}),n&&o.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),a.then(h=>{r&&h.addEventListener("close",()=>r()),s&&h.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Vo=["get","getKey","getAll","getAllKeys","count"],Ho=["put","add","delete","clear"],Ue=new Map;function di(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ue.get(e))return Ue.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Ho.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Vo.includes(n)))return;const r=async function(o,...a){const h=this.transaction(o,s?"readwrite":"readonly");let c=h.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&h.done]))[0]};return Ue.set(e,r),r}Bo(t=>({...t,get:(e,n,i)=>di(e,n)||t.get(e,n,i),has:(e,n)=>!!di(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Go(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Go(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nn="@firebase/app",pi="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new wn("@firebase/app"),Ko="@firebase/app-compat",qo="@firebase/analytics-compat",Wo="@firebase/analytics",Xo="@firebase/app-check-compat",Yo="@firebase/app-check",Jo="@firebase/auth",Qo="@firebase/auth-compat",Zo="@firebase/database",ta="@firebase/database-compat",ea="@firebase/functions",na="@firebase/functions-compat",ia="@firebase/installations",sa="@firebase/installations-compat",ra="@firebase/messaging",oa="@firebase/messaging-compat",aa="@firebase/performance",ha="@firebase/performance-compat",ca="@firebase/remote-config",la="@firebase/remote-config-compat",ua="@firebase/storage",fa="@firebase/storage-compat",da="@firebase/firestore",pa="@firebase/firestore-compat",ga="firebase",ma="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="[DEFAULT]",ya={[nn]:"fire-core",[Ko]:"fire-core-compat",[Wo]:"fire-analytics",[qo]:"fire-analytics-compat",[Yo]:"fire-app-check",[Xo]:"fire-app-check-compat",[Jo]:"fire-auth",[Qo]:"fire-auth-compat",[Zo]:"fire-rtdb",[ta]:"fire-rtdb-compat",[ea]:"fire-fn",[na]:"fire-fn-compat",[ia]:"fire-iid",[sa]:"fire-iid-compat",[ra]:"fire-fcm",[oa]:"fire-fcm-compat",[aa]:"fire-perf",[ha]:"fire-perf-compat",[ca]:"fire-rc",[la]:"fire-rc-compat",[ua]:"fire-gcs",[fa]:"fire-gcs-compat",[da]:"fire-fst",[pa]:"fire-fst-compat","fire-js":"fire-js",[ga]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new Map,rn=new Map;function _a(t,e){try{t.container.addComponent(e)}catch(n){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function X(t){const e=t.name;if(rn.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;rn.set(e,t);for(const n of se.values())_a(n,t);return!0}function vt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tt=new ge("app","Firebase",va);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new K("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=ma;function hs(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:sn,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw tt.create("bad-app-name",{appName:String(s)});if(n||(n=es()),!n)throw tt.create("no-options");const r=se.get(s);if(r){if(ie(n,r.options)&&ie(i,r.config))return r;throw tt.create("duplicate-app",{appName:s})}const o=new So(s);for(const h of rn.values())o.addComponent(h);const a=new Ia(n,i,o);return se.set(s,a),a}function Tn(t=sn){const e=se.get(t);if(!e&&t===sn&&es())return hs();if(!e)throw tt.create("no-app",{appName:t});return e}function B(t,e,n){var i;let s=(i=ya[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}X(new K(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="firebase-heartbeat-database",Ea=1,bt="firebase-heartbeat-store";let $e=null;function cs(){return $e||($e=jo(wa,Ea,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch(t=>{throw tt.create("idb-open",{originalErrorMessage:t.message})})),$e}async function Ta(t){try{return await(await cs()).transaction(bt).objectStore(bt).get(ls(t))}catch(e){if(e instanceof J)ct.warn(e.message);else{const n=tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(n.message)}}}async function gi(t,e){try{const i=(await cs()).transaction(bt,"readwrite");await i.objectStore(bt).put(e,ls(t)),await i.done}catch(n){if(n instanceof J)ct.warn(n.message);else{const i=tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ct.warn(i.message)}}}function ls(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=1024,Da=30*24*60*60*1e3;class Ca{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sa(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Da}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mi(),{heartbeatsToSend:n,unsentEntries:i}=Ra(this._heartbeatsCache.heartbeats),s=ne(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mi(){return new Date().toISOString().substring(0,10)}function Ra(t,e=Aa){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),yi(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yi(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Sa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return is()?ss().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ta(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yi(t){return ne(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){X(new K("platform-logger",e=>new zo(e),"PRIVATE")),X(new K("heartbeat",e=>new Ca(e),"PRIVATE")),B(nn,pi,t),B(nn,pi,"esm2017"),B("fire-js","")}ba("");var ka="firebase",Pa="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */B(ka,Pa,"app");const Oa=(t,e)=>e.some(n=>t instanceof n);let _i,vi;function Na(){return _i||(_i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function La(){return vi||(vi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const us=new WeakMap,on=new WeakMap,fs=new WeakMap,je=new WeakMap,An=new WeakMap;function Ma(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(et(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&us.set(n,t)}).catch(()=>{}),An.set(e,t),e}function xa(t){if(on.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});on.set(t,e)}let an={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return on.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fs.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fa(t){an=t(an)}function Ba(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ve(this),e,...n);return fs.set(i,e.sort?e.sort():[e]),et(i)}:La().includes(t)?function(...e){return t.apply(Ve(this),e),et(us.get(this))}:function(...e){return et(t.apply(Ve(this),e))}}function Ua(t){return typeof t=="function"?Ba(t):(t instanceof IDBTransaction&&xa(t),Oa(t,Na())?new Proxy(t,an):t)}function et(t){if(t instanceof IDBRequest)return Ma(t);if(je.has(t))return je.get(t);const e=Ua(t);return e!==t&&(je.set(t,e),An.set(e,t)),e}const Ve=t=>An.get(t);function $a(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=et(o);return i&&o.addEventListener("upgradeneeded",h=>{i(et(o.result),h.oldVersion,h.newVersion,et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(h=>{r&&h.addEventListener("close",()=>r()),s&&h.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ja=["get","getKey","getAll","getAllKeys","count"],Va=["put","add","delete","clear"],He=new Map;function Ii(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(He.get(e))return He.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Va.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ja.includes(n)))return;const r=async function(o,...a){const h=this.transaction(o,s?"readwrite":"readonly");let c=h.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&h.done]))[0]};return He.set(e,r),r}Fa(t=>({...t,get:(e,n,i)=>Ii(e,n)||t.get(e,n,i),has:(e,n)=>!!Ii(e,n)||t.has(e,n)}));const ds="@firebase/installations",Dn="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=1e4,gs=`w:${Dn}`,ms="FIS_v2",Ha="https://firebaseinstallations.googleapis.com/v1",za=60*60*1e3,Ga="installations",Ka="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},lt=new ge(Ga,Ka,qa);function ys(t){return t instanceof J&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s({projectId:t}){return`${Ha}/projects/${t}/installations`}function vs(t){return{token:t.token,requestStatus:2,expiresIn:Xa(t.expiresIn),creationTime:Date.now()}}async function Is(t,e){const i=(await e.json()).error;return lt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ws({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Wa(t,{refreshToken:e}){const n=ws(t);return n.append("Authorization",Ya(e)),n}async function Es(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Xa(t){return Number(t.replace("s","000"))}function Ya(t){return`${ms} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=_s(t),s=ws(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:ms,appId:t.appId,sdkVersion:gs},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Es(()=>fetch(i,a));if(h.ok){const c=await h.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:vs(c.authToken)}}else throw await Is("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=/^[cdef][\w-]{21}$/,hn="";function th(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=eh(t);return Za.test(n)?n:hn}catch{return hn}}function eh(t){return Qa(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Map;function Ds(t,e){const n=ye(t);Cs(n,e),nh(n,e)}function Cs(t,e){const n=As.get(t);if(n)for(const i of n)i(e)}function nh(t,e){const n=ih();n&&n.postMessage({key:t,fid:e}),sh()}let rt=null;function ih(){return!rt&&"BroadcastChannel"in self&&(rt=new BroadcastChannel("[Firebase] FID Change"),rt.onmessage=t=>{Cs(t.data.key,t.data.fid)}),rt}function sh(){As.size===0&&rt&&(rt.close(),rt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="firebase-installations-database",oh=1,ut="firebase-installations-store";let ze=null;function Cn(){return ze||(ze=$a(rh,oh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ut)}}})),ze}async function re(t,e){const n=ye(t),s=(await Cn()).transaction(ut,"readwrite"),r=s.objectStore(ut),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Ds(t,e.fid),e}async function Rs(t){const e=ye(t),i=(await Cn()).transaction(ut,"readwrite");await i.objectStore(ut).delete(e),await i.done}async function _e(t,e){const n=ye(t),s=(await Cn()).transaction(ut,"readwrite"),r=s.objectStore(ut),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Ds(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(t){let e;const n=await _e(t.appConfig,i=>{const s=ah(i),r=hh(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===hn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ah(t){const e=t||{fid:th(),registrationStatus:0};return Ss(e)}function hh(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(lt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ch(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lh(t)}:{installationEntry:e}}async function ch(t,e){try{const n=await Ja(t,e);return re(t.appConfig,n)}catch(n){throw ys(n)&&n.customData.serverCode===409?await Rs(t.appConfig):await re(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lh(t){let e=await wi(t.appConfig);for(;e.registrationStatus===1;)await Ts(100),e=await wi(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Rn(t);return i||n}return e}function wi(t){return _e(t,e=>{if(!e)throw lt.create("installation-not-found");return Ss(e)})}function Ss(t){return uh(t)?{fid:t.fid,registrationStatus:0}:t}function uh(t){return t.registrationStatus===1&&t.registrationTime+ps<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh({appConfig:t,heartbeatServiceProvider:e},n){const i=dh(t,n),s=Wa(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:gs,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await Es(()=>fetch(i,a));if(h.ok){const c=await h.json();return vs(c)}else throw await Is("Generate Auth Token",h)}function dh(t,{fid:e}){return`${_s(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e=!1){let n;const i=await _e(t.appConfig,r=>{if(!bs(r))throw lt.create("not-registered");const o=r.authToken;if(!e&&mh(o))return r;if(o.requestStatus===1)return n=ph(t,e),r;{if(!navigator.onLine)throw lt.create("app-offline");const a=_h(r);return n=gh(t,a),a}});return n?await n:i.authToken}async function ph(t,e){let n=await Ei(t.appConfig);for(;n.authToken.requestStatus===1;)await Ts(100),n=await Ei(t.appConfig);const i=n.authToken;return i.requestStatus===0?Sn(t,e):i}function Ei(t){return _e(t,e=>{if(!bs(e))throw lt.create("not-registered");const n=e.authToken;return vh(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gh(t,e){try{const n=await fh(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await re(t.appConfig,i),n}catch(n){if(ys(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Rs(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await re(t.appConfig,i)}throw n}}function bs(t){return t!==void 0&&t.registrationStatus===2}function mh(t){return t.requestStatus===2&&!yh(t)}function yh(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+za}function _h(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vh(t){return t.requestStatus===1&&t.requestTime+ps<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(t){const e=t,{installationEntry:n,registrationPromise:i}=await Rn(e);return i?i.catch(console.error):Sn(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(t,e=!1){const n=t;return await Eh(n),(await Sn(n,e)).token}async function Eh(t){const{registrationPromise:e}=await Rn(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){if(!t||!t.options)throw Ge("App Configuration");if(!t.name)throw Ge("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ge(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ge(t){return lt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="installations",Ah="installations-internal",Dh=t=>{const e=t.getProvider("app").getImmediate(),n=Th(e),i=vt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ch=t=>{const e=t.getProvider("app").getImmediate(),n=vt(e,ks).getImmediate();return{getId:()=>Ih(n),getToken:s=>wh(n,s)}};function Rh(){X(new K(ks,Dh,"PUBLIC")),X(new K(Ah,Ch,"PRIVATE"))}Rh();B(ds,Dn);B(ds,Dn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="analytics",Sh="firebase_id",bh="origin",kh=60*1e3,Ph="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=new wn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},L=new ge("analytics","Analytics",Oh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t){if(!t.startsWith(bn)){const e=L.create("invalid-gtag-resource",{gtagURL:t});return P.warn(e.message),""}return t}function Ps(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Lh(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Mh(t,e){const n=Lh("firebase-js-sdk-policy",{createScriptURL:Nh}),i=document.createElement("script"),s=`${bn}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function xh(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Fh(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const h=(await Ps(n)).find(c=>c.measurementId===s);h&&await e[h.appId]}}catch(a){P.error(a)}t("config",s,r)}async function Bh(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Ps(n);for(const h of o){const c=a.find(p=>p.measurementId===h),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){P.error(r)}}function Uh(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,h]=o;await Bh(t,e,n,a,h)}else if(r==="config"){const[a,h]=o;await Fh(t,e,n,i,a,h)}else if(r==="consent"){const[a]=o;t("consent","update",a)}else if(r==="get"){const[a,h,c]=o;t("get",a,h,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){P.error(a)}}return s}function $h(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Uh(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function jh(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bn)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=30,Hh=1e3;class zh{constructor(e={},n=Hh){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Os=new zh;function Gh(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Kh(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:Gh(i)},r=Ph.replace("{app-id}",n),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const h=await o.json();!((e=h.error)===null||e===void 0)&&e.message&&(a=h.error.message)}catch{}throw L.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function qh(t,e=Os,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw L.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw L.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Yh;return setTimeout(async()=>{a.abort()},n!==void 0?n:kh),Ns({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Ns(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Os){var r;const{appId:o,measurementId:a}=t;try{await Wh(i,e)}catch(h){if(a)return P.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await Kh(t);return s.deleteThrottleMetadata(o),h}catch(h){const c=h;if(!Xh(c)){if(s.deleteThrottleMetadata(o),a)return P.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw h}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?li(n,s.intervalMillis,Vh):li(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,p),P.debug(`Calling attemptFetch again in ${u} millis`),Ns(t,p,i,s)}}function Wh(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(L.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xh(t){if(!(t instanceof J)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Yh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Jh(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(){if(is())try{await ss()}catch(t){return P.warn(L.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return P.warn(L.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Zh(t,e,n,i,s,r,o){var a;const h=qh(t);h.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&P.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>P.error(y)),e.push(h);const c=Qh().then(y=>{if(y)return i.getId()}),[u,p]=await Promise.all([h,c]);jh(r)||Mh(r,u.measurementId),s("js",new Date);const v=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return v[bh]="firebase",v.update=!0,p!=null&&(v[Sh]=p),s("config",u.measurementId,v),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.app=e}_delete(){return delete Rt[this.app.options.appId],Promise.resolve()}}let Rt={},Ti=[];const Ai={};let Ke="dataLayer",ec="gtag",Di,Ls,Ci=!1;function nc(){const t=[];if(mo()&&t.push("This is a browser extension environment."),yo()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=L.create("invalid-analytics-context",{errorInfo:e});P.warn(n.message)}}function ic(t,e,n){nc();const i=t.options.appId;if(!i)throw L.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)P.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw L.create("no-api-key");if(Rt[i]!=null)throw L.create("already-exists",{id:i});if(!Ci){xh(Ke);const{wrappedGtag:r,gtagCore:o}=$h(Rt,Ti,Ai,Ke,ec);Ls=r,Di=o,Ci=!0}return Rt[i]=Zh(t,Ti,Ai,e,Di,Ke,n),new tc(t)}function sc(t=Tn()){t=me(t);const e=vt(t,oe);return e.isInitialized()?e.getImmediate():rc(t)}function rc(t,e={}){const n=vt(t,oe);if(n.isInitialized()){const s=n.getImmediate();if(ie(e,n.getOptions()))return s;throw L.create("already-initialized")}return n.initialize({options:e})}function oc(t,e,n,i){t=me(t),Jh(Ls,Rt[t.app.options.appId],e,n,i).catch(s=>P.error(s))}const Ri="@firebase/analytics",Si="0.10.0";function ac(){X(new K(oe,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ic(i,s,n)},"PUBLIC")),X(new K("analytics-internal",t,"PRIVATE")),B(Ri,Si),B(Ri,Si,"esm2017");function t(e){try{const n=e.getProvider(oe).getImmediate();return{logEvent:(i,s,r)=>oc(n,i,s,r)}}catch(n){throw L.create("interop-component-reg-failed",{reason:n})}}}ac();var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l,kn=kn||{},f=hc||self;function ve(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ut(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cc(t){return Object.prototype.hasOwnProperty.call(t,qe)&&t[qe]||(t[qe]=++lc)}var qe="closure_uid_"+(1e9*Math.random()>>>0),lc=0;function uc(t,e,n){return t.call.apply(t.bind,arguments)}function fc(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function S(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S=uc:S=fc,S.apply(null,arguments)}function Jt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function E(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function nt(){this.s=this.s,this.o=this.o}var dc=0;nt.prototype.s=!1;nt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dc!=0)&&cc(this)};nt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ms=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Pn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function bi(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(ve(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function b(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var pc=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",()=>{},e),f.removeEventListener("test",()=>{},e)}catch{}return t}();function kt(t){return/^[\s\xa0]*$/.test(t)}function Ie(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function H(t){return Ie().indexOf(t)!=-1}function On(t){return On[" "](t),t}On[" "]=function(){};function gc(t,e){var n=hl;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var mc=H("Opera"),Pt=H("Trident")||H("MSIE"),xs=H("Edge"),cn=xs||Pt,Fs=H("Gecko")&&!(Ie().toLowerCase().indexOf("webkit")!=-1&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),yc=Ie().toLowerCase().indexOf("webkit")!=-1&&!H("Edge");function Bs(){var t=f.document;return t?t.documentMode:void 0}t:{var ki="",We=function(){var t=Ie();if(Fs)return/rv:([^\);]+)(\)|;)/.exec(t);if(xs)return/Edge\/([\d\.]+)/.exec(t);if(Pt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yc)return/WebKit\/(\S+)/.exec(t);if(mc)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(We&&(ki=We?We[1]:""),Pt){var Pi=Bs();if(Pi!=null&&Pi>parseFloat(ki))break t}}f.document&&Pt&&Bs();function Ot(t,e){if(b.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fs){t:{try{On(e.nodeName);var s=!0;break t}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_c[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ot.$.h.call(this)}}E(Ot,b);var _c={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),vc=0;function Ic(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++vc,this.fa=this.ia=!1}function we(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Nn(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function wc(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Us(t){const e={};for(const n in t)e[n]=t[n];return e}const Oi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $s(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Oi.length;r++)n=Oi[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ee(t){this.src=t,this.g={},this.h=0}Ee.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=un(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Ic(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function ln(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Ms(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(we(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function un(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Ln="closure_lm_"+(1e6*Math.random()|0),Xe={};function js(t,e,n,i,s){if(i&&i.once)return Hs(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)js(t,e[r],n,i,s);return null}return n=Fn(n),t&&t[$t]?t.O(e,n,Ut(i)?!!i.capture:!!i,s):Vs(t,e,n,!1,i,s)}function Vs(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Ut(s)?!!s.capture:!!s,a=xn(t);if(a||(t[Ln]=a=new Ee(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Ec(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)pc||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Gs(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ec(){function t(n){return e.call(t.src,t.listener,n)}const e=Tc;return t}function Hs(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Hs(t,e[r],n,i,s);return null}return n=Fn(n),t&&t[$t]?t.P(e,n,Ut(i)?!!i.capture:!!i,s):Vs(t,e,n,!0,i,s)}function zs(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)zs(t,e[r],n,i,s);else i=Ut(i)?!!i.capture:!!i,n=Fn(n),t&&t[$t]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=un(r,n,i,s),-1<n&&(we(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=xn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=un(e,n,i,s)),(n=-1<t?e[t]:null)&&Mn(n))}function Mn(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[$t])ln(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Gs(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=xn(e))?(ln(n,t),n.h==0&&(n.src=null,e[Ln]=null)):we(t)}}}function Gs(t){return t in Xe?Xe[t]:Xe[t]="on"+t}function Tc(t,e){if(t.fa)t=!0;else{e=new Ot(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Mn(t),t=n.call(i,e)}return t}function xn(t){return t=t[Ln],t instanceof Ee?t:null}var Ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fn(t){return typeof t=="function"?t:(t[Ye]||(t[Ye]=function(e){return t.handleEvent(e)}),t[Ye])}function w(){nt.call(this),this.i=new Ee(this),this.S=this,this.J=null}E(w,nt);w.prototype[$t]=!0;w.prototype.removeEventListener=function(t,e,n,i){zs(this,t,e,n,i)};function A(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new b(e,t);else if(e instanceof b)e.target=e.target||t;else{var s=e;e=new b(i,t),$s(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Qt(o,i,!0,e)&&s}if(o=e.g=t,s=Qt(o,i,!0,e)&&s,s=Qt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=Qt(o,i,!1,e)&&s}w.prototype.N=function(){if(w.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)we(n[i]);delete t.g[e],t.h--}}this.J=null};w.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};w.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Qt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&ln(t.i,o),s=a.call(h,i)!==!1&&s}}return s&&!i.defaultPrevented}var Bn=f.JSON.stringify;class Ac{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Dc(){var t=Un;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Cc{constructor(){this.h=this.g=null}add(e,n){const i=Ks.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Ks=new Ac(()=>new Rc,t=>t.reset());class Rc{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sc(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function bc(t){f.setTimeout(()=>{throw t},0)}let Nt,Lt=!1,Un=new Cc,qs=()=>{const t=f.Promise.resolve(void 0);Nt=()=>{t.then(kc)}};var kc=()=>{for(var t;t=Dc();){try{t.h.call(t.g)}catch(n){bc(n)}var e=Ks;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lt=!1};function Te(t,e){w.call(this),this.h=t||1,this.g=e||f,this.j=S(this.qb,this),this.l=Date.now()}E(Te,w);l=Te.prototype;l.ga=!1;l.T=null;l.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),A(this,"tick"),this.ga&&($n(this),this.start()))}};l.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $n(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}l.N=function(){Te.$.N.call(this),$n(this),delete this.g};function jn(t,e,n){if(typeof t=="function")n&&(t=S(t,n));else if(t&&typeof t.handleEvent=="function")t=S(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function Ws(t){t.g=jn(()=>{t.g=null,t.i&&(t.i=!1,Ws(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Pc extends nt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ws(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mt(t){nt.call(this),this.h=t,this.g={}}E(Mt,nt);var Ni=[];function Xs(t,e,n,i){Array.isArray(n)||(n&&(Ni[0]=n.toString()),n=Ni);for(var s=0;s<n.length;s++){var r=js(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ys(t){Nn(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mn(e)},t),t.g={}}Mt.prototype.N=function(){Mt.$.N.call(this),Ys(this)};Mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ae(){this.g=!0}Ae.prototype.Ea=function(){this.g=!1};function Oc(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var p=u.split("_");o=2<=p.length&&p[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Nc(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function gt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Mc(t,n)+(i?" "+i:"")})}function Lc(t,e){t.info(function(){return"TIMEOUT: "+e})}Ae.prototype.info=function(){};function Mc(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Bn(n)}catch{return e}}var It={},Li=null;function Vn(){return Li=Li||new w}It.Ta="serverreachability";function Js(t){b.call(this,It.Ta,t)}E(Js,b);function xt(t){const e=Vn();A(e,new Js(e))}It.STAT_EVENT="statevent";function Qs(t,e){b.call(this,It.STAT_EVENT,t),this.stat=e}E(Qs,b);function k(t){const e=Vn();A(e,new Qs(e,t))}It.Ua="timingevent";function Zs(t,e){b.call(this,It.Ua,t),this.size=e}E(Zs,b);function jt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}var Hn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zn(){}zn.prototype.h=null;function Mi(t){return t.h||(t.h=t.i())}function Fc(){}var Vt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gn(){b.call(this,"d")}E(Gn,b);function Kn(){b.call(this,"c")}E(Kn,b);var fn;function De(){}E(De,zn);De.prototype.g=function(){return new XMLHttpRequest};De.prototype.i=function(){return{}};fn=new De;function Ht(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Mt(this),this.P=Bc,t=cn?125:void 0,this.V=new Te(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new tr}function tr(){this.i=null,this.g="",this.h=!1}var Bc=45e3,dn={},ae={};l=Ht.prototype;l.setTimeout=function(t){this.P=t};function pn(t,e,n){t.L=1,t.v=Re(Y(e)),t.s=n,t.S=!0,er(t,null)}function er(t,e){t.G=Date.now(),zt(t),t.A=Y(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),cr(n.i,"t",i),t.C=0,n=t.l.J,t.h=new tr,t.g=kr(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Pc(S(t.Pa,t,t.g),t.O)),Xs(t.U,t.g,"readystatechange",t.nb),e=t.I?Us(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),xt(),Oc(t.j,t.u,t.A,t.m,t.W,t.s)}l.nb=function(t){t=t.target;const e=this.M;e&&z(t)==3?e.l():this.Pa(t)};l.Pa=function(t){try{if(t==this.g)t:{const u=z(this.g);var e=this.g.Ia();const p=this.g.da();if(!(3>u)&&(u!=3||cn||this.g&&(this.h.h||this.g.ja()||Ui(this.g)))){this.J||u!=4||e==7||(e==8||0>=p?xt(3):xt(2)),Ce(this);var n=this.g.da();this.ca=n;e:if(nr(this)){var i=Ui(this.g);t="";var s=i.length,r=z(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ot(this),St(this);var o="";break e}this.h.i=new f.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Nc(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!kt(a)){var c=a;break e}}c=null}if(n=c)gt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gn(this,n);else{this.i=!1,this.o=3,k(12),ot(this),St(this);break t}}this.S?(ir(this,u,o),cn&&this.i&&u==3&&(Xs(this.U,this.V,"tick",this.mb),this.V.start())):(gt(this.j,this.m,o,null),gn(this,o)),u==4&&ot(this),this.i&&!this.J&&(u==4?Cr(this.l,this):(this.i=!1,zt(this)))}else rl(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,k(12)):(this.o=0,k(13)),ot(this),St(this)}}}catch{}finally{}};function nr(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ir(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=Uc(t,n),s==ae){e==4&&(t.o=4,k(14),i=!1),gt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==dn){t.o=4,k(15),gt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else gt(t.j,t.m,s,null),gn(t,s);nr(t)&&s!=ae&&s!=dn&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,k(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qn(e),e.M=!0,k(11))):(gt(t.j,t.m,n,"[Invalid Chunked Response]"),ot(t),St(t))}l.mb=function(){if(this.g){var t=z(this.g),e=this.g.ja();this.C<e.length&&(Ce(this),ir(this,t,e),this.i&&t!=4&&zt(this))}};function Uc(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?ae:(n=Number(e.substring(n,i)),isNaN(n)?dn:(i+=1,i+n>e.length?ae:(e=e.slice(i,i+n),t.C=i+n,e)))}l.cancel=function(){this.J=!0,ot(this)};function zt(t){t.Y=Date.now()+t.P,sr(t,t.P)}function sr(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=jt(S(t.lb,t),e)}function Ce(t){t.B&&(f.clearTimeout(t.B),t.B=null)}l.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Lc(this.j,this.A),this.L!=2&&(xt(),k(17)),ot(this),this.o=2,St(this)):sr(this,this.Y-t)};function St(t){t.l.H==0||t.J||Cr(t.l,t)}function ot(t){Ce(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,$n(t.V),Ys(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function gn(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||mn(n.i,t))){if(!t.K&&mn(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)le(n),Pe(n);else break t;Jn(n),k(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=jt(S(n.ib,n),6e3));if(1>=fr(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else at(n,11)}else if((t.K||n.g==t)&&le(n),!kt(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const p=c[4];p!=null&&(n.Ga=p,n.l.info("SVER="+n.Ga));const v=c[5];v!=null&&typeof v=="number"&&0<v&&(i=1.5*v,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const y=t.g;if(y){const O=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(O){var r=i.i;r.g||O.indexOf("spdy")==-1&&O.indexOf("quic")==-1&&O.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(qn(r,r.h),r.h=null))}if(i.F){const Q=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;Q&&(i.Da=Q,_(i.I,i.F,Q))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=br(i,i.J?i.pa:null,i.Y),o.K){dr(i.i,o);var a=o,h=i.L;h&&a.setTimeout(h),a.B&&(Ce(a),zt(a)),i.g=o}else Ar(i);0<n.j.length&&Oe(n)}else c[0]!="stop"&&c[0]!="close"||at(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?at(n,7):Yn(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}xt(4)}catch{}}function $c(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ve(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function jc(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ve(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function rr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ve(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jc(t),i=$c(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var or=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vc(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ht(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ht){this.h=t.h,he(this,t.j),this.s=t.s,this.g=t.g,ce(this,t.m),this.l=t.l;var e=t.i,n=new Ft;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xi(this,n),this.o=t.o}else t&&(e=String(t).match(or))?(this.h=!1,he(this,e[1]||"",!0),this.s=Dt(e[2]||""),this.g=Dt(e[3]||"",!0),ce(this,e[4]),this.l=Dt(e[5]||"",!0),xi(this,e[6]||"",!0),this.o=Dt(e[7]||"")):(this.h=!1,this.i=new Ft(null,this.h))}ht.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ct(e,Fi,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ct(e,Fi,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ct(n,n.charAt(0)=="/"?Gc:zc,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ct(n,qc)),t.join("")};function Y(t){return new ht(t)}function he(t,e,n){t.j=n?Dt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ce(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xi(t,e,n){e instanceof Ft?(t.i=e,Wc(t.i,t.h)):(n||(e=Ct(e,Kc)),t.i=new Ft(e,t.h))}function _(t,e,n){t.i.set(e,n)}function Re(t){return _(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ct(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Hc),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Hc(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fi=/[#\/\?@]/g,zc=/[#\?:]/g,Gc=/[#\?]/g,Kc=/[#\?@]/g,qc=/#/g;function Ft(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function it(t){t.g||(t.g=new Map,t.h=0,t.i&&Vc(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}l=Ft.prototype;l.add=function(t,e){it(this),this.i=null,t=wt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ar(t,e){it(t),e=wt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function hr(t,e){return it(t),e=wt(t,e),t.g.has(e)}l.forEach=function(t,e){it(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};l.ta=function(){it(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};l.Z=function(t){it(this);let e=[];if(typeof t=="string")hr(this,t)&&(e=e.concat(this.g.get(wt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};l.set=function(t,e){return it(this),this.i=null,t=wt(this,t),hr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};l.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cr(t,e,n){ar(t,e),0<n.length&&(t.i=null,t.g.set(wt(t,e),Pn(n)),t.h+=n.length)}l.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function wt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Wc(t,e){e&&!t.j&&(it(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(ar(this,i),cr(this,s,n))},t)),t.j=e}var Xc=class{constructor(t,e){this.g=t,this.map=e}};function lr(t){this.l=t||Yc,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.g&&f.g.Ka&&f.g.Ka()&&f.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Yc=10;function ur(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function fr(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qn(t,e){t.g?t.g.add(e):t.h=e}function dr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lr.prototype.cancel=function(){if(this.i=pr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pr(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Pn(t.i)}var Jc=class{stringify(t){return f.JSON.stringify(t,void 0)}parse(t){return f.JSON.parse(t,void 0)}};function Qc(){this.g=new Jc}function Zc(t,e,n){const i=n||"";try{rr(t,function(s,r){let o=s;Ut(s)&&(o=Bn(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function tl(t,e){const n=new Ae;if(f.Image){const i=new Image;i.onload=Jt(Zt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Jt(Zt,n,i,"TestLoadImage: error",!1,e),i.onabort=Jt(Zt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Jt(Zt,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Zt(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Se(t){this.l=t.fc||null,this.j=t.ob||!1}E(Se,zn);Se.prototype.g=function(){return new be(this.l,this.j)};Se.prototype.i=function(t){return function(){return t}}({});function be(t,e){w.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Wn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}E(be,w);var Wn=0;l=be.prototype;l.open=function(t,e){if(this.readyState!=Wn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bt(this)};l.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||f).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gt(this)),this.readyState=Wn};l.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bt(this)),this.g&&(this.readyState=3,Bt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gr(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function gr(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}l.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gt(this):Bt(this),this.readyState==3&&gr(this)}};l.Za=function(t){this.g&&(this.response=this.responseText=t,Gt(this))};l.Ya=function(t){this.g&&(this.response=t,Gt(this))};l.ka=function(){this.g&&Gt(this)};function Gt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bt(t)}l.setRequestHeader=function(t,e){this.v.append(t,e)};l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};l.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(be.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var el=f.JSON.parse;function I(t){w.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mr,this.L=this.M=!1}E(I,w);var mr="",nl=/^https?$/i,il=["POST","PUT"];l=I.prototype;l.Oa=function(t){this.M=t};l.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fn.g(),this.C=this.u?Mi(this.u):Mi(fn),this.g.onreadystatechange=S(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Bi(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=f.FormData&&t instanceof f.FormData,!(0<=Ms(il,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{vr(this),0<this.B&&((this.L=sl(this.g))?(this.g.timeout=this.B,this.g.ontimeout=S(this.ua,this)):this.A=jn(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Bi(this,r)}};function sl(t){return Pt&&typeof t.timeout=="number"&&t.ontimeout!==void 0}l.ua=function(){typeof kn<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,A(this,"timeout"),this.abort(8))};function Bi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yr(t),ke(t)}function yr(t){t.F||(t.F=!0,A(t,"complete"),A(t,"error"))}l.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,A(this,"complete"),A(this,"abort"),ke(this))};l.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ke(this,!0)),I.$.N.call(this)};l.La=function(){this.s||(this.G||this.v||this.l?_r(this):this.kb())};l.kb=function(){_r(this)};function _r(t){if(t.h&&typeof kn<"u"&&(!t.C[1]||z(t)!=4||t.da()!=2)){if(t.v&&z(t)==4)jn(t.La,0,t);else if(A(t,"readystatechange"),z(t)==4){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(or)[1]||null;!s&&f.self&&f.self.location&&(s=f.self.location.protocol.slice(0,-1)),i=!nl.test(s?s.toLowerCase():"")}n=i}if(n)A(t,"complete"),A(t,"success");else{t.m=6;try{var r=2<z(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",yr(t)}}finally{ke(t)}}}}function ke(t,e){if(t.g){vr(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||A(t,"ready");try{n.onreadystatechange=i}catch{}}}function vr(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}l.isActive=function(){return!!this.g};function z(t){return t.g?t.g.readyState:0}l.da=function(){try{return 2<z(this)?this.g.status:-1}catch{return-1}};l.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};l.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),el(e)}};function Ui(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case mr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function rl(t){const e={};t=(t.g&&2<=z(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(kt(t[i]))continue;var n=Sc(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}wc(e,function(i){return i.join(", ")})}l.Ia=function(){return this.m};l.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ir(t){let e="";return Nn(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Xn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ir(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_(t,e,n))}function Tt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wr(t){this.Ga=0,this.j=[],this.l=new Ae,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Tt("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Tt("baseRetryDelayMs",5e3,t),this.hb=Tt("retryDelaySeedMs",1e4,t),this.eb=Tt("forwardChannelMaxRetries",2,t),this.xa=Tt("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new lr(t&&t.concurrentRequestLimit),this.Ja=new Qc,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}l=wr.prototype;l.ra=8;l.H=1;function Yn(t){if(Er(t),t.H==3){var e=t.W++,n=Y(t.I);if(_(n,"SID",t.K),_(n,"RID",e),_(n,"TYPE","terminate"),Kt(t,n),e=new Ht(t,t.l,e),e.L=2,e.v=Re(Y(n)),n=!1,f.navigator&&f.navigator.sendBeacon)try{n=f.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&f.Image&&(new Image().src=e.v,n=!0),n||(e.g=kr(e.l,null),e.g.ha(e.v)),e.G=Date.now(),zt(e)}Sr(t)}function Pe(t){t.g&&(Qn(t),t.g.cancel(),t.g=null)}function Er(t){Pe(t),t.u&&(f.clearTimeout(t.u),t.u=null),le(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function Oe(t){if(!ur(t.i)&&!t.m){t.m=!0;var e=t.Na;Nt||qs(),Lt||(Nt(),Lt=!0),Un.add(e,t),t.C=0}}function ol(t,e){return fr(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=jt(S(t.Na,t,e),Rr(t,t.C)),t.C++,!0)}l.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ht(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Us(r),$s(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break t}if(e===4096||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Tr(this,s,e),n=Y(this.I),_(n,"RID",t),_(n,"CVER",22),this.F&&_(n,"X-HTTP-Session-Id",this.F),Kt(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Ir(r)))+"&"+e:this.o&&Xn(n,this.o,r)),qn(this.i,s),this.bb&&_(n,"TYPE","init"),this.P?(_(n,"$req",e),_(n,"SID","null"),s.aa=!0,pn(s,n,null)):pn(s,n,e),this.H=2}}else this.H==3&&(t?$i(this,t):this.j.length==0||ur(this.i)||$i(this))};function $i(t,e){var n;e?n=e.m:n=t.W++;const i=Y(t.I);_(i,"SID",t.K),_(i,"RID",n),_(i,"AID",t.V),Kt(t,i),t.o&&t.s&&Xn(i,t.o,t.s),n=new Ht(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Tr(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),qn(t.i,n),pn(n,i,e)}function Kt(t,e){t.na&&Nn(t.na,function(n,i){_(e,i,n)}),t.h&&rr({},function(n,i){_(e,i,n)})}function Tr(t,e,n){n=Math.min(t.j.length,n);var i=t.h?S(t.h.Va,t.h,t):null;t:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let c=s[h].g;const u=s[h].map;if(c-=r,0>c)r=Math.max(0,s[h].g-100),a=!1;else try{Zc(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Ar(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Nt||qs(),Lt||(Nt(),Lt=!0),Un.add(e,t),t.A=0}}function Jn(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=jt(S(t.Ma,t),Rr(t,t.A)),t.A++,!0)}l.Ma=function(){if(this.u=null,Dr(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=jt(S(this.jb,this),t)}};l.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,k(10),Pe(this),Dr(this))};function Qn(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function Dr(t){t.g=new Ht(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Y(t.wa);_(e,"RID","rpc"),_(e,"SID",t.K),_(e,"AID",t.V),_(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_(e,"TO",t.qa),_(e,"TYPE","xmlhttp"),Kt(t,e),t.o&&t.s&&Xn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Re(Y(e)),n.s=null,n.S=!0,er(n,t)}l.ib=function(){this.v!=null&&(this.v=null,Pe(this),Jn(this),k(19))};function le(t){t.v!=null&&(f.clearTimeout(t.v),t.v=null)}function Cr(t,e){var n=null;if(t.g==e){le(t),Qn(t),t.g=null;var i=2}else if(mn(t.i,e))n=e.F,dr(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Vn(),A(i,new Zs(i,n)),Oe(t)}else Ar(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&ol(t,e)||i==2&&Jn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:at(t,5);break;case 4:at(t,10);break;case 3:at(t,6);break;default:at(t,2)}}}function Rr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function at(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=S(t.pb,t);n||(n=new ht("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||he(n,"https"),Re(n)),tl(n.toString(),i)}else k(2);t.H=0,t.h&&t.h.za(e),Sr(t),Er(t)}l.pb=function(t){t?(this.l.info("Successfully pinged google.com"),k(2)):(this.l.info("Failed to ping google.com"),k(1))};function Sr(t){if(t.H=0,t.ma=[],t.h){const e=pr(t.i);(e.length!=0||t.j.length!=0)&&(bi(t.ma,e),bi(t.ma,t.j),t.i.i.length=0,Pn(t.j),t.j.length=0),t.h.ya()}}function br(t,e,n){var i=n instanceof ht?Y(n):new ht(n);if(i.g!="")e&&(i.g=e+"."+i.g),ce(i,i.m);else{var s=f.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new ht(null);i&&he(r,i),e&&(r.g=e),s&&ce(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&_(i,n,e),_(i,"VER",t.ra),Kt(t,i),i}function kr(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new I(new Se({ob:!0})):new I(t.va),e.Oa(t.J),e}l.isActive=function(){return!!this.h&&this.h.isActive(this)};function Pr(){}l=Pr.prototype;l.Ba=function(){};l.Aa=function(){};l.za=function(){};l.ya=function(){};l.isActive=function(){return!0};l.Va=function(){};function U(t,e){w.call(this),this.g=new wr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!kt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!kt(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Et(this)}E(U,w);U.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;k(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=br(t,null,t.Y),Oe(t)};U.prototype.close=function(){Yn(this.g)};U.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bn(t),t=n);e.j.push(new Xc(e.fb++,t)),e.H==3&&Oe(e)};U.prototype.N=function(){this.g.h=null,delete this.j,Yn(this.g),delete this.g,U.$.N.call(this)};function Or(t){Gn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}E(Or,Gn);function Nr(){Kn.call(this),this.status=1}E(Nr,Kn);function Et(t){this.g=t}E(Et,Pr);Et.prototype.Ba=function(){A(this.g,"a")};Et.prototype.Aa=function(t){A(this.g,new Or(t))};Et.prototype.za=function(t){A(this.g,new Nr)};Et.prototype.ya=function(){A(this.g,"b")};function al(){this.blockSize=-1}function q(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}E(q,al);q.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Je(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}q.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Je(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Je(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Je(this,i),s=0;break}}this.h=s,this.i+=e};q.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function g(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var hl={};function Zn(t){return-128<=t&&128>t?gc(t,function(e){return new g([e|0],0>e?-1:0)}):new g([t|0],0>t?-1:0)}function G(t){if(isNaN(t)||!isFinite(t))return mt;if(0>t)return T(G(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=yn;return new g(e,0)}function Lr(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return T(Lr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=G(Math.pow(e,8)),i=mt,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=G(Math.pow(e,r)),i=i.R(r).add(G(o))):(i=i.R(n),i=i.add(G(o)))}return i}var yn=4294967296,mt=Zn(0),_n=Zn(1),ji=Zn(16777216);l=g.prototype;l.ea=function(){if(x(this))return-T(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:yn+i)*e,e*=yn}return t};l.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(W(this))return"0";if(x(this))return"-"+T(this).toString(t);for(var e=G(Math.pow(t,6)),n=this,i="";;){var s=fe(n,e).g;n=ue(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,W(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};l.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function W(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function x(t){return t.h==-1}l.X=function(t){return t=ue(this,t),x(t)?-1:W(t)?0:1};function T(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new g(n,~t.h).add(_n)}l.abs=function(){return x(this)?T(this):this};l.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new g(n,n[n.length-1]&-2147483648?-1:0)};function ue(t,e){return t.add(T(e))}l.R=function(t){if(W(this)||W(t))return mt;if(x(this))return x(t)?T(this).R(T(t)):T(T(this).R(t));if(x(t))return T(this.R(T(t)));if(0>this.X(ji)&&0>t.X(ji))return G(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,h=t.D(s)&65535;n[2*i+2*s]+=o*h,te(n,2*i+2*s),n[2*i+2*s+1]+=r*h,te(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,te(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,te(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new g(n,0)};function te(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function At(t,e){this.g=t,this.h=e}function fe(t,e){if(W(e))throw Error("division by zero");if(W(t))return new At(mt,mt);if(x(t))return e=fe(T(t),e),new At(T(e.g),T(e.h));if(x(e))return e=fe(t,T(e)),new At(T(e.g),e.h);if(30<t.g.length){if(x(t)||x(e))throw Error("slowDivide_ only works with positive integers.");for(var n=_n,i=e;0>=i.X(t);)n=Vi(n),i=Vi(i);var s=pt(n,1),r=pt(i,1);for(i=pt(i,2),n=pt(n,2);!W(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=pt(i,1),n=pt(n,1)}return e=ue(t,s.R(e)),new At(s,e)}for(s=mt;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=G(n),o=r.R(e);x(o)||0<o.X(t);)n-=i,r=G(n),o=r.R(e);W(r)&&(r=_n),s=s.add(r),t=ue(t,o)}return new At(s,t)}l.gb=function(t){return fe(this,t).h};l.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new g(n,this.h&t.h)};l.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new g(n,this.h|t.h)};l.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new g(n,this.h^t.h)};function Vi(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new g(n,t.h)}function pt(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new g(s,t.h)}U.prototype.send=U.prototype.u;U.prototype.open=U.prototype.m;U.prototype.close=U.prototype.close;Hn.NO_ERROR=0;Hn.TIMEOUT=8;Hn.HTTP_ERROR=6;xc.COMPLETE="complete";Fc.EventType=Vt;Vt.OPEN="a";Vt.CLOSE="b";Vt.ERROR="c";Vt.MESSAGE="d";w.prototype.listen=w.prototype.O;I.prototype.listenOnce=I.prototype.P;I.prototype.getLastError=I.prototype.Sa;I.prototype.getLastErrorCode=I.prototype.Ia;I.prototype.getStatus=I.prototype.da;I.prototype.getResponseJson=I.prototype.Wa;I.prototype.getResponseText=I.prototype.ja;I.prototype.send=I.prototype.ha;I.prototype.setWithCredentials=I.prototype.Oa;q.prototype.digest=q.prototype.l;q.prototype.reset=q.prototype.reset;q.prototype.update=q.prototype.j;g.prototype.add=g.prototype.add;g.prototype.multiply=g.prototype.R;g.prototype.modulo=g.prototype.gb;g.prototype.compare=g.prototype.X;g.prototype.toNumber=g.prototype.ea;g.prototype.toString=g.prototype.toString;g.prototype.getBits=g.prototype.D;g.fromNumber=G;g.fromString=Lr;var cl=g;const Hi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}D.UNAUTHENTICATED=new D(null),D.GOOGLE_CREDENTIALS=new D("google-credentials-uid"),D.FIRST_PARTY=new D("first-party-uid"),D.MOCK_USER=new D("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt="10.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new wn("@firebase/firestore");function N(t,...e){if(_t.logLevel<=m.DEBUG){const n=e.map(ei);_t.debug(`Firestore (${qt}): ${t}`,...n)}}function ti(t,...e){if(_t.logLevel<=m.ERROR){const n=e.map(ei);_t.error(`Firestore (${qt}): ${t}`,...n)}}function ll(t,...e){if(_t.logLevel<=m.WARN){const n=e.map(ei);_t.warn(`Firestore (${qt}): ${t}`,...n)}}function ei(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t="Unexpected state"){const e=`FIRESTORE (${qt}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function vn(t,e){t||ni()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends J{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ul{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(D.UNAUTHENTICATED))}shutdown(){}}class fl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dl{constructor(e){this.t=e,this.currentUser=D.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let r=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new yt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const h=r;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},a=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new yt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(vn(typeof i.accessToken=="string"),new Mr(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return vn(e===null||typeof e=="string"),new D(e)}}class pl{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=D.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gl{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new pl(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(D.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ml{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yl{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=r=>{r.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(vn(typeof n.token=="string"),this.R=n.token,new ml(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=_l(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function xr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,i,s,r,o,a,h,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=h,this.useFetchStreams=c}}class de{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new de("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof de&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zi,d;(d=zi||(zi={}))[d.OK=0]="OK",d[d.CANCELLED=1]="CANCELLED",d[d.UNKNOWN=2]="UNKNOWN",d[d.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",d[d.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",d[d.NOT_FOUND=5]="NOT_FOUND",d[d.ALREADY_EXISTS=6]="ALREADY_EXISTS",d[d.PERMISSION_DENIED=7]="PERMISSION_DENIED",d[d.UNAUTHENTICATED=16]="UNAUTHENTICATED",d[d.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",d[d.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",d[d.ABORTED=10]="ABORTED",d[d.OUT_OF_RANGE=11]="OUT_OF_RANGE",d[d.UNIMPLEMENTED=12]="UNIMPLEMENTED",d[d.INTERNAL=13]="INTERNAL",d[d.UNAVAILABLE=14]="UNAVAILABLE",d[d.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new cl([4294967295,4294967295],0);function Qe(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.wo=i,this.So=s,this.bo=r,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(e){this.cancel();const n=Math.floor(this.Do+this.xo()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new ii(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(t,e){if(ti("AsyncQueue",`${e}: ${t}`),xr(t))return new R(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=D.UNAUTHENTICATED,this.clientId=vl.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{N("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(N("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=El(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Map;function Al(t,e,n,i){if(e===!0&&i===!0)throw new R(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ni()}function Cl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dl(t);throw new R(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new R(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Al("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fr((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Br{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ki({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ki(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ul;switch(i.type){case"firstParty":return new gl(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new R(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Gi.get(n);i&&(N("ComponentProvider","Removing Datastore"),Gi.delete(n),i.terminate())}(this),Promise.resolve()}}function Rl(t,e,n,i={}){var s;const r=(t=Cl(t,Br))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&ll("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,h;if(typeof i.mockUserToken=="string")a=i.mockUserToken,h=D.MOCK_USER;else{a=ns(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new R(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new D(c)}t._authCredentials=new fl(new Mr(a,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new wl(this,"async_queue_retry"),this.Za=()=>{const n=Qe();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const e=Qe();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xa(),this.eu(e)}enterRestrictedMode(e){if(!this.Ga){this.Ga=!0,this.Ja=e||!1;const n=Qe();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(e){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new yt;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wa.push(e),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(e){if(!xr(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(e){const n=this.Ua.then(()=>(this.Ha=!0,e().catch(i=>{this.ja=i,this.Ha=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw ti("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ha=!1,i))));return this.Ua=n,n}enqueueAfterDelay(e,n,i){this.Xa(),this.Ya.indexOf(e)>-1&&(n=0);const s=ii.createAndSchedule(this,e,n,i,r=>this.nu(r));return this.za.push(s),s}Xa(){this.ja&&ni()}verifyOperationInProgress(){}async ru(){let e;do e=this.Ua,await e;while(e!==this.Ua)}iu(e){for(const n of this.za)if(n.timerId===e)return!0;return!1}su(e){return this.ru().then(()=>{this.za.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.za)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ru()})}ou(e){this.Ya.push(e)}nu(e){const n=this.za.indexOf(e);this.za.splice(n,1)}}class bl extends Br{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=function(){return new Sl}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pl(this),this._firestoreClient.terminate()}}function kl(t,e){const n=typeof t=="object"?t:Tn(),i=typeof t=="string"?t:e||"(default)",s=vt(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=ts("firestore");r&&Rl(s,...r)}return s}function Pl(t){var e,n,i;const s=t._freezeSettings(),r=function(a,h,c,u){return new Il(a,h,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Fr(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Tl(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}(function(e,n=!0){(function(s){qt=s})(as),X(new K("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new bl(new dl(i.getProvider("auth-internal")),new yl(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new R(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new de(c.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),B(Hi,"4.0.0",e),B(Hi,"4.0.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="firebasestorage.googleapis.com",$r="storageBucket",Ol=2*60*1e3,Nl=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends J{constructor(e,n,i=0){super(Ze(e),`Firebase Storage: ${n} (${Ze(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,V.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ze(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var j;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(j||(j={}));function Ze(t){return"storage/"+t}function Ll(){const t="An unknown error occurred, please check the error payload for server response.";return new V(j.UNKNOWN,t)}function Ml(){return new V(j.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xl(){return new V(j.CANCELED,"User canceled the upload/download.")}function Fl(t){return new V(j.INVALID_URL,"Invalid URL '"+t+"'.")}function Bl(t){return new V(j.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ul(){return new V(j.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$r+"' property when initializing the app?")}function In(t){return new V(j.INVALID_ARGUMENT,t)}function jr(){return new V(j.APP_DELETED,"The Firebase app was deleted.")}function $l(t){return new V(j.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=F.makeFromUrl(e,n)}catch{return new F(e,"")}if(i.path==="")return i;throw Bl(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),h={bucket:1,path:3};function c($){$.path_=decodeURIComponent($.path)}const u="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${u}/b/${s}/o${v}`,"i"),O={bucket:1,path:3},Q=n===Ur?"(?:storage.googleapis.com|storage.cloud.google.com)":n,M="([^?#]*)",Wt=new RegExp(`^https?://${Q}/${s}/${M}`,"i"),dt=[{regex:a,indices:h,postModify:r},{regex:y,indices:O,postModify:c},{regex:Wt,indices:{bucket:1,path:2},postModify:c}];for(let $=0;$<dt.length;$++){const Xt=dt[$],Ne=Xt.regex.exec(e);if(Ne){const Gr=Ne[Xt.indices.bucket];let Le=Ne[Xt.indices.path];Le||(Le=""),i=new F(Gr,Le),Xt.postModify(i);break}}if(i==null)throw Fl(e);return i}}class jl{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function h(){return a===2}let c=!1;function u(...M){c||(c=!0,e.apply(null,M))}function p(M){s=setTimeout(()=>{s=null,t(y,h())},M)}function v(){r&&clearTimeout(r)}function y(M,...Wt){if(c){v();return}if(M){v(),u.call(null,M,...Wt);return}if(h()||o){v(),u.call(null,M,...Wt);return}i<64&&(i*=2);let dt;a===1?(a=2,dt=0):dt=(i+Math.random())*1e3,p(dt)}let O=!1;function Q(M){O||(O=!0,v(),!c&&(s!==null?(M||(a=2),clearTimeout(s),p(0)):M||(a=1)))}return p(0),r=setTimeout(()=>{o=!0,Q(!0)},n),Q}function Hl(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){return t!==void 0}function qi(t,e,n,i){if(i<e)throw In(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw In(`Invalid value for '${t}'. Expected ${n} or less.`)}function Gl(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pe||(pe={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,i,s,r,o,a,h,c,u,p,v=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=h,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=p,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,O)=>{this.resolve_=y,this.reject_=O,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new ee(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const h=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===pe.NO_ERROR,h=r.getStatus();if(!a||Kl(h,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===pe.ABORT;i(!1,new ee(!1,null,u));return}const c=this.successCodes_.indexOf(h)!==-1;i(!0,new ee(c,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(a,a.getResponse());zl(h)?r(h):r()}catch(h){o(h)}else if(a!==null){const h=Ll();h.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,h)):o(h)}else if(s.canceled){const h=this.appDelete_?jr():xl();o(h)}else{const h=Ml();o(h)}};this.canceled_?n(!1,new ee(!1,null,!0)):this.backoffId_=Vl(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Hl(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ee{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Wl(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Xl(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Yl(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Jl(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ql(t,e,n,i,s,r,o=!0){const a=Gl(t.urlParams),h=t.url+a,c=Object.assign({},t.headers);return Yl(c,e),Wl(c,n),Xl(c,r),Jl(c,i),new ql(h,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tu(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function eu(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this._service=e,n instanceof F?this._location=n:this._location=F.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ft(e,n)}get root(){const e=new F(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return eu(this._location.path)}get storage(){return this._service}get parent(){const e=Zl(this._location.path);if(e===null)return null;const n=new F(this._location.bucket,e);return new ft(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $l(e)}}function nu(t,e){const n=tu(t._location.path,e),i=new F(t._location.bucket,n);return new ft(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t){return/^[A-Za-z]+:\/\//.test(t)}function su(t,e){return new ft(t,e)}function Vr(t,e){if(t instanceof si){const n=t;if(n._bucket==null)throw Ul();const i=new ft(n,n._bucket);return e!=null?Vr(i,e):i}else return e!==void 0?nu(t,e):t}function ru(t,e){if(e&&iu(e)){if(t instanceof si)return su(t,e);throw In("To use ref(service, url), the first argument must be a Storage instance.")}else return Vr(t,e)}function Wi(t,e){const n=e==null?void 0:e[$r];return n==null?null:F.makeFromBucketSpec(n,t)}function ou(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken=typeof s=="string"?s:ns(s,t.app.options.projectId))}class si{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Ur,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ol,this._maxUploadRetryTime=Nl,this._requests=new Set,s!=null?this._bucket=F.makeFromBucketSpec(s,this._host):this._bucket=Wi(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=F.makeFromBucketSpec(this._url,e):this._bucket=Wi(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qi("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qi("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ft(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new jl(jr());{const o=Ql(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Xi="@firebase/storage",Yi="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="storage";function au(t,e){return t=me(t),ru(t,e)}function hu(t=Tn(),e){t=me(t);const i=vt(t,Hr).getImmediate({identifier:e}),s=ts("storage");return s&&cu(i,...s),i}function cu(t,e,n,i={}){ou(t,e,n,i)}function lu(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new si(n,i,s,e,as)}function uu(){X(new K(Hr,lu,"PUBLIC").setMultipleInstances(!0)),B(Xi,Yi,""),B(Xi,Yi,"esm2017")}uu();const fu={apiKey:"AIzaSyDAU45Y4DS5yuxAOcBcOZ-lSoyrrtWBkXc",authDomain:"tdtu-ae215.firebaseapp.com",projectId:"tdtu-ae215",storageBucket:"tdtu-ae215.appspot.com",messagingSenderId:"113659924698",appId:"1:113659924698:web:15edfff68dc5a3f38795e3",measurementId:"G-P9KSETPGRX"},ri=hs(fu);sc(ri);kl(ri);const du=hu(ri),yu=Yr({__name:"page",setup(t){const e=au(du,"banners");return console.log(e),Jr.init(),(n,i)=>(Me(),ai(Qr,{label:"ILMIY–TADQIQOTLAR INNOVATSIYALAR VA PEDAGOGIK KADRLARNI TAYYORLASH BO’LIMI"},{default:hi(()=>[xe(so,null,{default:hi(()=>[Yt(oi).length!==0?(Me(!0),Zr(eo,{key:0},to(Yt(oi),(s,r)=>(Me(),ai(Kr,{image:s==null?void 0:s.image,fullname:s==null?void 0:s.fullname,postsia:s==null?void 0:s.postsia,exprence:s==null?void 0:s.exprence,phone:s==null?void 0:s.phone,email:s==null?void 0:s.email,key:r},null,8,["image","fullname","postsia","exprence","phone","email"]))),128)):no("",!0)]),_:1}),xe(Wr,{"data-aos":"fade-left","data-aos-anchor":"#example-anchor","data-aos-offset":"500","data-aos-duration":"500",title:"Ilmiy–tadqiqotlar innovatsiyalar va pedagogik kadrlarni tayyorlash bo’limi quydagi vazifalarni bajaradi:",info:Yt(qr)},null,8,["info"]),xe(Xr,{data:Yt(io)[1].items},null,8,["data"])]),_:1}))}});export{yu as default};
