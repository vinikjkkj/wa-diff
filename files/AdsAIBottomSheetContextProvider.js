__d(
  "AdsAIBottomSheetContextProvider",
  ["MAIBABottomSheetContextProvider", "react", "useIsAdsAIChat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.threadKey,
        o = r("useIsAdsAIChat")(n);
      return o
        ? s.jsx(r("MAIBABottomSheetContextProvider"), { children: t })
        : t;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
