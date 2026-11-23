__d(
  "AdsTALReportSelectNavigationItemAction",
  [
    "AdsTALReportSelectNavigationItemReducerPlugin",
    "AdsTALReportUIProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsTALReportSelectNavigationItemReducerPlugin"),
            n("AdsTALReportUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsTAL.REPORT_SELECT_NAVIGATION_ITEM",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
