__d(
  "adsMgmtPrimaryViewWidthSelector",
  [
    "cssVar",
    "AdsMgmtDimensionConstants",
    "AdsObjectTypes",
    "adsCreateSelector",
    "adsMgmtMultiTabDrawerWidthSelector",
    "adsMgmtWorkspaceWidthSelector",
    "adsPEObjectTypeSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = o("AdsMgmtDimensionConstants").GRID_MARGIN * 2,
      u = parseInt("15px", 10),
      c = r("adsCreateSelector")(
        [r("adsPEObjectTypeSelector")],
        function (t) {
          return t === r("AdsObjectTypes").ACCOUNT;
        },
        { name: i.id + ".isAccountOverviewSelector" },
      ),
      d = r("adsCreateSelector")(
        [c, r("adsMgmtMultiTabDrawerWidthSelector")],
        function (n, r) {
          return n ? r + u : r + e;
        },
        { name: i.id + ".gridPaddingSelector" },
      ),
      m = r("adsCreateSelector")(
        [r("adsMgmtWorkspaceWidthSelector"), d],
        function (t, n) {
          var e = t - n;
          return Math.max(e, 0);
        },
        { name: i.id + ".adsMgmtPrimaryViewWidthSelector" },
      ),
      p = m;
    l.default = p;
  },
  98,
);
