(()=>{"use strict";function t(t,e,s,o,n,i){t:for(let[l,r]of Object.entries(o)){for(const o of t.values()){if(!e[l][o])continue;let t=Math.min(r,e[l][o]);for(s[0]+=+l*t,i-=t,r-=t;t--;)s.push([o,l]);if(!i)break t;if(!r)continue t}for(const[t,o]of Object.entries(e[l])){if(o<2)continue;if(--n<0)break t;let e=Math.min(r,o);for(s[0]+=+l*e,i-=e,r-=e;e--;)s.push([t,l]);if(!i)break t;if(!r)continue t}}return s}const e=t=>Object.fromEntries(Object.entries(t).map((([t,e])=>[t,Object.fromEntries(Object.entries(e).filter((t=>"total"!==t[0])).sort((([t,e],[s,o])=>o-e)))])));function s(s,o,n,i){let l=[0];const r=e(s);let a={};for(let e=0;e<n.length;e++){a={[n[e]]:1};for(let s=e+1;s<n.length;s++){a[n[s]]=(a[n[s]]||0)+1;const u=n[e]+n[s];for(let e=s+1;e<n.length&&!(u+n[e]>i);e++){a[n[e]]=(a[n[e]]||0)+1;const s=t(o,r,[0],a,5-o.size,3);s[0]<=i&&s[0]>l[0]&&([...l]=s),a[n[e]]>1?--a[n[e]]:delete a[n[e]]}a[n[s]]>1?--a[n[s]]:delete a[n[s]]}}return l}function o(s,o,n,i){let l=[0];const r=e(s);for(let e=0;e<n.length;e++){const s=n[e];for(let a=e+1;a<n.length;a++){const e=n[a];if(s+e>i)break;const u={[s]:1};u[e]=(u[e]||0)+1;const c=t(o,r,[0],u,5-o.size,2);c[0]<=i&&c[0]>l[0]&&([...l]=c)}}return l}const n=(t,e)=>{let s=[0,0,0,0];for(let o=0;o<t.length;o++){const n=t[o];for(let i=o+1;i<t.length;i++){const o=n+t[i];for(let l=i+1;l<t.length;l++){const i=o+t[l];if(!(i<e))return i===e?[n,o-n,i-o,i]:s;i>s[3]&&(s=[n,o-n,i-o,i])}}}return s},i=(t,e)=>{let s=[0,0,0];for(let o=0;o<t.length;o++){const n=t[o];for(let i=o+1;i<t.length;i++){const o=n+t[i];if(!(o<e))return o===e?[n,o-n,o]:s;o>s[2]&&(s=[n,o-n,o])}}return s},l=(t,e)=>{const s=+t.filter((t=>t<=e)).pop();return[s,s]},r=(t,e)=>{let s=0;t.fodderSkills.length>0&&(++s,++t.skillsRemovedCount);const o=5*(1+s),n=s?t.fodderSkills.pop():o,i=s?"-Skill":"-Def";return t.augs.push({[i]:n}),e.push([n,i,t.name,1]),t.quriousPoints+=o,t.unBloatedPoints=~~(t.quriousPoints/3),[t,e]},a=(t,e,s,o)=>{let n=0;for(const i of t){const[t,l]=Array.isArray(i)?i:[Object.keys(s[i])[1],i];e.augs.push({"+Skill":t}),o.push([t,1,e.name,1]),e.innateSkills.add(t),0==--s[l].total?delete s[l]:0==--s[l][t]&&delete s[l][t],n--}return n},u=(t,e)=>{let s=0;for(let o=0;t&&o<e.length;++o){const n=Math.min(e[o][1].total,t);s+=n*+e[o][0],t-=n}return s},c=(t,e)=>{const[...s]=e;return t.forEach((t=>{s[0]+=t[0],s[1]+=t[1],s[2]+=t[2],s[3]+=t[3]})),s},f=(t,e)=>t>=e?t:e,h=(t,e)=>{for(const s of t){for(let t=0;t<4;t++)e.remainingSlots[t]=f(e.remainingSlots[t]||0,s.remainingSlots[t]);for(let t=0;t<5;t++)e.quriousSkills[t]=f(e.quriousSkills[t]||0,s.quriousSkills[t]);for(const[t,o]of Object.entries(s.armorSkills))e.armorSkills[t]=f(e.armorSkills[t]||0,o)}};self.addEventListener("message",(t=>{const e={sets:[],count:{sets:0,combos:0},stats:{quriousSkills:[0,0,0,0,0],armorSkills:{},remainingSlots:[0,0,0,0]}};t.data.requiredSkills=Object.entries(t.data.skills);(s=>{for(const o of Object.values(s)){t.data.theseArmors=[t.data.armors.helm[o[0]],t.data.armors.chest[o[1]],t.data.armors.arm[o[2]],t.data.armors.waist[o[3]],t.data.armors.leg[o[4]]];const s=m(t.data);s&&(h(s,e.stats),e.count.combos+=s.length,++e.count.sets,e.sets.length<50&&e.sets.push(s))}postMessage({type:"rerun",final:e})})(t.data.permutations),self.terminate}));const m=t=>{const{thisWeapon:e,theseCharms:f,requiredSkills:h,skillInfo:m,theseArmors:g,skills:k}=t;g.sort(((t,e)=>{const s=6-t.augs.length-((6-t.augs.length)/t.quriousPoints<=10?1:0),o=5-Object.keys(t.skills).length,n=6-e.augs.length-((6-e.augs.length)/e.quriousPoints<=10?1:0);return 5-Object.keys(e.skills).length-n-(o-s)}));const d={};for(const t of g)for(const[e,s]of Object.entries(t.skills))k[e]&&(d[e]=(d[e]||0)+s);const S=c([e,g[0].decos,g[1].decos,g[2].decos,g[3].decos,g[4].decos],t.charmSlots);g.sort(((t,e)=>{const s=6-t.augs.length-((6-t.augs.length)/t.quriousPoints<=10?1:0),o=5-Object.keys(t.skills).length,n=6-e.augs.length-((6-e.augs.length)/e.quriousPoints<=10?1:0);return o-s-(5-Object.keys(e.skills).length-n)}));let b=[];if(f.forEach((t=>{if(Object.entries(t).every((([t,e])=>!d[t]||d[t]+e<=m[t].max)))return;const e=[];let f=-S[0];for(let[s,o]of h){d[s]&&(o+=d[s]),t[s]&&(o+=t[s]);const{lvl:n,max:i}=m[s];if(o>i)return;1===n&&(f-=o),o<0&&e.push([s,o])}const[k,P]=(([...t],e,s,o,n)=>{const i={remainingSkills:{},decosUsed:[]};for(let n=0;n<e.length&&t[3]>0;n++){const{lvl4:l}=s[e[n][0]];if(0!==l&&e[n][1]<=-l&&(1!==s[e[n][0]].lvl||(o-=l)>=0)){const s=~~Math.min(t[3],-e[n][1]/l);t[3]-=s,e[n][1]+=l*s,i.decosUsed.push([e[n][0],l,"Slot lvl4",s])}}let l=-1;for(const[o,n]of e){if(++l,n>=0)continue;let r=0;switch(s[o].lvl){case 1:r=Math.min(-n,t[0]);break;case 2:r=Math.min(-n,t[1]+t[2]+t[3]);break;case 3:r=Math.min(-n,t[2]+t[3]);break;case 4:r=Math.min(-n,t[3]);break;default:r=0}if(r+n<0){const{qurious:t}=s[o],e=r+n;if(i.remainingSkills[t]||(i.remainingSkills[t]={total:0}),i.remainingSkills[t][o]=0,i.remainingSkills[t].total-=e,i.remainingSkills[t][o]-=e,!r)continue}let a=s[o].lvl-2;for(;a++<4;){if(!t[a])continue;const s=Math.min(r,t[a],-e[l][1]);if(t[a]-=s,e[l][1]+=s,i.decosUsed.push([o,1,`Slot lvl${a+1}`,s]),0===e[l][1])break}}return[i,t]})(S.slice(0),e,m,f),{quriousAugs:q,armorPieces:O,theseExtraPoints:p,newArmorSkills:j,newDecoSkills:v,arr:y}=((t,e,c,f)=>{const h=[0,0,0,0,0],m={},g=[0,0,0,0];let{decosUsed:k,remainingSkills:d}=t;const[...S]=k;let b=Object.values(d).reduce(((t,e)=>t+e.total),0);const P=[];let q,O;const p=[];for(const t of e){q={...t},q.augs=[...t.augs],q.fodderSkills=[...t.fodderSkills],q.skillsRemovedCount=Math.min(3,t.fodderCount),q.innateSkills=new Set(Object.keys(t.skills)),P.push(q);const e=Object.entries(d);if(!b||!e.length)continue;let c=Math.min(6-q.augs.length,b),f=b<6-q.augs.length?6-q.augs.length-b:0;for(;c&&u(c,e)>q.unBloatedPoints;)++f,--c;if(c){for(;f--;)[q,k]=r(q,k);p.length=0;for(const t in d){let e=Math.min(d[t].total,c);for(;e--;)p.push(+t)}if(5-q.innateSkills.size>=c){if(3===c)O=n(p,q.unBloatedPoints);else if(2===c)O=i(p,q.unBloatedPoints);else{if(!(1===c&&q.unBloatedPoints>=p[0]))continue;O=l(p,q.unBloatedPoints)}((q.quriousPoints-=Number(3*O.pop()))<0||void 0===q.quriousPoints)&&console.log(`${q.name} has ${q.quriousPoints} points}`,q)}else 3===c?O=s(d,q.innateSkills,p,q.unBloatedPoints):2===c?O=o(d,q.innateSkills,p,q.unBloatedPoints):1===c&&console.log("limit 1"),((q.quriousPoints-=Number(3*O.shift()))<0||void 0===q.quriousPoints)&&console.log(`${q.name} has ${q.quriousPoints} points}`,q);b+=a(O,q,d,k)}}const j=(t,e)=>{t.augs.splice(e,1);const s=l(Object.keys(d),~~(t.quriousPoints/3));s[0]&&(t.quriousPoints-=3*s[1],b+=a([s[0]],t,d,k))};if(b>0)for(const t of P)if(!(t.innateSkills.size>4&&Object.entries(d).filter((e=>Object.keys(e[1]).every((e=>!t.innateSkills.has(e))))))){if(!Object.keys(d).length)break;for(let e=t.augs.length-1;e>=0;e--){if(t.augs[e]["-Def"]&&t.quriousPoints-5>=3*+Object.keys(d)[0]){t.quriousPoints-=5,j(t,e);break}if(t.augs[e]["-Skill"]&&t.quriousPoints-10>=3*+Object.keys(d)[0]){t.quriousPoints-=10,j(t,e);break}}}if(Object.keys(d).length)return{quriousAugs:0,finalSkillCheck:0,returnArmors:0,arr:!1};for(const t of P){if(t.quriousPoints<5||!t.fodderCount)continue;const e=Math.min(t.fodderCount,~~(t.quriousPoints/5));for(const[s,o]of Object.entries(t.skills))m[s]=(m[s]||0)+Math.min(c[s]?.max||5,o,e);if(t.innateSkills.size>4||t.quriousPoints<8)continue;let s=t.augs.length,o=3-t.skillsRemovedCount,n=t.quriousPoints;for(;--s>=0&&!((n-=--o>=0?5:10)<3*s);){let t=~~(n/s/3);for(;t--;)++h[t]}for(let t=0;t<5;++t){if(0===h[t])continue;let e=h[t];for(const[s,o,n,i]of S){if(c[s].quriousPoints*o>3*(t+1))continue;let n=c[s].lvl-1,l=Math.min(i,e);if(g[n]=(g[n]||0)+l,e-=l,0===e)break}}}return{quriousAugs:k,armorPieces:P,theseExtraPoints:h,newArmorSkills:m,newDecoSkills:g,arr:!b}})(k,g,m);if(!y)return!1;O.some((t=>null==t.name))&&console.log(O),b.push({usedSkills:[].concat(q,Object.entries(d),Object.entries(t)),armors:[[O[0].name,O[0]],[O[1].name,O[1]],[O[2].name,O[2]],[O[3].name,O[3]],[O[4]?.name,O[4]]],remainingSlots:c(v,P),quriousSkills:p,armorSkills:j,thisCharm:t,decoArr:S})})),!b[0])return;const P=["helm","chest","arm","waist","leg"];return[...b]=b.map((t=>(t.armors.sort(((t,e)=>P.indexOf(t[1]?.type)-P.indexOf(e[1]?.type))),t))),b}})();
//# sourceMappingURL=setBuildWorker.js.map