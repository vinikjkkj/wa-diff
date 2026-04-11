__d(
  "WAWebCountryCenterCoordinates",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        AE: { latitude: 24, longitude: 54 },
        AF: { latitude: 33, longitude: 65 },
        AL: { latitude: 41, longitude: 20 },
        AR: { latitude: -34, longitude: -64 },
        AT: { latitude: 47.5, longitude: 14.5 },
        AU: { latitude: -25, longitude: 134 },
        BD: { latitude: 24, longitude: 90 },
        BE: { latitude: 50.5, longitude: 4.5 },
        BR: { latitude: -14, longitude: -51 },
        CA: { latitude: 56, longitude: -106 },
        CH: { latitude: 47, longitude: 8 },
        CL: { latitude: -35, longitude: -71 },
        CN: { latitude: 35, longitude: 105 },
        CO: { latitude: 4, longitude: -72 },
        CZ: { latitude: 50, longitude: 15.5 },
        DE: { latitude: 51, longitude: 9 },
        DK: { latitude: 56, longitude: 10 },
        DZ: { latitude: 28, longitude: 3 },
        EG: { latitude: 27, longitude: 30 },
        ES: { latitude: 40, longitude: -4 },
        FI: { latitude: 64, longitude: 26 },
        FR: { latitude: 46, longitude: 2 },
        GB: { latitude: 54, longitude: -2 },
        GR: { latitude: 39, longitude: 22 },
        HK: { latitude: 22.3, longitude: 114.2 },
        HR: { latitude: 45, longitude: 16 },
        HU: { latitude: 47, longitude: 20 },
        ID: { latitude: -5, longitude: 120 },
        IE: { latitude: 53, longitude: -8 },
        IL: { latitude: 31.5, longitude: 35 },
        IN: { latitude: 21, longitude: 78 },
        IT: { latitude: 43, longitude: 12 },
        JP: { latitude: 36, longitude: 138 },
        KE: { latitude: 1, longitude: 38 },
        KR: { latitude: 36, longitude: 128 },
        MX: { latitude: 23, longitude: -102 },
        MY: { latitude: 4, longitude: 109.5 },
        NG: { latitude: 10, longitude: 8 },
        NL: { latitude: 52.5, longitude: 5.75 },
        NO: { latitude: 62, longitude: 10 },
        NZ: { latitude: -41, longitude: 174 },
        PE: { latitude: -10, longitude: -76 },
        PH: { latitude: 13, longitude: 122 },
        PK: { latitude: 30, longitude: 70 },
        PL: { latitude: 52, longitude: 20 },
        PT: { latitude: 39.5, longitude: -8 },
        RO: { latitude: 46, longitude: 25 },
        RU: { latitude: 60, longitude: 100 },
        SA: { latitude: 24, longitude: 45 },
        SE: { latitude: 63, longitude: 16 },
        SG: { latitude: 1.35, longitude: 103.8 },
        TH: { latitude: 15, longitude: 101 },
        TR: { latitude: 39, longitude: 35 },
        TW: { latitude: 24, longitude: 121 },
        UA: { latitude: 49, longitude: 32 },
        US: { latitude: 38, longitude: -97 },
        VN: { latitude: 10.8, longitude: 106.6 },
        ZA: { latitude: -29, longitude: 24 },
      },
      l = { latitude: 37.59079374668893, longitude: -120.94513166228977 };
    function s(t) {
      var n;
      return (n = e[t.toUpperCase()]) != null ? n : null;
    }
    function u() {
      var e,
        t,
        n = (e = navigator.language) != null ? e : "",
        r = (t = n.split("-")[1]) != null ? t : "";
      if (r !== "") {
        var o = s(r);
        if (o != null) return o;
      }
      return l;
    }
    ((i.getCountryCenterCoordinates = s), (i.getDefaultCenter = u));
  },
  66,
);
