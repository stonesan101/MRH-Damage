(self.webpackChunkmhrdamage=self.webpackChunkmhrdamage||[]).push([[21],{21:(e,t,n)=>{n.r(t);var o=n(16),d=n(552),s=n(243),l=n(923);n.e(517).then(n.bind(n,517));const c=document.getElementById("dropWeapon"),i=document.getElementById("dropWeaponType");function a(){const e=window.info[i.value].weapons[c.value];document.querySelector(".weapon .div6 output").textContent=e.baseRaw,e.baseEle?(document.querySelector(".weapon .div7 output").textContent=e.baseEle,document.querySelector(".weapon .div7 img").src=document.querySelector(".weapon .div7 img").src.replace(/(icons\/).*?(?=\.)/,`icons/${(0,l.zO)(e.eleType)}`)):i.value.includes("BowGun")?(document.querySelector(".weapon .div7 output").textContent="Ammo",document.querySelector(".weapon .div7 img").src=document.querySelector(".weapon .div7 img").src.replace(/(icons\/).*?(?=\.)/,"icons/ammo")):(document.querySelector(".weapon .div7 img").src=document.querySelector(".weapon .div7 img").src.replace(/(icons\/).*?(?=\.)/,"icons/none"),document.querySelector(".weapon .div7 output").textContent=" 0 "),document.querySelector(".weapon .div8 output").textContent=e.aff,document.querySelectorAll("#weapon .decoDisplay img").forEach((e=>{e.classList.contains("augInvis")&&(e.nextElementSibling.selectedIndex=0)}))}document.querySelectorAll(".scroll").forEach((e=>{"IMG"!==e.tagName&&"BUTTON"!==e.tagName||e.addEventListener("mousedown",(e=>{if(e.target.classList.contains("Blue"))return document.getElementById("blueNon").classList.add("augInvis"),document.getElementById("blueScroll").classList.remove("augInvis"),document.getElementById("redNon").classList.remove("augInvis"),document.getElementById("redScroll").classList.add("augInvis"),window.info.skills.MailofHellfire=window.info.skills.MailofHellfireSource.blue,void(window.info.skills.Dereliction=window.info.skills.DerelictionSource.blue);document.getElementById("blueNon").classList.remove("augInvis"),document.getElementById("blueScroll").classList.add("augInvis"),document.getElementById("redNon").classList.add("augInvis"),document.getElementById("redScroll").classList.remove("augInvis"),window.info.skills.MailofHellfire=window.info.skills.MailofHellfireSource.red,window.info.skills.Dereliction=window.info.skills.DerelictionSource.red}))})),Object.values(document.querySelectorAll("input.check")).forEach((e=>e.addEventListener("mousedown",(e=>{if(/DemonDrug/.test(e?.target.id)&&("DemonDrug"===e?.target.id?document.getElementById("MegaDemonDrug").checked=!1:document.getElementById("DemonDrug").checked=!1),"WaterBlight"!==e?.target.id)return;const t=l.wm.selectedIndex;(0,d.Jt)(),l.wm.selectedIndex=t})))),Object.values(document.querySelectorAll(".augment")).forEach((e=>{e.addEventListener("change",(e=>{(0,o.Ud)(e.target,e.target.selectedOptions[0].textContent),(0,o.YV)(e.target)})),e.addEventListener("mousedown",(e=>{(0,o.Ud)(e.target,e.target.selectedOptions[0]?.textContent),(0,o.YV)(e.target)}))})),document.querySelector("#weaponSelects>#Qurious")?.addEventListener("mousedown",(()=>{document.getElementById("augToggle").classList.remove("augInvis")})),document.querySelectorAll(".charmSlot, #charm>select").forEach((e=>e.addEventListener("change",(()=>{4===document.getElementById("slot1").selectedIndex?(document.getElementById("slot2").selectedIndex=Math.min(document.getElementById("slot2").selectedIndex,1),document.getElementById("slot3").selectedIndex=Math.min(document.getElementById("slot2").selectedIndex,1)):3===document.getElementById("slot1").selectedIndex?(document.getElementById("slot2").selectedIndex=Math.min(document.getElementById("slot2").selectedIndex,2),document.getElementById("slot3").selectedIndex=Math.min(document.getElementById("slot2").selectedIndex,1)):2===document.getElementById("slot1").selectedIndex&&(document.getElementById("slot2").selectedIndex=Math.min(document.getElementById("slot2").selectedIndex,2)),(0,o.J0)(),(0,d.TG)()})))),i.addEventListener("change",(()=>{(0,d.W6)()})),document.getElementById("weaponFilter").addEventListener("click",(e=>{e.target.classList.toggle("blue"),e.target.classList.toggle("gray"),(0,d.W6)()})),document.querySelectorAll("#weaponFilter,button.rampageAug").forEach((e=>e.addEventListener("click",(()=>{(0,d.E_)()})))),i.addEventListener("change",(()=>{document.querySelector("#weapon > img").src=document.querySelector("#weapon > img").src.replace(/(?<=icons\/)\w+/,i.value)})),c.addEventListener("change",(()=>a())),i.addEventListener("change",(()=>a())),document.querySelector("#EquippedSkillDisplay").addEventListener("mouseover",(e=>{if(!window.info?.descriptions)return;let[t,n]=e.target.textContent.replace(/[\s\n\t]/g,"").split(":");n&&window.info.descriptions[t]&&(e.target.dataset.tooltip=window.info.descriptions[t][n-1])})),document.getElementById("searcherSkills").addEventListener("mouseover",(e=>{"OUTPUT"===e.target.tagName&&e.target.classList[1]&&window.info.descriptions[e.target.classList[1]]&&(e.target.dataset.tooltip=window.info.descriptions[e.target.classList[1]].join("\n"))})),document.querySelector(".extraSkills").addEventListener("mouseover",(e=>{"BUTTON"===e.target.tagName&&window.info.descriptions[e.target.textContent.replace(/\s/g,"").slice(0,-2)]&&(e.target.dataset.tooltip=window.info.descriptions[e.target.textContent.replace(/\s/g,"").slice(0,-2)].join("\n"))})),document.getElementById("damageTable").addEventListener("mousedown",(e=>{e.target.classList.contains("inputButton")&&(e.target?.classList.contains("dec")?function(e){("0"===e?.target.id&&Number(document.querySelectorAll(".inputs")[e?.target.id].value)>1||Number(e?.target.id)>0&&Number(document.querySelectorAll(".inputs")[e?.target.id].value)>0)&&--document.querySelectorAll(".inputs")[e?.target.id].value}(e):function(e){Number(document.querySelectorAll(".inputs")[e?.target.id].value)<20&&++document.querySelectorAll(".inputs")[e?.target.id].value}(e),document.getElementById("comboCountContainer")?.classList.remove("augInvis"))}));document.querySelectorAll(".augButton.inc").forEach((e=>e.addEventListener("click",(e=>(e=>{let t=e.className.match(/\w+Aug$/)[0],n=window.info.augIndex[t],o=window.info.augs[t];if(n+1===o.length)return;if(e.classList.contains("rampageAug")&&n+(0,s.U)().rampageSlots+1>3)return;const l=Object.entries(window.info.augs).reduce(((e,[t,n])=>e+n[window.info.augIndex[t]][0]),0)+(o[n+1][0]-o[n][0]);if(l>10)return;const c=e.parentElement.querySelector("output.label");window.info.augIndex[t]++,c.textContent=o[n+1][0],c.nextElementSibling.textContent=`+${o[n+1][1]}`,document.getElementById("weaponQurious").textContent=`Remaining Weapon Augments ${10-l}/10`,e.classList.contains("rampageAug")&&(0,d.E_)()})(e.target))))),document.querySelectorAll(".augButton.dec").forEach((e=>e.addEventListener("click",(e=>(e=>{let t=e.className.match(/\w+Aug$/)[0],n=window.info.augIndex[t];if(0===n)return;const o=e.parentElement.querySelector("output.label");let s=window.info.augs[t];window.info.augIndex[t]--,o.textContent=s[n-1][0],o.nextElementSibling.textContent=`+${s[n-1][1]}`;let l=Object.entries(window.info.augs).reduce(((e,[t,n])=>e+n[window.info.augIndex[t]][0]),0);document.getElementById("weaponQurious").textContent=`Remaining Weapon Augments ${10-l}/10`,e.classList.contains("rampageAug")&&(0,d.E_)()})(e.target))))),Object.values(document.querySelectorAll(".close")).forEach((e=>e.addEventListener("click",(e=>e.target.parentElement.parentElement.classList.add("augInvis"))))),document.getElementById("settingsMenuButton").addEventListener("click",(e=>{e.target.textContent.includes("Open")?e.target.textContent="Close Settings":e.target.textContent="Open Settings",document.getElementById("settingsMenu").classList.toggle("augInvis"),document.getElementById("settingsMenu").style["mix-blend-mode"]=""})),document.getElementById("skillsMenu").addEventListener("mousedown",(()=>{document.getElementById("skillSettings").classList.remove("augInvis"),document.getElementById("monsterSettings").classList.add("augInvis"),document.getElementById("infoSettings").classList.add("augInvis"),document.getElementById("settingsMenu").style["mix-blend-mode"]=""})),document.getElementById("monsterMenu").addEventListener("mousedown",(()=>{document.getElementById("skillSettings").classList.add("augInvis"),document.getElementById("monsterSettings").classList.remove("augInvis"),document.getElementById("infoSettings").classList.add("augInvis"),document.getElementById("settingsMenu").style["mix-blend-mode"]="unset"})),document.getElementById("infoMenu").addEventListener("mousedown",(()=>{document.getElementById("skillSettings").classList.add("augInvis"),document.getElementById("monsterSettings").classList.add("augInvis"),document.getElementById("infoSettings").classList.remove("augInvis"),document.getElementById("settingsMenu").style["mix-blend-mode"]="unset"})),document.querySelector("#questButton").addEventListener("mousedown",(()=>function(){document.querySelectorAll(".menu").forEach((e=>e.classList.remove("augInvis")));const e=document.querySelectorAll("#MR>option").length>0;document.getElementById("MR").parentElement.classList.toggle("augInvis",!e);const t=document.querySelectorAll("#HR>option").length>0;document.getElementById("HR").parentElement.classList.toggle("augInvis",!t)}())),document.querySelector(".extraSkills").addEventListener("mousedown",(e=>{"BUTTON"!==e.target.tagName||e.target?.classList[0]||((0,d.KH)(e.target.textContent.split(" +")),e.target.remove())})),document.getElementById("skillSelect").addEventListener("mousedown",(e=>{if("skillInput"!==e.target.classList[0])return;const t=e.target.classList[1];let n=+document.querySelector(`output.${t}`).textContent.slice(-1);"BUTTON"===e.target.tagName&&("dec"===e.target.classList[2]?0===n?e.target.parentElement.remove():document.querySelector(`output.${t}`).textContent="Lv-"+(n-1):"inc"===e.target.classList[2]&&(document.querySelector(`output.${t}`).textContent=`Lv-${Math.min(window.info.types.maxLevel[t],n+1)}`))})),document.getElementsByClassName("close"),document.querySelectorAll("#weaponQurious,section.currentPoints").forEach((e=>e.addEventListener("mousedown",(()=>document.querySelectorAll(".armorAugment").forEach((e=>e.classList.toggle("augInvis"))))))),Object.values(document.querySelectorAll(".Charm")).forEach((e=>e.addEventListener("change",(e=>(0,o.J0)(e.target))))),document.getElementById("resetCombo").addEventListener("click",(()=>(0,d.hB)())),document.getElementById("resetSkills").addEventListener("click",(()=>{document.querySelectorAll("div#setSearcher>div#skillSelect>div").forEach((e=>e.remove()))})),document.getElementById("ammoChange").addEventListener("click",(()=>function(){const e=document.getElementById("dpsTable").classList.contains("augInvis");document.getElementById("dpsTable").classList.toggle("augInvis",!e),document.getElementById("ammoTable").classList.toggle("augInvis",e)}())),document.querySelectorAll("select,input").forEach((e=>e.addEventListener("change",(e=>{/SELECT|INPUT/.test(e.target.tagName)&&(0,d.TG)(e)})))),document.addEventListener("click",(e=>{"BUTTON"===e?.target.tagName&&(/dec|inc|skill/.test(e.target.className)||Object.values(document.querySelectorAll("button")).includes(e.target))&&(0,d.TG)(e)}));let u=document.querySelector("#dropMonster"),r=document.querySelector("#dropMonster2");u.addEventListener("change",(function(){u.selectedIndex!==r.selectedIndex&&(r.selectedIndex=u.selectedIndex)})),r.addEventListener("change",(function(){r.selectedIndex!==u.selectedIndex&&(u.selectedIndex=r.selectedIndex)}));let m=document.querySelector("#dropHZV2");l.wm.addEventListener("change",(function(){l.wm.selectedIndex!==m.selectedIndex&&(m.selectedIndex=l.wm.selectedIndex)})),m.addEventListener("change",(function(){m.selectedIndex!==l.wm.selectedIndex&&(l.wm.selectedIndex=m.selectedIndex)})),document.getElementById("enraged").addEventListener("click",(()=>{(0,d.TG)()})),document.querySelector("#setReturn button.close").addEventListener("click",(()=>{document.getElementById("setReturn").classList.add("augInvis")}))}}]);