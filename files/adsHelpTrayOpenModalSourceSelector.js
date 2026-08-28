__d(
  "adsHelpTrayOpenModalSourceSelector",
  [
    "AdsHelpTrayUIProvider",
    "adsCreateSelector",
    "adsHelpTrayOpenModalSourceSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsHelpTrayUIProvider").toFluxSelector()],
        function (t) {
          return o(
            "adsHelpTrayOpenModalSourceSelectorUtils",
          ).adsHelpTrayOpenModalSource(t);
        },
        { name: i.id + ".adsHelpTrayOpenModalSourceSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
