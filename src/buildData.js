const data = [
    {
        id: 1,
        name: "ACEtoberfest", 
        image: "ace.png", 
        link: "https://fb.me/e/blSXy29Xp",
        guys: 140,
        girls: 85,
        guysBuild: "Free",
        girlsBuild: "Free",
        included: "A damn good time",
        tshirt: "shirtSoon.jpg",
        org: "ACE",
        contact: "email@gmail.com"
    },
    {
        id: 2,
        name: "Phi Delt Las Vegas", 
        image: "phidelt.jpg", 
        link: "https://www.eventbrite.com/e/phi-delt-las-vegas-tickets-731622431387?utm_experiment=test_share_listing&aff=ebdsshios",
        guys: 225,
        girls: 85,
        guysBuild: 225,
        girlsBuild: 85,
        included: "Friday transportation, fanny pack, koozie",
        tshirt: "phideltShirt.png",
        org: "Phi Delt",
        contact: "@aggiephidelt"
    },
    {
        id: 3,
        name: "The Masters", 
        image: "comingSoon.jpg", 
        link: "https://my.cheddarup.com/c/the-masters-at-chilifest?cart=18f4b632-c84d-4d55-ac5c-7dbb701b5289%21%2169957679",
        guys: 170,
        girls: 70,
        guysBuild: 70,
        girlsBuild: 30,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Gents/Suits",
        contact: "email@gmail.com"
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
        included: "Bandana, sticker",
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
        guysBuild: 225,
        girlsBuild: 117,
        included: "Friday transportation, cowboy hat, bandana, fanny pack, koozie, live performances",
        tshirt: "pikeShirt.png",
        org: "Pike",
        contact: "Brady Hughes (719) 375-4994"
    },
    {
        id: 6,
        name: "Delts Angels", 
        image: "comingSoon.jpg", 
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Delt",
        contact: "@instagram"
    },
    {
        id: 7,
        name: "Kappa Sigma Margaritaville", 
        image: "comingSoon.jpg", 
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Kappa Sig",
        contact: "@instagram"
    },
    {
        id: 8,
        name: "Beta Born in the USA", 
        image: "comingSoon.jpg", 
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Beta",
        contact: "@instagram"
    },
    {
        id: 9,
        name: "Willystock",
        image: "comingSoon.jpg",
        link: "https://fb.me/e/blSXy29Xp",
        guys: 165,
        girls: 78,
        guysBuild: 165,
        girlsBuild: 30,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Centuries",
        contact: "email@gmail.com"
    },
    {
        id: 10,
        name: "Chili Olympics",
        image: "comingSoon.jpg",
        link: "https://amaolympics.squarespace.com/",
        guys: 185,
        girls: 75,
        guysBuild: 70,
        girlsBuild: 40,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "AMA",
        contact: "email@gmail.com"
    },
    {
        id: 11,
        name: "Shipwrecked",
        image: "sigep.jpg",
        link: "https://www.bouncelife.com/events/6571ef70a2e4796d97f9ecb1",
        guys: 160,
        girls: 78,
        guysBuild: 160,
        girlsBuild: 78,
        included: "Captain hat bundle (hat, scard, and more)",
        tshirt: "sigepShirt.jpg",
        org: "Sig Ep",
        contact: "spechili24@gmail.com"
    },
    {
        id: 12,
        name: "Phis in Cairo",
        image: "comingSoon.jpg",
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Alpha Sig/Delta Sig/Phi Psi",
        contact: "email@gmail.com"
    },
    {
        id: 13,
        name: "The Donks",
        image: "comingSoon.jpg",
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Ol' Ags",
        contact: "email@gmail.com"
    },
    {
        id: 14,
        name: "Taulapalooza",
        image: "comingSoon.jpg",
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "ATO/TKE",
        contact: "email@gmail.com"
    },
    {
        id: 15,
        name: "Space Rodeo",
        image: "comingSoon.jpg",
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "SAE",
        contact: "email@gmail.com"
    },
    {
        id: 16,
        name: "Fiji 500",
        image: "comingSoon.jpg",
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Fiji",
        contact: "email@gmail.com"
    },
    {
        id: 17,
        name: "Chilifest Grand Prix",
        image: "paradigm.png",
        link: "https://my.cheddarup.com/c/paradigmxabb-chilifest?cart=a654b6d7-dbd3-4eec-b222-cea2bf8e3bc0%21%2169934833",
        guys: 150,
        girls: 70,
        guysBuild: 70,
        girlsBuild: 30,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "Paradigm/ABB",
        contact: "jakeseal05@gmail.com"
    },
    {
        id: 18,
        name: "One Army",
        image: "comingSoon.jpg",
        link: "https://fb.me/e/blSXy29Xp",
        guys: 999,
        girls: 999,
        guysBuild: 999,
        girlsBuild: 999,
        included: "",
        tshirt: "shirtSoon.jpg",
        org: "One Army",
        contact: "email@gmail.com"
    }
];

export default data;