(()=>{var t={};let e,s;t.d=(e,s)=>{for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);class o{constructor(t){this.arrs=t.reverse(),this.len=t.length,this.names=new Map,this.charms=[],this.previousObj={total:0},this.previousCost=0,this.round2=[],this.round2Pointer=0,this.starting={};let e=this.len;for(this.costs=[{total:0,keys:new Int8Array(5),pointer:0},{total:1,skills:[],pointer:0},{total:2,skills:[],pointer:0},{total:1,skills:[],pointer:0},{total:1,skills:[],pointer:0},{total:3,skills:[],pointer:0}],this.costKeys=this.costs[0];e--;){let t=this.arrs[e];this.names.set(t[1],t),this.starting[t[1]]=t[3];let s=t.pop();s&&(s[0]=t,this.charms.push(s)),t[6]=!t[4]||1===t[4][1]}}useDecorationSlots(t,e){let s,o,i,r=0,n=0,l=0;this.round2Pointer=0;let u=0,a=0,f=this.len,c=this.arrs;t:for(;f--;)if(s=c[f],!((s[0]=s[3])<=0)){if(i=s[4],u=Math.min(i.length,4),!s[6]&&t[3]&&u)a=0;else{if(!(u>2&&t[i[2]])){this.round2[this.round2Pointer++]=s;continue t}a=2}for(o=s[1];a<u;){if(n=i[a++],l=i[a++],s[0]<l)continue;let u=Math.min(~~(s[0]/l),t[n]);if(u>0&&(e[r++]=o,e[r++]=l,e[r++]=n,e[r++]=u,t[n]-=u,0==(s[0]-=u*l)))continue t}this.round2[this.round2Pointer++]=s}return r}useDecosRound2(t,s,o,i){this.costKeys.pointer=0;let r=0;this.previousCost=0;let n,l,u=e.offsetTable,a=s.pointer,f=s.arr,c=this.round2,h=0,d=0,m=0,g=0,k=0;const p=this.costKeys.keys;let P=0,y=0,S=-1;t:for(;++S<this.round2Pointer;){for(n=c[S],l=n[4],h=l.length,d=!h||t[3]?0:h<4||t[l[2]]?2:h<6||t[l[4]]?4:h;d<h;)if(m=l[d++],g=l[d++],t[m]&&(k=Math.max(1,Math.min(~~(n[0]/g),t[m])),f[a++]=n[1],f[a++]=g,f[a++]=m,f[a++]=k,t[m]-=k,(n[0]-=k*g)<=0))continue t;if((r+=n[0])>i||(o-=n[0]*n[2])<u[r]||!n[2])return!0;this.previousCost===n[2]?(this.previousObj.total+=n[0],this.previousObj.skills[this.previousObj.pointer++]=n):(this.previousCost=n[2],p[P++]=this.previousCost,this.previousObj=this.costs[this.previousCost],this.previousObj.pointer=1,this.previousObj.total=n[0],this.previousObj.skills[0]=n)}if(P>1){this.costKeys.pointer=P;let t=-1;for(;++t<--P;)y=p[P],p[P]=p[t],p[t]=y}this.costKeys.total=r,s.pointer=a}}class i{constructor(t,e){this.armors=t,this.augmentRemovalOrder=[0,1,2,3,4],this.indexes=["helm","chest","arm","waist","leg"].map((t=>({index:-1,len:this.armors[t].length,type:t}))),this.decoSlotsResetValues=new Int8Array(4);for(let t=0;t<4;t++)this.decoSlotsResetValues[t]=e[t];this.budget=4,this.indexByType={helm:0,chest:1,arm:2,waist:3,leg:4},this.defAug={"-Def":5},this.theseArmors=[],this.offsetTable=new Int8Array([0,0,0,0,0,0,0,0,0,0,1,3,4,6,7,9,11,13,15,18])}setNextArmor(t,e,o){let i=0,r=this.armors[t][e];if(o>=0){let e=this.armors[t][o];this.budget-=~~((e.startingQuriousPoints+(e.fodderSkills.length?10:5))/3);for(let t=0;t<4;++t)this.decoSlotsResetValues[t]+=-e.decos[t]+r.decos[t];for(let t of e.requestedSkills)s.names.get(t)[3]+=e.skills[t]}else for(let t=0;t<4;++t)this.decoSlotsResetValues[t]+=r.decos[t];this.theseArmors[this.indexByType[r.type]]=r,this.budget+=~~((r.startingQuriousPoints+(r.fodderSkills.length?10:5))/3);for(let t of r.requestedSkills)(s.names.get(t)[3]-=r.skills[t])<0&&++i;return i}resetArmors(){for(const t of this.theseArmors)t.augsPointer=3,t.skillLen=t.len,t.skillsRemovedCount=-1,t.quriousPoints=t.startingQuriousPoints,t.unBloatedPoints=~~(t.startingQuriousPoints/3),t.initAugs[1]!==t.augs[1]&&(t.augs[1]=t.initAugs[1]),t.augs[2]!==t.initAugs[2]&&(t.augs[2]=t.initAugs[2])}getPoints(t,e){if(!e){if(e=t.augsPointer,6===t.augsPointer)return;++t.augsPointer}let s=t.fodderSkills[++t.skillsRemovedCount];s?(t.augs[e]={"-Skill":s},t.quriousPoints+=10):(t.augs[e]=this.defAug,t.quriousPoints+=5),t.unBloatedPoints=~~(t.quriousPoints/3)}setAugmentRemovalOrder(){this.theseArmors.sort(((t,e)=>e.len-t.len||e.startingQuriousPoints-t.startingQuriousPoints));let t=this.theseArmors,e=0,s=4;for(let o=0;o<5;++o)this.indexByType[t[o].type]=o,t[o].decoAugs&&(this.augmentRemovalOrder[t[o].len>2?e++:s--]=t[o]);this.augmentRemovalOrder.splice(e,s-e+1)}removeUnusedSlotAugments(t){let s=0;for(let o of this.augmentRemovalOrder){if(!t[3]&&!t[1])break;let i=o.decoAugs,r=i.length-1,n=i[r],l=0,u=!0,a=o.len>2?1:0;t:for(;r>a;){if((t[l]-=i[r][l]-i[r-1][l])<0){for(;l>=0;)t[l]+=i[r][l]-i[r-1][l],--l;break t}4==++l&&(l=0,u=!1,--r)}if(u)continue;let f=i[r];if(0===r){e.getPoints(o,2);let t=o.augs[2]["-Def"]?5:10;s+=o.unBloatedPoints-~~((o.quriousPoints-t)/3)}else o.augs[2]={"+Slots":-f[5]};let c=n[5]-f[5];o.quriousPoints+=c,o.unBloatedPoints+=c/3,s+=c/3}return s+this.budget}addSkillToSet(t,e,s){let o=e.skillLen;for(;o--;)if(s[o]===t)return!0;return e.skillLen<5&&(s[e.skillLen++]=t,!0)}}function r(t,o,i){const r=o[0];let c=r.total;t:for(let e=0;e<5;e++){const s=t.theseArmors[e];if(c<=0)return r.pointer;let h=i>2?3:i,d=s.skillLimitation;for(;h>c;)t.getPoints(s),--h;for(;h;)if(h>d){let e=1===d?a(h,s.unBloatedPoints,r,o,s):a(h-1,s.unBloatedPoints-r.keys[0],r,o,s);if(e){if(f(e[0],s,r,o[e[0][2]],e[1]))return!0;if(0==(c-=e[1]))return r.pointer;if(0==(h-=e[1]))continue t;continue}if(t.getPoints(s),! --h)continue t}else{let e=2===h?l(r,s.unBloatedPoints,o):3===h?n(r,s.unBloatedPoints,o):1===h?u(r,s.unBloatedPoints):0;if(e){for(;h--;){if(f(o[e[h]].skills[0],s,r,o[e[h]]))return!0;if(! --c)return r.pointer;if(!h)continue t}continue}if(t.getPoints(s),! --h)continue t}}return r.pointer&&4===i&&function(t,o){let i=s.costs;for(const s of e.theseArmors){if(!t||!o.pointer)break;let r=s.augsPointer;if(r<6&&s.unBloatedPoints<o.keys[0]||6===r&&s.quriousPoints<5+3*o.keys[0])continue;let n=0,l=0;for(let t=0;t<r;++t){let e=s.augs[t];e["-Def"]?n=t:e["-Skill"]&&(l=t)}let u=6-s.augsPointer?0:n?5:l?10:999;if(999===u||~~((s.quriousPoints-u)/3)<o.keys[0])continue;let a,c=o.keys.slice(0,o.pointer);t:for(let t of c){if(s.quriousPoints-u<3*t)continue;let o=i[t];for(let t=0;t<o.pointer;++t)if(e.addSkillToSet(o.skills[t][1],s,s.innateSkills)){a=o.skills[t];break t}}if(a&&(u&&(s.quriousPoints-=u,s.unBloatedPoints=~~(s.quriousPoints/3),s.augs.splice((n||l)-1,1),--s.augsPointer),!f(a,s,o,i[a[2]])&&! --t))return}}(c,r),r.pointer}function n(t,e,s){const o=t.pointer,i=t.keys;let r=o;for(;r--;){if(3*i[r]>e)continue;let t=o;for(;t-- >r;){if(i[r]+2*i[t]>e||s[i[r]].total<=(r===t))continue;let n=o;for(;n-- >t;)if((t===n||i[r]+i[t]+i[n]<=e)&&s[i[n]].total>(n===r)+(n===t))return[i[r],i[t],i[n]]}}}function l(t,e,s){const o=t.pointer,i=t.keys;let r=o,n=0;for(;r--;){if(n=i[r],n+n>e)continue;let t=o;for(;t-- >r;)if(r!==t&&n+i[t]<=e||r===t&&s[n].total>1)return[n,i[t]]}}function u(t,e){let s=t.pointer;for(;s--;)if(t.keys[s]<=e)return[t.keys[s]]}function a(t,e,o,i,r){let n=o.pointer,l=o.keys,u=e-o.keys[0]*(t-1);for(const t of r.requestedSkills)if(s.names.get(t)[0]>0&&s.names.get(t)[2]<=u)return[s.names.get(t),1];for(;n--;){let s=l[n],o=i[s];if(s*t<=e&&o.total-o.pointer>=t){let e=o.pointer;for(;e--;){let s=o.skills[e];if(s[0]>=t)return[s,t]}}}}function f(t,s,o,i,r=1){let n=t[1],l=t[2];if(s.unBloatedPoints<l*r||s.augsPointer+r>6||!e.addSkillToSet(n,s,s.innateSkills))return!0;s.quriousPoints-=3*l*r,s.unBloatedPoints-=l*r;for(let t=0;t<r;++t)s.augs[s.augsPointer++]={"+Skill":n};if(t[0]-=r,0==(i.total-=r)){if(i.skills.pop(),--i.pointer,o.keys[--o.pointer]===l)return;for(let t=0;t<o.pointer;++t)if(o.keys[t]===l){for(;t<o.pointer;)o.keys[t]=o.keys[++t];return}}if(t[0])return;let u=i.skills,a=--i.pointer;if(u[a]!==t)for(let e=0;e<a;++e)if(u[e]===t)return void(u[e]=u[a])}function c(t,e,o,i){let r=new Int8Array(4),n=i[3];if(i[0]){let t=i[2]-n;if(t){let o=0;for(;o<e.pointer-1;){let n=e.arr[o++],l=e.arr[o++],u=e.arr[o++],a=e.arr[o++];const f=s.names.get(n)[2]-1;if(f<3)break;if(i[f]<l)continue;let c=Math.min(~~(t/l),a);r[u-1]<c&&(r[u-1]=c)}}}for(let e=0;e<4;++e)r[e]+=t[e];n&&(r[3]+=~~((n+r[1]+r[2])/2),r[1]+=n+r[1]+r[2],r[2]+=n,r[0]=i[1]);for(let t=0;t<4;++t)o[t]=Math.max(o[t],r[t])}function h(t){const s=new Int8Array(5);for(let t of e.theseArmors){if(t.quriousPoints<(6===t.augsPointer?8:3)||t.skillLen>4)continue;let e=0,o=0;for(let s of t.augs)s["-Def"]?++e:s["-Skill"]&&++o;let i=6-t.augsPointer,r=--i>=0?0:--e>=0?5:--o>=0?10:999;if(999===r)continue;let n=1;for(;t.quriousPoints>=r+3*n;){let l=Math.min(5,~~((t.quriousPoints-r)/n/3));for(;l--;)++s[l];if(r+=--i>=0?0:--e>=0?5:--o>=0?10:999,999===r)break;++n}}for(let e=0;e<5;e++)t[e]=Math.max(t[e],s[e]);return s}function d(t){for(let o of e.theseArmors){if(!o.fodderCount)continue;const e={...o.skills};for(const t of o.augs)t&&t["-Skill"]&&--e[t["-Skill"]];let i=0;for(let[t,o]of Object.entries(e))s.starting[t]&&(o-=s.starting[t]),o>0&&(i+=o);const r=i+(6-o.augsPointer)+~~(o.quriousPoints/5);if(r)for(let e=0;e<o.len;e++){let i=o.innateSkills[e],n=s.names.has(i)?-s.names.get(i)[0]:r;n&&(t[i]=Math.max(t[i]||0,Math.min(o.skills[i],n)))}}}"undefined"!=typeof self&&(self.onmessage=t=>{e=new i(t.data.armors,t.data.charmSlots),s=new o(t.data.skills);const{setLimiter:n,setBonus:l,charmNeeded:u}=t.data;t=null,function(t,o,i){const n={sets:[{armors:[],count:0,usedSkills:[{charms:[],decos:{arr:new Uint8Array(84),pointer:0},armors:{helm:[],chest:[],arm:[],waist:[],leg:[]}}]}],count:{sets:0,combos:0},stats:{quriousSkills:new Int8Array(5),armorSkills:{},remainingSlots:new Int8Array(4)},name:self.name};let l,u=n.sets[n.count.sets],a=u.usedSkills[u.count],f=a.decos;const m=new Int8Array(4);let g=[];const k=new Int8Array(2);let p=[],P=[];const y=s.charms;let S=0;t:for(;;){S=0;for(let t=0;t<5;t++){let s=e.indexes[t],o=s.index;if(++s.index===s.len&&(s.index=0,"leg"===s.type))break t;if(e.setNextArmor(s.type,s.index,o),0!==s.index)break}if(S)continue;if(o)for(const t in o)if(s.names.get(+t)[3]>0)continue t;if(i){g=[];for(let t of Object.keys(i))s.names.get(+t)[3]>0&&g.push(s.names.get(+t))}e.setAugmentRemovalOrder(),k[0]=0;e:for(let o=0,S=y.length;o<S;o++)if(p=y[o],!(p[0][3]<p[1][1])){p[0][3]-=p[1][1],k[1]=0;s:for(let A=0;A<S;A++){if(A===o)continue;if(P=y[A],P[0][3]<P[2][1])continue;if(P[0][3]-=P[2][1],i)for(let t of g)if(t[3]>0){P[0][3]+=P[2][1];continue s}for(let t=0;t<4;++t)m[t]=e.decoSlotsResetValues[t];e.resetArmors(),a.decos.pointer=s.useDecorationSlots(m,a.decos.arr);let S=e.removeUnusedSlotAugments(m);if(s.useDecosRound2(m,a.decos,S,t)||r(e,s.costs,t)){if(P[0][3]+=P[2][1],++k[1]<9)continue s;if(p[0][3]+=p[1][1],++k[0]<8)continue e;break e}!u.count&&n.stats.remainingSlots[3]<5&&n.stats.quriousSkills[4]<5&&(d(n.stats.armorSkills),h(n.stats.quriousSkills),c(m,f,n.stats.remainingSlots,n.stats.quriousSkills)),a.charms[0]=p[1],a.charms[1]=P[2];for(let t of e.theseArmors){l=a.armors[t.type];for(let e=0;e<6;e++)l[e]=e<t.augsPointer?t.augs[e]:null}++u.count,u.usedSkills[u.count]||(u.usedSkills[u.count]={charms:[],decos:{arr:new Uint8Array(84),pointer:0},armors:{helm:[],chest:[],arm:[],waist:[],leg:[]}}),a=u.usedSkills[u.count],f=a.decos,P[0][3]+=P[2][1]}p[0][3]+=p[1][1]}if(!u.count)continue;++n.count.sets,n.count.combos+=u.count;let A=n.sets.length-1;if(A&&n.sets[A-1].count<u.count){for(;A>0&&n.sets[A-1].count<u.count;)n.sets[A]=n.sets[--A];n.sets[A]=u}let b=Object.values(e.indexByType);for(let t=0;t<5;t++)u.armors[t]=e.theseArmors[b[t]].name;n.sets.length<6&&n.sets.push({armors:[],count:0,usedSkills:[{charms:[],decos:{arr:new Uint8Array(84),pointer:0},armors:{helm:[],chest:[],arm:[],waist:[],leg:[]}}]}),u=n.sets[n.sets.length-1],u.count=0,a=u.usedSkills[0],f=a.decos}if(1===n.sets.length)return void postMessage(!1);n.sets.pop(),n.sets.forEach((t=>{t.usedSkills.pop(),t.usedSkills.forEach((t=>{for(let e=t.decos.pointer;e<84;e++)t.decos.arr[e]=0;t.decos=t.decos.arr}))})),postMessage(n)}(5*n,l,u)})})();