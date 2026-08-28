__d(
  "adsHelpTrayOpenModalTypeSelector",
  [
    "AdsHelpTrayUIProvider",
    "adsCreateSelector",
    "adsHelpTrayOpenModalTypeSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsHelpTrayUIProvider").toFluxSelector()],
        function (t) {
          return o(
            "adsHelpTrayOpenModalTypeSelectorUtils",
          ).adsHelpTrayOpenModalType(t);
        },
        { name: i.id + ".adsHelpTrayOpenModalTypeSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
