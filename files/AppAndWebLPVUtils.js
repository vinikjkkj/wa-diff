__d(
  "AppAndWebLPVUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("9701") || s();
    }
    function s() {
      var e;
      return (e = r("qex")._("4249")) != null ? e : !1;
    }
    ((l.shouldUseAppLpv = e), (l.shouldUseAppLpvGA = s));
  },
  98,
);
