const data = [
    {
        id: 1,
        name: "ACEtoberfest", 
        image: "ace.png", 
        link: "https://fb.me/e/blSXy29Xp",
        guys: 140,
        girls: 85,
        guysBuild: "--",
        girlsBuild: "--",
        included: "A damn good time",
        tshirt: "comingSoon.jpg",
        org: "ACE",
        contact: "@aggieclubofengineers"
    },
    {
        id: 2,
        name: "Phi Delt Las Vegas", 
        image: "phidelt.jpg", 
        link: "https://www.eventbrite.com/e/phi-delt-las-vegas-tickets-731622431387?utm_experiment=test_share_listing&aff=ebdsshios",
        guys: 225,
        girls: 85,
        guysBuild: "--",
        girlsBuild: "--",
        included: "Friday transportation, fanny pack, koozie",
        tshirt: "phideltShirt.png",
        org: "Phi Delt",
        contact: "@aggiephidelt"
    },
    {
        id: 3,
        name: "The Masters", 
        image: "gentsSuits.jpg", 
        link: "https://my.cheddarup.com/c/the-masters-at-chilifest?cart=18f4b632-c84d-4d55-ac5c-7dbb701b5289%21%2169957679",
        guys: 170,
        girls: 70,
        guysBuild: 70,
        girlsBuild: 30,
        included: "",
        tshirt: "gentssuitsShirt.png",
        org: "Gents/Suits",
        contact: "Arjun Khale (469) 416-6416"
    },
    {
        id: 4,
        name: "Sigma Chi Yacht Club", 
        image: "sigmachi.png", 
        link: "https://www.cognitoforms.com/AggieSigmaChi1/SIGMACHIYACHTCLUB",
        guys: 200,
        girls: 85,
        guysBuild: 60,
        girlsBuild: 60,
        included: "Bandana, sticker, shirts/hats/fanny packs sold separately",
        tshirt: "sigmachiShirt.png",
        org: "Sigma Chi",
        contact: "@tamusigmachi"
    },
    {
        id: 5,
        name: "Pike Saloon", 
        image: "pike.jpg", 
        link: "https://www.facebook.com/events_invite_off_fb/link_sharing/1531239684328617/?inviter_id=100004758856893&token=fxpEXNbxl-iOmcGhiJsTVjBybn6rUaTF4pPU-Caf3Eo",
        guys: 225,
        girls: 117,
        guysBuild: "--",
        girlsBuild: "--",
        included: "Friday transportation, cowboy hat, bandana, fanny pack, koozie, live performances",
        tshirt: "pikeShirt.png",
        org: "Pike",
        contact: "Brady Hughes (719) 375-4994"
    },
    // {
    //     id: 6,
    //     name: "Delts Angels", 
    //     image: "comingSoon.jpg", 
    //     link: "https://fb.me/e/blSXy29Xp",
    //     guys: 999,
    //     girls: 999,
    //     guysBuild: 999,
    //     girlsBuild: 999,
    //     included: "",
    //     tshirt: "comingSoon.jpg",
    //     org: "Delt",
    //     contact: "@instagram"
    // },
    {
        id: 7,
        name: "Kappa Sigma Margaritaville", 
        image: "kappasig.PNG", 
        link: "https://www.facebook.com/groups/347424564563277",
        guys: 180,
        girls: 110,
        guysBuild: 80,
        girlsBuild: 50,
        included: "Live music",
        tshirt: "comingSoon.jpg",
        org: "Kappa Sig",
        contact: "ksigchilifest@gmail.com"
    },
    {
        id: 8,
        name: "Beta Born in the USA", 
        image: "Beta.jpg", 
        link: "https://fb.me/e/blSXy29Xp",
        guys: "--",
        girls: "--",
        guysBuild: "--",
        girlsBuild: "--",
        included: "",
        tshirt: "comingSoon.jpg",
        org: "Beta",
        contact: "@aggiebeta"
    },
    // {
    //     id: 9,
    //     name: "Willystock",
    //     image: "comingSoon.jpg",
    //     link: "https://fb.me/e/blSXy29Xp",
    //     guys: 165,
    //     girls: 98,
    //     guysBuild: "--",
    //     girlsBuild: 30,
    //     included: "",
    //     tshirt: "comingSoon.jpg",
    //     org: "Centuries",
    //     contact: "email@gmail.com"
    // },
    {
        id: 10,
        name: "Chili Olympics",
        image: "AMA.jpg",
        link: "https://amaolympics.squarespace.com/",
        guys: 185,
        girls: 85,
        guysBuild: 70,
        girlsBuild: 40,
        included: "",
        tshirt: "AMAShirt.jpg",
        org: "AMA",
        contact: "aggiemensalliance@gmail.com"
    },
    {
        id: 11,
        name: "Shipwrecked",
        image: "sigep.jpg",
        link: "https://www.bouncelife.com/events/6571ef70a2e4796d97f9ecb1",
        guys: 160,
        girls: 78,
        guysBuild: "--",
        girlsBuild: "--",
        included: "Captain hat bundle (hat, scarf, and more)",
        tshirt: "sigepShirt.jpg",
        org: "Sig Ep",
        contact: "spechili24@gmail.com"
    },
    // {
    //     id: 12,
    //     name: "Phis in Cairo",
    //     image: "comingSoon.jpg",
    //     link: "https://fb.me/e/blSXy29Xp",
    //     guys: 999,
    //     girls: 999,
    //     guysBuild: 999,
    //     girlsBuild: 999,
    //     included: "",
    //     tshirt: "comingSoon.jpg",
    //     org: "Alpha Sig/Delta Sig/Phi Psi",
    //     contact: "email@gmail.com"
    // },
    // {
    //     id: 13,
    //     name: "The Donks",
    //     image: "comingSoon.jpg",
    //     link: "https://fb.me/e/blSXy29Xp",
    //     guys: 999,
    //     girls: 999,
    //     guysBuild: 999,
    //     girlsBuild: 999,
    //     included: "",
    //     tshirt: "comingSoon.jpg",
    //     org: "Ol' Ags",
    //     contact: "email@gmail.com"
    // },
    // {
    //     id: 14,
    //     name: "Taulapalooza",
    //     image: "comingSoon.jpg",
    //     link: "https://fb.me/e/blSXy29Xp",
    //     guys: 999,
    //     girls: 999,
    //     guysBuild: 999,
    //     girlsBuild: 999,
    //     included: "",
    //     tshirt: "comingSoon.jpg",
    //     org: "ATO/TKE",
    //     contact: "email@gmail.com"
    // },
    // {
    //     id: 15,
    //     name: "Space Rodeo",
    //     image: "comingSoon.jpg",
    //     link: "https://fb.me/e/blSXy29Xp",
    //     guys: 999,
    //     girls: 999,
    //     guysBuild: 999,
    //     girlsBuild: 999,
    //     included: "",
    //     tshirt: "comingSoon.jpg",
    //     org: "SAE",
    //     contact: "email@gmail.com"
    // },
    //     id: 16,
    //     name: "Fiji 500",
    //     image: "comingSoon.jpg",
    //     link: "https://fb.me/e/blSXy29Xp",
    //     guys: 999,
    //     girls: 999,
    //     guysBuild: 999,
    //     girlsBuild: 999,
    //     included: "",
    //     tshirt: "comingSoon.jpg",
    //     org: "Fiji",
    //     contact: "email@gmail.com"
    // },
    {
        id: 17,
        name: "Chilifest Grand Prix",
        image: "paradigm.jpg",
        link: "https://my.cheddarup.com/c/paradigmxabb-chilifest?cart=a654b6d7-dbd3-4eec-b222-cea2bf8e3bc0%21%2169934833",
        guys: 150,
        girls: 70,
        guysBuild: 70,
        girlsBuild: 30,
        included: "",
        tshirt: "comingSoon.jpg",
        org: "Paradigm/ABB",
        contact: "jakeseal05@gmail.com"
    }
    // },
    // {
    //     id: 18,
    //     name: "One Army",
    //     image: "comingSoon.jpg",
    //     link: "https://fb.me/e/blSXy29Xp",
    //     guys: 999,
    //     girls: 999,
    //     guysBuild: 999,
    //     girlsBuild: 999,
    //     included: "",
    //     tshirt: "comingSoon.jpg",
    //     org: "One Army",
    //     contact: "email@gmail.com"
    // }
];

export default data;