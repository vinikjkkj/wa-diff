__d(
  "adsMgmtViewportSelector",
  [
    "AdsInsightsTableViewportProvider",
    "adsCreateSelector",
    "adsMgmtTableDefaultViewPort",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsInsightsTableViewportProvider").toFluxSelector()],
        function (t) {
          var e = t;
          return (
            e === r("AdsInsightsTableViewportProvider").getInitialState() &&
              (e = r("adsMgmtTableDefaultViewPort")),
            e
          );
        },
        { name: i.id + ".adsMgmtViewportSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
