__d(
  "AdsMetadataConnectedSourcesSetSiteLinksSpecAction",
  [
    "AdsCFAdgroupDataProvider",
    "AdsConnectedSourcesSiteLinksNoticeDataProvider",
    "AdsConnectedSourcesSiteLinksNoticeReducerPlugins",
    "AdsMetadataConnectedSourcesSetSiteLinksSpecLoggerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectedSourcesSiteLinksNoticeReducerPlugins")
              .onSiteLinksAddedByDefault,
            n("AdsConnectedSourcesSiteLinksNoticeDataProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsMetadataConnectedSourcesSetSiteLinksSpecReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsMetadataConnectedSourcesSetSiteLinksSpecLoggerPlugin",
            n("AdsMetadataConnectedSourcesSetSiteLinksSpecLoggerPlugin"),
            { adgroupState: n("AdsCFAdgroupDataProvider") },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "SEFormatConsentSetSiteLinksSpecLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "SEFormatConsentSetSiteLinksSpecLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "AdsMetadataConnectedSourcesSetSiteLinksSpecAction",
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
