__d(
  "AdsCopyCopyErrorDataAction",
  [
    "AdsCopyCopyErrorDataReducerPlugin",
    "AdsCopyCopyErrorToastReducerPlugin",
    "AdsCopyDataProvider",
    "AdsCopyReducerPlugins",
    "AdsCopySourceTrackerDataProvider",
    "AdsCopySourceTrackerReducerPlugins",
    "AdsExperimentsFunnelUserActionLoggerPlugins",
    "AdsPEErrorProvider",
    "AdsSuggestedAdsImportStatusTrackerDataProvider",
    "AdsSuggestedAdsImportStatusTrackerReducerPlugins",
    "AdsToastCardDataProvider",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCopyCopyErrorDataReducerPlugin"),
            n("AdsPEErrorProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsCopyCopyErrorToastReducerPlugin"),
            n("AdsToastCardDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsCopyReducerPlugins").copyError,
            n("AdsCopyDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsCopySourceTrackerReducerPlugins").copyError,
            n("AdsCopySourceTrackerDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsSuggestedAdsImportStatusTrackerReducerPlugins").copyError,
            n("AdsSuggestedAdsImportStatusTrackerDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsCopyCopyErrorLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsCopyCopyErrorLoggerPlugin",
                e,
                {},
                ["AdsPEInitializersRegistry"],
              );
            },
          ),
          n("Laminar").__createLogger(
            "AdsExperimentsFunnelUserActionLoggerPlugins.AdsTALCreateTestWithVariantCopyErrorReducer",
            n("AdsExperimentsFunnelUserActionLoggerPlugins")
              .AdsTALCreateTestWithVariantCopyErrorReducer,
            {},
          ),
        ];
      },
      "AdsCopy.COPY_ERROR",
    );
    a.exports = e;
  },
  null,
);
