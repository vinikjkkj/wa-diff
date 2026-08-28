__d(
  "adsHelpTrayIsTrayOpenSelector",
  ["AdsHelpTrayUIProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsHelpTrayUIProvider").toFluxSelector()],
        function (t) {
          return t.isTrayOpen;
        },
        { name: i.id + ".adsHelpTrayIsTrayOpenSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
