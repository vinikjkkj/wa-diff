__d(
  "PEDefaultOnExclusions",
  ["AdsSensitiveVerticalUtils", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("5492") === !0;
    }
    function s() {
      return (
        r("justknobx")._("1470") &&
        o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals()
      );
    }
    ((l.isDefaultOnBlocklisted = e),
      (l.isExcludedBySaefSensitiveVerticals = s));
  },
  98,
);
