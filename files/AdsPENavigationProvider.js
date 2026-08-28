__d(
  "AdsPENavigationProvider",
  [
    "AdsMgmtLastTableNavigationSectionProvider",
    "AdsMgmtLastTableNavigationSectionTriggerReducerPlugin",
    "AdsPENavigationProviderPlugin",
    "AdsRBManageReportsSelectedReportIDsProvider",
    "AdsRBManageReportsSelectedReportIDsTriggerReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsPENavigationProviderPlugin"),
      "AdsPENavigationProviderPlugin",
      function () {
        return [
          n("Laminar").__createTriggerReducer(
            n("AdsMgmtLastTableNavigationSectionTriggerReducerPlugin"),
            "AdsMgmtLastTableNavigationSectionTriggerReducerPlugin",
            n("AdsMgmtLastTableNavigationSectionProvider"),
          ),
          n("Laminar").__createTriggerReducer(
            n("AdsRBManageReportsSelectedReportIDsTriggerReducerPlugin"),
            "AdsRBManageReportsSelectedReportIDsTriggerReducerPlugin",
            n("AdsRBManageReportsSelectedReportIDsProvider"),
          ),
        ];
      },
    );
  },
  null,
);
