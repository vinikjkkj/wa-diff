__d(
  "WhatsAppBusinessPhoneProfileCategoryWebUtils",
  ["WABIRegulatedVerticalsGACountriesSitevarConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e[1] = 2509),
        (e[2] = 0x78a8d9cb8171),
        (e[3] = 0x3dc1869bc2925),
        (e[4] = 0x89f304a8a887),
        (e[5] = 2705),
        (e[19] = 898505708716559),
        (e[20] = 0x51ac5a7da6db9),
        (e[6] = 2511),
        (e[22] = 0x40d19b194c0db),
        (e[7] = 0x3a18cb699e34c),
        (e[8] = 0x99e4a6c91eaa),
        (e[18] = 805423864344742),
        (e[9] = 0x92d0343c9d41),
        (e[10] = 2501),
        (e[11] = 2214),
        (e[21] = 0xc52dfe298db0c),
        (e[12] = 2603),
        (e[13] = 2517),
        (e[14] = 2239),
        (e[15] = 2258),
        (e[16] = 0xf909a93d1a4b),
        (e[0] = 2616),
        e);
    function u(e, t) {
      switch (e) {
        case 18:
          return r(
            "WABIRegulatedVerticalsGACountriesSitevarConfig.experimental",
          ).ALCOHOL_GA_COUNTRIES.includes(t);
        case 19:
        case 20:
          return r(
            "WABIRegulatedVerticalsGACountriesSitevarConfig.experimental",
          ).GAMBLING_GA_COUNTRIES.includes(t);
        case 21:
          return r(
            "WABIRegulatedVerticalsGACountriesSitevarConfig.experimental",
          ).OTC_GA_COUNTRIES.includes(t);
        case 22:
          return r(
            "WABIRegulatedVerticalsGACountriesSitevarConfig.experimental",
          ).MATRIMONY_GA_COUNTRIES.includes(t);
        default:
          return !0;
      }
    }
    ((l.WhatsAppVerticalsToCatKitMapping = s),
      (l.isCategoryAllowedInCountry = u));
  },
  98,
);
