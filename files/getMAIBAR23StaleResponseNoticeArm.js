__d(
  "getMAIBAR23StaleResponseNoticeArm",
  ["getMAIBAPageAdAccountID", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("getMAIBAPageAdAccountID")(),
        t = !1;
      try {
        return {
          arm: r("gkx")("8589") === !0 ? "test" : "control",
          gkAdAccountID: e,
          isCarveoutSplit: t,
          isGateError: !1,
        };
      } catch (n) {
        return {
          arm: "control",
          gkAdAccountID: e,
          isCarveoutSplit: t,
          isGateError: !0,
        };
      }
    }
    l.default = e;
  },
  98,
);
