__d(
  "adsHelpTrayCurrentQuerySelector",
  ["AdsHelpTrayUIProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsHelpTrayUIProvider").toFluxSelector()],
        function (t) {
          return t.currentQuery || "";
        },
        { name: i.id + ".adsHelpTrayCurrentQuerySelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
