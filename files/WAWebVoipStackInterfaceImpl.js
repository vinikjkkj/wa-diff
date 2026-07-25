__d(
  "WAWebVoipStackInterfaceImpl",
  ["WAWebVoipGatingUtils", "cr:10605", "cr:10606", "cr:8103", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("cr:8103") != null ? n("cr:8103") : n("cr:10605"),
      s = null;
    function u() {
      return (s == null && c(), r("nullthrows")(s));
    }
    function c() {
      var t,
        r = o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
          ? e != null
            ? e
            : n("cr:10606")
          : n("cr:10606") != null
            ? n("cr:10606")
            : e;
      s =
        (t = r == null ? void 0 : r.createWAWebVoipStackInterface()) != null
          ? t
          : null;
    }
    l.getVoipStackInterfaceImpl = u;
  },
  98,
);
