/*! For license information please see setBuildWorker.js.LICENSE.txt */
(()=>{"use strict";var t={r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}};function addSkills(t,e,s,n,i){let o=i-t.skillLimitation,l=t.skillLimitation;t:for(let[r,a]of Object.entries(n)){if(t.limitedSkills)for(const n of t.limitedSkills){if(!e[r][n])continue;let t=Math.min(a,e[r][n]);for(s[0]-=+r*t,i-=t,a-=t;t--;)s.push([n,r]);if(!i)return s;if(!a)continue t}for(const[t,n]of Object.entries(e[r])){if("total"===t||1!==o&&n<l+1&&1===o&&n<l)continue;let e=Math.min(a,n);for(s[0]+=r*e,i-=e,a-=e;e--;)s.push([t,r]);if(!i||0==--o)return s;if(!a)continue t}}return s}t.r({});function SkillRestrictedBestSum3(t,e){let s=[0],n={};const i=e.unBloatedPoints,o=Object.keys(t);for(let l=0,r=o.length;l<r;l++)for(let a=l;a<r;a++){if(1===t[o[a]].total&&a===l)continue;const u=parseInt(o[l])+parseInt(o[a]);for(let c=a;c<r;c++){if(1===t[o[c]].total&&(c===l||c===a)||2===t[o[c]].total&&c===l&&c===a)continue;if(u+parseInt(o[c])>i)break;n={[o[c]]:1},n[o[a]]=(n[o[a]]||0)+1,n[o[l]]=(n[o[l]]||0)+1;const r=addSkills(e,t,[0],n,3);if(r[0]===i)return r;r[0]<=i&&r[0]>s[0]&&([...s]=r)}}return s}function SkillRestrictedBestSum2(t,e){let s=[0],n={};const i=e.unBloatedPoints,o=Object.keys(t);for(let l=0,r=o.length;l<r;l++)for(let a=l;a<r;a++){if(1===t[o[a]].total&&a===l)continue;if(+o[l]+ +o[a]>i)break;n={[o[a]]:1},n[o[l]]=(n[o[l]]||0)+1;const r=addSkills(e,t,[0],n,2);if(r[0]===i)return r;r[0]<i&&r[0]>s[0]&&([...s]=r)}return s}function findBestSum3(t,e){let s=[0,0,0,0];const n=Object.keys(t);let i=0;for(let o=0,l=n.length;o<l;o++){let r=+n[o];for(let a=o;a<l;a++)if(1!==t[n[a]].total||a!==o){i=r+ +n[a];for(let u=a;u<l;u++){if(1===t[n[u]].total&&(u===o||u===a)||2===t[n[u]].total&&u===o&&u===a)continue;const l=i+ +n[u];if(l===e)return[r,i-r,l-i,l];l<e&&l>s[3]&&(s=[r,i-r,l-i,l])}}}return s}const findBestSum2=(t,e)=>{let s=[0,0,0];const n=Object.keys(t);for(let i=0,o=n.length;i<o;i++)for(let l=i;l<o;l++){if(1===t[n[l]].total&&l===i)continue;const o=+n[i]+ +n[l];if(o<e)o>s[2]&&(s=[+n[i],+n[l],o]);else if(o===e)return[+n[i],+n[l],o]}return s},findBestSum1=(t,e)=>{let s=Object.keys(t);for(let t=s.length;t>=0;--t)if(+s[t]<=e)return[+s[t],+s[t]]},getPoints=(t,e)=>{let s=0;t.fodderSkills.length>0&&(++s,++t.skillsRemovedCount);const n=5*(1+s),i=s?t.fodderSkills[t.skillsRemovedCount]:n,o=s?"-Skill":"-Def";t.augs.push({[o]:i}),e.push([i,o,t.name,1]),t.quriousPoints+=n,t.unBloatedPoints=~~(t.quriousPoints/3)};function applyAugment(t,e,s){if(!t.innateSkills.has(e)){if(5===t.innateSkills.size)return console.log(t.name,e),!0;t.innateSkills.add(e)}t.augs.push({"+Skill":e}),s.push([e,1,t.name,1])}const pushAugs=(t,e,s,n)=>{for(const i of t){const[t,o]=Array.isArray(i)?i:[Object.keys(s[i])[1],i];applyAugment(e,t,n)||(0==--s[o].total?delete s[o]:0==--s[o][t]&&delete s[o][t])}},minimumCostForPossibleAugs=(t,e)=>{let s=0;for(let n=0;t&&n<e.length;++n){const i=Math.min(e[n][1].total,t);s+=i*+e[n][0],t-=i}return s},combineDecos=(t,e)=>{const[...s]=e;return t.forEach((t=>{s[0]+=t[0],s[1]+=t[1],s[2]+=t[2],s[3]+=t[3]})),s},max=(t,e)=>t>=e?t:e,getMostSkills=(t,e)=>{for(const s of t){for(let t=0;t<4;t++)e.remainingSlots[t]=max(e.remainingSlots[t]||0,s.remainingSlots[t]);for(let t=0;t<5;t++)e.quriousSkills[t]=max(e.quriousSkills[t]||0,s.quriousSkills[t]);for(const[t,n]of Object.entries(s.armorSkills))e.armorSkills[t]=max(e.armorSkills[t]||0,n)}};self.addEventListener("message",(t=>{const e={sets:[],count:{sets:0,combos:0},stats:{quriousSkills:[0,0,0,0,0],armorSkills:{},remainingSlots:[0,0,0,0]}};t.data.requiredSkills=Object.entries(t.data.skills);(s=>{for(const n of Object.values(s)){t.data.theseArmors=[t.data.armors.helm[n[0]],t.data.armors.chest[n[1]],t.data.armors.arm[n[2]],t.data.armors.waist[n[3]],t.data.armors.leg[n[4]]];const s=testThisBatch(t.data);s&&(getMostSkills(s,e.stats),e.count.combos+=s.length,++e.count.sets,e.sets.length<50&&e.sets.push(s))}postMessage({type:"rerun",final:e})})(t.data.permutations),self.terminate}));const testThisBatch=t=>{const{thisWeapon:e,theseCharms:s,requiredSkills:n,skillInfo:i,theseArmors:o,skills:l}=t,r={};for(const t of o)for(const[e,s]of Object.entries(t.skills))l[e]&&(r[e]=(r[e]||0)+s);const a=combineDecos([e,o[0].decos,o[1].decos,o[2].decos,o[3].decos,o[4].decos],t.charmSlots);o.sort(((t,e)=>{const s=6-t.augs.length+t.quriousPoints<9?1:0,n=5-Object.keys(t.skills).length,i=6-e.augs.length+e.quriousPoints<9?1:0;return n-s-(5-Object.keys(e.skills).length-i)}));const u=["helm","chest","arm","waist","leg"],c=[];if(s.forEach((t=>{if(Object.entries(t).every((([t,e])=>!r[t]||r[t]+e<=i[t].max)))return;const e=[];let s=-a[0];for(let[o,l]of n){r[o]&&(l+=r[o]),t[o]&&(l+=t[o]);const{lvl:n,max:a}=i[o];if(l>a)return;1===n&&(s-=l),l<0&&e.push([o,l])}const l=(([...t],e,s,n,i)=>{const o={remainingSkills:{},decosUsed:[],remainingExtraAugments:0};for(let i=0;i<e.length&&t[3]>0;i++){const{lvl4:l}=s[e[i][0]];if(0!==l&&e[i][1]<=-l&&(1!==s[e[i][0]].lvl||(n-=l)>=0)&&(1!==l||s[e[i][0]].qurious>9)){const s=~~Math.min(t[3],-e[i][1]/l);t[3]-=s,e[i][1]+=l*s,o.decosUsed.push([e[i][0],l,"Slot lvl4",s])}}let l=-1;for(const[n,i]of e){if(++l,i>=0)continue;let r=0;switch(s[n].lvl){case 1:r=Math.min(-i,t[0]);break;case 2:r=Math.min(-i,t[1]+t[2]+t[3]);break;case 3:r=Math.min(-i,t[2]+t[3]);break;case 4:r=Math.min(-i,t[3]);break;default:r=0}if(r+i<0){const{qurious:t}=s[n],e=r+i;if(o.remainingSkills[t]||(o.remainingSkills[t]={total:0}),t>=3&&(o.remainingExtraAugments+=e)<-15||3===t&&(o.remainingExtraAugments+=e/1.5)<-15)return!1;if(o.remainingSkills[t][n]=0,o.remainingSkills[t].total-=e,o.remainingSkills[t][n]-=e,!r)continue}let a=s[n].lvl-2;for(;a++<4;){if(!t[a])continue;const s=Math.min(r,t[a],-e[l][1]);if(t[a]-=s,e[l][1]+=s,o.decosUsed.push([n,1,`Slot lvl${a+1}`,s]),0===e[l][1])break}}return[o,t]})(a.slice(0),e,i,s);if(!l)return;const{quriousAugs:u,armorPieces:f,theseExtraPoints:m,newArmorSkills:k,newDecoSkills:d,arr:g}=((t,e,s)=>{const n=[0,0,0,0,0];let{decosUsed:i,remainingSkills:o,remainingExtraAugments:l}=t;const[...r]=i;let a=Object.values(o).reduce(((t,e)=>t+e.total),0),u=a+l;if(u<=0)return{quriousAugs:0,finalSkillCheck:0,returnArmors:0,arr:!1};const c=[];let f={};for(const t of e){if(f={...t},f.augs=[...t.augs],f.fodderSkills=[...t.fodderSkills],f.skillsRemovedCount=t.fodderCount<3?t.fodderCount:3,f.innateSkills=new Set(Object.keys(t.skills)),c.push(f),!a)continue;const e=Object.entries(o);let s,n=Math.min(6-f.augs.length,a),l=a<6-f.augs.length?6-f.augs.length-a:0;for(;n&&minimumCostForPossibleAugs(n,e)>f.unBloatedPoints;)++l,--n;if(n){for(;l--;)if(getPoints(f,i),u<0)return{quriousAugs:0,finalSkillCheck:0,returnArmors:0,arr:!1};if(5-f.innateSkills.size>=n){if(3===n)s=findBestSum3(o,f.unBloatedPoints);else if(2===n)s=findBestSum2(o,f.unBloatedPoints);else{if(!(1===n&&f.unBloatedPoints>=e[0][0]))continue;s=findBestSum1(o,f.unBloatedPoints)}((f.quriousPoints-=Number(3*s.pop()))<0||void 0===f.quriousPoints)&&console.log(`${f.name} has ${f.quriousPoints} points}`,f)}else 3===n?s=SkillRestrictedBestSum3(o,f):2===n?s=SkillRestrictedBestSum2(o,f):1===n&&console.log("limit 1"),((f.quriousPoints-=Number(3*s.shift()))<0||void 0===f.quriousPoints)&&console.log(`${f.name} has ${f.quriousPoints} points}`,f);a-=s.length,pushAugs(s,f,o,i)}}const replaceAugment=(t,e)=>{t.augs.splice(e,1);const s=findBestSum1(o,~~(t.quriousPoints/3));s[0]&&(t.quriousPoints-=3*s[1],--a,pushAugs([s[0]],t,o,i))};if(a>0)for(const t of c)if(!(t.innateSkills.size>4&&Object.entries(o).filter((e=>Object.keys(e[1]).every((e=>!t.innateSkills.has(e))))))){if(!Object.keys(o).length)break;for(let e=t.augs.length-1;e>=0&&t.quriousPoints>8;e--)t.augs[e]["-Def"]&&t.quriousPoints-5>=3*+Object.keys(o)[0]?(t.quriousPoints-=5,replaceAugment(t,e)):t.augs[e]["-Skill"]&&t.quriousPoints-10>=3*+Object.keys(o)[0]&&(t.quriousPoints-=10,replaceAugment(t,e))}if(Object.keys(o).length)return{quriousAugs:0,finalSkillCheck:0,returnArmors:0,arr:!1};for(const t of c){if(t.innateSkills.size>4||t.quriousPoints<8)continue;let e=0,s=1;for(let s in t.augs)"-Def"===s&&++e;let i=t.augs.length,o=i<6?0:--e>0?5:10,l=t.quriousPoints;for(;(l-=o)>3*s;)n[~~(l/(3*s))]=n[~~(l/(3*s))]||0+ ++s,i<6&&++i,o=i<6-s?0:--e>0?5:10}return{quriousAugs:i,armorPieces:c,theseExtraPoints:n,newArmorSkills:{},newDecoSkills:[0,0,0,0],arr:!a}})(l[0],o);g&&(f.some((t=>null==t.name))&&console.log(f),c.push({usedSkills:[].concat(u,Object.entries(r),Object.entries(t)),armors:[[f[0].name,f[0]],[f[1].name,f[1]],[f[2].name,f[2]],[f[3].name,f[3]],[f[4]?.name,f[4]]],remainingSlots:combineDecos(d,l[1]),quriousSkills:m,armorSkills:k,thisCharm:t,decoArr:a}))})),c.length)return c.map((t=>(t.armors.sort(((t,e)=>u.indexOf(t[1]?.type)-u.indexOf(e[1]?.type))),t)))}})();
//# sourceMappingURL=setBuildWorker.js.map