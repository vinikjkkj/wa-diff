__d(
  "AdsLeadGenFormEditorShownStackedErrorsCardReducerPlugin",
  ["AdsDataAtom", "AdsLeadGenFormEditorViewProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsLeadGenFormEditorViewProvider").toFluxStore(),
      u = {
        reduce: function (n, o) {
          return (
            (e || (e = r("AdsDataAtom"))).waitFor([s.getDispatchToken()]),
            { submitCount: n.submitCount + 1 }
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
