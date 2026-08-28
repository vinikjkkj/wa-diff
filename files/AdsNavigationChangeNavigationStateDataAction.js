__d(
  "AdsNavigationChangeNavigationStateDataAction",
  [
    "AdsMediaPickerVideoCreationPerfScenarioLoggerPlugins",
    "AdsPETableStatRangeUIProvider",
    "AdsRuleDialogProvider",
    "AdsRuleDialogReducerPlugins",
    "AdsTableDateSelectorChangeNavigationStateReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsRuleDialogReducerPlugins")
              .AdsNavigationChangeNavigationStateDataReducerPlugin,
            n("AdsRuleDialogProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsTableDateSelectorChangeNavigationStateReducerPlugin"),
            n("AdsPETableStatRangeUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsMediaPickerVideoCreationPerfScenarioLoggerPlugins.AdsVideoDialogUploadAndEncodeVideoAbandonLoggerPlugin",
            n("AdsMediaPickerVideoCreationPerfScenarioLoggerPlugins")
              .AdsVideoDialogUploadAndEncodeVideoAbandonLoggerPlugin,
            {},
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsNavigationChangeNavigationStateDataActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsNavigationChangeNavigationStateDataActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "NAVIGATION.CHANGE_NAVIGATION_STATE",
    );
    a.exports = e;
  },
  null,
);
