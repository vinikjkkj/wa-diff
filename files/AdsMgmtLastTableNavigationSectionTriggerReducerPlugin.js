__d(
  "AdsMgmtLastTableNavigationSectionTriggerReducerPlugin",
  ["AdsPEPaneUtils_LEGACY"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["L1", "L2", "L3"],
      s = {
        reduce: function (n, r) {
          var t = o("AdsPEPaneUtils_LEGACY").getNavStateFromPane(r.currentPane),
            a = t.section;
          return e.includes(a) ? a : n;
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
