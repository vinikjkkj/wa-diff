__d(
  "addDevTierOverridesToHeaderExtensions",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = { multiwayCoreTier: "", multiwayWwwTier: "" };
      return (
        r("gkx")("25224") &&
          ((t.multiwayWwwTier = s(e, "multiway_www_tier")),
          (t.multiwayCoreTier = s(e, "multiway_core_tier"))),
        t
      );
    }
    function s(e, t) {
      var n = t + "=",
        r = e.split(n);
      return r[1] ? r.pop().split("&").shift() : "";
    }
    l.default = e;
  },
  98,
);
