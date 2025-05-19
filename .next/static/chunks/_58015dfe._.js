(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_58015dfe._.js", {

"[project]/public/data/opinions.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/data/opinions.ts
__turbopack_context__.s({
    "opinie": (()=>opinie)
});
const opinie = [
    {
        name: "Żaneta",
        rating: 5,
        content: "Szczerze polecam Panią Izabelę. Świetnie dobierze fryzurę do rodzaju włosa i kształtu twarzy. Przy okazji opowie o pielęgnacji skóry głowy i zdradzi kilka domowych tipów 😉 Bardzo zaangażowana i profesjonalna."
    },
    {
        name: "MałGosia",
        rating: 5,
        content: "gorąco polecam ❤️ cudowna atmosfera ❤️  pełen profesjonalizm ❤️ indywidualne podejście do klienta ❤️ relax i chwila dla siebie gwarantowana ☀️ warto oddać się w profesjonalne ręce  ❤️  Dziewczyny, moje włosy i ja , będę z wami do końca świata i jeden dzień dłużej ! 🌷🌷🌷😁"
    },
    {
        name: "Agata",
        rating: 5,
        content: "Profesjonalne obsługa, a Izabella jest mistrzynią w swoim fachu. Polecam z całego serca 😍😍"
    },
    {
        name: "Agnieszka",
        rating: 5,
        content: "Cudowne miejsce 😊Przemiła atmosfera, piękny wystrój, pełen relaks. Ale to i tak nic przy tym, że zawsze wyjdę od pani Izy zadowolona ze świetnej fryzury i koloru 🙂Podczas stylizacji człowiek czuje, że jego włosy są traktowane z profesjonalizmem i dbałością. Gorąco polecam 😊"
    },
    {
        name: "Ela",
        rating: 5,
        content: `Wspaniałe miejsce, w którym wizyta zawsze jest świętem. Relaks i cudowny odpoczynek, a dodatkowo profesjonalna opieka - w efekcie zawsze idealny kolor, strzyżenie i "subtelne dyskusje" z Izą o tym, co można zmienić a czego nie warto. Pełne zaufanie i wdzięczność, że jesteście!`
    },
    {
        name: "Ba Dia",
        rating: 5,
        content: "Bardzo miłe i profesjonalne dziewczyny znające tajniki pielęgnacji włosów. Po każdej wizycie moje włosy są widocznie bardziej odżywione i jest ich coraz więcej. 🙂"
    },
    {
        name: "Patrycja",
        rating: 5,
        content: "Bardzo fajne miejsce 😊 Polecam 😊"
    },
    {
        name: "Aneta",
        rating: 5,
        content: "Jakość salonu na najwyższym poziomie😃. Ponadto przemiła obsługa."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Testimonials.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$data$2f$opinions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/data/opinions.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Testimonials = ()=>{
    const totalReviews = 34;
    const positivePercent = 98;
    const renderStars = (rating)=>{
        const stars = [];
        for(let i = 1; i <= 5; i++){
            if (i <= rating) {
                stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStar"], {
                    className: "text-yellow-400"
                }, i, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 22,
                    columnNumber: 20
                }, this));
            } else {
                stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegStar"], {
                    className: "text-gray-300"
                }, i, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 24,
                    columnNumber: 20
                }, this));
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-1 justify-center mb-2",
            children: stars
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Testimonials.tsx",
            lineNumber: 27,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-gray-50 text-gray-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-light uppercase tracking-wider mb-2",
                    children: "Opinie Klientów"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mb-8",
                    children: [
                        "Mamy już ",
                        totalReviews,
                        " opinii na Facebooku, z czego ",
                        positivePercent,
                        "% to opinie pozytywne!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                        ],
                        navigation: true,
                        spaceBetween: 30,
                        slidesPerView: 1,
                        loop: true,
                        className: "py-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$data$2f$opinions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["opinie"].map((op, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white shadow-md rounded-lg p-6 mx-4 sm:mx-0",
                                    children: [
                                        renderStars(op.rating),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 text-sm sm:text-base italic mb-4",
                                            children: [
                                                "„",
                                                op.content,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 font-semibold",
                                            children: [
                                                "– ",
                                                op.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Testimonials.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/components/sections/Testimonials.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.facebook.com/bbhairspa/reviews?locale=pl_PL",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition",
                        children: "Zobacz wszystkie opinie"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Testimonials.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Testimonials.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Testimonials.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Testimonials.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_c = Testimonials;
const __TURBOPACK__default__export__ = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/SocialMedia.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SocialPostsSection = ()=>{
    _s();
    const basePath = ("TURBOPACK compile-time value", "/bb-hair-spa") || "";
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocialPostsSection.useEffect": ()=>{
            const instagramPosts = [
                {
                    id: "ig1",
                    imageUrl: "/images/ig1.png",
                    link: "https://www.instagram.com/p/C87oKkTo0pg/?img_index=1",
                    source: "instagram"
                },
                {
                    id: "ig2",
                    imageUrl: "/images/ig2.png",
                    link: "https://www.instagram.com/p/C3dRJpfoXnu/",
                    source: "instagram"
                },
                {
                    id: "ig3",
                    imageUrl: "/images/ig3.png",
                    link: "https://www.instagram.com/p/Cm1DHQIIbig/",
                    source: "instagram"
                },
                {
                    id: "ig4",
                    imageUrl: "/images/ig4.png",
                    link: "https://www.instagram.com/p/CmylB1sI1Zv/",
                    source: "instagram"
                },
                {
                    id: "ig5",
                    imageUrl: "/images/ig5.png",
                    link: "https://www.instagram.com/p/CmuKVYZItCg/",
                    source: "instagram"
                },
                {
                    id: "ig6",
                    imageUrl: "/images/ig6.png",
                    link: "https://www.instagram.com/p/CmOeExKDjef/",
                    source: "instagram"
                },
                {
                    id: "ig7",
                    imageUrl: "/images/ig7.png",
                    link: "https://www.instagram.com/p/Cl8zlWuj6cc/",
                    source: "instagram"
                },
                {
                    id: "ig8",
                    imageUrl: "/images/ig8.png",
                    link: "https://www.instagram.com/p/Cl0mtkyDdEb/",
                    source: "instagram"
                }
            ];
            const facebookPosts = [
                {
                    id: "fb1",
                    imageUrl: "/images/fb1.jpg",
                    link: "https://www.facebook.com/photo.php?fbid=1006493571496282&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
                    source: "facebook"
                },
                {
                    id: "fb2",
                    imageUrl: "/images/fb2.jpg",
                    link: "https://www.facebook.com/photo.php?fbid=1006491451496494&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
                    source: "facebook"
                },
                {
                    id: "fb3",
                    imageUrl: "/images/fb3.jpg",
                    link: "https://www.facebook.com/photo.php?fbid=924034726408834&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
                    source: "facebook"
                },
                {
                    id: "fb4",
                    imageUrl: "/images/fb4.jpg",
                    link: "https://www.facebook.com/photo.php?fbid=954614000017573&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
                    source: "facebook"
                },
                {
                    id: "fb5",
                    imageUrl: "/images/fb5.jpg",
                    link: "https://www.facebook.com/photo.php?fbid=952344123577894&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
                    source: "facebook"
                },
                {
                    id: "fb6",
                    imageUrl: "/images/fb6.jpg",
                    link: "https://www.facebook.com/photo.php?fbid=860008202811487&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
                    source: "facebook"
                },
                {
                    id: "fb7",
                    imageUrl: "/images/fb7.jpg",
                    link: "https://www.facebook.com/photo.php?fbid=960704709408502&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
                    source: "facebook"
                },
                {
                    id: "fb8",
                    imageUrl: "/images/fb8.jpg",
                    link: "https://www.facebook.com/photo.php?fbid=828391855973122&set=pb.100064069445694.-2207520000&type=3&locale=pl_PL",
                    source: "facebook"
                }
            ];
            setPosts([
                ...instagramPosts,
                ...facebookPosts
            ]);
        }
    }["SocialPostsSection.useEffect"], []);
    const instagramRow = posts.slice(0, 8);
    const facebookRow = posts.slice(8, 16);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-25 bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold mb-8 text-center text-gray-800",
                    children: "Zapraszamy do śledzenia naszych mediów społecznościowych"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold mb-4 text-center text-gray-800",
                            children: "Instagram"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SocialMedia.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4",
                            children: instagramRow.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: post.link,
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "block group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative overflow-hidden rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `${basePath}${post.imageUrl}`,
                                                    alt: `${post.source} post`,
                                                    className: "w-full h-auto transform group-hover:scale-105 transition duration-300 ease-in-out"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                }, post.id, false, {
                                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SocialMedia.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold mb-4 text-center text-gray-800",
                            children: "Facebook"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SocialMedia.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4",
                            children: facebookRow.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: post.link,
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "block group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative overflow-hidden rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `${basePath}${post.imageUrl}`,
                                                    alt: `${post.source} post`,
                                                    className: "w-full h-auto transform group-hover:scale-105 transition duration-300 ease-in-out"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                }, post.id, false, {
                                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/SocialMedia.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/SocialMedia.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/SocialMedia.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/SocialMedia.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
};
_s(SocialPostsSection, "bG8V4duoIfO0BEPgauWMVT5Qvyw=");
_c = SocialPostsSection;
const __TURBOPACK__default__export__ = SocialPostsSection;
var _c;
__turbopack_context__.k.register(_c, "SocialPostsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_58015dfe._.js.map