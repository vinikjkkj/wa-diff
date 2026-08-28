__d(
  "adsHelpTrayCurrentContentSelector",
  ["AdsHelpTrayNavigationHelper", "AdsHelpTrayUIProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsHelpTrayUIProvider").toFluxSelector()],
        function (t) {
          return o("AdsHelpTrayNavigationHelper").getCurrentContentCMSID(t);
        },
        { name: i.id + ".adsHelpTrayCurrentContentSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
