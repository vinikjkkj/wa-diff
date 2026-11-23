__d(
  "AdsHelpTrayBottomSheetContext",
  ["emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = s.createContext({
        hide: r("emptyFunction"),
        isShown: !1,
        show: async function () {},
      });
    function d() {
      return u(c);
    }
    ((l.AdsHelpTrayBottomSheetContext = c),
      (l.useAdsHelpTrayBottomSheetContext = d));
  },
  98,
);
