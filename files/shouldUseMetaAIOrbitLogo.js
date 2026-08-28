__d(
  "shouldUseMetaAIOrbitLogo",
  ["getRequestConstUri", "gkx", "isInstagramURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("isInstagramURI")(r("getRequestConstUri")())
        ? !0
        : r("gkx")("11559");
    }
    l.default = e;
  },
  98,
);
