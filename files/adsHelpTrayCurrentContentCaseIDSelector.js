__d(
  "adsHelpTrayCurrentContentCaseIDSelector",
  [
    "AdsHelpTrayUIProvider",
    "adsCreateSelector",
    "adsHelpTrayCurrentContentCaseIDSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsHelpTrayUIProvider").toFluxSelector()],
        function (t) {
          return o(
            "adsHelpTrayCurrentContentCaseIDSelectorUtils",
          ).adsHelpTrayCurrentContentCaseID(t);
        },
        { name: i.id + ".adsHelpTrayCurrentContentCaseIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
