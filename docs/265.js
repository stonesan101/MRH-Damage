"use strict";(self["webpackChunkmhrdamage"]=self["webpackChunkmhrdamage"]||[]).push([[265],{265:(e,a,t)=>{t.r(a);t.d(a,{meleeSkills:()=>meleeSkills});var l=t(923);var s=t(470);const i={WeaknessExploit:power=>(0,l.j8)((0,l.zO)(power.type))>=45,ElementExploit:power=>(0,l.uT)((0,l.zO)(power.eleType))>=20,SneakAttack:power=>!power.NoSneak,Frostcraft:power=>{let e=/Winged Seraphyd|Noble Ana Palas|Victorious Northlein|Knightly Ectis|Reverent Elusarca|Wicked Niddoq|Vorpal Icefort|Untouched Hel|Sonorous Eisfyl|Wise Fylos|Regal Daruq/.test(power.weapon)?1.25:1;let a=1+(window.info.skills.Frostcraft.melee[(0,l.Ly)("Frostcraft")].PRM-1)*e;power.stats.PRM*=a;power.stats.PEM*=a;power.skillRecord.add("Frostcraft")},RapidMorph:power=>/Morph|Condensed Spinning|Up Roundslash/.test(power.attackName),Bombardier:power=>power.type==="IgnoreHZV"&&(l.aP.value!=="ChargeBlade"||power.phialType.includes("Impact")),ChargeMaster:power=>power.ChargeMaster===true,Strife(power){(0,l.Sy)(power.stats,window.specialCase.Strife);power.skillRecord.add("Strife")},Dereliction(power){(0,l.Sy)(power.stats,window.specialCase.Dereliction);power.skillRecord.add("Dereliction")},Agitator:()=>document.getElementById("enraged").classList.contains("selected"),MindsEye:power=>~~(25/JSON.parse((0,l.yh)("Sharpness")).PRM)>=(0,l.j8)((0,l.zO)(power.type)),Bludgener(power){if((0,l.AN)("Sharpness")<4&&(0,l.AN)("Bludgeoner")>1||(0,l.AN)("Sharpness")>2&&(0,l.AN)("Bludgeoner")<4){power.PRM*=1.1}else if((0,l.AN)("Bludgeoner")===1&&(0,l.AN)("Sharpness")<4){power.PRM*=1.05}},DragonConversion:power=>{if(/Fire|Water|Ice|Thunder|Dragon/i.test(power.eleType)){power.stats.BE+=Object.values(document.querySelectorAll("#weapon .eleSection>div:not(.def)>output")).reduce(((e,a)=>e+ +a.value),0)*[0,.15,.15,.25][window.selectedSkills.DragonConversion];power.skillRecord.add("DragonConversion")}},ChargeBlade:{SavageAxe:power=>!/3rd|(?<!Midair |Axe: )UED|(?<!Charged )Sword(?!.*Shield)/.test(power.attackName),ImpactShieldCharge:power=>power.phialType==="Impact Phial",EleShieldCharge:power=>power.phialType==="Elemental Phial"},LongSword:{SpiritGauge:power=>!/Helm Breaker|Serene/.test(power.attackName),Helmbreaker:power=>/Helm Breaker/.test(power.attackName),SerenePose:power=>/Serene/.test(power.attackName)},GreatSword:{StrongarmStance(power){const e=power.attackName.match(/Charged Slash|Rising Slash|Wide Slash|Strong Charged Slash|True Charged Slash|Rage Slash/);if(e){applyNewStats(power,"StrongarmStance",e)}},PowerSheath:()=>true,ChargeLv(power){if(/(?<!Tackle )Lv[1-3]/.test(power.attackName)){power.rawMV*=Number(`1.${power.attackName.match(/(?<=Lv)[1-3]/)[0]}`);power.skillRecord.add(`ChargeLv${power.attackName.match(/(?<=Lv)[1-3]/)[0]}`)}}},InsectGlaive:{KinsectBuff:()=>true},DualBlades:{ArchdemonMode:()=>true,DemonMode:power=>!/\[Feral Demon Mode\]/.test(power.attackName),FeralDemonMode:power=>!/\[Demon Mode\]/.test(power.attackName)},SwitchAxe:{ImpactPhial:power=>{if(/Sword|Elemental|ED/.test(power.attackName)){power.stats.BRM*=1.15;power.skillRecord.add("Impact Phial")}},ElementalPhial:power=>{if(/Sword|Elemental|ED/.test(power.attackName)){power.stats.BEM*=1.45;power.skillRecord.add("Elemental Phial")}}}};function meleeSkills(power,e=document.getElementById("dropWeaponType").value){power.skillRecord=new Set;power.stats={BR:0,BRM:1,PRM:1,BEM:1,BE:0,PEM:1,EFE:1,EFR:1,aff:power.baseAff};(0,s.p)(power,applyNewStats);for(const e in window.selectedSkills){if(!power.skillRecord.has(e)&&window.info.types[power.type]?.includes(e)&&!i[e]||i[e]&&i[e](power)){applyNewStats(power,e,(0,l.Ly)(e))}}document.querySelectorAll("#dango select:not(.classSpecific)").forEach((e=>{if(e.selectedIndex>0&&window.info.types[power.type]?.includes(e.id)&&!i[e.id]||i[e.id]&&i[e.id](power)){applyNewStats(power,e.id,e.selectedIndex)}}));document.querySelectorAll("input.skillButton").forEach((e=>{if(e.checked&&!power.skillRecord.has(e.id)){applyNewStats(power,e.id);if(e.id==="DemonAmmo"&&/(Sever|Blunt)/.test(power.type)){power.stats.PRM*=1.1}}}));document.querySelectorAll(`.skill.classSpecific.${e}`).forEach((a=>{if(a.selectedIndex>0&&!power.skillRecord.has(a.id)&&(i[e]&&i[e][a.id]&&i[e][a.id](power)||(!i[e]||!i[e][a.id])&&i[a.id]&&i[a.id](power))){applyNewStats(power,a.id,a.selectedIndex)}}));if(/Fire|Water|Ice|Thunder|Dragon/.test(power.eleType)){window.info.types[power.eleType.match(/Fire|Water|Ice|Thunder|Dragon/i)[0]].forEach((e=>{if((0,l.Ly)(e)){applyNewStats(power,e,(0,l.Ly)(e))}}))}else if(/Bomb|Sleep|Poison|Para/.test(power.eleType)){window.info.types[power.eleType.match(/Bomb|Sleep|Poison|Para/i)[0]].forEach((e=>{if((0,l.Ly)(e)){applyNewStats(power,e,(0,l.Ly)(e))}}))}if(e==="GreatSword"){i.GreatSword.ChargeLv(power)}if(e==="SwitchAxe"){if(power.phialType==="Impact Phial"){i.SwitchAxe.ImpactPhial(power)}else{i.SwitchAxe.ElementalPhial(power)}}power.stats.aff=Math.min(100,power.stats.aff)/100;return power}(0,l.fy)();function applyNewStats(power,e,a){if(a){(0,l.Sy)(power.stats,window.info.skills[e][a])}else{(0,l.Sy)(power.stats,window.info.skills[e])}power.skillRecord.add(e)}}}]);