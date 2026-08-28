__d(
  "AdsRBManageReportsSelectedReportIDsTriggerReducerPlugin",
  ["AdsPEPaneUtils_LEGACY"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = o("AdsPEPaneUtils_LEGACY").getNavStateFromPane(n.currentPane),
            r = e.section,
            a = r === "MANAGE_REPORTS";
          return a ? t : new Set();
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
