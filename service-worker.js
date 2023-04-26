if (!self.define) {
    let e, n = {};
    const i = (i, c) => (i = new URL(i + ".js", c).href, n[i] || new Promise((n => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = i, e.onload = n, document.head.appendChild(e);
        } else e = i, importScripts(i), n();
    })).then((() => {
        let e = n[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
    })));
    self.define = (c, o) => {
        const s = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (n[s]) return;
        let r = {};
        const d = e => i(e, s), a = {
            module: {
                uri: s
            },
            exports: r,
            require: d
        };
        n[s] = Promise.all(c.map((e => a[e] || d(e)))).then((e => (o(...e), r)));
    };
}

define([ "./workbox-267f3b44" ], (function(e) {
    "use strict";
    e.setCacheNameDetails({
        prefix: "MHR-Damage-v359288"
    }), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([ {
        url: "././index.html",
        revision: "3d860d586f9ff991717c644a09af0767"
    }, {
        url: "./icons/ChargeBlade.png",
        revision: "d7d61d4acf9be2893ff639efa7f98deb"
    }, {
        url: "./icons/DualBlades.png",
        revision: "565d85f1a5915b30955a62ce9386b25b"
    }, {
        url: "./icons/GreatSword.png",
        revision: "6638bd0c4475a37149859454633a1e6d"
    }, {
        url: "./icons/GunLance.png",
        revision: "9b1dbadfb7cd2838bc21d6f389038028"
    }, {
        url: "./icons/Hammer.png",
        revision: "02f84ae5584a20adc3d2d709b3e7f394"
    }, {
        url: "./icons/HeavyBowGun.png",
        revision: "c8d18ad0521cb640be38124e5ded1b1b"
    }, {
        url: "./icons/HuntingHorn.png",
        revision: "c5d21a8a2f0cf66875a28090363d7cba"
    }, {
        url: "./icons/InsectGlaive.png",
        revision: "d76b00cfdc79675e77a50963bad3beda"
    }, {
        url: "./icons/LightBowGun.png",
        revision: "13d90b4c21a740f2730d3d3a3c635891"
    }, {
        url: "./icons/LongSword.png",
        revision: "03e7f1c5f0d1c3540df98a05160ad640"
    }, {
        url: "./icons/Lvl1not.png",
        revision: "bbb512e0f0d1adf3f0008a427385bd56"
    }, {
        url: "./icons/Lvl3not.png",
        revision: "30156b8d11a34c28384e5729273f80e5"
    }, {
        url: "./icons/Lvl4not.png",
        revision: "8877c4efb4a2d25426f1e29ec17c33dc"
    }, {
        url: "./icons/Paralyze.png",
        revision: "2f45283de377523dbd9a64b672771611"
    }, {
        url: "./icons/SwitchAxe.png",
        revision: "0a21161fa193b76e93a98087966b049d"
    }, {
        url: "./icons/affinity.png",
        revision: "0ec419a3333e362e573f3d19a43029ff"
    }, {
        url: "./icons/ammo.png",
        revision: "123a1304eae4de62fc65a14e959180d9"
    }, {
        url: "./icons/arm.png",
        revision: "37c2a9140d6c0361bdabba324dfd7862"
    }, {
        url: "./icons/attack.png",
        revision: "83f269a9d25996a5bf0729529ff9d9b1"
    }, {
        url: "./icons/blast.png",
        revision: "93681c3f5993a3dd342c1c250968e4db"
    }, {
        url: "./icons/blue.jpg",
        revision: "0b02c5d1eb94865fc8ee94ba08306a31"
    }, {
        url: "./icons/blue.webp",
        revision: "2a8a2442bbfce935b6ae861407eace83"
    }, {
        url: "./icons/bluenon.jpg",
        revision: "d50575822891979b95bdf9e790107d26"
    }, {
        url: "./icons/bluenon.webp",
        revision: "98cde8984c7d13d0ec7096074b5b635c"
    }, {
        url: "./icons/bow.png",
        revision: "6869903563eb566fbf3667cc4104d9ce"
    }, {
        url: "./icons/cc4.png",
        revision: "0b9a57364ee1b9720fc99fab2f7e2c95"
    }, {
        url: "./icons/charm.png",
        revision: "d1913e138590b95129af261a778ae385"
    }, {
        url: "./icons/chest.png",
        revision: "f968658d8f8e54bb1d1f3f9010e13d93"
    }, {
        url: "./icons/defense.png",
        revision: "e2dd55cfc42ef6bb06a28d95e79b792e"
    }, {
        url: "./icons/discord.webp",
        revision: "425540cf1d4d3d23f0aa091ee8b2330e"
    }, {
        url: "./icons/dragon.png",
        revision: "22370253b035cd2aac5f5708ce395079"
    }, {
        url: "./icons/fire.png",
        revision: "16e57edf99eadf646a7f43b1e743c62e"
    }, {
        url: "./icons/helm.png",
        revision: "58e1b79f61f850ade4341a13ecf74bee"
    }, {
        url: "./icons/ice.png",
        revision: "89590c253eeefcb25342407f3afc2fc3"
    }, {
        url: "./icons/lance.png",
        revision: "ea67c306fa43e51d8259da286b6f6d8f"
    }, {
        url: "./icons/leg.png",
        revision: "760f1128d789493a168cb0473c045397"
    }, {
        url: "./icons/lvl1.png",
        revision: "24c21e55525459ebefa78b7d4c552ea4"
    }, {
        url: "./icons/lvl2.png",
        revision: "72763b5d306130555e537c234529ba46"
    }, {
        url: "./icons/lvl2Empty.png",
        revision: "1d7c271f4b68644b633145e383bb4f8e"
    }, {
        url: "./icons/lvl3.png",
        revision: "c4c74944a2ea3a0198e7604d764b006f"
    }, {
        url: "./icons/lvl4.png",
        revision: "8f49c6489ed1b118e8f4fc34a964d6e2"
    }, {
        url: "./icons/poison.png",
        revision: "274ad71e99002b5909328126552bdbde"
    }, {
        url: "./icons/ramp1.png",
        revision: "5cd1def63d4609ab181c9e61ae9868ff"
    }, {
        url: "./icons/ramp2.png",
        revision: "d6e1eb041e73f2ba4bb728ab1862b674"
    }, {
        url: "./icons/ramp3.png",
        revision: "f0b1d01e74e6660f81eb87cc4313c90e"
    }, {
        url: "./icons/red.jpg",
        revision: "9599a2b0409394b4d5283c52005a947a"
    }, {
        url: "./icons/red.webp",
        revision: "b21c0880826f266c5e1dc562c5cd722e"
    }, {
        url: "./icons/rednon.jpg",
        revision: "c1002f14290208c59f60d4be9e73e6e3"
    }, {
        url: "./icons/rednon.webp",
        revision: "e0987123dd2e96d47366e589a2580e65"
    }, {
        url: "./icons/redscrolls.jpg",
        revision: "61ff0c073393fc7c46cd7afd74400aba"
    }, {
        url: "./icons/redscrolls.webp",
        revision: "73b9924bcbb9c0e01858f83c5bdb86fa"
    }, {
        url: "./icons/skill.png",
        revision: "afad36bab8940ba049af3c2ea89f9d4c"
    }, {
        url: "./icons/sleep.png",
        revision: "949455d0993656f898f89dc25595443a"
    }, {
        url: "./icons/thunder.png",
        revision: "b6c05ca4e44ed8638a1b1d9548c454aa"
    }, {
        url: "./icons/trash.png",
        revision: "f925b008bf6deb3e3f66ac416415db88"
    }, {
        url: "./icons/unused icons/arrow.png",
        revision: "c0179bab301005dcbec5e48c77da1904"
    }, {
        url: "./icons/unused icons/attack2.png",
        revision: "d0aae8e8474fda211a582d5f8d7ef467"
    }, {
        url: "./icons/unused icons/attackAug.png",
        revision: "a2f1cbf68264ae101953637e92a3c816"
    }, {
        url: "./icons/unused icons/augments.png",
        revision: "0870fb0f3db90a76714cf2e4e58ed410"
    }, {
        url: "./icons/waist.png",
        revision: "13707b2bd704fe8a4fc924a0f54160e2"
    }, {
        url: "./icons/water.png",
        revision: "2afea898d1858d642d5d42cc31f6c652"
    }, {
        url: "./index.js",
        revision: "c5ed1c7e957590d569db427470232db5"
    }, {
        url: "./index.js.LICENSE.txt",
        revision: "20af1099d203e3d9093786d9bcbfe98c"
    }, {
        url: "./json/Bow.json",
        revision: "9658ecf0abbc630a2bbcd21ad6bf42cb"
    }, {
        url: "./json/ChargeBlade.json",
        revision: "977cd65cc6f0372879b72d36211e7e59"
    }, {
        url: "./json/DualBlades.json",
        revision: "1f7fc724615f2c7ce3ab34dc17e4c253"
    }, {
        url: "./json/GreatSword.json",
        revision: "18b8750c2eebe7dc781b3f52f0d28dff"
    }, {
        url: "./json/Gunlance.json",
        revision: "cc32059faa00957c620838d968833fbf"
    }, {
        url: "./json/Hammer.json",
        revision: "0f6eb39de7829fd72af675c2ae45fb06"
    }, {
        url: "./json/HeavyBowGun.json",
        revision: "726ede727207a0d7301224a23aae04a6"
    }, {
        url: "./json/HuntingHorn.json",
        revision: "8dde4198a43e662190feb5d8aad64ba6"
    }, {
        url: "./json/InsectGlaive.json",
        revision: "8ed277d249bbbfb355b22c909772e26c"
    }, {
        url: "./json/Lance.json",
        revision: "34b2479405495ebd62dae6469673158d"
    }, {
        url: "./json/LightBowGun.json",
        revision: "bccaed62d82362bb0d2a3e536f4fc100"
    }, {
        url: "./json/LongSword.json",
        revision: "56fba919eb2a63e974372e071f29dbd7"
    }, {
        url: "./json/SwitchAxe.json",
        revision: "0672838c7d07ac367853674ad056880e"
    }, {
        url: "./json/SwordNShield.json",
        revision: "b41ecc3ea31e2a1318306dd363192ced"
    }, {
        url: "./json/ammo.json",
        revision: "2c315d9f2e160cc0b5409359ad5764d0"
    }, {
        url: "./json/ammoDistance.json",
        revision: "485eea2da07ab5c79163b0981e45c9c4"
    }, {
        url: "./json/armor.json",
        revision: "5db2633d3663f0dfa0e65d5760912b6c"
    }, {
        url: "./json/charms.json",
        revision: "1d682268d4447750114221b1a45d4ccd"
    }, {
        url: "./json/descriptions.json",
        revision: "bf90f838c8db902b7d14eb582e4f63c4"
    }, {
        url: "./json/monster.json",
        revision: "d5d8ba0c2fb7eace70d51284567e371b"
    }, {
        url: "./json/quest.json",
        revision: "b46067c7c5a7ec530f82844ec05108a5"
    }, {
        url: "./json/rampage.json",
        revision: "32de095962646645a82ba499fdef754e"
    }, {
        url: "./json/skills.json",
        revision: "14f8b243de6be596ff048506c8b4eaeb"
    }, {
        url: "./json/types.json",
        revision: "7c9b2f4c7790fcb45528624f3a6985f5"
    }, {
        url: "./setBuildWorker.js",
        revision: "e2e5675d8c3c16c711e52e901af74c50"
    }, {
        url: "./setBuildWorker.js.LICENSE.txt",
        revision: "36d1446cf8bf8bc80349179ac3d288fe"
    } ], {}), e.registerRoute(/.*\.json$/, new e.StaleWhileRevalidate, "GET"), e.registerRoute(/.*\.(png|jpg|webp)$/, new e.StaleWhileRevalidate, "GET");
}));