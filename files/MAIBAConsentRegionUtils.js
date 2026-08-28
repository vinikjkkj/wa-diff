__d(
  "MAIBAConsentRegionUtils",
  ["gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return window.location.hostname.includes("instagram.com");
    }
    function s(t, n) {
      return r("justknobx")._("4011")
        ? (t && r("gkx")("13969")) || (n && r("gkx")("15755"))
        : e()
          ? (t && r("gkx")("22048")) || (n && r("gkx")("22049"))
          : (t && r("gkx")("22050")) || (n && r("gkx")("22051"));
    }
    function u() {
      return r("justknobx")._("4011")
        ? r("gkx")("17186")
        : e()
          ? r("gkx")("22052")
          : r("gkx")("22053");
    }
    ((l.isMAIBAExplicitConsentRegion = s), (l.isMAIBARegulatedCountry = u));
  },
  98,
);
