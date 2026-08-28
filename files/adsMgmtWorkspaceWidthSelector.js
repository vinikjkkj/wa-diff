__d(
  "adsMgmtWorkspaceWidthSelector",
  [
    "AdsHelpTrayUIProvider",
    "AdsPEViewportDimensionsProvider",
    "MAIBAChatAppSelector",
    "MAIBAChatAppStore",
    "adsCreateSelector",
    "adsHelpTrayIsTrayOpenSelector",
    "adsMgmtLeftNavigationWidthSelector",
    "adsMgmtWorkspaceWidthSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsPEViewportDimensionsProvider").toFluxSelector(),
          r("adsMgmtLeftNavigationWidthSelector"),
          r("adsHelpTrayIsTrayOpenSelector"),
          r("AdsHelpTrayUIProvider").toFluxSelector(),
          r("MAIBAChatAppSelector"),
        ],
        function (t, n, r, a, i) {
          var e = t.width,
            l = a.helpTrayOpenWidth,
            s = o("MAIBAChatAppStore").shouldUseLaminarForMAIBA()
              ? i
              : o("MAIBAChatAppStore").getState();
          return o("adsMgmtWorkspaceWidthSelectorUtils").adsMgmtWorkspaceWidth(
            e,
            n,
            r,
            l,
            s,
          );
        },
        { name: i.id + ".adsMgmtWorkspaceWidthSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
