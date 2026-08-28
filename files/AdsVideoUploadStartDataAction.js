__d(
  "AdsVideoUploadStartDataAction",
  [
    "AdsCreativeContainerVideoPickerDataProvider",
    "AdsCreativeContainerVideoPickerReducerPlugins",
    "AdsInstagramVideoUploaderDataProvider",
    "AdsToastCardDataProvider",
    "AdsVideoToastCardsUploadStartReducerPlugin",
    "AdsVideoUploadStartDataLoggerPlugin",
    "AdsVideoUploadStartReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCreativeContainerVideoPickerReducerPlugins").onUploadStart,
            n("AdsCreativeContainerVideoPickerDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsVideoToastCardsUploadStartReducerPlugin"),
            n("AdsToastCardDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsVideoUploadStartReducerPlugin"),
            n("AdsInstagramVideoUploaderDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsVideoUploadStartDataLoggerPlugin",
            n("AdsVideoUploadStartDataLoggerPlugin"),
            {},
          ),
        ];
      },
      "VIDEO.UPLOAD_START",
    );
    a.exports = e;
  },
  null,
);
