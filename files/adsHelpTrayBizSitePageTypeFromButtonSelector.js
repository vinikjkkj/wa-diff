__d(
  "adsHelpTrayBizSitePageTypeFromButtonSelector",
  ["AdsHelpTrayUIProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsHelpTrayUIProvider").toFluxSelector()],
        function (t) {
          return t.bizSitePageTypeFromButton;
        },
        { name: i.id + ".adsHelpTrayBizSitePageTypeFromButtonSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
