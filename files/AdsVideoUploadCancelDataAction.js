__d(
  "AdsVideoUploadCancelDataAction",
  [
    "AdsInstagramVideoUploaderDataProvider",
    "AdsMediaPickerVideoCreationPerfScenarioLoggerPlugins",
    "AdsToastCardDataProvider",
    "AdsVideoToastCardsCancelUploadReducerPlugin",
    "AdsVideoUploadCancelReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsVideoToastCardsCancelUploadReducerPlugin"),
            n("AdsToastCardDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsVideoUploadCancelReducerPlugin"),
            n("AdsInstagramVideoUploaderDataProvider"),
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
        ];
      },
      "VIDEO.UPLOAD_CANCEL",
    );
    a.exports = e;
  },
  null,
);
