// Données des applications
const appsData = [
    {
        id: 1,
        name: "YTLitePlus",
        developer: "YTLitePlus",
        version: "19.34.2-5.0.1",
        bundleId: "com.google.ios.youtube",
        size: "264.6 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/df/60/84/df608426-ce29-5777-56d1-42e386f0d47a/logo_youtube_2024_q4_color-0-1x_U007emarketing-0-0-0-7-0-0-0-85-220-0.png/350x350bb.jpg",
        downloadUrl: "https://files.catbox.moe/z8jg5n.ipa",
        category: "social",
        platforms: ['ios'],
        history: [
            {
                version: "19.34.2-5.0.1",
                size: "338.8 MB",
                downloadUrl: "https://files.catbox.moe/z8jg5n.ipa",
                changelog: "Corrections de bugs et améliorations de performance",
                isCurrent: true
            },
            {
                version: "",
                size: "",
                downloadUrl: "",
                changelog: "",
                isCurrent: false
            },
        ]
    },
    {
        id: 2,
        name: "TwitchAdBlock",
        developer: "level3tjg",
        version: "19.4-0.1.5",
        bundleId: "tv.twitch",
        size: "203.6 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/49/5d/f0/495df0ab-6b1d-cb36-0294-7da03987365e/TwitchAppIcon-0-0-1x_U007epad-0-1-0-0-0-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://github.com/level3tjg/TwitchAdBlock/releases/download/v23.4-0.1.5/TwitchAdBlock_19.4-0.1.5-STS.ipa",
        category: "social",
        platforms: ['ios'],
        history: [
        ]
    },
    {
        id: 3,
        name: "Delta",
        developer: "Riley Testut",
        version: "1.7.4",
        bundleId: "com.rileytestut.Delta",
        size: "208.92 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6a/df/20/6adf200c-73d9-20b5-6ce7-6513b0f9f73e/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-85-220.png/350x350bb.jpg",
        downloadUrl: "https://github.com/rileytestut/Delta/releases/download/v1.6/Delta_1_6.ipa",
        category: "emulateur",
        platforms: ['ios'],
        history: [
            {
                version: "1.7.4",
                size: "208.92 Mo",
                downloadUrl: "",
                changelog: "Corrections de bugs et améliorations de performance",
                isCurrent: true
            },
            {
                version: "1.6",
                size: "83.7 MB",
                downloadUrl: "https://github.com/rileytestut/Delta/releases/download/v1.6/Delta_1_6.ipa",
                changelog: "Corrections de bugs et améliorations de performance",
                isCurrent: false
            },
        ]
    },
    {
        id: 4,
        name: "BHTwitter",
        developer: "BandarHL",
        version: "10.11",
        bundleId: "com.atebits.Tweetie2",
        size: "88.5 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c9/96/29/c99629bb-9bf0-9755-7c05-c3e551f8e0bf/ProductionAppIcon-0-0-1x_U007emarketing-0-8-0-0-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVBi/BHTwitter-10.11-zxcvbn.ipa",
        category: "social",
        platforms: ['ios'],
        history: [
        ]
    },
    {
        id: 5,
        name: "EeveeSpotify",
        developer: "whoeevee",
        version: "9.0.84",
        bundleId: "com.spotify.client",
        size: "93.3 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/30/a8/c3/30a8c3fe-71c5-6646-529a-9bb8edc2b543/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVBj/Spotify-Pro_9.0.84.ipa",
        category: "social",
        platforms: ['ios'],
    },
    {
        id: 7,
        name: "Stop Motion Studio",
        developer: "Cateater",
        version: "11.4.4",
        bundleId: "com.cateater.funapps.stopmotion",
        size: "151 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/95/64/96/9564968e-6111-31c1-5007-0ec51d618d08/Stop_Motion_Studio_AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVBk/stop_motion_studio(11.4.4).ipa",
        category: "photo",
        platforms: ['ios'],
    },
    {
        id: 8,
        name: "Mimo Pro",
        developer: "blatants",
        version: "7.7.0",
        bundleId: "com.getmimo.mimo",
        size: "56.3 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/81/c5/51/81c551db-d904-7a57-2c14-74df4926ea17/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVBn/Mimo_v7.7.0_Pro_",
        category: "social",
        platforms: ['ios'],
    },
    {
        id: 9,
        name: "Blacklist",
        developer: "AppInstalleriOS",
        version: "1.4.2",
        bundleId: "com.AppInstalleriOS.Blacklist",
        size: "1.3 Mo",
        icon: "https://ipaomtk.com/wp-content/uploads/2023/02/blacklist-app-1.png",
        downloadUrl: "https://file.ipaomtk.com/ipa/Blacklist1.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 10,
        name: "DebtoIPA",
        developer: "sourcelocation",
        version: "1.1.1",
        bundleId: "net.sourceloc.DebToIPA",
        size: "3.5 Mo",
        icon: "https://www.udrop.com/file/NVBp/debtoipa.png",
        downloadUrl: "https://github.com/sourcelocation/DebToIPA/releases/download/1.1.1/DebToIPA-1.1.1.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 11,
        name: "Helium",
        developer: "leminlimez",
        version: "3.2.5",
        bundleId: "com.leemin.helium",
        size: "3.98 Mo",
        icon: "https://cowabun.ga/static/images/helium.png",
        downloadUrl: "https://github.com/leminlimez/Helium/releases/download/v3.2.5/Helium.tipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 12,
        name: "Wifi List",
        developer: "Itaybre",
        version: "1.1.0",
        bundleId: "com.itaysoft.wifilist",
        size: "1.2 Mo",
        icon: "https://ipaomtk.com/wp-content/uploads/2023/02/WifiLis-1.jpg",
        downloadUrl: "https://github.com/Mikasa-san/TrollStore-Apps/raw/refs/heads/main/WiFiList.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 13,
        name: "Filza",
        developer: "tigisoftware",
        version: "4.0.2",
        bundleId: "com.tigisoftware.Filza",
        size: "13.9 Mo",
        icon: "https://www.udrop.com/file/NVBr/Filza.png",
        downloadUrl: "https://tigisoftware.com/download/Filza_NoURLScheme_4.0.2.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 13,
        name: "Apps Manager",
        developer: "tigisoftware",
        version: "1.8.4",
        bundleId: "com.tigisoftware.ADManager",
        size: "3.1 Mo",
        icon: "https://iphonetweak.fr/images/_112018/app-manager-icon.png",
        downloadUrl: "https://tigisoftware.com/download/AppsManager_1.8.1.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 14,
        name: "TrollApps",
        developer: "TheResonanceTeam",
        version: "2.3",
        bundleId: "org.resonance.store",
        size: "5.29 Mo",
        icon: "https://github.com/TheResonanceTeam/TrollApps/raw/main/assets/ResonanceStoreIcon.png",
        downloadUrl: "https://github.com/TheResonanceTeam/TrollApps/releases/download/2.3/org.resonance.store_2.3_082724.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 15,
        name: "AppIndex",
        developer: "NSAntoine",
        version: "1.0",
        bundleId: "com.serena.AppIndex",
        size: "1.7 Mo",
        icon: "https://iphonetweak.fr/images/2023/04/appindex-icon.png",
        downloadUrl: "https://github.com/NSAntoine/AppIndex/releases/download/1.0/AppIndexTrollStore.tipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 16,
        name: "MuffinStore",
        developer: "mineek",
        version: "1.1",
        bundleId: "dev.mineek.muffinstore",
        size: "29 Ko",
        icon: "https://alexdunn.org/wp-content/uploads/2020/01/empty_app_icon_512.png?w=512&h=510&crop=1",
        downloadUrl: "https://github.com/mineek/MuffinStore/releases/download/1.1/MuffinStore_v1.1.tipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 17,
        name: "WDBFontOverwrite",
        developer: "ginsudev",
        version: "1.10.1",
        bundleId: "com.ginsudev.WDBFontOverwrite",
        size: "5.14 Mo",
        icon: "https://ipalibrary.me/wp-content/uploads/2023/01/WDBFontOverwrite.png",
        downloadUrl: "https://github.com/ginsudev/WDBFontOverwrite/releases/download/v1.10.8/WDBFontOverwrite.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 18,
        name: "Chess+",
        developer: "Erik Allebest",
        version: "1.0.3",
        bundleId: "com.chess.chessarcade",
        size: "38.7 Mo",
        icon: "https://www.udrop.com/file/NVBf/chess_plus_2.png",
        downloadUrl: "https://www.udrop.com/file/NVCg/Chess_-_Play___Learn+_(v1.0.3_v1_unk_FW_64bit_os135_ok14)-user_hidden.bfi.ipa",
        category: "games",
        platforms: ['ios'],
    },
    {
        id: 19,
        name: "Cowabunga",
        developer: "leminlimez",
        version: "10.3.2",
        bundleId: "com.leemin.Cowabunga",
        size: "15.5 Mo",
        icon: "https://user-images.githubusercontent.com/52459150/215552092-9dc1e029-da35-43da-867f-17279e3dc180.png",
        downloadUrl: "https://github.com/leminlimez/Cowabunga/releases/download/v10.3.2/Cowabunga.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 20,
        name: "TrollFools",
        developer: "Lessica",
        version: "4.2-227",
        bundleId: "wiki.qaq.TrollFools",
        size: "5.76 Mo",
        icon: "https://preview.redd.it/trollfools-alternative-for-ios-18-v0-v8vwks5a7kjf1.jpeg?width=640&crop=smart&auto=webp&s=3fcabcbc84ffc55501f00396d954552022fb0f34",
        downloadUrl: "https://github.com/Lessica/TrollFools/releases/download/v4.2-227/TrollFools_4.2-227.tipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 21,
        name: "Mugunghwa",
        developer: "s8ngyu",
        version: "3.0.2",
        bundleId: "me.soongyu.mugunghwautil",
        size: "3.71 Mo",
        icon: "https://www.udrop.com/file/NVCk/08d6c3491c215255-removebg-preview.png",
        downloadUrl: "https://github.com/s8ngyu/Mugunghwa/releases/download/3.0.2/Mugunghwa.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 22,
        name: "AirTroller",
        developer: "sourcelocation",
        version: "1.1.1",
        bundleId: "net.sourceloc.AirTroller",
        size: "764 Ko",
        icon: "https://www.udrop.com/file/NVCl/Airtroller.png",
        downloadUrl: "https://github.com/sourcelocation/AirTroller/releases/download/1.1.1/AirTroller-1.1.1.tipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 23,
        name: "Saily",
        developer: "Lakr233",
        version: "1670910896",
        bundleId: "wiki.qaq.chromatic.release",
        size: "14.2 Mo",
        icon: "https://sailyteam.github.io/img/icon.png",
        downloadUrl: "https://www.udrop.com/file/NVCm/Saily.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 24,
        name: "TrollDecrypt",
        developer: "donato-fiore",
        version: "1.1",
        bundleId: "com.fiore.trolldecrypt",
        size: "625 Ko",
        icon: "https://www.udrop.com/file/NVCo/25571_(2).png",
        downloadUrl: "https://github.com/donato-fiore/TrollDecrypt/releases/download/v1.1/TrollDecrypt.tipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 25,
        name: "PostBox",
        developer: "PostBox-Team",
        version: "8.1",
        bundleId: "com.simplycode.PostBox",
        size: "8.1 Mo",
        icon: "https://www.udrop.com/file/NVCq/postbox.png",
        downloadUrl: "https://github.com/PostBox-Team/PostBox-Releases/releases/download/beta-8.1/PostBox-0.8.1-beta.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 26,
        name: "Jaility",
        developer: "haxi0",
        version: "3.1.1",
        bundleId: "org.haxi0.Jaility",
        size: "106 Ko",
        icon: "https://github.com/haxi0/Jaility/raw/main/Assets/JailityNewRounded.png",
        downloadUrl: "https://github.com/haxi0/Jaility/releases/download/3.1.1/Jaility-3.1.1.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 27,
        name: "Appcake",
        developer: "iphonecake",
        version: "6.1.3",
        bundleId: "appcake2.iphonecake.com",
        size: "23.1 Mo",
        icon: "https://www.iphonecake.com/i/images/logo.png",
        downloadUrl: "https://www.udrop.com/file/NVCs/AppCake_6.1.3.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 28,
        name: "Appcake+",
        developer: "iphonecake",
        version: "7.2.2",
        bundleId: "com.iphonecake.appcake7",
        size: "18.7 Mo",
        icon: "https://www.udrop.com/file/NVCt/appcake.jpeg",
        downloadUrl: "https://www.udrop.com/file/NVCr/AppCake+_7.2.2.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 29,
        name: "Duolingo",
        developer: "Cymbeline Store",
        version: "7.53.0",
        bundleId: "com.duolingo.DuolingoMobile",
        size: "112.2 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7a/b1/e0/7ab1e00a-0cd7-c239-6eae-a681f19599ff/AppIcon-0-0-1x_U007epad-0-1-85-220.png/350x350bb.jpg",
        downloadUrl: "https",
        category: "social",
        platforms: ['ios'],
    },
    {
        id: 30,
        name: "iSTB",
        developer: "DzMohaVip",
        version: "1.25.2",
        bundleId: "com.na.istb",
        size: "29.4 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/55/4a/8e/554a8e37-b46d-46df-f962-1b7fc6a4c834/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVCe/Duolingo_7.53.0.ipa",
        category: "streaming",
        platforms: ['ios'],
    },
    {
        id: 31,
        name: "KAMO MEGA",
        developer: "KAMO HACKS",
        version: "9.6.1",
        bundleId: "mega.ios",
        size: "24.6 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c7/d1/2d/c7d12d77-2d75-a362-b85c-be394d3332e9/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVCh/KAMO_MEGA_[9.6.1].ipa",
        category: "autres",
        platforms: ['ios'],
    },
    {
        id: 32,
        name: "OneSecPro",
        developer: "SwaggyP36000",
        version: "3.10",
        bundleId: "wtf.riedel.one-sec",
        size: "107.9 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e6/9f/41/e69f4165-f8a0-efb0-f040-a2a7a1dcd7b9/AppIcon-0-0-1x_U007epad-0-0-0-1-0-0-sRGB-0-85-220-0.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVCu/onesecpro-3.10.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 33,
        name: "Pou",
        developer: "Zakeh",
        version: "1.4.104",
        bundleId: "me.pou.app",
        size: "27.2 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/63/95/3f/63953f67-db1b-90da-4e4f-d042256adde2/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVCf/Pou_-_ipafileshack_1.4.104.ipa",
        category: "games",
        platforms: ['ios'],
    },
    {
        id: 34,
        name: "RarevisionVHS",
        developer: "KamoHacks",
        version: "1.6.3",
        bundleId: "com.rarevision.vhs-camcorder",
        size: "16.1 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4e/ae/cd/4eaecd82-2f7e-06ef-9e87-7fd07388cc9d/AppIcon-0-0-1x_U007emarketing-0-5-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVCv/RarevisionVHS_-_KamoHacks_[1.6.3].ipa",
        category: "photo",
        platforms: ['ios'],
    },
    {
        id: 35,
        name: "Smash Cops Heat",
        developer: "Hutch Games Ltd",
        version: "1.09.04",
        bundleId: "com.hutchgames.smashcops",
        size: "233.3 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple20/v4/8f/a2/6f/8fa26fde-b2d6-41bd-98e7-e1f7b8041087/pr_source.jpg/350x350bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVCi/Smash_Cops__Hutch_Games_Ltd___v1.09.04_3GS_Univ_LP_os60_-Widow.rc333_902.ipa",
        category: "games",
        platforms: ['ios'],
    },
    {
        id: 36,
        name: "SuperMario64",
        developer: "stuffing88",
        version: "1.2.1",
        bundleId: "xyz.cypwn.sm64ios-60fps",
        size: "9.9 Mo",
        icon: "https://www.iphonecake.com/tweakicons/icon.1707659017.png",
        downloadUrl: "https://archive.org/download/super-mario-64_202409/SuperMario64_60FPS_1.2.1.ipa",
        category: "games",
        platforms: ['ios'],
    },
    {
        id: 37,
        name: "TrollLock Reborn",
        developer: "haxi0",
        version: "1.1",
        bundleId: "org.haxi0.TrollLock",
        size: "973 Ko",
        icon: "https://github.com/haxi0/TrollLock-Reborn/raw/main/assets/TrollLock-modified.png",
        downloadUrl: "https://github.com/haxi0/TrollLock-Reborn/releases/download/1.1/TrollLock-1.1.ipa",
        category: "outils",
        platforms: ['ios'],
    },
    {
        id: 38,
        name: "UTM",
        developer: "utmapp",
        version: "4.7.4",
        bundleId: "com.utmapp.UTM",
        size: "124 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e2/3c/af/e23caf12-c505-b2c9-0fc0-44c769aad961/AppIcon-0-0-1x_U007epad-0-9-0-85-220.png/350x350bb.jpg",
        downloadUrl: "https://github.com/utmapp/UTM/releases/download/v4.7.4/UTM.ipa",
        category: "emulateur",
        platforms: ['ios'],
    },
    {
        id: 39,
        name: "Watched",
        developer: "boWATCHED AGnjour",
        version: "0.17.0",
        bundleId: "com.watched.play",
        size: "55.4 Mo",
        icon: "https://img.utdstc.com/icon/8b4/e3c/8b4e3c563296572a23377dd8584396d4d4dbe8de02f2b90edbe6467d9c2b5958:200",
        downloadUrl: "https://www.udrop.com/file/NVCd/WATCHED_0.17.0.ipa",
        category: "streaming",
        platforms: ['ios'],
    },
    {
        id: 40,
        name: "ARMGDDN Browser",
        developer: "KaladinDMP",
        version: "6.0.0",
        bundleId: "",
        size: "13.4 Mo",
        icon: "https://www.udrop.com/file/NVCw/armgdon.png",
        downloadUrl: "https://github.com/KaladinDMP/AGBrowser/releases/download/v6.0.0-AGB/ARMGDDN.Browser.Update.Patch.v5.5.0+.-.v6.0.0-AGB.7z",
        category: "outils",
        platforms: ['windows'],
    },
    {
        id: 41,
        name: "Autoclick",
        developer: "MAHDI BCHATNIA",
        version: "1",
        bundleId: "",
        size: "1.5 Mo",
        icon: "https://www.udrop.com/file/NVBc/image-2.png",
        downloadUrl: "https://tars.mahdi.jp/apps/autoclick.zip",
        category: "outils",
        platforms: ['macos'],
    },
    {
        id: 42,
        name: "Remote Mouse Pro",
        developer: "耀阮",
        version: "5.204",
        bundleId: "com.remotemouse.remoteMouse",
        size: "65.4 Mo",
        icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/eb/41/45/eb414556-0e24-fc98-c9c0-db4f7bb81f68/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
        downloadUrl: "https://www.udrop.com/file/NVJM/remoteMouse_-_KamoHacks_[5.204].ipa",
        category: "outils",
        platforms: ['ios'],
    }
];

// Variables globales
let filteredApps = [...appsData];
let currentSearchTerm = '';
let currentCategory = '';
let currentSort = 'name';

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Respect page-level platform filter if provided
    filterApps();
    setupEventListeners();
});

// Rendu des applications
function renderApps() {
    const appsGrid = document.getElementById('appsGrid');
    appsGrid.innerHTML = '';

    filteredApps.forEach(app => {
        const appCard = createAppCard(app);
        appsGrid.appendChild(appCard);
    });
}

// Création d'une carte d'application
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';

    card.innerHTML = `
        <div class="app-header">
            <img src="${app.icon}" alt="${app.name}" class="app-icon">
            <div class="app-title">
                <h3 class="app-name">${app.name}</h3>
                <p class="app-developer">by ${app.developer}</p>
            </div>
        </div>
        <div class="app-details">
            <div class="detail-row">
                <div class="detail-label"><strong>Version: </strong>
                <span class="detail-value">v${app.version}</span>
                </div>
            </div>
            <div class="detail-row">
                <div class="detail-label"><strong>Bundle ID: </strong>
                <span class="bundle-id" onclick="copyToClipboard('${app.bundleId}')" 
                      style="cursor: pointer; font-family: 'Menlo Regular', Menlo, monospace;">
                    ${app.bundleId}
                </span>
                </div>
            </div>
            <div class="detail-row">
                <div class="detail-label"><strong>Size: </strong>
                <span class="detail-value">${app.size}</span>
                </div>
            </div>
        </div>
        <div class="app-actions">
            <button class="decrypt-btn" onclick="event.stopPropagation(); downloadApp(${app.id})">
                <i class="fas fa-cloud-download-alt"></i>
                TÉLÉCHARGER
            </button>
            <button class="history-btn" onclick="event.stopPropagation(); showAppHistory(${app.id})">
                <i class="fas fa-history"></i>
            </button>
        </div>
    `;

    return card;
}

// Recherche et filtrage d'applications
function searchApps() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    currentSearchTerm = searchTerm;

    filterApps();
}

// Filtrage par catégorie
function filterByCategory() {
    const categoryFilter = document.getElementById('categoryFilter');
    currentCategory = categoryFilter.value;
    filterApps();
}

// Tri des applications
function sortApps() {
    const sortFilter = document.getElementById('sortFilter');
    currentSort = sortFilter.value;
    filterApps();
}

// Fonction principale de filtrage
function filterApps() {
    // Filtrage par recherche
    let apps = appsData.filter(app => {
        const pagePlatform = typeof window !== 'undefined' ? window.APP_PLATFORM : '';
        const appPlatforms = Array.isArray(app.platforms) && app.platforms.length > 0 ? app.platforms : ['ios'];

        const matchesSearch = currentSearchTerm === '' || 
            app.name.toLowerCase().includes(currentSearchTerm) ||
            app.developer.toLowerCase().includes(currentSearchTerm) ||
            app.bundleId.toLowerCase().includes(currentSearchTerm);

        const matchesCategory = currentCategory === '' || 
            app.category === currentCategory;

        const matchesPlatform = !pagePlatform || appPlatforms.includes(pagePlatform);

        return matchesSearch && matchesCategory && matchesPlatform;
    });

    // Tri des applications
    apps.sort((a, b) => {
        switch (currentSort) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'developer':
                return a.developer.localeCompare(b.developer);
            case 'size':
                // Extraire les nombres des tailles pour le tri
                const sizeA = parseFloat(a.size.replace(/[^\d.]/g, ''));
                const sizeB = parseFloat(b.size.replace(/[^\d.]/g, ''));
                return sizeB - sizeA; // Du plus grand au plus petit
            case 'date':
        }
    });

    filteredApps = apps;
    renderApps();
    
    // Afficher le nombre de résultats
    updateResultsCount();
}

// Mettre à jour le compteur de résultats
function updateResultsCount() {
    const sectionTitle = document.querySelector('.section-title');
    const count = filteredApps.length;
    const total = appsData.length;
    
    if (count === total) {
        sectionTitle.innerHTML = '<i class="fa-solid fa-cloud-arrow-down"></i> Applications';
    } else {
        sectionTitle.innerHTML = `<i class="fa-solid fa-cloud-arrow-down"></i> Applications (${count} résultat${count > 1 ? 's' : ''} sur ${total})`;
    }
}

// Téléchargement d'application
function downloadApp(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    // Vérifier si l'application a un lien de téléchargement
    if (!app.downloadUrl) {
        showNotification(`Lien de téléchargement non disponible pour ${app.name}`, 'error');
        return;
    }

    // Afficher notification de début de téléchargement
    showNotification(`Téléchargement de ${app.name} en cours...`, 'info');
    
    // Créer un lien de téléchargement temporaire
    const downloadLink = document.createElement('a');
    downloadLink.href = app.downloadUrl;
    downloadLink.download = `${app.name}-${app.version}.ipa`;
    downloadLink.target = '_blank';
    
    // Déclencher le téléchargement
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Notification de succès après un délai
    setTimeout(() => {
        showNotification(`${app.name} téléchargé avec succès!`, 'success');
        closeModal();
    }, 1500);
}

// Historique des applications
function showAppHistory(appId) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;

    // Remplir les informations de l'application dans le modal d'historique
    document.getElementById('historyAppIcon').src = app.icon;
    document.getElementById('historyAppIcon').alt = app.name;
    document.getElementById('historyAppName').textContent = app.name;
    document.getElementById('historyAppDeveloper').textContent = `Développeur: ${app.developer}`;

    // Générer la liste des versions
    const versionList = document.getElementById('versionList');
    versionList.innerHTML = '';

    if (app.history && app.history.length > 0) {
        app.history.forEach(version => {
            const versionItem = createVersionItem(version, app.name);
            versionList.appendChild(versionItem);
        });
    } else {
        versionList.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Aucun historique disponible pour cette application.</p>';
    }

    // Ouvrir le modal d'historique
    const historyModal = document.getElementById('historyModal');
    historyModal.style.display = 'block';
}

// Créer un élément de version
function createVersionItem(version, appName) {
    const versionItem = document.createElement('div');
    versionItem.className = 'version-item';

    const badgeClass = version.isCurrent ? 'current' : 'old';
    const badgeText = version.isCurrent ? 'ACTUELLE' : 'ANCIENNE';

    versionItem.innerHTML = `
        <div class="version-header">
            <div class="version-info">
                <h4>Version ${version.version}</h4>
            </div>
            <span class="version-badge ${badgeClass}">${badgeText}</span>
        </div>
        
        <div class="version-details">
            <div class="version-detail-row">
                <span class="version-detail-label">Taille: <span class="version-detail-value">${version.size}</span></span>
            </div>
            <div class="version-detail-row">
                <span class="version-detail-label">Changelog: <span class="version-detail-value">${version.changelog}</span></span>
            </div>
        </div>
        
        <div class="version-actions">
            <button class="version-download-btn" onclick="downloadVersion('${version.downloadUrl}', '${appName}', '${version.version}')">
                <i class="fas fa-download"></i>
                Télécharger
            </button>
        </div>
    `;

    return versionItem;
}

// Télécharger une version spécifique
function downloadVersion(downloadUrl, appName, version) {
    if (!downloadUrl || downloadUrl.includes('example.com')) {
        showNotification(`Lien de téléchargement non disponible pour ${appName} v${version}`, 'error');
        return;
    }

    showNotification(`Téléchargement de ${appName} v${version} en cours...`, 'info');
    
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadUrl;
    downloadLink.download = `${appName}-${version}.ipa`;
    downloadLink.target = '_blank';
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    setTimeout(() => {
        showNotification(`${appName} v${version} téléchargé avec succès!`, 'success');
    }, 1500);
}

// Afficher les détails d'une version
function showVersionInfo(version, changelog) {
    showNotification(`Version ${version}: ${changelog}`, 'info');
}

// Fermer le modal d'historique
function closeHistoryModal() {
    const historyModal = document.getElementById('historyModal');
    historyModal.style.display = 'none';
}

// Notifications
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles de notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1001;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    // Couleurs selon le type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#333';
            break;
        default:
            notification.style.backgroundColor = '#007bff';
    }

    document.body.appendChild(notification);

    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Suppression automatique
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Recherche
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchInput.addEventListener('input', searchApps);
    searchBtn.addEventListener('click', searchApps);

    // Filtrage par catégorie
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change', filterByCategory);

    // Tri des applications
    const sortFilter = document.getElementById('sortFilter');
    sortFilter.addEventListener('change', sortApps);

    // Fermeture du modal d'historique
    const historyModal = document.getElementById('historyModal');
    const closeHistoryBtn = document.getElementById('closeHistory');
    
    closeHistoryBtn.addEventListener('click', closeHistoryModal);
    historyModal.addEventListener('click', (e) => {
        if (e.target === historyModal) {
            closeHistoryModal();
        }
    });

    // Toggle du mode sombre
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', toggleDarkMode);
}

// Toggle du mode sombre
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('.theme-toggle i');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('darkMode', 'true');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('darkMode', 'false');
    }
}

// Chargement du mode sombre sauvegardé
function loadDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        const themeIcon = document.querySelector('.theme-toggle i');
        themeIcon.className = 'fas fa-sun';
    }
}

// Initialisation du mode sombre
loadDarkMode();

// Filtrage par pays (simulation)
function filterByCountry(country) {
    showNotification(`Filtrage par pays: ${country}`, 'info');
    // Ici vous pourriez filtrer les applications par pays
}

// Gestion des erreurs
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
    showNotification('Une erreur est survenue. Veuillez recharger la page.', 'error');
});

// Fonction utilitaire pour formater la taille
function formatSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Fonction pour obtenir les applications populaires
function getPopularApps() {
    return appsData.slice(0, 6); // Retourne les 6 premières applications
}

// Fonction pour obtenir les applications récentes
function getRecentApps() {
    return appsData.slice(-6); // Retourne les 6 dernières applications
}

// Export pour utilisation dans d'autres modules (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        appsData,
        searchApps,
        downloadApp,
        showNotification
    };
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Bundle ID copié !', 'success');
    }).catch(err => {
        showNotification('Erreur lors de la copie', 'error');
        console.error('Erreur lors de la copie :', err);
    });
}
