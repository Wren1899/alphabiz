(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"0204":function(e,t,s){"use strict";s("af17")},"0c6d":function(e,t,s){"use strict";s("ddb0");var n=s("ed08");let i={on:()=>{},send:()=>{}};const a={};i.on("send_result",((e,{eventName:t,data:s})=>{a[t][0](s)})),i.on("send_error",((e,{eventName:t,data:s})=>{a[t][1](s)})),i.on("about-dialog",(()=>{n["Bus"].$emit("CALL_ABOUT")}));t["a"]=(e,...t)=>new Promise(((s,n)=>{t.length?i.send(e,...t):i.send(e),a[e]=[s,n]}))},"0cb0":function(e,t,s){"use strict";s("6648")},"284d":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-12 row"},[s("q-input",{staticClass:"q-mt-sm setting-number-input",attrs:{hint:e.label,rules:e.rules,type:"number",dense:"",outlined:""},on:{blur:e.onBlur},scopedSlots:e._u([e.dice?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"casino"},on:{click:e.setRandom}},[s("q-tooltip",[e._v(e._s(e.$t("random")))])],1)]},proxy:!0}:null],null,!0),model:{value:e.number,callback:function(t){e.number=e._n(t)},expression:"number"}})],1)},i=[],a=(s("ddb0"),{props:{value:Number,keyName:String,label:String,dice:{type:Array,required:!1},rules:{type:Array,default:()=>[]},min:{type:Number,default:1}},computed:{number:{get(){return this.value},set(e){this.onChange(e)}},minValue(){return Array.isArray(this.dice)?this.dice[0]:this.min}},methods:{isValid(e){for(const t of this.rules)if("function"===typeof t){const s=t(e);if(!0!==s)return!1}return!0},onChange(e){if(""===e)return this.$emit("change",this.keyName,this.minValue);this.$emit("change",this.keyName,e)},onBlur(){this.isValid(this.value)||this.$emit("change",this.keyName,this.minValue)},setRandom(){if(!this.dice||!this.dice.length)return;const[e,t]=this.dice;return this.onChange(Math.floor(Math.random()*(t-e)+e))}}}),o=a,r=(s("7c66"),s("2877")),l=s("27f9"),c=s("0016"),u=s("05c0"),d=s("eebe"),h=s.n(d),g=Object(r["a"])(o,n,i,!1,null,"3fe47d68",null);t["a"]=g.exports;h()(g,"components",{QInput:l["a"],QIcon:c["a"],QTooltip:u["a"]})},"2d04":function(e,t,s){"use strict";var n=s("1b40"),i=s("2b0e"),a=s("0613"),o=s("ff52"),r=s("0967"),l=s("2a19"),c=s("436b"),u=s("8847"),d=s("849b"),h=s("2ef0");const g=[{value:"en-US",label:"English"},{value:"zh-CN",label:"简体中文"},{value:"zh-TW",label:"繁體中文"}];var p=s("a76d"),m=function(e,t,s,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(o=(a<3?i(o):a>3?i(t,s,o):i(t,s))||o);return a>3&&o&&Object.defineProperty(t,s,o),o},f=function(e,t,s,n){function i(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,a){function o(e){try{l(n.next(e))}catch(t){a(t)}}function r(e){try{l(n["throw"](e))}catch(t){a(t)}}function l(e){e.done?s(e.value):i(e.value).then(o,r)}l((n=n.apply(e,t||[])).next())}))};const b=!!r["b"].is.electron;let y;b&&(y=s("bdb9").ipcRenderer);let v=class extends i["a"]{constructor(){super(...arguments),this.loading=!1,this.changes=new Map,this.settings={},this.languages=g,this.changed=!1}get language(){return this.settings.language}set language(e){u["b"].locale=e,b&&y.send("change-app-i18n",e),this.storeChange("language",e)}get darkMode(){return this.settings.darkMode}set darkMode(e){o["a"].set(e===p["a"].system?"auto":e===p["a"].dark),this.storeChange("darkMode",e)}t(e,...t){return u["b"].t(e,...t)}resetChange(){this.changes.clear(),this.changed=!1,this.loading=!1}storeChange(e,t){console.log(`[Setting] Set ${e} to value:`,t),this.changes.set(e,t),this.$set(this.settings,e,t),this.changed=!0}notify(e){l["a"].create({message:e,position:"bottom-right",type:"positive",timeout:2e3})}syncSetting(){return f(this,void 0,void 0,(function*(){const e=yield a["a"].dispatch("fetchSettings"),t=this.language;this.settings=Object(h["cloneDeep"])(e);const s=e.darkMode===p["a"].system;return o["a"].set(s?"auto":e.darkMode===p["a"].dark),t!==e.language&&(this.language=e.language),e}))}onSubmit(){return f(this,void 0,void 0,(function*(){if(!this.changes.size)return;this.loading=!0;const e=Object.fromEntries(this.changes);e.maximumDownloadNum&&d["a"].emit("update_torrent_settings",{maximumDownloadNum:e.maximumDownloadNum}),yield a["a"].dispatch("set",e),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_set_successfully"))}))}onDiscard(){return f(this,void 0,void 0,(function*(){this.changed&&(yield this.syncSetting(),this.resetChange())}))}onReset(){return f(this,void 0,void 0,(function*(){c["a"].create({title:this.t("reset"),message:this.t("reset_all_settings"),ok:{textColor:"red",color:"unset",flat:!0,label:this.t("reset")},cancel:{textColor:"unset",color:"unset",flat:!0,label:this.t("not_now")}}).onOk((()=>f(this,void 0,void 0,(function*(){this.loading=!0,yield a["a"].dispatch("resetSettings"),yield this.syncSetting(),this.resetChange(),this.notify(this.t("preferences_resetted"))}))))}))}created(){this.settings=Object(h["cloneDeep"])(a["a"].getters.settings)}beforeDestroy(){return this.onDiscard()}beforeRouteLeave(e,t,s){if(!this.changed)return s();c["a"].create({title:this.t("change_not_save"),message:this.t("discard_all_changes"),ok:this.t("stay_in_page"),cancel:this.t("discard"),persistent:!0}).onOk((()=>s(!1))).onCancel((()=>s()))}};v=m([n["a"]],v);t["a"]=v},"2e92":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-select",{staticClass:"setting-select",attrs:{value:e.displayLabel,options:e.options,label:e.label,outlined:"",dense:"","emit-value":"","data-cy":"select-direct"},on:{input:e.emitChange}})},i=[],a=(s("ddb0"),{model:{prop:"value",event:"change"},props:{value:String,options:Array,label:String},computed:{displayLabel(){for(const e of this.options)if(e.value===this.value)return e.label;return this.value}},methods:{emitChange(e){this.$emit("change",e)}}}),o=a,r=(s("0cb0"),s("2877")),l=s("ddd8"),c=s("eebe"),u=s.n(c),d=Object(r["a"])(o,n,i,!1,null,"561c5eba",null);t["a"]=d.exports;u()(d,"components",{QSelect:l["a"]})},"4d5f":function(e,t,s){"use strict";(function(e){s.d(t,"b",(function(){return g}));s("ddb0"),s("5319");const n=s("aa9c"),i=s("3e8f"),{exec:a,spawn:o}=s("3e8f"),r="win32"===e.platform,l="darwin"===e.platform,c=new Map([["VLC Player",{win:"vlc.exe",drawin:"VLC.app"}],["GOM Player",{win:"gom.exe",drawin:"GOM Player.app"}],["PotPlayer",{win:"PotPlayerMini64.exe",drawin:""}],["Kodi",{win:"kodi.exe",drawin:"Kodi.app"}],["KMPlayer",{win:"KMPlayer64.exe",drawin:"KMPlayer.app"}],["SMPlayer",{win:"smplayer.exe",drawin:"SMPlayer.app"}],["MediaMonkey",{win:"MediaMonkey.exe",drawin:""}],["AllPlayer",{win:"ALLPlayer.exe",drawin:""}],["5KPlayer",{win:"5KPlayer.exe",drawin:"5KPlayer.app"}],["MPC-HC",{win:"mpc-hc64.exe",drawin:""}]]),u=async()=>new Promise((e=>{const t=[{label:"Alphabiz",value:"Alphabiz"}];if(r){const s=new n({hive:n.HKCU,key:"\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Compatibility Assistant\\Store"});s.values(((s,n)=>{if(s)return e(!1);for(let e=0;e<n.length;e++)c.forEach(((s,a)=>{s.win&&new RegExp(s.win).test(n[e].name)&&(i.existsSync(n[e].name)?t.push({label:a,value:a}):console.log("player file does not exist"))}));e(t)}))}else l?a("ls /Applications",((s,n,i)=>{s?console.error(`exec error: ${s}`):i?console.error(`Error from Git: ${i}`):(c.forEach(((e,s)=>{e.drawin&&new RegExp(e.drawin).test(n)&&t.push({label:s,value:s})})),e(t))})):e(!1)})),d=async e=>new Promise((t=>{if(r){const s=new n({hive:n.HKCU,key:"\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Compatibility Assistant\\Store"});s.values(((s,n)=>{if(s)return t(!1);c.get(e)||t(!1);const a=c.get(e).win;for(let e=0;e<n.length;e++)new RegExp(a).test(n[e].name)&&(i.existsSync(n[e].name)?t(n[e].name):console.log("player file does not exist"));t(!1)}))}else l&&(c.get(e).drawin||t(!1),t(c.get(e).drawin))})),h=async(e,t)=>new Promise((s=>{const n=r?e:"open",i=r?t.replace("/","\\"):["-a",e,t],a=o(n,r?[i]:[...i]);a.on("error",(e=>{s(!1),console.log(`子进程错误，错误码 ${e}`)})),a.unref(),s(!0)})),g=async(e,t)=>{const s=await d(e);if(s){const e=await h(s,t);console.log("openPlayer:"+e)}};t["a"]=u}).call(this,s("4362"))},6648:function(e,t,s){},"7c66":function(e,t,s){"use strict";s("9ad5")},9384:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.dense?"col-4":"col-12"},[s("q-checkbox",{staticClass:"q-mt-sm",attrs:{value:e.value,label:e.label,dense:""},on:{input:e.onChange}},[e.tooltip?s("q-tooltip",[e._v(e._s(e.tooltip))]):e._e()],1)],1)},i=[],a={props:{value:{required:!0},label:String,keyName:String,dense:Boolean,tooltip:{type:String,required:!1}},methods:{onChange(e){this.$emit("change",this.keyName,e)}}},o=a,r=s("2877"),l=s("8f8e"),c=s("05c0"),u=s("eebe"),d=s.n(u),h=Object(r["a"])(o,n,i,!1,null,null,null);t["a"]=h.exports;d()(h,"components",{QCheckbox:l["a"],QTooltip:c["a"]})},"9ad5":function(e,t,s){},a76d:function(e,t,s){"use strict";var n;s.d(t,"a",(function(){return n})),function(e){e["system"]="system",e["light"]="light",e["dark"]="dark"}(n||(n={}))},af17:function(e,t,s){},cdb1:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-footer",{attrs:{bordered:""}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.disable,expression:"!disable"}],staticClass:"row q-pa-sm"},[s("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"primary",color:"primary",label:e.$t("submit")},on:{click:e.submit}}),s("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"general",color:"general",label:e.$t("discard")},on:{click:e.discard}}),s("q-space"),s("q-btn",{staticClass:"q-mx-xs",attrs:{unelevated:"",loading:e.loading,"text-color":"negative",color:"negative",label:e.$t("reset")},on:{click:e.reset}})],1)])},i=[],a={props:{disable:Boolean,loading:Boolean},methods:{submit(){this.$emit("submit")},discard(){this.$emit("discard")},reset(){this.$emit("reset")}}},o=a,r=s("2877"),l=s("7ff0"),c=s("9c40"),u=s("2c91"),d=s("eebe"),h=s.n(d),g=Object(r["a"])(o,n,i,!1,null,null,null);t["a"]=g.exports;h()(g,"components",{QFooter:l["a"],QBtn:c["a"],QSpace:u["a"]})},d573:function(e,t,s){"use strict";s("820e"),s("ddb0");var n=s("5781");class i extends n["b"]{constructor(){super("lib"),this.resources=this.node.get("resources"),this.titles=this.node.get("titles"),this.covers=this.node.get("covers"),this.sources=this.node.get("sources")}async removeSource(e,t){const s=this.sources.get(e),n=await this.sources.get(e).get(t).oncePromise();this.remove(t,n,s)}createResource(e,{title:t,cover:s,source:n}){const i=this.titles.get(e);i.put(t);const a=this.covers.get(e);Array.isArray(s)?s.forEach((e=>a.set(e))):a.set(s);const o=this.sources.get(e),r=e=>{const{link:t,rating:s,comments:n}=e;o.set({link:t,rating:s,comments:n})};Array.isArray(n)?n.forEach(r):r(n),this.resources.get(e).put({id:e,title:i,cover:a,source:o})}async removeResource(e){const t=["titles","covers","sources","resources"],s=t.map((t=>async()=>{const s=await this[t].get(e).oncePromise();this.remove(e,s,this[t])}));await Promise.allSettled(s.map((e=>e())))}async fetchAllResources(){const e=await this.resources.oncePromise(),t=await this.parseRawData(e),s={};for(const[n,i]of Object.entries(t))i&&i.id&&(s[n]=i);return s}async fetchLibrary(){const e=["titles","covers","sources","resources"],t=e.map((e=>async()=>{const t=await this[e].oncePromise(),s=await this.parseRawData(t);return[e,s]})),s={};return await Promise.all(t.map((e=>e()))).then((e=>{e.forEach((([e,t])=>{s[e]=t}))})),s}}n["a"].registerModule(new i);const a=window.GunDB.lib;t["a"]=a},e061:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"setting-block row q-mt-md q-mb-lg"},[s("div",{staticClass:"setting-label col-4 q-pt-sm"},[s("span",{staticClass:"q-mr-md"},[e._v(e._s(e.label))])]),s("div",{staticClass:"setting-content col row"},[e._t("default")],2)])},i=[],a={props:{label:String}},o=a,r=(s("0204"),s("2877")),l=Object(r["a"])(o,n,i,!1,null,"4521552c",null);t["a"]=l.exports}}]);