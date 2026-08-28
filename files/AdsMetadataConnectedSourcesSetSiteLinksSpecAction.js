__d(
  "AdsMetadataConnectedSourcesSetSiteLinksSpecAction",
  [
    "AdsConnectedSourcesSiteLinksNoticeDataProvider",
    "AdsConnectedSourcesSiteLinksNoticeReducerPlugins",
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
        return [];
      },
      "AdsMetadataConnectedSourcesSetSiteLinksSpecAction",
    );
    a.exports = e;
  },
  null,
);
