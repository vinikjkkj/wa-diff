__d(
  "adsPENavStateSelector",
  ["AdsPENavigationProvider", "AdsPEPaneUtils_LEGACY", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPENavigationProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return o("AdsPEPaneUtils_LEGACY").getNavStateFromPane(t.currentPane);
        },
        { name: i.id + ".adsPENavStateSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
